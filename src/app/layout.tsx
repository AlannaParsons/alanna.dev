
import '@mantine/core/styles.css';
// import '@mantine/dates/styles.css';
// ...
import { MantineProvider} from '@mantine/core';
import type { Metadata } from "next";
import { theme } from '@/utils/theme';
// import { Geist, Geist_Mono } from "next/font/google";
import { HeaderSimple } from "@/components/HeaderSimple";
import Script from "next/script";
import "./globals.css";
import '@mantine/carousel/styles.css';

// const myFont = localFont({ src: "../fonts/Goodly-Bold.otf" })
//const myFont = localFont({ src: "../fonts/MilkyWalky-Regular.otf" })

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
          <MantineProvider theme={theme}>
            <div className="grid h-screen grid-rows-[auto_1fr_auto]">
              <HeaderSimple></HeaderSimple>
              {children}
            </div>
          </MantineProvider>
        <Script strategy="beforeInteractive" src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"></Script>
        <Script strategy="beforeInteractive" src="https://cdn.jsdelivr.net/npm/vanta@0.5.24/dist/vanta.birds.min.js"></Script>
      </body>
    </html>
  );
}
