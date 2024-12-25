import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { MBTIImages } from "@/shared/constants/mbtis/images";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const ownglyph = localFont({
  src: "../static/fonts/Ownglyph_PDH.ttf",
  variable: "--font-ownglyph",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=no"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${ownglyph.variable} antialiased bg-slate-200`}
      >
        <div className="max-w-[480px] relative h-full m-auto shadow-drop-1">
          {children}
        </div>

        <GoogleAnalytics />
      </body>
    </html>
  );
}

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    metadataBase: new URL("https://christmas.mtdl.kr"),
    title: "Like Ornament",
    description: "나와 닮은 오너먼트는 무엇일까?",
    openGraph: {
      type: "website",
      url: "https://christmas.mtdl.kr",
      images: [
        {
          url: MBTIImages.INFP.src,
          width: 320,
          height: 320,
        },
      ],
    },
  };
};
