/**
 * post-highlights.ts — Persistent text highlighting for timeline posts.
 *
 * Lets the user select text in a post, tap "Highlight" to mark it with
 * a colored background, and persists the highlights in localStorage.
 * Highlights are re-applied on each render by matching text content and
 * offset within the post's text content.
 *
 * Storage format per post:
 *   { postId → [ { text, textOffset, color } ] }
 *
 * Re-application uses textContent offset matching, which is resilient
 * to HTML re-rendering as long as the text content is stable.
 */

// ── Storage ─────────────────────────────────────────────────────

const STORAGE_KEY = 'piclaw_post_highlights';

export interface PostHighlight {
  text: string;
  textOffset: number;
  color: string;
}

function readAllHighlights(): Record<string, PostHighlight[]> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch { return {}; }
}

function writeAllHighlights(all: Record<string, PostHighlight[]>): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
  } catch { /* quota */ }
}

export function getHighlightsForPost(postId: string | number): PostHighlight[] {
  return readAllHighlights()[String(postId)] ?? [];
}

export function addHighlight(postId: string | number, highlight: PostHighlight): void {
  const all = readAllHighlights();
  const key = String(postId);
  const list = all[key] ?? [];
  // Dedupe: don't add if same text at same offset already exists
  const exists = list.some((h) =>
    h.text === highlight.text && h.textOffset === highlight.textOffset
  );
  if (!exists) {
    list.push(highlight);
    all[key] = list;
    writeAllHighlights(all);
  }
}

export function removeHighlight(postId: string | number, index: number): void {
  const all = readAllHighlights();
  const key = String(postId);
  const list = all[key] ?? [];
  if (index >= 0 && index < list.length) {
    list.splice(index, 1);
    if (list.length === 0) delete all[key];
    else all[key] = list;
    writeAllHighlights(all);
  }
}

export function clearHighlightsForPost(postId: string | number): void {
  const all = readAllHighlights();
  delete all[String(postId)];
  writeAllHighlights(all);
}

// ── Highlight colors ────────────────────────────────────────────

export const HIGHLIGHT_COLORS = [
  { name: 'yellow',  value: 'rgba(250, 204, 21, 0.4)' },
  { name: 'green',   value: 'rgba(74, 222, 128, 0.35)' },
  { name: 'blue',    value: 'rgba(96, 165, 250, 0.35)' },
  { name: 'pink',    value: 'rgba(244, 114, 182, 0.35)' },
  { name: 'orange',  value: 'rgba(251, 146, 60, 0.35)' },
];

export const DEFAULT_HIGHLIGHT_COLOR = HIGHLIGHT_COLORS[0]!.value;

// ── DOM application ─────────────────────────────────────────────

/**
 * Walk all text nodes under `root`, collect them in document order
 * with their textContent offset relative to the full textContent.
 */
function collectTextNodes(root: Node): { node: Text; offset: number }[] {
  const result: { node: Text; offset: number }[] = [];
  let offset = 0;
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  while (walker.nextNode()) {
    const node = walker.currentNode as Text;
    result.push({ node, offset });
    offset += node.textContent?.length ?? 0;
  }
  return result;
}

/**
 * Apply saved highlights to a DOM element by wrapping matched text
 * ranges in <mark> elements. Call after innerHTML is set.
 */
export function applyHighlightsToElement(
  element: HTMLElement,
  highlights: PostHighlight[],
): void {
  if (!highlights.length) return;
  const fullText = element.textContent ?? '';

  // Sort by offset descending so wrapping doesn't shift earlier offsets
  const sorted = highlights
    .map((h, i) => ({ ...h, index: i }))
    .filter((h) => {
      const found = fullText.substring(h.textOffset, h.textOffset + h.text.length);
      return found === h.text;
    })
    .sort((a, b) => b.textOffset - a.textOffset);

  for (const highlight of sorted) {
    const textNodes = collectTextNodes(element);
    wrapTextRange(textNodes, highlight.textOffset, highlight.text.length, highlight.color);
  }
}

function wrapTextRange(
  textNodes: { node: Text; offset: number }[],
  targetOffset: number,
  length: number,
  color: string,
): void {
  let remaining = length;
  let started = false;

  for (const { node, offset: nodeOffset } of textNodes) {
    const nodeLen = node.textContent?.length ?? 0;
    const nodeEnd = nodeOffset + nodeLen;

    if (!started) {
      if (targetOffset >= nodeOffset && targetOffset < nodeEnd) {
        started = true;
        const localStart = targetOffset - nodeOffset;
        const localEnd = Math.min(nodeLen, localStart + remaining);
        const wrapped = localEnd - localStart;
        wrapPartOfTextNode(node, localStart, localEnd, color);
        remaining -= wrapped;
        if (remaining <= 0) return;
      }
    } else {
      const localEnd = Math.min(nodeLen, remaining);
      wrapPartOfTextNode(node, 0, localEnd, color);
      remaining -= localEnd;
      if (remaining <= 0) return;
    }
  }
}

function wrapPartOfTextNode(
  node: Text,
  start: number,
  end: number,
  color: string,
): void {
  const text = node.textContent ?? '';
  if (start >= end || start >= text.length) return;

  const range = document.createRange();
  range.setStart(node, start);
  range.setEnd(node, Math.min(end, text.length));

  const mark = document.createElement('mark');
  mark.className = 'post-highlight';
  mark.style.backgroundColor = color;
  mark.style.borderRadius = '2px';
  mark.style.padding = '0 1px';

  try {
    range.surroundContents(mark);
  } catch {
    // surroundContents fails if range crosses element boundaries;
    // fall back to extracting and re-inserting
    const fragment = range.extractContents();
    mark.appendChild(fragment);
    range.insertNode(mark);
  }
}

// ── Selection helpers ───────────────────────────────────────────

/**
 * Get the selected text and its offset within a post-content element.
 * Returns null if the selection is not within the given element.
 */
export function getSelectionInElement(element: HTMLElement): {
  text: string;
  textOffset: number;
  rect: DOMRect;
} | null {
  const sel = window.getSelection();
  if (!sel || sel.isCollapsed || !sel.rangeCount) return null;

  const range = sel.getRangeAt(0)!;
  if (!element.contains(range.commonAncestorContainer)) return null;

  const text = sel.toString().trim();
  if (!text) return null;

  // Calculate textContent offset
  const fullText = element.textContent ?? '';
  const textNodes = collectTextNodes(element);
  let textOffset = -1;

  for (const { node, offset } of textNodes) {
    if (node === range.startContainer || node.contains?.(range.startContainer)) {
      textOffset = offset + range.startOffset;
      break;
    }
  }

  // Fallback: search by string
  if (textOffset < 0) {
    textOffset = fullText.indexOf(text);
  }

  if (textOffset < 0) return null;

  const rect = range.getBoundingClientRect();
  return { text, textOffset, rect };
}
