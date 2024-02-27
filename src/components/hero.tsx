import { ProfilePic } from "./profile-pic";

export const Hero = () => {
  return (
    <section className="py-10 w-full">
      <article className="site-width grid-2-1">
        <div className="p-4 flex items-center">
          <div>
            <h1 className="text-5xl font-mono text-gray-200 mb-2">
              Hello, Kia Ora
              <br />
              My name is <span className="text-teal-500">Fred</span>
            </h1>
            <h3 className="font-mono text-2xl mt-8">
              In 2017, I decided to learn JavaScript and React...
              <br />
              It was the best career decision I ever made.
            </h3>
            <h3 className="font-mono text-2xl mt-8">
              Now I&apos;m living the dream building applications with
              <span className="text-teal-500">&nbsp;TypeScript</span>,
              <span className="text-teal-500">&nbsp;React</span> and
              <span className="text-teal-500">&nbsp;Next.js</span>.
            </h3>
          </div>
        </div>
        <ProfilePic width={300} height={300} />
      </article>
    </section>
  );
};
