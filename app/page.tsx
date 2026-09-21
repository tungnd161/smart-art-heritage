import Link from "next/link";
import { heritages } from "@/lib/heritage";

const flow = [
  ["01", "Khám phá di sản", "Chọn hồ sơ và quan sát tư liệu có nguồn."],
  ["02", "Hotspot & 3–2–1", "Trả lời dựa trên điều em nhìn thấy."],
  ["03", "AI 5A có kiểm soát", "AI gợi mở; học sinh quyết định."],
  ["04", "Xưởng sáng tạo", "Lưu phác thảo, phương án và tác phẩm."],
  ["05", "Đánh giá & Portfolio", "Phản tư, rubric, dữ liệu nghiên cứu."],
];

export default function Home() {
  return <>
    <header className="shell nav"><Link className="brand" href="/">SMART ART HERITAGE · V1.0</Link><nav className="navlinks"><a href="#di-san">Di sản</a><a href="#hanh-trinh">Hành trình</a><Link href="/gioi-thieu">Sơ đồ hệ thống</Link></nav><Link className="button ghost" href="/ban-do">Bắt đầu</Link></header>
    <main>
      <section className="hero"><div className="shell"><div className="kicker">Nền tảng giáo dục Mĩ thuật số</div><h1>Di sản là nguồn cảm hứng.<br/>Học sinh là người sáng tạo.</h1><p className="lead">SMART ART HERITAGE kết nối di sản Hưng Yên với quan sát trực quan, nhiệm vụ Mĩ thuật, AI 5A có kiểm soát, Portfolio và đánh giá quá trình.</p><div className="hero-actions"><Link className="button" href="/ban-do">Bắt đầu khám phá</Link><Link className="button ghost" href="/gioi-thieu">Xem sơ đồ hệ thống</Link></div><div className="metrics"><div className="metric"><strong>05</strong><span>hồ sơ di sản trọng tâm</span></div><div className="metric"><strong>5A</strong><span>quy trình AI gợi mở</span></div><div className="metric"><strong>3–2–1</strong><span>điều kiện mở AI</span></div></div></div></section>
      <section id="hanh-trinh"><div className="shell"><div className="section-head"><div><div className="kicker">Mạch trải nghiệm chuẩn</div><h2>Quan sát trước. AI sau.</h2></div><p>Nguyên tắc <b>NO OBSERVATION → NO AI</b> giúp học sinh sử dụng công nghệ có trách nhiệm và giữ vai trò tác giả trong suốt quá trình sáng tạo.</p></div><div className="flow">{flow.map(([number,title,desc])=><div className="flow-item" key={number}><b>{number}</b><h3>{title}</h3><p>{desc}</p></div>)}</div></div></section>
      <section id="di-san"><div className="shell"><div className="section-head"><div><div className="kicker">Kho học liệu</div><h2>05 cụm di sản Hưng Yên</h2></div><p>Mỗi hồ sơ được thiết kế thành hành trình quan sát – phân tích tạo hình – sáng tạo, thay vì chỉ là trang giới thiệu di tích.</p></div><div className="grid">{heritages.map((item)=><article className="card" key={item.slug}><div className="heritage-code">{item.code} · {item.cluster}</div><h3>{item.name}</h3><p>{item.summary}</p><span className="pill">{item.artisticFocus}</span><Link className="link" href={`/di-san/${item.slug}`}>Khám phá hồ sơ →</Link></article>)}</div></div></section>
      <section><div className="shell"><div className="notice"><strong>AI không tạo bài mẫu để chép.</strong><br/>AI Art Assistant chỉ đặt câu hỏi, hỗ trợ phân tích và gợi ý 2–3 hướng bằng lời. Học sinh cần tự chọn, biến đổi, phác thảo, thực hành và phản tư về quyết định của mình.</div></div></section>
    </main><footer className="footer"><div className="shell">SMART ART HERITAGE V1.0 · Di sản là chất liệu · Mĩ thuật là ngôn ngữ · Công nghệ là công cụ</div></footer>
  </>;
}
