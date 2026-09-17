// app/components/home/HeaderSection.tsx
// Tailwind v4 — dùng inline style cho màu custom, class Tailwind cho layout

const TECH = [
  { label: 'AI', sub: 'Art Assistant\n(5A)', bg: '#1565C0' },
  { label: '3D', sub: 'Mô hình 3D\ntương tác', bg: '#6A1B9A' },
  { label: 'AR', sub: 'Thực tế\ntăng cường', bg: '#2E7D32' },
  { label: '🌐', sub: 'Website/\nỨng dụng web', bg: '#E65100' },
]

const JOURNEY = [
  { icon: '🏛️', label: 'Khám phá\ndi sản' },
  { icon: '🔍', label: 'Quan sát &\nPhân tích' },
  { icon: '🤖', label: 'AI gợi ý\ný tưởng (5A)' },
  { icon: '🎨', label: 'Sáng tạo\n& thực hành' },
  { icon: '📱', label: 'Triển lãm\nAR' },
  { icon: '⭐', label: 'Đánh giá\n& phản tư', gold: true },
]

export default function HeaderSection() {
  return (
    <header
      className="w-full border-b"
      style={{ background: '#EEF4FB', borderColor: '#dde8f5' }}
    >
      <div className="max-w-screen-xl mx-auto px-4 py-4 grid gap-4"
        style={{ gridTemplateColumns: 'auto 1fr auto auto', alignItems: 'start' }}
      >

        {/* CỘT 1 — Logo */}
        <div className="flex flex-col items-center gap-1 min-w-[88px]">
          <div
            className="w-20 h-20 rounded-xl flex items-center justify-center text-4xl shadow"
            style={{ background: 'linear-gradient(135deg,#8B1A1A,#c0392b)' }}
          >
            🏛️
          </div>
          <span className="text-center font-black text-xs leading-tight"
            style={{ color: '#8B1A1A' }}>
            SMART ART<br />HERITAGE
          </span>
        </div>

        {/* CỘT 2 — Tiêu đề + tagline + mô tả */}
        <div className="flex flex-col justify-center gap-1 pl-2">
          <h1 className="font-black text-2xl md:text-3xl leading-tight"
            style={{ color: '#8B1A1A' }}>
            SMART ART HERITAGE V1.0
          </h1>
          <p className="font-semibold text-xs md:text-sm tracking-widest uppercase"
            style={{ color: '#F5A623' }}>
            KHÁM PHÁ DI SẢN – HỌC MĨ THUẬT – SÁNG TẠO TƯƠNG LAI
          </p>
          <p className="text-xs leading-relaxed mt-1 max-w-sm"
            style={{ color: '#555' }}>
            Nền tảng giáo dục Mĩ thuật tích hợp Công nghệ số (AI – 3D – AR)
            giúp học sinh khám phá di sản văn hóa Hưng Yên,
            từ đó sáng tạo tác phẩm Mĩ thuật mang bản sắc riêng.
          </p>
        </div>

        {/* CỘT 3 — Công nghệ tích hợp */}
        <div className="flex flex-col gap-2 min-w-[160px]">
          <p className="text-xs font-bold uppercase tracking-wider"
            style={{ color: '#333' }}>
            Công nghệ tích hợp
          </p>
          <div className="flex gap-2">
            {TECH.map(t => (
              <div key={t.label} className="flex flex-col items-center gap-1">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center text-white font-black text-sm shadow"
                  style={{ background: t.bg }}
                >
                  {t.label}
                </div>
                <span className="text-center whitespace-pre-line leading-tight"
                  style={{ fontSize: 8, color: '#444' }}>
                  {t.sub}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CỘT 4 — Hành trình học tập */}
        <div className="flex flex-col gap-2 min-w-[260px]">
          <p className="text-xs font-bold uppercase tracking-wider"
            style={{ color: '#333' }}>
            Hành trình học tập của học sinh
          </p>
          <div className="flex items-start gap-1">
            {JOURNEY.map((s, i) => (
              <div key={s.label} className="flex items-center gap-1">
                <div className="flex flex-col items-center gap-0.5">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-base shadow-sm"
                    style={{
                      background: s.gold ? '#F5A623' : '#1565C0',
                      color: 'white',
                    }}
                  >
                    {s.icon}
                  </div>
                  <span className="text-center whitespace-pre-line leading-tight"
                    style={{ fontSize: 7, color: '#555', maxWidth: 36 }}>
                    {s.label}
                  </span>
                </div>
                {i < JOURNEY.length - 1 && (
                  <span style={{ color: '#999', fontSize: 10, marginTop: -8 }}>→</span>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Mobile: 4 khối xếp dọc — override bằng CSS */}
      <style>{`
        @media (max-width: 767px) {
          header > div { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </header>
  )
}
