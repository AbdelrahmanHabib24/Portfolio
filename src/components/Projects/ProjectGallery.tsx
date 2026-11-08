import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { createPortal } from "react-dom";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export type ProjectScreen = { src: string; title: string; alt: string };

type ProjectGalleryProps = {
  title: string;
  screens: ProjectScreen[];
  onClose: () => void;
};

const navigationButtonClassName =
  "flex min-h-11 min-w-11 items-center justify-center rounded-lg border border-slate-300 hover:text-cyan-600 dark:border-slate-600";

export default function ProjectGallery({ title, screens, onClose }: ProjectGalleryProps) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [index, setIndex] = useState(0);
  const screen = screens[index];

  useEffect(() => {
    const element = dialog.current;
    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    element?.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      element?.close();
      document.body.style.overflow = previousOverflow;
      if (previousFocus instanceof HTMLElement) previousFocus.focus();
    };
  }, []);

  function navigate(direction: number) {
    setIndex(current => (current + direction + screens.length) % screens.length);
  }

  function handleKeyDown(event: KeyboardEvent<HTMLDialogElement>) {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault();
      navigate(event.key === "ArrowLeft" ? -1 : 1);
      return;
    }

    if (event.key !== "Tab") return;

    // Keep keyboard focus inside the gallery at either end.
    const buttons = event.currentTarget.querySelectorAll<HTMLButtonElement>("button");
    const first = buttons[0];
    const last = buttons[buttons.length - 1];
    const boundary = event.shiftKey ? first : last;

    if (document.activeElement === boundary) {
      event.preventDefault();
      (event.shiftKey ? last : first).focus();
    }
  }

  return createPortal(
    <dialog
      ref={dialog}
      aria-labelledby="project-gallery-title"
      aria-describedby="project-gallery-note"
      onCancel={event => event.preventDefault()}
      onClick={event => {
        if (event.target === event.currentTarget) onClose();
      }}
      onKeyDown={handleKeyDown}
      className="m-auto w-[calc(100%-1rem)] max-w-6xl max-h-[94dvh] overflow-y-auto rounded-2xl border border-slate-200 bg-white p-0 text-slate-900 shadow-2xl backdrop:bg-slate-950/85 dark:border-cyan-500/20 dark:bg-[#070e1e] dark:text-white"
    >
      <div className="p-3 sm:p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h2 id="project-gallery-title" className="text-lg font-bold">
              {title} &middot; Screens
            </h2>
            <p id="project-gallery-note" className="mt-1 text-xs text-slate-500 dark:text-slate-400">
              Project screenshots
            </p>
          </div>
          <button
            type="button"
            autoFocus
            onClick={onClose}
            aria-label="Close gallery"
            className="flex min-h-11 min-w-11 items-center justify-center rounded-lg hover:bg-slate-100 dark:hover:bg-white/10"
          >
            <X size={22} />
          </button>
        </div>
        <figure className="mt-4">
          <div className="flex items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-950">
            <img
              src={screen.src}
              alt={screen.alt}
              className="block h-auto max-h-[62dvh] w-full object-"
            />
          </div>
          <figcaption className="mt-3 flex items-center justify-between gap-2" aria-live="polite" aria-atomic="true">
            <h3 className="text-sm font-semibold">{screen.title}</h3>
            <span className="shrink-0 text-xs text-slate-500 dark:text-slate-400">
              {index + 1} / {screens.length}
            </span>
          </figcaption>
        </figure>
        <div className="mt-4 flex items-center justify-between gap-2">
          <button
            type="button"
            onClick={() => navigate(-1)}
            aria-label="Previous screen"
            className={navigationButtonClassName}
          >
            <ChevronLeft size={22} />
          </button>
          <div className="flex flex-wrap justify-center gap-2">
            {screens.map((item, itemIndex) => (
              <button
                key={item.src}
                type="button"
                onClick={() => setIndex(itemIndex)}
                aria-label={`Show ${item.title}`}
                aria-pressed={itemIndex === index}
                className={`min-h-11 min-w-11 rounded-lg border px-3 text-sm ${
                  itemIndex === index
                    ? "border-cyan-600 bg-cyan-600 text-white"
                    : "border-slate-300 dark:border-slate-600"
                }`}
              >
                {itemIndex + 1}
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={() => navigate(1)}
            aria-label="Next screen"
            className={navigationButtonClassName}
          >
            <ChevronRight size={22} />
          </button>
        </div>
      </div>
    </dialog>,
    document.body,
  );
}
