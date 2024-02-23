import { ProfilePic } from "./profile-pic";

export const Hero = () => {
  return (
    <section className="mb-6 py-10 w-full bg-slate-800">
      <article className="site-width grid-2-1">
        <div className="p-4 ps-6 flex items-center">
          <div className="ps-2">
            <h1 className="text-2xl text-gray-200">
              What I mean when I say &quot;I am a developer&quot;:
            </h1>
            <div className="ps-6">
              <h2 className="text-2xl italic text-cyan-200 my-0 p-0">
                developer
              </h2>
              <span className="text-gray-200 p-0">/dɪˈvɛləpə/</span>
              <br />
              <span className="text-gray-200 italic p-0">noun</span>
              <br />
              <span className="text-gray-200 italic p-0">
                a person or thing that develops something.
              </span>
              <br />
              <span className="text-gray-400 italic p-0">
                &quot;a web developer&quot;
              </span>
            </div>
          </div>
        </div>
        <div>
          <ProfilePic />
        </div>
      </article>
    </section>
  );
};
