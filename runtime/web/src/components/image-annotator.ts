/**
 * image-annotator.ts — iPad-oriented image/diagram annotation overlay.
 *
 * Renders a transparent canvas on top of an image for freehand drawing,
 * arrows, and rectangles using Apple Pencil or touch. Exports the overlay
 * as a PNG and optionally composites it with the source image.
 *
 * Design:
 *   - Pencil draws (pointerType === 'pen'); finger scrolls/pinches unless
 *     no pencil is detected, in which case finger also draws.
 *   - Tools: pen, highlighter, arrow, rectangle, eraser, undo
 *   - Colors: preset palette row
 *   - Done → flatten overlay PNG → upload via API → compose into chat
 *   - Cancel → discard
 *
 * Consumers: ImageModal wraps this when the user taps "Annotate" on iPad.
 */

import { html, useState, useEffect, useRef, useCallback } from '../vendor/preact-htm.js';
import { uploadMedia } from '../api.js';

// ── Types ───────────────────────────────────────────────────────

type Tool = 'pen' | 'highlighter' | 'arrow' | 'rectangle' | 'text' | 'eraser';

interface Point { x: number; y: number; }

interface Stroke {
  tool: Tool;
  color: string;
  lineWidth: number;
  points: Point[];
}

interface ShapeStroke {
  tool: 'arrow' | 'rectangle';
  color: string;
  lineWidth: number;
  start: Point;
  end: Point;
}

interface TextStroke {
  tool: 'text';
  color: string;
  text: string;
  position: Point;
  fontSize: number;
}

type HistoryEntry = Stroke | ShapeStroke | TextStroke;

// ── Constants ───────────────────────────────────────────────────

const COLORS = ['#ef4444', '#f59e0b', '#22c55e', '#3b82f6', '#8b5cf6', '#ffffff', '#000000'];
const DEFAULT_COLOR = '#ef4444';
const PEN_WIDTH = 3;
const HIGHLIGHTER_WIDTH = 18;
const HIGHLIGHTER_ALPHA = 0.35;
const ERASER_WIDTH = 24;
const ARROW_HEAD_LENGTH = 16;
const TEXT_FONT_SIZE = 28;
const TEXT_FONT_FAMILY = '-apple-system, BlinkMacSystemFont, "SF Pro", system-ui, sans-serif';

const TOOLS: { id: Tool; label: string; icon: string }[] = [
  { id: 'pen',         label: 'Pen',         icon: '✏️' },
  { id: 'highlighter', label: 'Highlighter', icon: '🖍️' },
  { id: 'arrow',       label: 'Arrow',       icon: '➡️' },
  { id: 'rectangle',   label: 'Rectangle',   icon: '▭' },
  { id: 'text',        label: 'Text',        icon: 'T' },
  { id: 'eraser',      label: 'Eraser',      icon: '🧹' },
];

// ── Helpers ─────────────────────────────────────────────────────

function isShapeTool(tool: Tool): boolean {
  return tool === 'arrow' || tool === 'rectangle';
}

function isTextTool(tool: Tool): boolean {
  return tool === 'text';
}

function canvasPointFromEvent(canvas: HTMLCanvasElement, e: PointerEvent): Point {
  const rect = canvas.getBoundingClientRect();
  return {
    x: (e.clientX - rect.left) * (canvas.width / rect.width),
    y: (e.clientY - rect.top) * (canvas.height / rect.height),
  };
}

