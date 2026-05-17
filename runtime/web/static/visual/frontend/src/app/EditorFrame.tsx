/**
 * EditorFrame.tsx — Lazy-loading wrapper that mounts the shared editor bundle
 * into the visual UI's extension page area.
 *
 * Dynamically imports editor.bundle.js (CodeMirror 6), creates a
 * StandaloneEditorInstance, and manages its lifecycle via useEffect cleanup.
 */
import { useEffect, useRef, useState } from "preact/hooks";
import { createLogger } from "../utils/logger";

const log = createLogger("EditorFrame");

interface EditorFrameProps {
  /** Workspace-relative file path to open. */
  filePath: string;
  /** Called when the user closes/navigates away. */
  onBack?: () => void;
}

let editorBundlePromise: Promise<any> | null = null;

function loadEditorBundle(): Promise<any> {
  if (!editorBundlePromise) {
    editorBundlePromise = import(
      /* @vite-ignore */
      "/static/classic/dist/editor.bundle.js"
    ).catch((err) => {
      editorBundlePromise = null;
      throw err;
    });
  }
  return editorBundlePromise;
}

export function EditorFrame({ filePath, onBack }: EditorFrameProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const instanceRef = useRef<any>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    if (!containerRef.current || !filePath) return;
    let disposed = false;

    (async () => {
      try {
        setStatus("loading");
        const mod = await loadEditorBundle();
        if (disposed) return;

        const EditorClass =
          mod.StandaloneEditorInstance || mod.default?.StandaloneEditorInstance || mod.default;
        if (!EditorClass) {
          throw new Error("editor.bundle.js does not export StandaloneEditorInstance");
        }

        const container = containerRef.current!;
        container.innerHTML = "";

        const instance = new EditorClass(container, {
          path: filePath,
          content: null,
          mtime: null,
          workspaceBaseUrl: "/workspace",
          onDirtyChange: (dirty: boolean) => {
            log.info(`dirty: ${dirty}`);
          },
          onSaveRequest: () => {
            log.info("save requested");
          },
          onClose: () => {
            onBack?.();
          },
        });

        instanceRef.current = instance;
        setStatus("ready");
      } catch (err) {
        if (disposed) return;
        log.error("Failed to load editor", err);
        setStatus("error");
        setErrorMsg(err instanceof Error ? err.message : String(err));
      }
    })();

    return () => {
      disposed = true;
      if (instanceRef.current?.dispose) {
        try {
          instanceRef.current.dispose();
        } catch {
          /* ignore dispose errors */
        }
      }
      instanceRef.current = null;
    };
  }, [filePath]);

  if (status === "loading") {
    return (
      <div className="editor-frame editor-frame--loading">
        <div className="editor-frame__spinner">Loading editor…</div>
      </div>
    );
  }

  if (status === "error") {
    return (
      <div className="editor-frame editor-frame--error">
        <div className="editor-frame__error">
          <p>Failed to load editor: {errorMsg}</p>
          <button onClick={onBack}>Back</button>
        </div>
      </div>
    );
  }

  return (
    <div className="editor-frame editor-frame--ready">
      <div className="editor-frame__header">
        <button className="editor-frame__back" onClick={onBack} title="Back">
          ←
        </button>
        <span className="editor-frame__path">{filePath}</span>
      </div>
      <div className="editor-frame__container" ref={containerRef} />
    </div>
  );
}
