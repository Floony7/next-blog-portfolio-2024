import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import { ProfilePic } from "@/components/profile-pic";
import { Hero } from "@/components/hero";
import Footer from "@/components/footer";

const plex = IBM_Plex_Sans({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fred Lunjevich | Web Developer | UK",
  description:
    "My name is Fred and I am passionate about all things web development, frontend, backend, TypeScript, Next.js and React",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`min-h-screen bg-slate-900 text-white ${plex.className}`}
      >
        <Navbar />
        <main>{children}</main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
