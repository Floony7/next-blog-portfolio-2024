import Image from "next/image";

type PicProps = {
  width: number;
  height: number;
};

export const ProfilePic = ({ width, height }: PicProps) => {
  return (
    <section className="w-full mx-auto">
      <Image
        className="border-8 border-teal-500 drop-shadow-xl shadow-black rounded-full mx-auto mt-8 mb-1"
        src="/images/fred.png"
        alt="Fred Lunjevich"
        width={width}
        height={height}
        priority={true}
      />
    </section>
  );
};
