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
              I&apos;m <span className="text-teal-500">Fred</span>, a senior
              frontend engineer.
            </h1>
            <h3 className="text-2xl lg:text-3xl mt-8">
              I build production React, TypeScript and Next.js applications for
              ecommerce, headless CMS and API-heavy product work.
            </h3>
            <h3 className="text-2xl lg:text-3xl mt-8">
              I&apos;m expanding deeper into
              <span className="text-teal-500 font-mono ">&nbsp;Node.js</span>,
              <span className="text-teal-500 font-mono ">
                &nbsp;API design
              </span>{" "}
              and backend architecture so I can own more of the product from
              interface to release.
            </h3>
          </div>
        </div>
        <ProfilePic width={300} height={300} />
      </article>
    </section>
  );
};
