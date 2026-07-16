import FplRank2 from "@/components/fpl-rank2";
import { ProfilePic } from "@/components/profile-pic";
import { userData } from "@/data/mock";

export default function About() {
  return (
    <section className="site-width p-6 mt-10 mb-6">
      <h1 className="page-title">About Fred</h1>
      <article className="prose prose-xl max-w-none text-gray-200 grid-2-1">
        <div>
          <p>
            I&apos;m a senior frontend engineer focused on React, TypeScript
            and Next.js. Most of my recent work has been in commercial
            ecommerce and product teams, where the frontend sits close to APIs,
            CMS platforms, customer data, search, recommendations and release
            workflows.
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
            full-stack engineering. That means spending more time with Node.js,
            server-side TypeScript, API design, authentication, databases,
            testing and observability rather than treating the backend as a
            black box.
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
            In 2017 I shifted hard into JavaScript and React. A few years later
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
            headless CMS work. The next step is owning more of the product
            layer around those interfaces: the APIs, data models and backend
            decisions that shape what a product can become.
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
            <FplRank2 fplId={23632} />
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
