import Link from "next/link";
import { getHeritage, heritages } from "@/lib/heritage";
import { hotspotsByHeritage } from "@/lib/hotspots";
import Reflection321 from "./reflection-321";

export function generateStaticParams() { return heritages.map(({ slug }) => ({ slug })); }

export default async function HeritagePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const heritage = getHeritage(slug);
  if (!heritage) return <main className="shell content"><h1>Không tìm thấy hồ sơ di sản</h1><Link className="button" href="/">Về trang chủ</Link></main>;
  const hotspots = hotspotsByHeritage[heritage.slug] ?? [];
  return <><header className="shell nav"><Link className="brand" href="/">SMART ART HERITAGE · V1.0</Link><Link className="button ghost" href="/ban-do">Kho di sản</Link></header><main>
    <section className="page-head"><div className="shell"><div className="breadcrumbs">Kho di sản / {heritage.name}</div><div className="kicker">{heritage.cluster}</div><h1>{heritage.name}</h1><p className="lead">{heritage.summary}</p></div></section>
    <section className="content"><div className="shell two-col"><div><div className="panel"><div className="kicker">Nhiệm vụ sáng tạo</div><h2>{heritage.task}</h2><p className="small">Hãy khám phá đủ {hotspots.length} tư liệu. Mỗi ảnh có Hotspot ba lớp: <b>Nhìn ảnh</b>, <b>Em có biết?</b> và <b>Thử làm nhé</b>.</p></div>
      <div className="panel" style={{marginTop:20}}><div className="kicker">Ảnh tư liệu & Hotspot</div><h2>Khám phá từ dễ đến sâu</h2><p className="small">Dữ liệu ảnh và câu hỏi được nhập từ bộ học liệu anh cung cấp. Trước khi công bố rộng rãi, từng ảnh vẫn cần được gắn chú thích nguồn/quyền sử dụng cụ thể.</p><div className="hotspot-grid">{hotspots.map((item, index) => <article className="hotspot-card" key={item.id}><img src={item.image} alt={`${item.id} · ${item.title}`} /><div className="hotspot-card-body"><div className="heritage-code">{item.id} · ẢNH {index + 1}/{hotspots.length}</div><h3>{item.title}</h3><details open><summary>① Nhìn ảnh</summary><p>{item.observe}</p></details><details><summary>② Em có biết?</summary><p>{item.know}</p></details><details><summary>③ Thử làm nhé</summary><p>{item.try}</p></details></div></article>)}</div></div>
      <section className="video-material panel" aria-labelledby="video-title"><div className="kicker">Tư liệu video</div><h2 id="video-title">Xem câu chuyện di sản</h2><p className="small">Video được đưa vào theo đường dẫn tư liệu do giáo viên/đơn vị dự án cung cấp. Mở trong một tab mới để xem nội dung gốc.</p><a className="video-link" href={heritage.video.url} target="_blank" rel="noreferrer"><span aria-hidden="true">▶</span><b>Xem video về {heritage.name}</b><small>{heritage.video.source}</small><i aria-hidden="true">↗</i></a></section>
      <Reflection321 heritageSlug={heritage.slug} heritageName={heritage.name} /></div>
      <aside><div className="panel"><div className="kicker">Quy tắc vận hành</div><h2>NO OBSERVATION → NO AI</h2><ul className="checklist"><li><b>1.</b> Hoàn thành quan sát Hotspot.</li><li><b>2.</b> Viết tổng kết 3–2–1 có căn cứ.</li><li><b>3.</b> Hệ thống mới mở AI 5A.</li></ul><p className="small">Ở phiên bản kết nối Supabase, giáo viên xem được toàn bộ dấu vết này trong Portfolio và Dashboard.</p></div></aside>
    </div></section></main></>;
}
