import type { Metadata } from "next";
<<<<<<< HEAD
import '@mantine/core/styles.css';
// import { ColorSchemeScript, MantineProvider } from '@mantine/core';
=======
>>>>>>> 0dc0983e0537f015fb575fee54df86abf4271148
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
<<<<<<< HEAD
  title: "Hi Tech Copier Solutions",
  description: "Cannon, Xerox, Kyocera Machines sales and Services",
=======
  title: "Create Next App",
  description: "Generated by create next app",
>>>>>>> 0dc0983e0537f015fb575fee54df86abf4271148
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
<<<<<<< HEAD
      <head>
      </head>
      <body className={inter.className}>
      {children}
                </body>
=======
      <body className={inter.className}>{children}</body>
>>>>>>> 0dc0983e0537f015fb575fee54df86abf4271148
    </html>
  );
}
