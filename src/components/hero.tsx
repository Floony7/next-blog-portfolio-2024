import { ProfilePic } from "./profile-pic";
import { nunito } from "@/lib/utils";

export const Hero = () => {
  return (
    <section className="py-10 w-full">
      <article className="site-width grid-2-1">
        <div className="p-4 flex items-center">
          <div className={nunito.className}>
            <h1 className="text-4xl lg:text-5xl text-gray-200 mb-2">
              Hello, Kia Ora
              <br />
              My name is <span className="text-teal-500">Fred</span>
            </h1>
            <h3 className="text-2xl lg:text-3xl mt-8">
              In 2017, I decided to learn JavaScript and React...
              <br />
              It was the best career decision I ever made.
            </h3>
            <h3 className="text-2xl lg:text-3xl mt-8">
              Now I&apos;m living the dream building applications with
              <span className="text-teal-500 font-mono ">&nbsp;TypeScript</span>
              ,<span className="text-teal-500 font-mono ">&nbsp;React</span> and
              <span className="text-teal-500 font-mono ">&nbsp;Next.js</span>.
            </h3>
          </div>
        </div>
        <ProfilePic width={300} height={300} />
      </article>
    </section>
  );
};
