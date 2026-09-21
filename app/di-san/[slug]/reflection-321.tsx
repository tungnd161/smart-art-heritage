"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type Props = { heritageSlug: string; heritageName: string };

export default function Reflection321({ heritageSlug, heritageName }: Props) {
  const [insights, setInsights] = useState(["", "", ""]);
  const [features, setFeatures] = useState(["", ""]);
  const [reasons, setReasons] = useState(["", ""]);
  const [idea, setIdea] = useState("");
  const ready = useMemo(() => [...insights, ...features, ...reasons, idea].every((value) => value.trim().length >= 8), [insights, features, reasons, idea]);
  return <div className="panel" style={{ marginTop: 20 }}>
    <div className="kicker">Cổng quan sát → AI</div><h2>Tổng kết khám phá 3–2–1</h2>
    <p className="small">Hãy hoàn thành bằng căn cứ từ tư liệu em vừa quan sát. Khi dữ liệu đã đủ, em mới chuyển sang AI 5A. Bản đang xây sẽ lưu các câu trả lời này vào Supabase sau khi đăng nhập.</p>
    {insights.map((value, index) => <div className="form-field" key={`insight-${index}`}><label>3.{index + 1} · Điều em hiểu thêm</label><textarea value={value} onChange={(event) => setInsights((all) => all.map((item, itemIndex) => itemIndex === index ? event.target.value : item))} placeholder={`Một nhận xét cụ thể về ${heritageName}...`} /></div>)}
    {features.map((value, index) => <div className="form-field" key={`feature-${index}`}><label>2.{index + 1} · Đặc điểm Mĩ thuật em chọn và lý do</label><input value={value} onChange={(event) => setFeatures((all) => all.map((item, itemIndex) => itemIndex === index ? event.target.value : item))} placeholder="Ví dụ: nhịp điệu mái, đường nét, hình khối..." /><textarea value={reasons[index]} onChange={(event) => setReasons((all) => all.map((item, itemIndex) => itemIndex === index ? event.target.value : item))} placeholder="Em chọn vì..." /></div>)}
    <div className="form-field"><label>1 · Ý tưởng sáng tạo hoặc bảo tồn</label><textarea value={idea} onChange={(event) => setIdea(event.target.value)} placeholder="Em sẽ biến đổi điều gì thành tác phẩm của mình?" /></div>
    {ready ? <Link className="button" href={`/ai-assistant?heritage=${heritageSlug}`}>Đã đủ căn cứ quan sát · Mở AI 5A →</Link> : <div className="notice"><strong>AI đang khóa.</strong><br/>Hãy hoàn thành đủ 3 điều hiểu thêm, 2 đặc điểm có lý do và 1 ý tưởng. Đây là hàng rào sư phạm của SMART ART HERITAGE.</div>}
  </div>;
}
