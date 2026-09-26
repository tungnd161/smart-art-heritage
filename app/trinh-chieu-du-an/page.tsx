"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const modules = [
  { no: "01", title: "Trang chủ", short: "Điểm vào dự án", href: "/", icon: "⌂", image: "/heritages/pho-hien/01.jpg", tone: "blue" },
  { no: "02", title: "Bản đồ di sản", short: "Khám phá Hưng Yên", href: "/ban-do", icon: "⌖", image: "/heritages/le-quy-don/03.jpg", tone: "green" },
  { no: "03", title: "05 cụm di sản", short: "Kho học liệu địa phương", href: "/ban-do", icon: "◈", image: "/heritages/dong-xam/02.jpg", tone: "orange" },
  { no: "04", title: "Hồ sơ khám phá", short: "Quan sát · Hotspot · 3–2–1", href: "/di-san/pho-hien", icon: "▤", image: "/heritages/chua-keo/02.jpg", tone: "purple" },
  { no: "05", title: "Không gian trực quan", short: "Ảnh, hotspot & góc nhìn tạo hình", href: "/di-san/pho-hien", icon: "◉", image: "/heritages/den-tran/03.jpg", tone: "teal" },
  { no: "06", title: "AI Art Assistant · 5A", short: "AI gợi mở, học sinh quyết định", href: "/ai-assistant", icon: "✦", image: "/heritages/chua-keo/04.jpg", tone: "cyan" },
  { no: "07", title: "Xưởng sáng tạo", short: "Ý tưởng · Phác thảo · Tác phẩm", href: "/portfolio", icon: "✎", image: "/heritages/den-tran/06.jpg", tone: "pink" },
  { no: "08", title: "Gallery & QR", short: "Trưng bày tác phẩm có phê duyệt", href: "/gallery", icon: "▧", image: "/heritages/le-quy-don/07.jpg", tone: "amber" },
  { no: "09", title: "Phản tư & Portfolio", short: "Minh chứng quá trình học tập", href: "/portfolio", icon: "✓", image: "/heritages/dong-xam/06.jpg", tone: "lime" },
];

const journey = ["Khám phá di sản", "Quan sát & phân tích", "Gợi ý ý tưởng 5A", "Sáng tạo & thực hành", "Triển lãm", "Phản tư"];

export default function PresentationPage() {
  const [active, setActive] = useState<number | null>(null);
  return <main className="presentation-page">
    <header className="presentation-header">
      <Link href="/" className="presentation-brand"><span className="brand-mark">✦</span><span>SMART ART<br/><b>HERITAGE</b></span></Link>
      <div className="presentation-title"><h1>SMART ART HERITAGE <em>V1.0</em></h1><b>KHÁM PHÁ DI SẢN · HỌC MĨ THUẬT · SÁNG TẠO TƯƠNG LAI</b><p>Nền tảng giáo dục Mĩ thuật tích hợp công nghệ số, kết nối di sản Hưng Yên với hành trình quan sát, suy ngẫm và sáng tạo của học sinh.</p></div>
      <div className="presentation-tech"><span>CÔNG NGHỆ TÍCH HỢP</span><div><i>AI</i><i>3D</i><i>AR</i><i>◎</i></div><small>AI Art Assistant · Trực quan số · AR · Web</small></div>
      <div className="presentation-journey"><span>HÀNH TRÌNH HỌC TẬP CỦA HỌC SINH</span><div>{journey.map((step, index) => <b key={step}><i>{["⌖", "◉", "✦", "✎", "▧", "✓"][index]}</i>{step}</b>)}</div></div>
    </header>

    <section className="presentation-board">
      <div className="board-heading"><span>SƠ ĐỒ HỆ THỐNG TỔNG THỂ</span><p>Chọn một mô-đun để trải nghiệm trực tiếp trên nền tảng.</p></div>
      <div className="presentation-flow top-flow">
        {modules.slice(0, 6).map((item, index) => <ModuleCard key={item.no} item={item} index={index} active={active === index} onHover={() => setActive(index)} />)}
      </div>
      <div className="flow-return"><span>↓</span><i></i><span>←</span></div>
      <div className="presentation-flow lower-flow">
        {modules.slice(6).map((item, index) => <ModuleCard key={item.no} item={item} index={index + 6} active={active === index + 6} onHover={() => setActive(index + 6)} />)}
        <aside className="teacher-panel"><span>DÀNH CHO GIÁO VIÊN</span><strong>THEO DÕI QUÁ TRÌNH</strong><p>Tiến độ · Rubric · Phản hồi</p><small>Chức năng giáo viên được mở theo vai trò.</small></aside>
      </div>
      <div className="presentation-caption"><span>01</span><p><b>Nguyên tắc vận hành:</b> học sinh quan sát và ghi nhận trước khi nhận gợi ý từ AI. Công nghệ là công cụ hỗ trợ, không thay thế quá trình sáng tạo.</p><Link href="/">Mở website chính →</Link></div>
    </section>
  </main>;
}

type Module = typeof modules[number];
function ModuleCard({ item, index, active, onHover }: { item: Module; index: number; active: boolean; onHover: () => void }) {
  return <div className={`module-wrap ${active ? "is-active" : ""}`} onMouseEnter={onHover}>
    <div className="module-label"><b className={item.tone}>{item.no}</b><span>{item.title}</span>{index < 5 && <i>→</i>}</div>
    <Link href={item.href} className={`module-card ${item.tone}`} aria-label={`Mở ${item.title}`}>
      {item.image ? <Image src={item.image} alt="" fill sizes="(max-width: 1200px) 20vw, 220px" /> : <div className="module-abstract"><i>{item.icon}</i><span>{item.title}</span></div>}
      <div className="module-overlay"><i>{item.icon}</i><b>{item.short}</b><span>Mở mô-đun →</span></div>
    </Link>
  </div>;
}
