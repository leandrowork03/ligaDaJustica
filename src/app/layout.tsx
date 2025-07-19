import { Header } from "./components/header";
import "./globals.css";

import { Monoton } from 'next/font/google';

const monoton = Monoton({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-monoton',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased ${monoton.variable}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
