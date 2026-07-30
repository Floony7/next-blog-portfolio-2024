export function FeaturedSignalCard() {
  return (
    <div className="glass-panel relative mx-auto mt-16 grid w-[min(92%,420px)] rotate-[-2deg] gap-5 rounded-3xl p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.18em] text-[var(--clr-muted)]">
            Featured signal
          </p>
          <h2 className="mt-2 text-3xl font-semibold">
            Product-minded frontend delivery
          </h2>
        </div>
        <span className="h-16 w-16 rounded-[35%_65%_48%_52%/52%_36%_64%_48%] bg-[linear-gradient(135deg,var(--clr-teal-accent),var(--clr-sky-accent),var(--clr-pink-accent))]" />
      </div>
      <div className="grid gap-3" aria-hidden="true">
        <span className="h-3 w-10/12 rounded-full bg-[var(--clr-teal-accent)]" />
        <span className="h-3 w-8/12 rounded-full bg-[var(--clr-sky-accent)]" />
        <span className="h-3 w-6/12 rounded-full bg-[var(--clr-pink-accent)]" />
        <span className="h-3 w-9/12 rounded-full bg-[var(--clr-border)]" />
      </div>
      <div className="flex flex-wrap gap-2">
        <span className="soft-tag">Commerce</span>
        <span className="soft-tag">CMS</span>
        <span className="soft-tag">GraphQL</span>
      </div>
    </div>
  );
}
