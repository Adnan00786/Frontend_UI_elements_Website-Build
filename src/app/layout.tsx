import type { Metadata } from "next";
import '@mantine/core/styles.css';
// import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hi Tech Copier Solutions",
  description: "Cannon, Xerox, Kyocera Machines sales and Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      </head>
      <body className={inter.className}>
      {children}
                </body>
    </html>
  );
}
