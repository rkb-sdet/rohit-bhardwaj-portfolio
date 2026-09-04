import { useState } from "react";
import { contactData } from "../data/portfolioData";
import Toast from "./Toast";

export default function Contact() {
  const { badge, title, description, accessKey, socialLinks } = contactData;

  const [loading, setLoading] = useState(false);
  const [toastState, setToastState] = useState<{
    isOpen: boolean;
    type: "success" | "error";
    title: string;
    message: string;
  }>({
    isOpen: false,
    type: "success",
    title: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", accessKey);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        form.reset();
        setToastState({
          isOpen: true,
          type: "success",
          title: "Message Sent Successfully! 🚀",
          message: "Thank you for reaching out. I'll get back to you shortly.",
        });
      } else {
        throw new Error(data.message || "Failed to send message.");
      }
    } catch (error) {
      setToastState({
        isOpen: true,
        type: "error",
        title: "Submission Error",
        message: "Something went wrong while sending your message. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="scroll-mt-20 px-6 py-24 text-text relative">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-accent">
            {badge}
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-text/75">
            {description}
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-5">
          {/* Social Links Panel */}
          <div className="md:col-span-2 rounded-3xl border border-slate-200/60 dark:border-white/10 bg-slate-100/30 dark:bg-white/[0.03] p-7 backdrop-blur-md flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-text">Direct Inquiries</h3>
              <p className="mt-2 text-xs sm:text-sm text-text/70 leading-relaxed">
                Feel free to connect directly via social profiles or drop an email.
              </p>

              <div className="mt-6 flex flex-col gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between rounded-xl border border-slate-200/60 dark:border-white/10 bg-white/60 dark:bg-slate-900/40 px-4 py-3 text-xs font-semibold text-text transition hover:border-primary/50 hover:text-primary"
                  >
                    <span>{link.label}</span>
                    <span>↗</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-4 text-xs text-emerald-600 dark:text-emerald-400">
              ● Active & receptive to new opportunities.
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="md:col-span-3 rounded-3xl border border-slate-200/60 dark:border-white/10 bg-white/60 dark:bg-slate-900/40 p-7 shadow-xl backdrop-blur-md flex flex-col gap-4"
          >
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-text/70 mb-1">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="Rohit Bhardwaj"
                className="w-full rounded-xl border border-slate-200/70 dark:border-white/10 bg-slate-50 dark:bg-white/5 px-4 py-2.5 text-sm text-text placeholder-text/30 focus:border-primary focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-text/70 mb-1">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="rohit@example.com"
                className="w-full rounded-xl border border-slate-200/70 dark:border-white/10 bg-slate-50 dark:bg-white/5 px-4 py-2.5 text-sm text-text placeholder-text/30 focus:border-primary focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-text/70 mb-1">
                Message
              </label>
              <textarea
                name="message"
                required
                rows={4}
                placeholder="Tell me about your project, team, or opportunity..."
                className="w-full rounded-xl border border-slate-200/70 dark:border-white/10 bg-slate-50 dark:bg-white/5 px-4 py-2.5 text-sm text-text placeholder-text/30 focus:border-primary focus:outline-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-primary py-3 text-xs sm:text-sm font-bold text-white transition hover:bg-secondary disabled:opacity-50 shadow-md shadow-primary/20"
            >
              {loading ? (
                <>
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                  <span>Sending Message...</span>
                </>
              ) : (
                <>
                  <span>Send Message</span>
                  <span>→</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>

      {/* Floating Toast Notification */}
      <Toast
        isOpen={toastState.isOpen}
        type={toastState.type}
        title={toastState.title}
        message={toastState.message}
        onClose={() => setToastState((prev) => ({ ...prev, isOpen: false }))}
      />
    </section>
  );
}