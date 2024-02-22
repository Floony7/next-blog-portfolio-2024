import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex justify-center items-center">
      <section>
        <h1>Ooops! Ne&apos;er heard of such post?!</h1>
        <p>
          <Link href="/" className="fancy-anchor">
            Home
          </Link>
        </p>
      </section>
    </main>
  );
}
