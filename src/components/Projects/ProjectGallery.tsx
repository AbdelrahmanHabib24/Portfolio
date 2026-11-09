import { useEffect, useRef, useState, type TouchEvent } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export type ProjectScreen = { src: string; title: string; alt: string };

type ProjectGalleryProps = {
  title: string;
  screens: ProjectScreen[];
  onClose: () => void;
};

const navigationButtonClassName =
  "flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-900/60 text-slate-700 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400 hover:border-cyan-500/40 dark:hover:border-cyan-500/40 transition-all duration-200 active:scale-95 shrink-0";

export default function ProjectGallery({
  title,
  screens,
  onClose,
}: ProjectGalleryProps) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [index, setIndex] = useState(0);
  const screen = screens[index];

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

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
    setIndex(
      (current) => (current + direction + screens.length) % screens.length,
    );
  }

 

  function handleTouchStart(e: TouchEvent) {
    touchStartX.current = e.touches[0].clientX;
  }

  function handleTouchMove(e: TouchEvent) {
    touchEndX.current = e.touches[0].clientX;
  }

  function handleTouchEnd() {
    if (touchStartX.current !== null && touchEndX.current !== null) {
      const diff = touchStartX.current - touchEndX.current;
      if (Math.abs(diff) > 40) {
        navigate(diff > 0 ? 1 : -1);
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
  }

  return (
    <>
    <dialog
      ref={dialog}
      aria-labelledby="project-gallery-title"
      aria-describedby="project-gallery-note"
      onCancel={event => event.preventDefault()}
      onClick={event => {
        if (event.target === event.currentTarget) onClose();
      }}
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
        <figure
          className="mt-4 select-none"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="flex items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-950 overflow-hidden">
            <img
              src={screen.src}
              alt={screen.alt}
              className="block h-auto max-h-[62dvh] w-full object-contain"
            />
          </div>
          <figcaption className="mt-3 flex items-center justify-between gap-2" aria-live="polite" aria-atomic="true">
            <h3 className="text-sm font-semibold truncate">{screen.title}</h3>
            <span className="shrink-0 text-xs font-medium px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
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
            <ChevronLeft size={20} />
          </button>

          {/* Mobile pagination: sleek interactive dots */}
          <div className="flex sm:hidden items-center justify-center gap-1.5 flex-1 px-2">
            {screens.map((item, itemIndex) => (
              <button
                key={item.src}
                type="button"
                onClick={() => setIndex(itemIndex)}
                aria-label={`Show ${item.title}`}
                aria-pressed={itemIndex === index}
                className="py-2.5 px-1 focus:outline-none"
              >
                <span
                  className={`block h-1.5 rounded-full transition-all duration-300 ${
                    itemIndex === index
                      ? "w-6 bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.6)]"
                      : "w-1.5 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400 dark:hover:bg-slate-600"
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Desktop pagination: compact numbered pills */}
          <div className="hidden sm:flex items-center justify-center gap-1.5 flex-wrap">
            {screens.map((item, itemIndex) => (
              <button
                key={item.src}
                type="button"
                onClick={() => setIndex(itemIndex)}
                aria-label={`Show ${item.title}`}
                aria-pressed={itemIndex === index}
                className={`h-8 min-w-8 px-2.5 rounded-lg text-xs font-semibold transition-all duration-200 ${
                  itemIndex === index
                    ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-sm shadow-cyan-500/25 border border-transparent"
                    : "border border-slate-200 dark:border-white/10 bg-slate-50/50 dark:bg-white/[0.02] text-slate-600 dark:text-slate-400 hover:border-cyan-500/40 hover:text-cyan-500 dark:hover:text-cyan-400"
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
            <ChevronRight size={20} />
          </button>
        </div>
        </div>
      </dialog>

      </>
  );
}
