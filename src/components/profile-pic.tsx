import Image from "next/image";

import React from "react";

export const ProfilePic = () => {
  return (
    <section className="w-full mx-auto">
      <Image
        className="border-4 border-teal-500 drop-shadow-xl shadow-black rounded-full mx-auto mt-8"
        src="/images/fred.png"
        alt="Fred Lunjevich"
        width={200}
        height={200}
        priority={true}
      />
    </section>
  );
};
