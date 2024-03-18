import { ProfilePic } from "@/components/profile-pic";
import { userData } from "@/data/mock";

export default function About() {
  return (
    <section className="site-width p-6 mt-10 mb-6">
      <h1 className="page-title">How I got here...</h1>
      <article className="prose prose-xl max-w-none text-gray-200 grid-2-1">
        <div>
          <p>
            My journey into web and software development was not what you call
            &ldquo;typical&rdquo;. HTML was introduced to me during my
            bachelor&apos; degree in Communication Studies at Auckland
            University of Technology (AUT), circa 2000.
          </p>
          <p>
            I became Web Co-odinator at the same university in 2011, which gave
            me some web development opportunities, back wehn jQuery was all the
            rage and web layouts were a bunch of floating and absolutely
            positioned divs.
          </p>
          <p>
            Each year AUT would pay for me to head down to Wellington for the
            annaul&nbsp;{" "}
            <a
              href="https://www.webstock.org.nz/"
              target="_blank"
              className="prose-anchor"
            >
              Webstock
            </a>
            &nbsp; conference. Meeting highly respected people oin the web
            industry inspired me to learn CSS and I promptly began using my new
            found knowledge mto make WordPress websites for local businesses and
            AUT academics.
          </p>
          <p>
            Fast forward to 2017. Not satisfied with my marketing career
            direction, I made the jump to learning the programming side of the
            web (JavaScript and React). To be honest, I&apos;m not sure how I
            survived all these years without programming skills!
          </p>
          <h3>The Tipping Point</h3>
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
            With the assistance of some very talented developers and an
            insatiable desire to learn, I have made a successful transition into
            software and web development by adding TypeScript to my growing list
            of competencies.
          </p>
          <p>
            What&apos;s next? More Next.js I hope! This blog is built with
            Next.js 14 and Tailwind. I enjoyed the development process so much
            that I&apos;d like to follow the rabbit hole and do this fulltime.
            Frontend is definitely my &ldquo;wheelhouse&rdquo;, however, my
            curiosity extends to Node.js, REST API development and GraphQL. Web
            and software development definitely is a &ldquo;pick your own
            path&rdquo; deal and I&apos;m happy to be forging my own identity
            using React, Next.js and the wider ecosystem.
          </p>
        </div>
        <aside className="flex flex-col items-center">
          <div className="bg-slate-700 rounded-lg">
            <ProfilePic width={250} height={250} />
            <h4 className="text-white font-mono my-4 text-center">Vitals</h4>
            <ul className="text-gray-200 list-none ms-6 px-0 font-mono">
              {userData
                ? userData.map((item, i) => (
                    <VitalsItem key={i} name={item.name} text={item.value} />
                  ))
                : null}
            </ul>
          </div>
        </aside>
      </article>
    </section>
  );
}

function VitalsItem({ name, text }: { name: string; text: string }) {
  return (
    <li className="my-0">
      <span className="font-semibold text-teal-400">{name}:&nbsp;</span>
      {text}
    </li>
  );
}
