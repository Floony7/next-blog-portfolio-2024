import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import { poppins } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Fred Lunjevich | Senior Frontend Engineer",
  description:
    "Senior frontend engineer building React, TypeScript and Next.js products across ecommerce, CMS integrations and API-heavy workflows.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`aurora-shell min-h-screen ${poppins.className}`}>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem("theme") || "dark";
                document.documentElement.classList.toggle("dark", theme === "dark");
              } catch {}
            `,
          }}
        />
        <Navbar />
        <main>{children}</main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
