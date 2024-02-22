import Image from "next/image";

export const ProfilePic = () => {
  return (
    <section className="w-full mx-auto">
      <Image
        className="border-8 border-teal-500 drop-shadow-xl shadow-black rounded-full mx-auto mt-8 profile-shape mb-1"
        src="/images/fred.png"
        alt="Fred Lunjevich"
        width={250}
        height={250}
        priority={true}
      />
    </section>
  );
};
