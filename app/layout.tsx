import type { Metadata } from "next";
import { Figtree } from "next/font/google";
// Global Styles
import "./globals.css";

import Sidebar from "@/components/Sidebar";
import SupabaseProvider from "@/providers/SupabaseProvider";
import UserProvider from "@/providers/UserProvider";
import ModalProvider from "@/providers/ModalProvider";
import ToasterProvider from "@/providers/ToasterProvider";

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
        <ToasterProvider />
        <SupabaseProvider>
          <UserProvider>
            <ModalProvider />
            <Sidebar>{children}</Sidebar>
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}
