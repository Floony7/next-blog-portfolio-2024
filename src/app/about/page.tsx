import FplRank2 from "@/components/fpl-rank2";
import { ProfilePic } from "@/components/profile-pic";
import { userData } from "@/data";

export default function About() {
  return (
    <section className="site-width mb-16 mt-14">
      <p className="text-sm uppercase tracking-[0.22em] text-[var(--clr-muted)]">
        A bit about Fred
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
            product teams. My work often sits where the interface meets the
            wider product system: APIs, CMS platforms, customer data, search,
            recommendations and release workflows.
          </p>
          <p>
            Frontend is still my strongest lane. I enjoy the details that make
            interfaces reliable in production: clear component boundaries,
            accessible HTML, state management, performance, API integration,
            code review and the practical trade-offs needed to ship maintainable
            product work.
          </p>
          <p>
            I&apos;m also deliberately growing into more product-focused
            full-stack engineering, spending more time with Node.js, server-side
            TypeScript, API design, authentication, databases, micro-services
            and testing. I&apos;m interested in owning more of the product layer
            around the interface, including the backend decisions and data
            models that shape what a product can become.
          </p>
          <h3>How I got here</h3>
          <p>
            My route into software was not especially linear. I first worked
            with HTML during my Communication Studies degree at Auckland
            University of Technology, then later became Web Co-ordinator in the
            Humanities faculty. That role gave me room to build WordPress and
            jQuery-era sites, sharpen my CSS, and learn how real people manage
            real content.
          </p>
          <p>
            In 2017, I dived deeper into JavaScript and React. A few years later
            I joined motion capture tech company&nbsp;
            <a
              href="https://stretchsense.com/"
              target="_blank"
              className="prose-anchor"
            >
              StretchSense
            </a>
            &nbsp; and moved from marketing into the Software Team, taking on
            frontend responsibilities for the Hand Engine software rebuild.
          </p>
          <p>
            Since moving to the UK in 2022, I&apos;ve worked mainly on Next.js
            ecommerce at{" "}
            <a href="https://5874commerce.com/" target="_blank">
              5874 Commerce
            </a>
            , including multi-region storefronts, BigCommerce integrations and
            headless CMS implementations.
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
