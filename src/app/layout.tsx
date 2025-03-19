import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Parva's Portfolio",
  description: "A creative UI/UX and graphic designer crafting bold, user-centric experiences with a touch of innovation. Explore a portfolio that blends aesthetics with functionality, turning ideas into stunning digital realities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <div className=" relative flex w-full items-center justify-center">
        {/* <Navbar /> */}
        </div>
        {children}
      </body>
    </html>
  );
}
