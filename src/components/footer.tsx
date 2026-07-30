import SocialLinks from "./social-links";

export default function Footer() {
  return (
    <footer className="z-10 h-auto w-full shrink-0 grow-0 basis-auto border-t border-[var(--clr-border)] bg-[var(--clr-surface)] py-4 backdrop-blur-md sm:py-6">
      <section className="site-width flex flex-col items-center justify-center gap-3 text-center text-sm text-[var(--clr-muted)]">
        <div>
          <SocialLinks iconSize={2} />
        </div>
        <p>
          &copy; {new Date().getFullYear()} Fred Lunjevich. All rights reserved.
        </p>
      </section>
    </footer>
  );
}
