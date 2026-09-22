"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type Props = { heritageSlug: string; heritageName: string };
type Reflection = { insights: string[]; features: string[]; reasons: string[]; idea: string };

export default function Reflection321({ heritageSlug, heritageName }: Props) {
  const storageKey = `smart-art-321-${heritageSlug}`;
  const [reflection, setReflection] = useState<Reflection>({ insights: ["", "", ""], features: ["", ""], reasons: ["", ""], idea: "" });
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { try { const saved = window.localStorage.getItem(storageKey); if (saved) setReflection(JSON.parse(saved)); } catch {} finally { setLoaded(true); } }, [storageKey]);
  useEffect(() => { if (loaded) window.localStorage.setItem(storageKey, JSON.stringify(reflection)); }, [loaded, reflection, storageKey]);
  const completionCount = useMemo(() => [...reflection.insights, ...reflection.features, ...reflection.reasons, reflection.idea].filter((value) => value.trim().length >= 8).length, [reflection]);
  const ready = completionCount === 8;
  const update = (field: "insights" | "features" | "reasons", index: number, value: string) => setReflection((old) => ({ ...old, [field]: old[field].map((item, itemIndex) => itemIndex === index ? value : item) }));
  return <div className="panel" style={{ marginTop: 20 }}>
    <div className="kicker">Cổng quan sát → AI</div><h2>Tổng kết khám phá 3–2–1</h2>
    <p className="small">Phiếu được lưu trên thiết bị này để học sinh có thể tiếp tục trong lúc trải nghiệm. Khi hoàn thành đủ căn cứ quan sát, hệ thống mở Trợ lý AI 5A bản hướng dẫn.</p>
    {reflection.insights.map((value, index) => <div className="form-field" key={`insight-${index}`}><label>3.{index + 1} · Điều em hiểu thêm</label><textarea value={value} onChange={(event) => update("insights", index, event.target.value)} placeholder={`Một nhận xét cụ thể về ${heritageName}...`} /></div>)}
    {reflection.features.map((value, index) => <div className="form-field" key={`feature-${index}`}><label>2.{index + 1} · Đặc điểm Mĩ thuật em chọn và lý do</label><input value={value} onChange={(event) => update("features", index, event.target.value)} placeholder="Ví dụ: nhịp điệu mái, đường nét, hình khối..." /><textarea value={reflection.reasons[index]} onChange={(event) => update("reasons", index, event.target.value)} placeholder="Em chọn vì..." /></div>)}
    <div className="form-field"><label>1 · Ý tưởng sáng tạo hoặc bảo tồn</label><textarea value={reflection.idea} onChange={(event) => setReflection((old) => ({ ...old, idea: event.target.value }))} placeholder="Em sẽ biến đổi điều gì thành tác phẩm của mình?" /></div>
    <div className={ready ? "completion-status complete" : "completion-status"}><b>Tiến độ quan sát: {completionCount}/8 ý cần hoàn thành.</b><br/>{ready ? "Em đã đủ căn cứ quan sát. Có thể chuyển sang Trợ lý 5A." : "Mỗi ô cần có ít nhất 8 ký tự. Hãy hoàn thành đủ 3 điều hiểu thêm, 2 đặc điểm, 2 lý do và 1 ý tưởng để mở AI."}</div>
    {ready ? <Link className="button" href={`/ai-assistant?heritage=${heritageSlug}`}>Đã đủ căn cứ quan sát · Mở AI 5A →</Link> : <button className="button" type="button" disabled>AI đang khóa · Hoàn thành {8 - completionCount} ý nữa</button>}
  </div>;
}
