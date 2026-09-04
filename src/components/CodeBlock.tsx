import { useState, type ReactNode } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

type CodeBlockProps = {
  inline?: boolean;
  className?: string;
  children?: ReactNode;
};

export default function CodeBlock({ inline, className, children }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const code = String(children).replace(/\n$/, "");
  const language = className?.replace("language-", "") || "code";
  const isInlineCode = inline ?? (!className && !code.includes("\n"));

  if (isInlineCode) {
    return (
      <code className="rounded bg-primary/10 px-1.5 py-0.5 text-[0.9em] font-medium text-primary">
        {children}
      </code>
    );
  }

  async function copyCode() {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  }

  return (
    <div className="group relative my-6 overflow-hidden rounded-2xl border border-slate-200/60 dark:border-white/10 bg-slate-950 text-slate-100 shadow-xl backdrop-blur-sm">
      {/* Top Header Bar */}
      <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.03] px-4 py-2.5 text-xs">
        {/* Terminal Dots & Language Label */}
        <div className="flex items-center gap-2">
          <span className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
          </span>
          <span className="ml-2 font-mono text-[11px] uppercase tracking-wider text-slate-400">
            {language}
          </span>
        </div>

        {/* Dynamic Copy Button */}
        <button
          type="button"
          onClick={copyCode}
          className={`flex items-center gap-1.5 rounded-lg px-2.5 py-1 font-mono text-xs transition-all duration-200 ${
            copied
              ? "border border-emerald-500/30 bg-emerald-500/15 text-emerald-400 shadow-sm shadow-emerald-500/10"
              : "border border-white/10 bg-white/5 text-slate-300 hover:border-white/20 hover:bg-white/10 hover:text-white"
          }`}
        >
          {copied ? (
            <>
              <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Copied!</span>
            </>
          ) : (
            <>
              <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
              </svg>
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Syntax Highlighted Code */}
      <SyntaxHighlighter
        language={language === "code" ? "text" : language}
        style={vscDarkPlus}
        customStyle={{
          margin: 0,
          padding: "1.25rem",
          background: "transparent",
          fontSize: "0.875rem",
          lineHeight: "1.75",
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}