function drawTextStroke(ctx: CanvasRenderingContext2D, entry: TextStroke): void {
  ctx.save();
  ctx.font = `bold ${entry.fontSize}px ${TEXT_FONT_FAMILY}`;
  ctx.fillStyle = entry.color;
  ctx.textBaseline = 'top';
  // Draw background pill for legibility
  const metrics = ctx.measureText(entry.text);
  const pad = 6;
  const bgH = entry.fontSize + pad * 2;
  const bgW = metrics.width + pad * 2;
  ctx.fillStyle = 'rgba(0,0,0,0.55)';
  const radius = 6;
  const x = entry.position.x - pad;
  const y = entry.position.y - pad;
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + bgW - radius, y);
  ctx.quadraticCurveTo(x + bgW, y, x + bgW, y + radius);
  ctx.lineTo(x + bgW, y + bgH - radius);
  ctx.quadraticCurveTo(x + bgW, y + bgH, x + bgW - radius, y + bgH);
  ctx.lineTo(x + radius, y + bgH);
  ctx.quadraticCurveTo(x, y + bgH, x, y + bgH - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.fill();
  // Draw text
  ctx.fillStyle = entry.color;
  ctx.fillText(entry.text, entry.position.x, entry.position.y);
  ctx.restore();
}

function drawStroke(ctx: CanvasRenderingContext2D, entry: HistoryEntry): void {
  ctx.save();
  if ('text' in entry && entry.tool === 'text') {
    drawTextStroke(ctx, entry as TextStroke);
    ctx.restore();
    return;
  }
  if ('points' in entry) {
    // Freehand stroke
    const { tool, color, lineWidth, points } = entry;
    if (points.length < 2) { ctx.restore(); return; }
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.lineWidth = lineWidth;

    if (tool === 'eraser') {
      ctx.globalCompositeOperation = 'destination-out';
      ctx.strokeStyle = 'rgba(0,0,0,1)';
    } else if (tool === 'highlighter') {
      ctx.globalAlpha = HIGHLIGHTER_ALPHA;
      ctx.strokeStyle = color;
    } else {
      ctx.strokeStyle = color;
    }

    ctx.beginPath();
    ctx.moveTo(points[0]!.x, points[0]!.y);
    for (let i = 1; i < points.length; i++) {
      ctx.lineTo(points[i]!.x, points[i]!.y);
    }
    ctx.stroke();
  } else {
    // Shape stroke (arrow or rectangle)
    const { tool, color, lineWidth, start, end } = entry;
    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    if (tool === 'rectangle') {
      ctx.strokeRect(
        Math.min(start.x, end.x),
        Math.min(start.y, end.y),
        Math.abs(end.x - start.x),
        Math.abs(end.y - start.y),
      );
    } else if (tool === 'arrow') {
      const dx = end.x - start.x;
      const dy = end.y - start.y;
      const angle = Math.atan2(dy, dx);
      ctx.beginPath();
      ctx.moveTo(start.x, start.y);
      ctx.lineTo(end.x, end.y);
      ctx.stroke();
      // Arrow head
      ctx.beginPath();
      ctx.moveTo(end.x, end.y);
      ctx.lineTo(
        end.x - ARROW_HEAD_LENGTH * Math.cos(angle - Math.PI / 6),
        end.y - ARROW_HEAD_LENGTH * Math.sin(angle - Math.PI / 6),
      );
      ctx.moveTo(end.x, end.y);
      ctx.lineTo(
        end.x - ARROW_HEAD_LENGTH * Math.cos(angle + Math.PI / 6),
        end.y - ARROW_HEAD_LENGTH * Math.sin(angle + Math.PI / 6),
      );
      ctx.stroke();
    }
  }
  ctx.restore();
}

function redrawAll(ctx: CanvasRenderingContext2D, history: HistoryEntry[], width: number, height: number): void {
  ctx.clearRect(0, 0, width, height);
  for (const entry of history) drawStroke(ctx, entry);
}

// ── Detection ───────────────────────────────────────────────────

function isIPad(): boolean {
  if (typeof navigator === 'undefined') return false;
  const ua = navigator.userAgent || '';
  if (/iPad/i.test(ua)) return true;
  // iPadOS 13+ reports as Mac with touch
  if (/Macintosh/i.test(ua) && navigator.maxTouchPoints > 1) return true;
  return false;
}

export function canAnnotate(): boolean {
  return isIPad();
}

