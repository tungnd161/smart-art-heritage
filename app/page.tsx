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
    <header className="shell nav site-nav"><Link className="brand" href="/"><span>SMART ART</span> HERITAGE</Link><nav className="navlinks"><a href="#di-san">Di sản</a><a href="#hanh-trinh">Hành trình học</a><Link href="/3d-ar">Không gian 3D</Link><Link href="/trinh-chieu-du-an">Sơ đồ hệ thống</Link></nav><Link className="button ghost nav-cta" href="/ban-do">Khám phá di sản <span>→</span></Link></header>
    <main>
      <section className="hero home-hero"><div className="shell hero-layout"><div className="hero-copy"><div className="kicker">Nền tảng giáo dục Mĩ thuật số</div><h1><span>Di sản khơi nguồn sáng tạo.</span><em>Học sinh kiến tạo tương lai.</em></h1><p className="lead">Khơi mở tình yêu di sản Hưng Yên bằng quan sát trực quan, nhiệm vụ Mĩ thuật và AI 5A có trách nhiệm — nơi mỗi ý tưởng đều bắt đầu từ trải nghiệm của học sinh.</p><div className="hero-actions"><Link className="button" href="/ban-do">Bắt đầu khám phá <span>→</span></Link><Link className="button ghost" href="/3d-ar">Trải nghiệm không gian 3D</Link><Link className="button ghost" href="/trinh-chieu-du-an">Xem sơ đồ hệ thống</Link></div></div><aside className="hero-note"><span>HÀNH TRÌNH HỌC TẬP</span><strong>Quan sát<br/>→ Suy ngẫm<br/>→ Sáng tạo</strong><p>Di sản là chất liệu.<br/>Mĩ thuật là ngôn ngữ.</p></aside><div className="metrics"><div className="metric"><strong>05</strong><span>hồ sơ di sản<br/>trọng tâm</span></div><div className="metric"><strong>5A</strong><span>quy trình AI<br/>gợi mở</span></div><div className="metric"><strong>3–2–1</strong><span>phiếu hình thành<br/>ý tưởng</span></div></div></div></section>
      <section id="hanh-trinh" className="home-section journey-section"><div className="shell"><div className="section-head"><div><div className="kicker">Mạch trải nghiệm chuẩn</div><h2>Quan sát trước.<br/><em>AI sau.</em></h2></div><p>Nguyên tắc <b>NO OBSERVATION → NO AI</b> giúp học sinh sử dụng công nghệ có trách nhiệm và giữ vai trò tác giả trong suốt quá trình sáng tạo.</p></div><div className="flow">{flow.map(([number,title,desc])=><div className="flow-item" key={number}><b>{number}</b><h3>{title}</h3><p>{desc}</p></div>)}</div></div></section>
      <section id="di-san" className="home-section heritage-section"><div className="shell"><div className="section-head"><div><div className="kicker">Kho học liệu</div><h2>05 cụm di sản<br/>Hưng Yên</h2></div><p>Mỗi hồ sơ được thiết kế thành hành trình quan sát – phân tích tạo hình – sáng tạo, thay vì chỉ là trang giới thiệu di tích.</p></div><div className="grid">{heritages.map((item)=><article className="card" key={item.slug}><div className="heritage-code">{item.code} · {item.cluster}</div><h3>{item.name}</h3><p>{item.summary}</p><span className="pill">{item.artisticFocus}</span><Link className="link" href={`/di-san/${item.slug}`}>Khám phá hồ sơ →</Link></article>)}</div></div></section>
      <section><div className="shell"><div className="notice"><strong>AI không tạo bài mẫu để chép.</strong><br/>AI Art Assistant chỉ đặt câu hỏi, hỗ trợ phân tích và gợi ý 2–3 hướng bằng lời. Học sinh cần tự chọn, biến đổi, phác thảo, thực hành và phản tư về quyết định của mình.</div></div></section>
    </main><footer className="footer"><div className="shell">SMART ART HERITAGE V1.0 · Di sản là chất liệu · Mĩ thuật là ngôn ngữ · Công nghệ là công cụ</div></footer>
  </>;
}
