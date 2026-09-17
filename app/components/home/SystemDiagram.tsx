// app/components/home/SystemDiagram.tsx
import Link from 'next/link'

const MODULES = [
  {
    n: 1, label: 'Trang chủ\nKho Di Sản', color: '#1565C0',
    href: '#di-san', live: true, ctaLabel: 'Vào Kho Di Sản',
  },
  {
    n: 2, label: 'Bản đồ\nDi sản Hưng Yên', color: '#2E7D32',
    href: '/ban-do', live: true, ctaLabel: 'Xem Bản đồ',
  },
  {
    n: 3, label: '5 Khu\nDi sản', color: '#E65100',
    href: '#di-san', live: true, ctaLabel: 'Khám phá',
  },
  {
    n: 4, label: 'Hồ sơ Khám phá\nDi sản', color: '#6A1B9A',
    href: null, live: false, ctaLabel: 'Định hướng phát triển',
  },
  {
    n: 5, label: 'Phòng 3D\nTương tác', color: '#D81B60',
    href: null, live: false, ctaLabel: 'Định hướng phát triển',
  },
  {
    n: 6, label: 'AI Art\nAssistant – 5A', color: '#8B1A1A',
    href: '/ai-assistant', live: true, ctaLabel: 'Hỏi AI',
  },
]

// Preview card nội dung mô phỏng UI từng module bằng CSS/JSX thuần
const PREVIEWS = [
  // 1 — Kho di sản
  <div key={1} className="flex flex-col gap-1.5 p-3 h-full">
    <div className="font-bold text-xs" style={{ color: '#8B1A1A' }}>🏛️ SMART ART HERITAGE</div>
    {['Phố Hiến', 'Chùa Keo', 'Đền Trần'].map(n => (
      <div key={n} className="flex items-center gap-1.5 rounded p-1.5"
        style={{ background: '#fef2f2', border: '1px solid #fca5a5' }}>
        <div className="w-6 h-6 rounded" style={{ background: '#8B1A1A', opacity: 0.3 }} />
        <span style={{ fontSize: 9, color: '#333' }}>{n}</span>
      </div>
    ))}
  </div>,

  // 2 — Bản đồ
  <div key={2} className="relative h-full overflow-hidden rounded-b-lg">
    <div className="w-full h-full" style={{ background: '#d1fae5' }}>
      <svg viewBox="0 0 100 120" className="w-full h-full opacity-60">
        <path d="M30 10 Q50 5 70 15 L80 60 Q60 90 50 110 Q40 90 20 60 Z"
          fill="#86efac" stroke="#16a34a" strokeWidth="1.5" />
        {[[45, 30], [50, 50], [40, 70], [55, 65], [35, 45]].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="4" fill="#dc2626" />
        ))}
      </svg>
    </div>
    <div className="absolute bottom-1 left-1 text-white px-1.5 py-0.5 rounded"
      style={{ fontSize: 8, background: '#2E7D32' }}>Bản đồ Di sản HY</div>
  </div>,

  // 3 — 5 Di sản grid
  <div key={3} className="grid grid-cols-2 gap-1 p-2 h-full">
    {['Phố Hiến', 'Chùa Keo', 'Đền Trần', 'Nhà LQĐ', 'Chạm bạc ĐX'].map((n, i) => (
      <div key={n} className="rounded flex items-center justify-center"
        style={{
          background: ['#fef2f2', '#eff6ff', '#f0fdf4', '#fefce8', '#fdf4ff'][i],
          border: '1px solid #e5e7eb', fontSize: 8, color: '#333',
          padding: '4px', textAlign: 'center',
          gridColumn: i === 4 ? 'span 2' : undefined,
        }}>
        🏛️ {n}
      </div>
    ))}
  </div>,

  // 4 — Hồ sơ di sản (định hướng)
  <div key={4} className="flex flex-col gap-1 p-2 h-full">
    <div className="rounded p-1.5" style={{ background: '#ede9fe', fontSize: 9, color: '#6A1B9A', fontWeight: 700 }}>
      Tổng quan | Kiến trúc | Hoa văn
    </div>
    <div className="rounded-lg flex-1" style={{ background: '#ddd6fe', opacity: 0.5 }} />
    <div className="text-center" style={{ fontSize: 8, color: '#888' }}>Đặc điểm Mĩ thuật nổi bật</div>
  </div>,

  // 5 — 3D (định hướng)
  <div key={5} className="flex flex-col items-center justify-center gap-2 h-full p-2">
    <div className="text-3xl">🏯</div>
    <div className="text-center" style={{ fontSize: 9, color: '#555' }}>Phòng 3D Tương tác</div>
    <div className="rounded px-2 py-0.5" style={{ background: '#fce7f3', fontSize: 8, color: '#be185d' }}>
      Xoay 360° • Zoom
    </div>
    <div className="rounded px-2 py-0.5" style={{ background: '#fce7f3', fontSize: 8, color: '#be185d' }}>
      Định hướng phát triển
    </div>
  </div>,

  // 6 — AI 5A
  <div key={6} className="flex flex-col gap-1 p-2 h-full">
    <div className="flex items-center gap-1 mb-1">
      <span className="text-sm">🤖</span>
      <span style={{ fontSize: 9, fontWeight: 700, color: '#8B1A1A' }}>AI Art Assistant 5A</span>
    </div>
    {[
      { c: '#dbeafe', t: '#1e40af', l: 'A — ASK: Đặt câu hỏi' },
      { c: '#dcfce7', t: '#166534', l: 'A — ANALYZE: Phân tích' },
      { c: '#fef9c3', t: '#854d0e', l: 'A — ADVISE: Gợi ý' },
      { c: '#fce7f3', t: '#9d174d', l: 'A — ADAPT: Điều chỉnh' },
      { c: '#f3e8ff', t: '#6b21a8', l: 'A — ART: Tạo ý tưởng' },
    ].map(r => (
      <div key={r.l} className="rounded px-1.5 py-0.5"
        style={{ background: r.c, fontSize: 8, color: r.t }}>
        {r.l}
      </div>
    ))}
  </div>,
]

