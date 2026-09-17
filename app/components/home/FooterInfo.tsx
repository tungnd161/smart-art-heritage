// app/components/home/FooterInfo.tsx
// Server Component — gọi qrcode trực tiếp, không cần API route

import QRCode from 'qrcode'

const SITE_URL = 'https://smart-art-heritage.vercel.app/'

const CHUC_NANG = [
  '🔍 Khám phá di sản qua hình ảnh, 3D, câu hỏi tương tác',
  '🤖 AI 5A gợi ý ý tưởng, phân tích và hỗ trợ sáng tạo',
  '💾 Lưu trữ quá trình sáng tác và tác phẩm của học sinh',
  '📱 Triển lãm AR – chia sẻ và lan tỏa sản phẩm',
  '📊 Đánh giá – phản tư – theo dõi tiến bộ',
]

const GIA_TRI = [
  'Gắn kết học Mĩ thuật với di sản địa phương',
  'Phát triển năng lực thẩm mĩ và sáng tạo của học sinh',
  'Ứng dụng công nghệ số một cách hiệu quả',
  'Lan tỏa giá trị văn hóa – giáo dục cộng đồng',
]

const DI_SAN_ICONS: Record<string, string> = {
  'Phố Hiến': '🏘️',
  'Chùa Keo': '⛩️',
  'Đền Trần': '🏯',
  'Văn Miếu Xích Đằng': '📚',
  'Làng tranh Đông Hồ': '🎨',
}

interface DiSan {
  id: string
  ten: string
  cum_di_san?: string
}

interface FooterInfoProps {
  diSan: DiSan[]
}

export default async function FooterInfo({ diSan }: FooterInfoProps) {
  // Tạo QR SVG server-side từ URL cố định
  let qrSvg = ''
  try {
    qrSvg = await QRCode.toString(SITE_URL, {
      type: 'svg',
      width: 100,
      margin: 1,
      color: { dark: '#8B1A1A', light: '#ffffff' },
    })
  } catch {
    qrSvg = '<svg viewBox="0 0 100 100"><rect width="100" height="100" fill="#f3f4f6"/><text x="50" y="55" text-anchor="middle" font-size="10" fill="#888">QR</text></svg>'
  }

  return (
    <footer className="border-t py-6 px-4" style={{ background: '#fff', borderColor: '#e5e7eb' }}>
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-6">

        {/* Cột 1 — 5 Di sản */}
        <div className="xl:col-span-1">
          <h3 className="font-bold text-xs uppercase tracking-wider mb-3"
            style={{ color: '#8B1A1A' }}>
            5 Khu Di Sản trong Dự án
          </h3>
          <div className="flex flex-wrap gap-3">
            {diSan.map((ds, i) => {
              const icon = DI_SAN_ICONS[ds.ten] ?? '🏛️'
              return (
                <a key={ds.id} href={`/di-san/${ds.id}`}
                  className="flex flex-col items-center gap-1 group">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center text-2xl border-2 transition-transform group-hover:scale-105"
                    style={{ borderColor: '#8B1A1A', background: '#fef2f2' }}
                  >
                    {icon}
                  </div>
                  <span className="text-center leading-tight"
                    style={{ fontSize: 9, color: '#555', maxWidth: 56 }}>
                    {ds.ten}
                  </span>
                </a>
              )
            })}
          </div>
        </div>

        {/* Cột 2 — Chức năng chính */}
        <div className="xl:col-span-1">
          <h3 className="font-bold text-xs uppercase tracking-wider mb-3"
            style={{ color: '#333' }}>
            Chức năng chính
          </h3>
          <ul className="flex flex-col gap-1.5">
            {CHUC_NANG.map(f => (
              <li key={f} className="flex items-start gap-1">
                <span style={{ fontSize: 10, color: '#555', lineHeight: '1.5' }}>{f}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Cột 3 — Thiết bị hỗ trợ */}
        <div className="xl:col-span-1">
          <h3 className="font-bold text-xs uppercase tracking-wider mb-3"
            style={{ color: '#333' }}>
            Thiết bị hỗ trợ
          </h3>
          <div className="flex gap-4 mb-3">
            {[{ icon: '💻', label: 'Máy tính' }, { icon: '📱', label: 'Máy tính bảng' }, { icon: '📱', label: 'Điện thoại' }].map(d => (
              <div key={d.label} className="flex flex-col items-center gap-1">
                <span className="text-2xl">{d.icon}</span>
                <span style={{ fontSize: 9, color: '#555' }}>{d.label}</span>
              </div>
            ))}
          </div>
          <div className="rounded-lg p-2" style={{ background: '#fef2f2' }}>
            <p className="font-semibold" style={{ fontSize: 10, color: '#8B1A1A' }}>
              Truy cập mọi lúc – mọi nơi
            </p>
            <p style={{ fontSize: 9, color: '#c0392b' }}>Chỉ cần có Internet</p>
          </div>
        </div>

        {/* Cột 4 — Giá trị mang lại */}
        <div className="xl:col-span-1">
          <h3 className="font-bold text-xs uppercase tracking-wider mb-3"
            style={{ color: '#333' }}>
            Giá trị mang lại
          </h3>
          <ul className="flex flex-col gap-2">
            {GIA_TRI.map(v => (
              <li key={v} className="flex items-start gap-1.5">
                <span className="font-bold mt-0.5 flex-shrink-0" style={{ color: '#2E7D32', fontSize: 12 }}>✓</span>
                <span style={{ fontSize: 10, color: '#555' }}>{v}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Cột 5 — Trải nghiệm ngay + QR */}
        <div className="xl:col-span-1 flex flex-col items-center gap-2">
          <h3 className="font-bold text-xs uppercase tracking-wider self-start"
            style={{ color: '#333' }}>
            Trải nghiệm ngay
          </h3>
          {/* QR SVG tạo server-side từ URL cố định */}
          <div
            className="rounded-xl overflow-hidden p-2 border"
            style={{ background: '#fff', borderColor: '#e5e7eb' }}
            dangerouslySetInnerHTML={{ __html: qrSvg }}
          />
          <p className="text-center font-semibold" style={{ fontSize: 9, color: '#8B1A1A' }}>
            Quét QR để vào<br />SMART ART HERITAGE
          </p>
          <a href={SITE_URL}
            className="text-center break-all"
            style={{ fontSize: 8, color: '#888' }}>
            {SITE_URL}
          </a>
        </div>

      </div>
    </footer>
  )
}
