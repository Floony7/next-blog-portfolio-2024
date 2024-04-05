import { Project, projectsData } from "@/data/mock";
import Link from "next/link";
import Image from "next/image";

export default function PortfolioItem(props: { project: Project }) {
  const {
    id,
    img,
    title,
    subtitle,
    description,
    url,
    repo,
    hasVideo,
    shortName,
  } = props.project;

  return (
    <section key={id} className="grid-1-2 p-4 bg-slate-700 mt-4 rounded-xl">
      <div>
        <Image
          className="drop-shadow-xl shadow-black mx-auto mb-0"
          src={`/images/portfolio/${img}`}
          alt="Fred Lunjevich"
          width="600"
          height="400"
          priority={true}
        />
      </div>
      <div className="prose prose-md text-gray-200 mt-0">
        <h2>{title}</h2>
        <h4>{subtitle}</h4>
        <p>{description}</p>
        <span>
          {
            <Link
              href={`/portfolio/${shortName}`}
              className="hover:text-cyan-300 text-orange-500 transition-all duration-200 no-underline"
            >
              Project Info &#10148;
            </Link>
          }
        </span>
        <br />
        <div className="flex gap-6 justify-center md:justify-normal">
          <div>
            {url !== "" ? (
              <Link
                href={url}
                target="_blank"
                className="hover:text-orange-500 text-cyan-300 transition-all duration-200 no-underline"
              >
                {hasVideo === true ? "View Video" : "View Project"} &#10148;
              </Link>
            ) : (
              "Not currently live"
            )}
          </div>
          <div>
            {repo !== "" ? (
              <Link
                href={repo}
                target="_blank"
                className="hover:text-cyan-300 text-orange-500 transition-all duration-200 no-underline"
              >
                GitHub Repo &#10148;
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
