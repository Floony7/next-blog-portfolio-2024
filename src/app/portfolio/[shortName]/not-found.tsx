import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex justify-center items-center">
      <section>
        <h1>Ooops! Ne&apos;er heard of such project?!</h1>
        <p>
          <Link href="/portfolio" className="fancy-anchor">
            Return to Portfolio
          </Link>
        </p>
      </section>
    </main>
  );
}