export default function SystemDiagram() {
  return (
    <section className="bg-white py-6 px-4">
      <div className="max-w-screen-xl mx-auto">

        {/* Tiêu đề */}
        <div className="mb-5 pb-2 border-b-2" style={{ borderColor: '#8B1A1A' }}>
          <h2 className="font-black text-sm uppercase tracking-widest"
            style={{ color: '#8B1A1A' }}>
            Sơ đồ hệ thống tổng thể
          </h2>
        </div>

        {/* Hàng module — scroll ngang trên mobile */}
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex items-start gap-0 min-w-max">
            {MODULES.map((m, i) => (
              <div key={m.n} className="flex items-start">
                {/* Module block */}
                <div className="flex flex-col items-center gap-1 w-36">
                  {/* Số tròn + label */}
                  <div className="flex flex-col items-center gap-1">
                    <div
                      className="w-7 h-7 rounded-full flex items-center justify-center text-white text-sm font-black shadow"
                      style={{ background: m.color }}
                    >
                      {m.n}
                    </div>
                    <span className="text-center whitespace-pre-line font-bold leading-tight"
                      style={{ fontSize: 9, color: '#333' }}>
                      {m.label}
                    </span>
                  </div>

                  {/* CTA */}
                  {m.live && m.href ? (
                    <Link href={m.href}
                      className="px-2 py-0.5 rounded text-white text-center transition-opacity hover:opacity-80"
                      style={{ background: m.color, fontSize: 8 }}>
                      {m.ctaLabel}
                    </Link>
                  ) : (
                    <span className="px-2 py-0.5 rounded text-center"
                      style={{ background: '#f3f4f6', color: '#9ca3af', fontSize: 8 }}>
                      {m.ctaLabel}
                    </span>
                  )}
                </div>

                {/* Mũi tên nối */}
                {i < MODULES.length - 1 && (
                  <div className="flex items-start pt-3 px-1">
                    <span style={{ color: '#9ca3af', fontSize: 14 }}>→</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 6 Preview card */}
        <div className="mt-4 overflow-x-auto scrollbar-hide">
          <div className="grid min-w-max"
            style={{ gridTemplateColumns: 'repeat(6, 144px)', gap: 8 }}>
            {PREVIEWS.map((preview, i) => {
              const m = MODULES[i]
              return (
                <div key={i}
                  className="rounded-lg overflow-hidden"
                  style={{
                    height: 200,
                    border: `1.5px solid ${m.color}33`,
                    background: '#fafafa',
                    boxShadow: '0 1px 4px rgba(0,0,0,0.07)',
                  }}>
                  {/* Card header */}
                  <div className="px-2 py-1 text-white"
                    style={{ background: m.color, fontSize: 8, fontWeight: 700 }}>
                    {m.live ? '● Hoạt động' : '○ Định hướng PT'}
                  </div>
                  {/* Card body */}
                  <div className="h-full" style={{ height: 'calc(100% - 20px)' }}>
                    {preview}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}
