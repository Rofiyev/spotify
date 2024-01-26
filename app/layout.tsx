import type { Metadata } from "next";
import { Figtree } from "next/font/google";
// Global Styles
import "./globals.css";

import NextTopLoader from "nextjs-toploader";
import Sidebar from "@/components/Sidebar";
import SupabaseProvider from "@/providers/SupabaseProvider";
import UserProvider from "@/providers/UserProvider";
import ModalProvider from "@/providers/ModalProvider";
import ToasterProvider from "@/providers/ToasterProvider";
import getSongsByUserId from "@/actions/getSongsByUserId";

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

export const revalidate: number = 0;

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const userSongs = await getSongsByUserId();

  return (
    <html lang="en">
      <body className={figtree.className}>
        <NextTopLoader
          color="#22c55e"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={true}
          easing="ease"
          speed={200}
          shadow="0 0 10px #22c55e,0 0 5px #22c55e"
          template='<div class="bar" role="bar"><div class="peg"></div></div> 
  <div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
          zIndex={1600}
          showAtBottom={false}
        />
        <ToasterProvider />
        <SupabaseProvider>
          <UserProvider>
            <ModalProvider />
            <Sidebar songs={userSongs}>{children}</Sidebar>
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}
