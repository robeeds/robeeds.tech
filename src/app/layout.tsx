import type { Metadata } from "next";
import "@/app/ui/globals.css"
import NavBar from "./ui/navbar";

export const metadata: Metadata = {
  title: "RobeeDS | Full Stack Developer",
  description: "I’m Robee, a college student with a passion for web development. Specializing in crafting captivating digital experiences, I’m your go-to person for all things creative and tech-savvy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased font-poppins bg-black text-dimWhite`}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
