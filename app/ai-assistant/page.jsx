'use client'

import Link from 'next/link'
import { useEffect, useMemo, useState } from 'react'
import { heritages } from '@/lib/heritage'

const steps = [
  { key: 'A1', name: 'Hỏi', hint: 'Em muốn kể điều gì về di sản?' },
  { key: 'A2', name: 'Phân tích', hint: 'Chọn chi tiết tạo hình làm căn cứ.' },
  { key: 'A3', name: 'Gợi ý', hint: 'Khám phá các hướng thể hiện.' },
  { key: 'A4', name: 'Điều chỉnh', hint: 'Chọn, biến đổi và lập kế hoạch.' },
  { key: 'A5', name: 'Tác giả', hint: 'Xác nhận quyết định sáng tạo của em.' },
]

export default function AIAssistant() {
  const [heritageSlug, setHeritageSlug] = useState('')
  const [active, setActive] = useState(0)
  const [answers, setAnswers] = useState(['', '', '', '', ''])
  const [aiReply, setAiReply] = useState('')
  const [asking, setAsking] = useState(false)
  useEffect(() => {
    const selected = new URLSearchParams(window.location.search).get('heritage')
    if (!selected || !heritages.some((item) => item.slug === selected)) return
    setHeritageSlug(selected)
    try {
      const seed = window.localStorage.getItem(`smart-art-ai5a-seed-${selected}`) || ''
      if (seed.trim()) setAnswers((current) => current.map((value, index) => index === 0 && !value ? seed : value))
    } catch {}
  }, [])
  const heritage = heritages.find((item) => item.slug === heritageSlug)
  const guidance = useMemo(() => heritage ? [
    `Hãy viết một thông điệp ngắn về ${heritage.name}: em muốn người xem cảm nhận hoặc hiểu điều gì?`,
    `Dựa trên phần đã quan sát, chọn 2 yếu tố trong nhóm: ${heritage.artisticFocus}`,
    `Từ ${heritage.name}, em có thể thử ba hướng: (1) poster giàu biểu tượng, (2) thiết kế ứng dụng từ mô-típ, hoặc (3) tranh kể chuyện bằng mảng màu và đường nét.`,
    `Chọn một hướng; nêu điều em sẽ giữ từ di sản và điều em sẽ biến đổi để tác phẩm mang dấu ấn riêng.`,
    `Hoàn thành câu: “Quyết định quan trọng nhất của em là… vì…”. Lưu lại phần này cùng phác thảo trong Portfolio.`
  ] : steps.map((step) => step.hint), [heritage])
  const next = () => setActive((value) => Math.min(value + 1, 4))
  const previous = () => setActive((value) => Math.max(value - 1, 0))
  const askAssistant = async () => {
    if (!heritage || !answers[active].trim() || asking) return
    setAsking(true); setAiReply('')
    try {
      const previousAnswers = answers.slice(0, active).filter(Boolean).map((content) => ({ role: 'user', content }))
      const response = await fetch('/api/ai-art', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ diSanTen: heritage.name, messages: [...previousAnswers, { role: 'user', content: answers[active] }] }) })
      const data = await response.json()
      setAiReply(data.reply || data.error || 'Trợ lý chưa thể phản hồi lúc này.')
    } catch { setAiReply('Không thể kết nối Trợ lý lúc này. Em hãy thử lại sau.') } finally { setAsking(false) }
  }
  return <main>
    <header className="shell nav"><Link className="brand" href="/">SMART ART HERITAGE · V1.0</Link><Link className="button ghost" href="/ban-do">Kho di sản</Link></header>
    <section className="page-head"><div className="shell"><div className="breadcrumbs">Kho di sản / Trợ lý 5A</div><div className="kicker">Gợi mở sáng tạo có trách nhiệm</div><h1>Trợ lý 5A<br/>không làm bài thay em.</h1><p className="lead">Trợ lý này giúp em đi từ quan sát đến ý tưởng bằng câu hỏi và phương án gợi ý. Mọi lựa chọn tạo hình vẫn do em quyết định.</p></div></section>
    <section className="content"><div className="shell two-col"><div><div className="panel"><div className="kicker">Chọn hồ sơ di sản</div><h2>Điểm xuất phát của ý tưởng</h2><div className="heritage-picker">{heritages.map((item) => <button type="button" onClick={() => { setHeritageSlug(item.slug); setActive(0); }} className={heritageSlug === item.slug ? 'selected' : ''} key={item.slug}>{item.code} · {item.name}</button>)}</div></div>
        <div className="panel" style={{ marginTop: 20 }}><div className="stepper">{steps.map((step, index) => <button type="button" key={step.key} onClick={() => setActive(index)} className={index === active ? 'current' : index < active ? 'done' : ''}><b>{step.key}</b><span>{step.name}</span></button>)}</div><div className="guided-step"><div className="heritage-code">{steps[active].key} · {steps[active].name}</div><h2>{steps[active].hint}</h2><div className="guidance"><b>Gợi ý cho em</b><p>{guidance[active]}</p></div><div className="form-field"><label>Phần trả lời/ghi chú của em</label><textarea value={answers[active]} onChange={(event) => setAnswers((all) => all.map((value, index) => index === active ? event.target.value : value))} placeholder="Viết bằng lời của em; không cần câu trả lời hoàn hảo..." /></div><button className="button ghost" type="button" onClick={askAssistant} disabled={!heritage || !answers[active].trim() || asking}>{asking ? 'Trợ lý đang suy nghĩ…' : 'Nhận gợi ý từ Trợ lý 5A'}</button>{aiReply && <div className="ai-reply"><b>Trợ lý 5A gợi mở</b><p>{aiReply}</p></div>}<div className="step-actions"><button className="button ghost" type="button" onClick={previous} disabled={active === 0}>← Bước trước</button>{active < 4 ? <button className="button" type="button" onClick={next}>Bước tiếp theo →</button> : <Link className="button" href={`/portfolio?heritage=${heritageSlug}`}>Đưa ý tưởng vào Portfolio →</Link>}</div></div></div></div>
      <aside><div className="panel"><div className="kicker">Nguyên tắc sử dụng</div><h2>AI chỉ gợi mở</h2><ul className="checklist"><li><b>1.</b> Dùng căn cứ từ ảnh/Hotspot đã quan sát.</li><li><b>2.</b> Chọn hoặc từ chối gợi ý bằng lý do của em.</li><li><b>3.</b> Tự phác thảo và tự quyết định tác phẩm.</li></ul><p className="small">Bản V1 là trợ lý hướng dẫn theo quy trình 5A, không lưu hội thoại và không dùng API AI trả phí. Chức năng AI có lưu vết là hạng mục mở rộng.</p></div></aside>
    </div></section>
  </main>
}
