import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SMART ART HERITAGE V1.0 | Di sản là nguồn cảm hứng",
  description: "Hệ sinh thái Mĩ thuật số hỗ trợ học sinh THCS khám phá di sản Hưng Yên bằng quan sát, AI 5A, Portfolio và đánh giá.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="vi"><body>{children}</body></html>;
}
