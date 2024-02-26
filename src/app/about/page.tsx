import { ProfilePic } from "@/components/profile-pic";

export default function About() {
  return (
    <section className="site-width p-6 mt-10 mb-6">
      <h1 className="page-title">About</h1>
      <article className="prose prose-xl max-w-none text-gray-200 grid-2-1">
        <div>
          <p>
            My journey into web and software development was not what you call
            &ldquo;typical&rdquo;. I learned HTML during my bachelor degree in
            Communication Studies at AUT, circa 2000. Then, when CSS morphed
            into CSS3, I was drawn to designing websites with WordPress.
          </p>
          <p>
            Then, in 2018, I made the jump to learning the programming side of
            the web (JavaScript and React).
          </p>
          <p>
            At height of the 2020 Covid lockdown in New Zealand, I fully
            immersed my brain in React and frontend development. Later that
            year, I joined motion capture tech company&nbsp;
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
            into the Software Team, as the Software Lead was looking for a
            Frontent Developer who had some React skills. This the
            &ldquo;lucky&rdquo; break I was looking for.
          </p>
          <blockquote className="text-cyan-200 text-2xl">
            &ldquo;Luck is when opportunity and preparedness meet&rdquo;
          </blockquote>
          <p>
            With the assistance of some very talented developers and a desire to
            learn, I have made a successful move into software and web
            development by adding TypeScript to my growing list of competencies.
          </p>
        </div>
        <aside className="bg-slate-700 flex flex-col justify-center rounded-lg">
          <ProfilePic />
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
              <span className="font-semibold text-teal-400">Likes:&nbsp;</span>
              Ice Hockey, Kettlebells, Guitar, Language Learning
            </li>
          </ul>
        </aside>
      </article>
    </section>
  );
}
