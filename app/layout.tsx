import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SMART ART HERITAGE V1.0 | Di sản là nguồn cảm hứng",
  description: "Hệ sinh thái Mĩ thuật số hỗ trợ học sinh THCS khám phá di sản Hưng Yên bằng quan sát, AI 5A, Portfolio và đánh giá.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="vi"><head>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    <link href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;500;600;700;800&family=Playfair+Display:ital,wght@0,600;0,700;0,800;1,600;1,700&display=swap" rel="stylesheet" />
  </head><body>{children}</body></html>;
}
