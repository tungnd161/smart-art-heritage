import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SMART ART HERITAGE V1.0 | Khám phá Di sản Hưng Yên",
  description: "Nền tảng giáo dục Mĩ thuật tích hợp AI – 3D – AR giúp học sinh khám phá 5 khu di sản văn hóa Hưng Yên",
  keywords: "di sản Hưng Yên, mĩ thuật, AI, giáo dục, NCKH",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🏛</text></svg>" />
        <link href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className={geist.className} style={{fontFamily: "'Be Vietnam Pro', sans-serif"}}>
        {children}
      </body>
    </html>
  );
}