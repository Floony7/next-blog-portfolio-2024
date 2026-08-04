import ReturnLink from "@/components/return-link";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex justify-center items-center">
      <section>
        <h1>Ooops! Ne&apos;er heard of such project?!</h1>
        <ReturnLink href="/portfolio" text="Back to portfolio" />
      </section>
    </main>
  );
}
