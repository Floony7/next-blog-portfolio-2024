import Image from "next/image";

type PicProps = {
  width: number;
  height: number;
};

export const ProfilePic = ({ width, height }: PicProps) => {
  return (
    <section className="mx-auto w-full">
      <Image
        className="profile-shape mx-auto my-6 border border-[var(--clr-border)] bg-[var(--clr-surface)] p-2 drop-shadow-2xl"
        src="/images/fred.png"
        alt="Fred Lunjevich"
        width={width}
        height={height}
        priority={true}
      />
    </section>
  );
};
