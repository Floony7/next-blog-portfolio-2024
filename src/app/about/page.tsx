import FplRank2 from "@/components/fpl-rank2";
import { ProfilePic } from "@/components/profile-pic";
import { userData } from "@/data";

export default function About() {
  return (
    <section className="site-width mb-16 mt-14">
      <p className="text-sm uppercase tracking-[0.22em] text-[var(--clr-muted)]">
        About Fred
      </p>
      <h1 className="mt-3 text-5xl font-semibold sm:text-7xl">
        From disillusioned digital marketer to{" "}
        <span className="gradient-text">thriving developer</span>
      </h1>
      <article className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(280px,0.48fr)] lg:items-start">
        <div className="prose prose-xl max-w-none text-[var(--clr-muted)]">
          <p>
            I&apos;m a senior frontend engineer specialising in React,
            TypeScript and Next.js, with recent experience across ecommerce and
            product teams. I love what I do, and I&apos;m always looking for
            ways to improve my craft and grow as a developer. So while I&apos;m
            happy to be a frontend specialist, I&apos;m also interested in
            expanding into full-stack product engineering.
          </p>
          <p>
            In my spare time, I am finding myself drawn to deeper topics in
            Node.js, server-side TypeScript, API design, authentication,
            databases, micro-services and testing.
          </p>
          <h3>How I got here</h3>
          <p>
            My route into software was not especially linear. I first worked
            with HTML during my Communication Studies degree at Auckland
            University of Technology, then later became Web Co-ordinator in the
            Humanities faculty. That role gave me room to build WordPress and
            jQuery-era sites, sharpen my CSS, and learn how content is managed
            in the real world.
          </p>
          <p>
            In 2017, after a series of roles in marketing and content
            management,I dived deeper into JavaScript and React. A few years
            later I joined motion capture tech company&nbsp;
            <a
              href="https://stretchsense.com/"
              target="_blank"
              className="prose-anchor"
            >
              StretchSense
            </a>
            . Initially as a digital marketing assistant, I was always enviously
            looking over at the Software Team as they did all these cool things
            with motion capture gloves and code. I desperately wanted to be a
            developer, and after a year at the company, the opportunity to take
            on a React frontend role landed on my desk. I was tasked with
            leading the Hand Engine software rebuild in NZ and later in the UK.
          </p>
          <p>
            Having moved to Birmingham in 2022 and leaving StretchSense in late
            2023, I&apos;ve worked mainly on Next.js ecommerce at{" "}
            <a href="https://5874commerce.com/" target="_blank">
              5874 Commerce
            </a>
            , including multi-region storefronts, BigCommerce integrations and
            headless CMS implementations.
          </p>
          <p>
            My next chapter in the journey is being written right now, as I cast
            my eyes out into the world and see many potentially rewarding
            avenues. Where exactly will I end up? Well, what I can say is that
            I&apos;m excited to see where this path leads. I&apos;m actively
            preparing myself for greater things. Life is too short to play small
            after all!
          </p>
        </div>
        <aside className="flex flex-col items-center">
          <div className="glass-panel w-full rounded-[1.75rem] p-5">
            <ProfilePic width={250} height={250} />
            <h2 className="my-4 text-center text-2xl font-semibold">Vitals</h2>
            <ul className="list-none space-y-3 px-0 text-[var(--clr-muted)]">
              {userData
                ? userData.map((item, i) => (
                    <VitalsItem key={i} name={item.name} text={item.value} />
                  ))
                : null}
            </ul>
            <FplRank2 fplId={241312} />
          </div>
        </aside>
      </article>
    </section>
  );
}

function VitalsItem({ name, text }: { name: string; text: string }) {
  return (
    <li>
      <span className="font-semibold text-[var(--clr-teal-accent)]">
        {name}:&nbsp;
      </span>
      {text}
    </li>
  );
}
