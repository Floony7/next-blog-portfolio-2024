import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
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
      <body
        className={`aurora-shell flex min-h-screen flex-col ${poppins.className}`}
      >
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
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
