import { Posts } from "@/components/posts";
import Image from "next/image";

export default function Home() {
  return (
    <main className="px-6 mx-auto">
      {/* <p className="mt-12 mb-12 text-3xl text-center dark:text-white">
        <span className="whitespace-nowrap">
          Hello and welcome, I&#39;m
          <span className="font-bold">&nbsp;Fred</span>
        </span>
      </p> */}
      <Posts />
    </main>
  );
}
