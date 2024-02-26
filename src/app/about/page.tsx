import { ProfilePic } from "@/components/profile-pic";

export default function About() {
  return (
    <section className="site-width p-6 mt-10 mb-6">
      <h1 className="page-title">About</h1>
      <article className="prose prose-xl max-w-none text-gray-200 grid-2-1">
        <div>
          <p>
            My journey into web and software development was not what you call
            &ldquo;typical&rdquo;. HTML was introduced to me during my bachelor
            degree in Communication Studies at Auckland University of Technology
            (AUT), circa 2000. Then, when CSS morphed into CSS3, I was drawn to
            designing websites with WordPress. My day job, however, was Web
            Co-odinator at AUT &#8212; a role that luckily had some web
            development attached.
          </p>
          <p>
            Not satisfied with my career direction, in 2017 I made the jump to
            learning the programming side of the web (JavaScript and React). To
            be honest, I&apos;m not sure how I survived all these years without
            programming skills!
          </p>
          <p>
            When the 2020 Covid lockdowns arrived in New Zealand, I was in full
            React and frontend immersion mode. Later that year, I joined motion
            capture tech company&nbsp;
            <a
              href="https://stretchsense.com/"
              target="_blank"
              className="prose-anchor"
            >
              StretchSense
            </a>
            &nbsp; as a Digital Marketing assistant.
          </p>
          <p>
            Fortunately, I was able to move out of that role a year later and
            into the Software Team. It seems the Software Lead saw enough
            promise in my lockdown React &ldquo;doodles&rdquo; that he entrusted
            me with the frontend duties in a rebuild of the company&apos;s
            flagship software Hand Engine. This was the &ldquo;lucky&rdquo;
            break I was looking for.
          </p>
          <blockquote className="text-cyan-200 text-2xl">
            &ldquo;Luck is when opportunity and preparedness meet&rdquo;
          </blockquote>
          <p>
            With the assistance of some very talented developers and a desire to
            learn, I have made a successful move into software and web
            development by adding TypeScript to my growing list of competencies.
          </p>
          <p>
            What&apos;s next? More Next.js I hope! This blog is built with
            Nexct.js 14 and I enjoyed the development process so much that
            I&apos;d like to do more! frontend is definitely
            &ldquo;wheelhouse&rdquo;, however, I love using Node.js and
            developing APIs. GraphQL is definitely something I&apos;m looking
            forward to doing more of also. Web and software development
            definitely is a &ldquo;pick your own path&rdquo; and mine is
            starting to form.
          </p>
        </div>
        <aside className="flex flex-col items-center">
          <div className="bg-slate-700 rounded-lg">
            <ProfilePic width={250} height={250} />
            <h4 className="text-white font-mono my-4 text-center">Vitals</h4>
            <ul className="text-gray-200 list-none ms-6 px-0 font-mono">
              <li className="my-0">
                <span className="font-semibold text-teal-400">From:&nbsp;</span>
                New Zealand
              </li>
              <li className="my-0">
                <span className="font-semibold text-teal-400">
                  Residence:&nbsp;
                </span>
                Birmingham, UK
              </li>
              <li className="my-0">
                <span className="font-semibold text-teal-400">
                  Likes:&nbsp;
                </span>
                Ice Hockey, Kettlebells, Guitar, Language Learning
              </li>
            </ul>
          </div>
        </aside>
      </article>
    </section>
  );
}
