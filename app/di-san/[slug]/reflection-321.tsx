"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { reflectionBank, type ReflectionPack } from "@/lib/reflection-321-bank";

type Props = { heritageSlug: string; heritageName: string };
type Answers = { three: string; two: string; one: string };
const emptyAnswers: Answers = { three: "", two: "", one: "" };
const heritageOptions = [
  { slug: "pho-hien", label: "Phố Hiến" },
  { slug: "chua-keo", label: "Chùa Keo" },
  { slug: "den-tran", label: "Đền Trần Hưng Hà" },
  { slug: "le-quy-don", label: "Khu lưu niệm Lê Quý Đôn" },
  { slug: "dong-xam", label: "Làng nghề chạm bạc Đồng Xâm" },
];

export default function Reflection321({ heritageSlug, heritageName }: Props) {
  const packs = reflectionBank[heritageSlug] || [];
  const [packIndex, setPackIndex] = useState(0);
  const [answers, setAnswers] = useState<Answers>(emptyAnswers);
  const [loaded, setLoaded] = useState(false);
  const [notice, setNotice] = useState("");
  const pack = packs[packIndex];
  const storageKey = `smart-art-321-v21-${heritageSlug}-${packIndex}`;

  useEffect(() => {
    setLoaded(false);
    setNotice("");
    try {
      const saved = window.localStorage.getItem(storageKey);
      setAnswers(saved ? { ...emptyAnswers, ...JSON.parse(saved) } : emptyAnswers);
    } catch { setAnswers(emptyAnswers); }
    finally { setLoaded(true); }
  }, [storageKey]);

  useEffect(() => {
    if (loaded) {
      window.localStorage.setItem(storageKey, JSON.stringify(answers));
      setNotice("Đã tự động lưu trên thiết bị này.");
    }
  }, [answers, loaded, storageKey]);

  const completed = useMemo(() => Object.values(answers).filter((value) => value.trim().length >= 8).length, [answers]);
  const update = (key: keyof Answers, value: string) => setAnswers((current) => ({ ...current, [key]: value }));
  const save = () => {
    window.localStorage.setItem(storageKey, JSON.stringify(answers));
    window.localStorage.setItem(`smart-art-ai5a-seed-${heritageSlug}`, answers.one);
    setNotice("✓ Đã lưu phiếu. Ý tưởng cá nhân đã sẵn sàng cho Trợ lý AI 5A.");
  };

  if (!pack) return null;
  return <section className="reflection-v21" aria-labelledby="reflection-title">
    <div className="reflection-flow"><b>BƯỚC 4 · PHIẾU 3–2–1</b><span>Quan sát di sản → 3 Khám phá → 2 Lựa chọn & suy nghĩ → 1 Ý tưởng sáng tạo → AI 5A</span></div>
    <div className="panel reflection-card">
      <div className="kicker">Phiếu mở trực tiếp · V2.1</div><h2 id="reflection-title">Phiếu 3–2–1 · Hình thành ý tưởng cá nhân</h2>
      <p className="small"><b>Cách làm:</b> Đọc câu hỏi → tự trả lời → chỉ mở gợi ý khi cần → phiếu tự lưu. Mỗi di sản có 5 gói câu hỏi để chọn.</p>
      <div className="reflection-controls">
        <select aria-label="Chọn dự án di sản" value={heritageSlug} onChange={(event) => { window.location.href = `/di-san/${event.target.value}`; }}>
          {heritageOptions.map((item) => <option key={item.slug} value={item.slug}>{item.label}</option>)}
        </select>
        <b>Gói {packIndex + 1}/5</b>
        <button type="button" onClick={() => document.getElementById("reflection-question-bank")?.scrollIntoView({ behavior: "smooth" })}>📚 Chọn gói câu hỏi</button>
      </div>
      <div className="reflection-topic"><b>{pack.title}</b></div>
      <Question number="3" title="KHÁM PHÁ" prompt={pack.prompts[0]} hint={pack.hints[0]} value={answers.three} onChange={(value) => update("three", value)} placeholder="Em trả lời câu 3 – Khám phá tại đây..." />
      <Question number="2" title="LỰA CHỌN & SUY NGHĨ" prompt={pack.prompts[1]} hint={pack.hints[1]} value={answers.two} onChange={(value) => update("two", value)} placeholder="Em trả lời câu 2 tại đây..." />
      <Question number="1" title="Ý TƯỞNG SÁNG TẠO CÁ NHÂN" prompt={pack.prompts[2]} hint={pack.hints[2]} value={answers.one} onChange={(value) => update("one", value)} placeholder="Em viết ý tưởng sản phẩm cá nhân tại đây..." />
      <div className={completed === 3 ? "completion-status complete" : "completion-status"}><b>Tiến độ gói hiện tại: {completed}/3 câu đã có nội dung.</b><br/>{completed === 3 ? "Em đã có căn cứ quan sát và ý tưởng cá nhân để chuyển sang AI 5A." : "Mỗi câu cần ít nhất 8 ký tự. Em có thể lưu và quay lại bất cứ lúc nào."}</div>
      <div className="reflection-actions"><button className="button" type="button" onClick={save}>💾 Lưu & ghi nhớ phiếu</button>{completed === 3 ? <Link className="button ghost" href={`/ai-assistant?heritage=${heritageSlug}`}>Tiếp tục → AI 5A</Link> : <button className="button ghost" type="button" onClick={save}>Lưu để tiếp tục sau</button>}<span aria-live="polite">{notice}</span></div>
    </div>
    <QuestionBank activeSlug={heritageSlug} activePack={packIndex} onUsePack={(index) => { setPackIndex(index); document.getElementById("reflection-title")?.scrollIntoView({ behavior: "smooth", block: "start" }); }} />
  </section>;
}

