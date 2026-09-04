import { useEffect, useState } from "react";
import { githubData } from "../data/portfolioData";

type Repo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  homepage: string | null;
  updated_at: string;
};

type UserProfile = {
  public_repos: number;
  followers: number;
  following: number;
  avatar_url: string;
};

export default function GithubStats() {
  const { badge, title, description, username } = githubData;
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchGithubData() {
      try {
        setLoading(true);
        // Fetch User Profile Metrics
        const userRes = await fetch(`https://api.github.com/users/${username}`);
        if (userRes.ok) {
          const userData = await userRes.json();
          setProfile({
            public_repos: userData.public_repos,
            followers: userData.followers,
            following: userData.following,
            avatar_url: userData.avatar_url,
          });
        }

        // Fetch Recent Public Repos
        const reposRes = await fetch(
          `https://api.github.com/users/${username}/repos?sort=updated&per_page=6`
        );
        if (reposRes.ok) {
          const reposData = await reposRes.json();
          setRepos(Array.isArray(reposData) ? reposData : []);
        }
      } catch (err) {
        console.error("Failed to fetch GitHub stats:", err);
      } finally {
        setLoading(false);
      }
    }

    if (username) {
      fetchGithubData();
    }
  }, [username]);

  return (
    <section id="github" className="scroll-mt-20 bg-transparent px-6 py-24 text-text relative">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-accent">
              {badge}
            </p>
            <h2 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
              {title}
            </h2>
            <p className="mt-4 text-lg leading-8 text-text/75">
              {description}
            </p>
          </div>
          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-primary/30 bg-primary/5 px-5 py-2.5 text-sm font-semibold text-primary transition duration-200 hover:-translate-y-0.5 hover:bg-primary/10"
          >
            Visit @{username} ↗
          </a>
        </div>

        {/* Live GitHub Summary Metrics */}
        <div className="mb-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <div className="rounded-2xl border border-slate-200/60 dark:border-white/10 bg-slate-100/30 dark:bg-white/[0.03] p-5 text-center backdrop-blur-md">
            <p className="text-3xl font-black text-primary">
              {loading ? "..." : profile?.public_repos ?? "0"}
            </p>
            <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-text/60">
              Repositories
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200/60 dark:border-white/10 bg-slate-100/30 dark:bg-white/[0.03] p-5 text-center backdrop-blur-md">
            <p className="text-3xl font-black text-secondary">
              {loading ? "..." : profile?.followers ?? "0"}
            </p>
            <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-text/60">
              Followers
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200/60 dark:border-white/10 bg-slate-100/30 dark:bg-white/[0.03] p-5 text-center backdrop-blur-md">
            <p className="text-3xl font-black text-emerald-500">Active</p>
            <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-text/60">
              Dev Status
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200/60 dark:border-white/10 bg-slate-100/30 dark:bg-white/[0.03] p-5 text-center backdrop-blur-md">
            <p className="text-3xl font-black text-accent">QA & Dev</p>
            <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-text/60">
              Focus Domain
            </p>
          </div>
        </div>

        {/* Contribution Activity Heatmap & Streak Cards */}
        <div className="mb-12 grid gap-6 lg:grid-cols-3">
          {/* Commit Heatmap Graph (2 Columns) */}
          <div className="lg:col-span-2 rounded-3xl border border-slate-200/70 dark:border-white/10 bg-slate-100/40 dark:bg-white/[0.02] p-6 sm:p-7 backdrop-blur-md flex flex-col justify-between">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-bold text-text">Contribution Heatmap</h3>
                <p className="text-xs text-text/60">Yearly commit frequency & code momentum</p>
              </div>
              <span className="flex items-center gap-1.5 text-xs text-emerald-500 font-semibold bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Live Feed
              </span>
            </div>

            <div className="w-full overflow-x-auto pt-2 pb-1">
              <img
                src={`https://ghchart.rshah.org/0284c7/${username}`}
                alt={`${username}'s GitHub contribution chart`}
                className="w-full min-w-[620px] rounded-lg dark:brightness-95 dark:contrast-125 select-none"
                loading="lazy"
              />
            </div>

            <div className="mt-4 flex items-center justify-between text-[11px] text-text/50 font-mono border-t border-slate-200/40 dark:border-white/5 pt-3">
              <span>Less</span>
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-sm bg-slate-200 dark:bg-slate-800" />
                <span className="h-2.5 w-2.5 rounded-sm bg-sky-200 dark:bg-sky-900/60" />
                <span className="h-2.5 w-2.5 rounded-sm bg-sky-400 dark:bg-sky-600" />
                <span className="h-2.5 w-2.5 rounded-sm bg-sky-600 dark:bg-sky-400" />
              </div>
              <span>More Contributions</span>
            </div>
          </div>

          {/* GitHub Live Streak / Metric Badge (1 Column) */}
          <div className="rounded-3xl border border-slate-200/70 dark:border-white/10 bg-slate-100/40 dark:bg-white/[0.02] p-6 sm:p-7 backdrop-blur-md flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-text">Dev Streak & Stats</h3>
              <p className="text-xs text-text/60 mb-4">Real-time repository statistics</p>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between rounded-xl border border-slate-200/50 dark:border-white/5 bg-white/60 dark:bg-slate-900/40 p-3">
                  <span className="text-xs text-text/70">Verified Username</span>
                  <span className="text-xs font-mono font-bold text-primary">@{username}</span>
                </div>
                <div className="flex items-center justify-between rounded-xl border border-slate-200/50 dark:border-white/5 bg-white/60 dark:bg-slate-900/40 p-3">
                  <span className="text-xs text-text/70">Primary Core</span>
                  <span className="text-xs font-semibold text-emerald-500">TypeScript / QA</span>
                </div>
                <div className="flex items-center justify-between rounded-xl border border-slate-200/50 dark:border-white/5 bg-white/60 dark:bg-slate-900/40 p-3">
                  <span className="text-xs text-text/70">Source Quality</span>
                  <span className="text-xs font-semibold text-accent">Automated CI/CD</span>
                </div>
              </div>
            </div>

            <a
              href={`https://github.com/${username}?tab=repositories`}
              target="_blank"
              rel="noreferrer"
              className="mt-6 w-full text-center rounded-xl bg-primary text-white py-2.5 text-xs font-bold transition hover:bg-secondary shadow-md shadow-primary/20"
            >
              Explore Repositories
            </a>
          </div>
        </div>

        {/* Top Active Repositories Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {loading ? (
            Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="h-44 animate-pulse rounded-2xl border border-slate-200/50 dark:border-white/5 bg-slate-100/40 dark:bg-white/5 p-6"
              />
            ))
          ) : repos.length > 0 ? (
            repos.map((repo) => (
              <a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col justify-between rounded-2xl border border-slate-200/70 dark:border-white/10 bg-white/60 dark:bg-slate-900/50 p-6 backdrop-blur-md transition-all duration-200 hover:-translate-y-1.5 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-semibold text-accent">Repo</span>
                    <span className="text-xs text-text/50 group-hover:text-primary transition">
                      ↗
                    </span>
                  </div>
                  <h3 className="mt-2 text-lg font-bold text-text transition group-hover:text-primary line-clamp-1">
                    {repo.name}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-text/70 line-clamp-2">
                    {repo.description || "Public source repository."}
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-slate-200/40 dark:border-white/10 pt-3 text-xs text-text/60">
                  <span className="flex items-center gap-1.5 font-medium">
                    <span className="h-2 w-2 rounded-full bg-primary" />
                    {repo.language || "TypeScript"}
                  </span>
                  <div className="flex items-center gap-3">
                    <span>★ {repo.stargazers_count}</span>
                    <span>⑂ {repo.forks_count}</span>
                  </div>
                </div>
              </a>
            ))
          ) : (
            <div className="col-span-full py-8 text-center text-sm text-text/60">
              No public repositories found for @{username}.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}