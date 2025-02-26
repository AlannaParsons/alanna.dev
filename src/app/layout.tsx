
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

export const metadata: Metadata = {
  title: "Alanna's Portfolio Website",
  description: "Showing just a piece of my commitment to hard work",
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
