import Link from "next/link";
import { getHeritage, heritages } from "@/lib/heritage";
import Reflection321 from "./reflection-321";

export function generateStaticParams() { return heritages.map(({ slug }) => ({ slug })); }

export default async function HeritagePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const heritage = getHeritage(slug);
  if (!heritage) return <main className="shell content"><h1>Không tìm thấy hồ sơ di sản</h1><Link className="button" href="/">Về trang chủ</Link></main>;
  return <><header className="shell nav"><Link className="brand" href="/">SMART ART HERITAGE · V1.0</Link><Link className="button ghost" href="/">Kho di sản</Link></header><main><section className="page-head"><div className="shell"><div className="breadcrumbs">Kho di sản / {heritage.name}</div><div className="kicker">{heritage.cluster}</div><h1>{heritage.name}</h1><p className="lead">{heritage.summary}</p></div></section><section className="content"><div className="shell two-col"><div><div className="panel"><div className="kicker">Nhiệm vụ sáng tạo</div><h2>{heritage.task}</h2><p className="small">Phiên bản V1 sẽ có 15 ảnh tư liệu đã kiểm chứng nguồn; mỗi ảnh đi kèm Hotspot ba lớp: <b>Nhìn ảnh</b>, <b>Em có biết?</b> và <b>Thử làm nhé</b>.</p></div><div className="panel" style={{marginTop:20}}><div className="kicker">Hotspot mẫu</div><h2>Quan sát từ tư liệu</h2>{heritage.observations.map((item,index)=><div className="hotspot" key={item}><b>Ảnh {index + 1} · Nhìn ảnh</b>{item}<div className="small" style={{marginTop:7}}><b>Em có biết?</b> Nội dung kiến thức chỉ hiển thị sau khi được bổ sung nguồn tư liệu chính thức.</div><div className="small" style={{marginTop:7}}><b>Thử làm nhé:</b> Ghi lại bằng ký họa hoặc sơ đồ nhanh vào sổ tay khám phá.</div></div>)}</div><Reflection321 heritageSlug={heritage.slug} heritageName={heritage.name} /></div><aside><div className="panel"><div className="kicker">Quy tắc vận hành</div><h2>NO OBSERVATION → NO AI</h2><ul className="checklist"><li><b>1.</b> Hoàn thành quan sát Hotspot.</li><li><b>2.</b> Viết tổng kết 3–2–1 có căn cứ.</li><li><b>3.</b> Hệ thống mới mở AI 5A.</li></ul><p className="small">Ở phiên bản kết nối Supabase, giáo viên xem được toàn bộ dấu vết này trong Portfolio và Dashboard.</p></div></aside></div></section></main></>;
}
