import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Laksana",
  description: "Laporan Aduan Kendala Sarana Prasarana",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="id"
      translate="no"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="antialiased tracking-tight bg-background min-h-screen flex flex-col">
        <Navbar/>
        <main className="flex-grow">{children}</main>
      </body>
    </html>
  );
}
