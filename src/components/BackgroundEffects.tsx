export default function BackgroundEffects() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* 1. Dot Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.25] dark:opacity-[0.15]"
        style={{
          backgroundImage: "radial-gradient(#3b82f6 1.2px, transparent 1.2px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* 2. Floating Animated Orbs */}
      <div
        className="absolute -top-20 -left-20 w-[420px] h-[420px] rounded-full bg-blue-500/25 dark:bg-blue-600/30 blur-3xl animate-pulse"
        style={{ animationDuration: "7s" }}
      />
      <div
        className="absolute top-1/2 -right-24 w-[460px] h-[460px] rounded-full bg-purple-500/20 dark:bg-purple-600/25 blur-3xl animate-pulse"
        style={{ animationDuration: "9s" }}
      />
      <div
        className="absolute bottom-10 left-1/3 w-[360px] h-[360px] rounded-full bg-amber-500/20 dark:bg-amber-600/20 blur-3xl animate-pulse"
        style={{ animationDuration: "11s" }}
      />
    </div>
  );
}