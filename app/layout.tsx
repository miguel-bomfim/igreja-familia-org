import type { Metadata } from "next";
import "./globals.css";
import localFont from 'next/font/local'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const metadata: Metadata = {
  title: "Igreja da Família",
  description: "Igreja da Família - Transformando Vidas em Imbituba",
};

const codec = localFont({
  src: [
    {
      path: 'fonts/Codec-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: 'fonts/Codec-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: 'fonts/Codec-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: 'fonts/Codec-ExtraBold.ttf',
      weight: '800',
      style: 'normal',
    }
  ],
  variable: '--font-codec',
  display: 'swap',
  fallback: ['sans-serif'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={`${codec.variable} font-codec`}>
      <body  style={{ fontFamily: '' }}>
        {children}
      </body>
    </html>
  );
}
