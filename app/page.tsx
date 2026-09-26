import Link from "next/link";
import { heritages } from "@/lib/heritage";

const flow = [
  ["01", "KhÃ¡m phÃ¡ di sáº£n", "Chá»n há»“ sÆ¡ vÃ  quan sÃ¡t tÆ° liá»‡u cÃ³ nguá»“n."],
  ["02", "Hotspot & 3â€“2â€“1", "Tráº£ lá»i dá»±a trÃªn Ä‘iá»u em nhÃ¬n tháº¥y."],
  ["03", "AI 5A cÃ³ kiá»ƒm soÃ¡t", "AI gá»£i má»Ÿ; há»c sinh quyáº¿t Ä‘á»‹nh."],
  ["04", "XÆ°á»Ÿng sÃ¡ng táº¡o", "LÆ°u phÃ¡c tháº£o, phÆ°Æ¡ng Ã¡n vÃ  tÃ¡c pháº©m."],
  ["05", "ÄÃ¡nh giÃ¡ & Portfolio", "Pháº£n tÆ°, rubric, dá»¯ liá»‡u nghiÃªn cá»©u."],
];

export default function Home() {
  return <>
    <header className="shell nav site-nav"><Link className="brand" href="/"><span>SMART ART</span> HERITAGE</Link><nav className="navlinks"><a href="#di-san">Di sáº£n</a><a href="#hanh-trinh">HÃ nh trÃ¬nh há»c</a><Link href="/trinh-chieu-du-an">SÆ¡ Ä‘á»“ há»‡ thá»‘ng</Link></nav><Link className="button ghost nav-cta" href="/ban-do">KhÃ¡m phÃ¡ di sáº£n <span>â†’</span></Link></header>
    <main>
      <section className="hero home-hero"><div className="shell hero-layout"><div className="hero-copy"><div className="kicker">Ná»n táº£ng giÃ¡o dá»¥c MÄ© thuáº­t sá»‘</div><h1><span>Di sản khơi nguồn sáng tạo.</span><em>Học sinh kiến tạo tương lai.</em></h1><p className="lead">KhÆ¡i má»Ÿ tÃ¬nh yÃªu di sáº£n HÆ°ng YÃªn báº±ng quan sÃ¡t trá»±c quan, nhiá»‡m vá»¥ MÄ© thuáº­t vÃ  AI 5A cÃ³ trÃ¡ch nhiá»‡m â€” nÆ¡i má»—i Ã½ tÆ°á»Ÿng Ä‘á»u báº¯t Ä‘áº§u tá»« tráº£i nghiá»‡m cá»§a há»c sinh.</p><div className="hero-actions"><Link className="button" href="/ban-do">Báº¯t Ä‘áº§u khÃ¡m phÃ¡ <span>â†’</span></Link><Link className="button ghost" href="/trinh-chieu-du-an">Xem sÆ¡ Ä‘á»“ há»‡ thá»‘ng</Link></div></div><aside className="hero-note"><span>HÃ€NH TRÃŒNH Há»ŒC Táº¬P</span><strong>Quan sÃ¡t<br/>â†’ Suy ngáº«m<br/>â†’ SÃ¡ng táº¡o</strong><p>Di sáº£n lÃ  cháº¥t liá»‡u.<br/>MÄ© thuáº­t lÃ  ngÃ´n ngá»¯.</p></aside><div className="metrics"><div className="metric"><strong>05</strong><span>há»“ sÆ¡ di sáº£n<br/>trá»ng tÃ¢m</span></div><div className="metric"><strong>5A</strong><span>quy trÃ¬nh AI<br/>gá»£i má»Ÿ</span></div><div className="metric"><strong>3â€“2â€“1</strong><span>phiáº¿u hÃ¬nh thÃ nh<br/>Ã½ tÆ°á»Ÿng</span></div></div></div></section>
      <section id="hanh-trinh" className="home-section journey-section"><div className="shell"><div className="section-head"><div><div className="kicker">Máº¡ch tráº£i nghiá»‡m chuáº©n</div><h2>Quan sÃ¡t trÆ°á»›c.<br/><em>AI sau.</em></h2></div><p>NguyÃªn táº¯c <b>NO OBSERVATION â†’ NO AI</b> giÃºp há»c sinh sá»­ dá»¥ng cÃ´ng nghá»‡ cÃ³ trÃ¡ch nhiá»‡m vÃ  giá»¯ vai trÃ² tÃ¡c giáº£ trong suá»‘t quÃ¡ trÃ¬nh sÃ¡ng táº¡o.</p></div><div className="flow">{flow.map(([number,title,desc])=><div className="flow-item" key={number}><b>{number}</b><h3>{title}</h3><p>{desc}</p></div>)}</div></div></section>
      <section id="di-san" className="home-section heritage-section"><div className="shell"><div className="section-head"><div><div className="kicker">Kho há»c liá»‡u</div><h2>05 cá»¥m di sáº£n<br/>HÆ°ng YÃªn</h2></div><p>Má»—i há»“ sÆ¡ Ä‘Æ°á»£c thiáº¿t káº¿ thÃ nh hÃ nh trÃ¬nh quan sÃ¡t â€“ phÃ¢n tÃ­ch táº¡o hÃ¬nh â€“ sÃ¡ng táº¡o, thay vÃ¬ chá»‰ lÃ  trang giá»›i thiá»‡u di tÃ­ch.</p></div><div className="grid">{heritages.map((item)=><article className="card" key={item.slug}><div className="heritage-code">{item.code} Â· {item.cluster}</div><h3>{item.name}</h3><p>{item.summary}</p><span className="pill">{item.artisticFocus}</span><Link className="link" href={`/di-san/${item.slug}`}>KhÃ¡m phÃ¡ há»“ sÆ¡ â†’</Link></article>)}</div></div></section>
      <section><div className="shell"><div className="notice"><strong>AI khÃ´ng táº¡o bÃ i máº«u Ä‘á»ƒ chÃ©p.</strong><br/>AI Art Assistant chá»‰ Ä‘áº·t cÃ¢u há»i, há»— trá»£ phÃ¢n tÃ­ch vÃ  gá»£i Ã½ 2â€“3 hÆ°á»›ng báº±ng lá»i. Há»c sinh cáº§n tá»± chá»n, biáº¿n Ä‘á»•i, phÃ¡c tháº£o, thá»±c hÃ nh vÃ  pháº£n tÆ° vá» quyáº¿t Ä‘á»‹nh cá»§a mÃ¬nh.</div></div></section>
    </main><footer className="footer"><div className="shell">SMART ART HERITAGE V1.0 Â· Di sáº£n lÃ  cháº¥t liá»‡u Â· MÄ© thuáº­t lÃ  ngÃ´n ngá»¯ Â· CÃ´ng nghá»‡ lÃ  cÃ´ng cá»¥</div></footer>
  </>;
}
