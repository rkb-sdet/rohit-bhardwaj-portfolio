import { useEffect } from "react";

export type ToastProps = {
  isOpen: boolean;
  type?: "success" | "error";
  title: string;
  message: string;
  onClose: () => void;
};

export default function Toast({
  isOpen,
  type = "success",
  title,
  message,
  onClose,
}: ToastProps) {
  useEffect(() => {
    if (!isOpen) return;

    const timer = setTimeout(() => {
      onClose();
    }, 4000);

    return () => clearTimeout(timer);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const isSuccess = type === "success";

  return (
    <div className="fixed bottom-5 right-5 z-[150] flex w-full max-w-sm items-start gap-3 rounded-2xl border border-slate-200/80 dark:border-white/10 bg-white/95 dark:bg-slate-950/95 p-4 shadow-2xl backdrop-blur-xl animate-in slide-in-from-bottom-5 fade-in duration-300">
      {/* Status Icon */}
      <div
        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${
          isSuccess
            ? "bg-emerald-500/10 text-emerald-500 border border-emerald-500/20"
            : "bg-rose-500/10 text-rose-500 border border-rose-500/20"
        }`}
      >
        {isSuccess ? (
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        ) : (
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        )}
      </div>

      {/* Text Info */}
      <div className="flex-1 pt-0.5">
        <h4 className="text-sm font-bold text-text">{title}</h4>
        <p className="mt-0.5 text-xs text-text/75 leading-relaxed">{message}</p>
      </div>

      {/* Close Button */}
      <button
        type="button"
        onClick={onClose}
        className="rounded-lg p-1 text-text/40 hover:bg-slate-100 dark:hover:bg-white/10 hover:text-text transition"
        aria-label="Dismiss notification"
      >
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
}