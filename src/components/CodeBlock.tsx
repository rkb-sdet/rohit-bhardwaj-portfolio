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

  if (isInlineCode) return <code className="rounded bg-primary/10 px-1.5 py-0.5 text-[0.9em] text-primary">{children}</code>;

  async function copyCode() {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  }

  return (
    <div className="relative my-6 overflow-hidden rounded-xl bg-slate-950 text-slate-100 shadow-lg">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-2 text-xs uppercase tracking-[0.15em] text-slate-400">
        <span>{language}</span>
        <button type="button" onClick={copyCode} className="rounded border border-white/15 px-2 py-1 text-slate-300 transition hover:bg-white/10">{copied ? "Copied" : "Copy"}</button>
      </div>
      <SyntaxHighlighter language={language === "code" ? "text" : language} style={vscDarkPlus} customStyle={{ margin: 0, padding: "1rem", background: "transparent", fontSize: "0.875rem", lineHeight: "1.75" }}>
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