// ── Component ───────────────────────────────────────────────────

export function ImageAnnotator({ src, onSave, onCancel }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const overlayRef = useRef<HTMLCanvasElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const historyRef = useRef<HistoryEntry[]>([]);
  const drawingRef = useRef(false);
  const shapeStartRef = useRef<Point | null>(null);
  const currentPointsRef = useRef<Point[]>([]);
  const seenPenRef = useRef(false);

  const [tool, setTool] = useState<Tool>('pen');
  const [color, setColor] = useState(DEFAULT_COLOR);
  const [saving, setSaving] = useState(false);
  const [canvasReady, setCanvasReady] = useState(false);
  const [textInput, setTextInput] = useState<{ position: Point; visible: boolean }>({ position: { x: 0, y: 0 }, visible: false });
  const [textValue, setTextValue] = useState('');
  const textInputRef = useRef<HTMLInputElement>(null);

  // Initialize canvas to image dimensions
  const initCanvas = useCallback(() => {
    const img = imgRef.current;
    const canvas = canvasRef.current;
    const overlay = overlayRef.current;
    if (!img || !canvas || !overlay) return;

    const w = img.naturalWidth || img.width;
    const h = img.naturalHeight || img.height;
    canvas.width = w;
    canvas.height = h;
    overlay.width = w;
    overlay.height = h;
    setCanvasReady(true);
  }, []);

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;
    if (img.complete && img.naturalWidth > 0) {
      initCanvas();
    } else {
      img.onload = initCanvas;
    }
  }, [initCanvas]);

  // Resolve line width for current tool
  const getLineWidth = useCallback(() => {
    if (tool === 'highlighter') return HIGHLIGHTER_WIDTH;
    if (tool === 'eraser') return ERASER_WIDTH;
    return PEN_WIDTH;
  }, [tool]);

  // Should this pointer event draw?
  const shouldDraw = useCallback((e: PointerEvent): boolean => {
    if (e.pointerType === 'pen') {
      seenPenRef.current = true;
      return true;
    }
    // If pencil has been used, ignore finger (let it scroll)
    if (seenPenRef.current) return false;
    // No pencil detected: allow finger drawing
    return e.pointerType === 'touch' || e.pointerType === 'mouse';
  }, []);

  const commitTextLabel = useCallback(() => {
    if (!textValue.trim() || !textInput.visible) return;
    const entry: TextStroke = {
      tool: 'text',
      color,
      text: textValue.trim(),
      position: textInput.position,
      fontSize: TEXT_FONT_SIZE,
    };
    historyRef.current.push(entry);
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) drawStroke(ctx, entry);
    }
    setTextInput({ position: { x: 0, y: 0 }, visible: false });
    setTextValue('');
  }, [textValue, textInput, color]);

  const cancelTextLabel = useCallback(() => {
    setTextInput({ position: { x: 0, y: 0 }, visible: false });
    setTextValue('');
  }, []);

  const handlePointerDown = useCallback((e: PointerEvent) => {
    if (!shouldDraw(e)) return;
    e.preventDefault();
    const canvas = canvasRef.current;
    if (!canvas) return;
    const pt = canvasPointFromEvent(canvas, e);

    if (isTextTool(tool)) {
      // Commit any pending text first
      if (textInput.visible && textValue.trim()) commitTextLabel();
      // Show input at tap position
      const rect = canvas.getBoundingClientRect();
      const displayX = e.clientX - rect.left;
      const displayY = e.clientY - rect.top;
      setTextInput({ position: pt, visible: true });
      setTextValue('');
      // Focus the input after render
      requestAnimationFrame(() => textInputRef.current?.focus());
      return;
    }

    drawingRef.current = true;
    (canvas as any).setPointerCapture?.(e.pointerId);

    if (isShapeTool(tool)) {
      shapeStartRef.current = pt;
    } else {
      currentPointsRef.current = [pt];
    }
  }, [tool, shouldDraw, textInput, textValue, commitTextLabel]);

  const handlePointerMove = useCallback((e: PointerEvent) => {
    if (!drawingRef.current || !shouldDraw(e)) return;
    e.preventDefault();
    const canvas = canvasRef.current;
    const overlay = overlayRef.current;
    if (!canvas || !overlay) return;
    const pt = canvasPointFromEvent(canvas, e);

    if (isShapeTool(tool) && shapeStartRef.current) {
      // Live preview on overlay canvas
      const octx = overlay.getContext('2d');
      if (!octx) return;
      octx.clearRect(0, 0, overlay.width, overlay.height);
      drawStroke(octx, {
        tool: tool as 'arrow' | 'rectangle',
        color,
        lineWidth: getLineWidth(),
        start: shapeStartRef.current,
        end: pt,
      });
    } else {
      currentPointsRef.current.push(pt);
      // Incremental draw on main canvas for performance
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      const pts = currentPointsRef.current;
      if (pts.length < 2) return;
      ctx.save();
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.lineWidth = getLineWidth();
      if (tool === 'eraser') {
        ctx.globalCompositeOperation = 'destination-out';
        ctx.strokeStyle = 'rgba(0,0,0,1)';
      } else if (tool === 'highlighter') {
        // For highlighter, redraw full stroke each move for consistent alpha
        redrawAll(ctx, historyRef.current, canvas.width, canvas.height);
        ctx.globalAlpha = HIGHLIGHTER_ALPHA;
        ctx.strokeStyle = color;
        ctx.beginPath();
        ctx.moveTo(pts[0]!.x, pts[0]!.y);
        for (let i = 1; i < pts.length; i++) ctx.lineTo(pts[i]!.x, pts[i]!.y);
        ctx.stroke();
        ctx.restore();
        return;
      } else {
        ctx.strokeStyle = color;
      }
      ctx.beginPath();
      ctx.moveTo(pts[pts.length - 2]!.x, pts[pts.length - 2]!.y);
      ctx.lineTo(pts[pts.length - 1]!.x, pts[pts.length - 1]!.y);
      ctx.stroke();
      ctx.restore();
    }
  }, [tool, color, getLineWidth, shouldDraw]);

  const handlePointerUp = useCallback((e: PointerEvent) => {
    if (!drawingRef.current) return;
    drawingRef.current = false;
    const canvas = canvasRef.current;
    const overlay = overlayRef.current;
    if (!canvas) return;

    if (isShapeTool(tool) && shapeStartRef.current) {
      const pt = canvasPointFromEvent(canvas, e);
      const entry: ShapeStroke = {
        tool: tool as 'arrow' | 'rectangle',
        color,
        lineWidth: getLineWidth(),
        start: shapeStartRef.current,
        end: pt,
      };
      historyRef.current.push(entry);
      // Draw on main canvas, clear overlay
      const ctx = canvas.getContext('2d');
      if (ctx) drawStroke(ctx, entry);
      if (overlay) {
        const octx = overlay.getContext('2d');
        if (octx) octx.clearRect(0, 0, overlay.width, overlay.height);
      }
      shapeStartRef.current = null;
    } else {
      const pts = currentPointsRef.current;
      if (pts.length >= 2) {
        historyRef.current.push({
          tool,
          color,
          lineWidth: getLineWidth(),
          points: [...pts],
        });
      }
      currentPointsRef.current = [];
    }
  }, [tool, color, getLineWidth]);

  const handleUndo = useCallback(() => {
    historyRef.current.pop();
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    redrawAll(ctx, historyRef.current, canvas.width, canvas.height);
  }, []);

  const handleDone = useCallback(async () => {
    const canvas = canvasRef.current;
    const img = imgRef.current;
    if (!canvas || !img) return;
    setSaving(true);
    try {
      // Build composited image
      const out = document.createElement('canvas');
      out.width = canvas.width;
      out.height = canvas.height;
      const octx = out.getContext('2d');
      if (!octx) return;
      octx.drawImage(img, 0, 0, canvas.width, canvas.height);
      octx.drawImage(canvas, 0, 0);

      const blob: Blob = await new Promise((resolve, reject) => {
        out.toBlob((b) => b ? resolve(b) : reject(new Error('Canvas export failed')), 'image/png');
      });

      const file = new File([blob], `annotated-${Date.now()}.png`, { type: 'image/png' });
      const result = await uploadMedia(file);
      onSave?.(result);
    } catch (err) {
      console.error('[image-annotator] Save failed:', err);
    } finally {
      setSaving(false);
    }
  }, [onSave]);

  // Commit text on tool switch
  useEffect(() => {
    if (tool !== 'text' && textInput.visible && textValue.trim()) {
      commitTextLabel();
    } else if (tool !== 'text' && textInput.visible) {
      cancelTextLabel();
    }
  }, [tool]);

  const touchAction = seenPenRef.current ? 'auto' : 'none';

  return html`
    <div class="image-annotator" style="touch-action: ${touchAction}">
      <div class="image-annotator-canvas-wrap">
        <img
          ref=${imgRef}
          src=${src}
          crossOrigin="anonymous"
          class="image-annotator-source"
          alt="Source"
          draggable="false"
        />
        ${canvasReady && html`
          <canvas
            ref=${canvasRef}
            class="image-annotator-draw-canvas"
            onPointerDown=${handlePointerDown}
            onPointerMove=${handlePointerMove}
            onPointerUp=${handlePointerUp}
            onPointerCancel=${handlePointerUp}
            style="touch-action: none"
          />
          <canvas
            ref=${overlayRef}
            class="image-annotator-preview-canvas"
            style="touch-action: none; pointer-events: none"
          />
          ${textInput.visible && html`
            <div
              class="image-annotator-text-input-wrap"
              style="left: ${(textInput.position.x / (canvasRef.current?.width || 1)) * 100}%; top: ${(textInput.position.y / (canvasRef.current?.height || 1)) * 100}%"
            >
              <input
                ref=${textInputRef}
                type="text"
                class="image-annotator-text-input"
                value=${textValue}
                onInput=${(e) => setTextValue(e.currentTarget.value)}
                onKeyDown=${(e) => {
                  if (e.key === 'Enter') commitTextLabel();
                  if (e.key === 'Escape') cancelTextLabel();
                }}
                placeholder="Type label…"
                style="color: ${color}"
              />
            </div>
          `}
        `}
      </div>
      <div class="image-annotator-toolbar">
        <div class="image-annotator-tools">
          ${TOOLS.map((t) => html`
            <button
              key=${t.id}
              class=${`image-annotator-tool-btn${tool === t.id ? ' active' : ''}`}
              onClick=${() => setTool(t.id)}
              title=${t.label}
              aria-label=${t.label}
            >${t.icon}</button>
          `)}
          <button
            class="image-annotator-tool-btn"
            onClick=${handleUndo}
            title="Undo"
            aria-label="Undo"
            disabled=${saving}
          >↩</button>
        </div>
        <div class="image-annotator-colors">
          ${COLORS.map((c) => html`
            <button
              key=${c}
              class=${`image-annotator-color-btn${color === c ? ' active' : ''}`}
              style="background: ${c}; border: 2px solid ${color === c ? 'var(--accent-color)' : 'transparent'}"
              onClick=${() => setColor(c)}
              aria-label=${`Color ${c}`}
            />
          `)}
        </div>
        <div class="image-annotator-actions">
          <button class="image-annotator-cancel-btn" onClick=${onCancel} disabled=${saving}>Cancel</button>
          <button class="image-annotator-done-btn" onClick=${handleDone} disabled=${saving}>
            ${saving ? 'Saving…' : 'Done'}
          </button>
        </div>
      </div>
    </div>
  `;
}
