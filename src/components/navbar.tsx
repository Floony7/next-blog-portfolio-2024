import Link from "next/link";

export default function Navbar() {
  return (
    // <nav className="bg-slate-600 p-4 sticky top-0 drop-shadow-xl z-10">
    <nav className="isolate bg-neutral-900/40 shadow-lg ring-1 ring-black/5 p-4 sticky top-0 drop-shadow-xl z-10">
      <div className="prose prose-xl mx-auto flex justify-between flex-col sm:flex-row">
        <Link href="/" className="text-white/90 no-underline hover:text-white">
          Fred Lunjevich
        </Link>
      </div>
    </nav>
  );
}