type QuestionProps = { number: string; title: string; prompt: string; hint: string; value: string; onChange: (value: string) => void; placeholder: string };
function Question({ number, title, prompt, hint, value, onChange, placeholder }: QuestionProps) {
  return <div className={`reflection-question reflection-question-${number}`}><h3>{number} · {title}</h3><div className="reflection-label">CÂU HỎI</div><p>{prompt}</p><details><summary>💡 Cần trợ giúp? Mở gợi ý</summary><div>{hint}</div></details><textarea value={value} onChange={(event) => onChange(event.target.value)} placeholder={placeholder} /></div>;
}

type BankProps = { activeSlug: string; activePack: number; onUsePack: (index: number) => void };
function QuestionBank({ activeSlug, activePack, onUsePack }: BankProps) {
  return <section id="reflection-question-bank" className="reflection-bank"><h2>📚 Kho ngân hàng câu hỏi 3–2–1</h2><p>5 dự án · 25 gói · 75 câu hỏi. Mở dự án → mở đúng gói cần xem. Mở gói khác thì gói hiện tại tự thu lại.</p>
    {heritageOptions.map((heritage) => <details key={heritage.slug} className="bank-project" open={heritage.slug === activeSlug}><summary><span><b>{heritage.label}</b><small>5 gói · 15 câu hỏi</small></span><i>⌄</i></summary><div className="bank-project-body">{(reflectionBank[heritage.slug] || []).map((pack, index) => <BankPack key={pack.title} heritageSlug={heritage.slug} pack={pack} index={index} active={heritage.slug === activeSlug && index === activePack} onUse={heritage.slug === activeSlug ? () => onUsePack(index) : undefined} />)}</div></details>)}
  </section>;
}

type BankPackProps = { heritageSlug: string; pack: ReflectionPack; index: number; active: boolean; onUse?: () => void };
function BankPack({ heritageSlug, pack, index, active, onUse }: BankPackProps) {
  const key = `smart-art-321-bank-${heritageSlug}-${index}`;
  const [answers, setAnswers] = useState<Answers>(emptyAnswers);
  const [loaded, setLoaded] = useState(false);
  const [notice, setNotice] = useState("");
  useEffect(() => { try { const saved = window.localStorage.getItem(key); setAnswers(saved ? { ...emptyAnswers, ...JSON.parse(saved) } : emptyAnswers); } catch { setAnswers(emptyAnswers); } finally { setLoaded(true); } }, [key]);
  const update = (name: keyof Answers, value: string) => { const next = { ...answers, [name]: value }; setAnswers(next); if (loaded) { window.localStorage.setItem(key, JSON.stringify(next)); setNotice("Đã tự động lưu."); } };
  const save = () => { window.localStorage.setItem(key, JSON.stringify(answers)); window.localStorage.setItem(`smart-art-ai5a-seed-${heritageSlug}`, answers.one); setNotice("✓ Đã lưu & ghi nhớ ý tưởng."); };
  return <details className="bank-pack" open={active}><summary><span className="bank-pill">Gói {index + 1}/5</span><strong>{pack.title}</strong><i>⌄</i></summary><div className="bank-pack-content">
    <BankQuestion number="3" title="KHÁM PHÁ" prompt={pack.prompts[0]} hint={pack.hints[0]} value={answers.three} onChange={(value) => update("three", value)} />
    <BankQuestion number="2" title="LỰA CHỌN & SUY NGHĨ" prompt={pack.prompts[1]} hint={pack.hints[1]} value={answers.two} onChange={(value) => update("two", value)} />
    <BankQuestion number="1" title="Ý TƯỞNG SÁNG TẠO CÁ NHÂN" prompt={pack.prompts[2]} hint={pack.hints[2]} value={answers.one} onChange={(value) => update("one", value)} />
    <div className="bank-pack-actions"><button type="button" onClick={save}>💾 Lưu phiếu</button>{onUse && <button type="button" className="bank-use" onClick={onUse}>Dùng gói này ở phiếu chính ↑</button>}<span>{notice}</span></div>
  </div></details>;
}

type BankQuestionProps = { number: string; title: string; prompt: string; hint: string; value: string; onChange: (value: string) => void };
function BankQuestion({ number, title, prompt, hint, value, onChange }: BankQuestionProps) {
  return <div className={`bank-question bank-question-${number}`}><b>{number} · {title}</b><p>{prompt}</p><details><summary>💡 Cần trợ giúp? Mở gợi ý</summary><span>{hint}</span></details><textarea value={value} onChange={(event) => onChange(event.target.value)} placeholder="Em viết câu trả lời của mình tại đây..." /></div>;
}
