import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

const figtree = Figtree({ subsets: ["latin"], weight: "500" });

export const metadata: Metadata = {
  title: "Spotify | @rof1yev",
  description: "Spotify - Web Player: Music for everyone",
  icons: [
    {
      url: "/spotify.svg",
      href: "/spotify.svg",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={figtree.className}>
        <Sidebar>{children}</Sidebar>
      </body>
    </html>
  );
}
