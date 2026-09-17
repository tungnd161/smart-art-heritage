// app/page.tsx
// Giữ nguyên: logic fetch Supabase, route hiện có, biến môi trường
// Thay: UI layout theo brief SMART ART HERITAGE V1.0

import { createClient } from '@supabase/supabase-js'
import Link from 'next/link'
import HeaderSection from './components/home/HeaderSection'
import SystemDiagram from './components/home/SystemDiagram'
import ModuleRow from './components/home/ModuleRow'
import FooterInfo from './components/home/FooterInfo'

// Khởi tạo Supabase client — giữ nguyên, không thay đổi
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export default async function Home() {
  // Fetch dữ liệu di sản thật từ Supabase — giữ nguyên
  const { data: diSan } = await supabase.from('di_san').select('*')
  const diSanList = diSan ?? []

  return (
    <main className="min-h-screen bg-white">

      {/* A. Header 4 cột */}
      <HeaderSection />

      {/* B. System Diagram — 6 module + 6 preview card */}
      <SystemDiagram />

      {/* C. Module Row — card 7/8/9/Dashboard */}
      <ModuleRow />

      {/* D. Section di sản thật — id="di-san" để CTA anchor đúng */}
      <section id="di-san" className="py-8 px-4" style={{ background: '#EEF4FB' }}>
        <div className="max-w-screen-xl mx-auto">
          <div className="flex items-center justify-between mb-5">
            <div className="pb-1 border-b-2" style={{ borderColor: '#8B1A1A' }}>
              <h2 className="font-black text-sm uppercase tracking-widest"
                style={{ color: '#8B1A1A' }}>
                Kho Di Sản Hưng Yên
              </h2>
            </div>
            <Link href="/ban-do"
              className="text-sm font-medium hover:underline"
              style={{ color: '#8B1A1A' }}>
              Xem trên bản đồ →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {diSanList.map((ds) => (
              <Link
                key={ds.id}
                href={`/di-san/${ds.id}`}
                className="group bg-white rounded-xl overflow-hidden transition-shadow hover:shadow-md"
                style={{ border: '1px solid #dde8f5', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}
              >
                {/* Ảnh placeholder — dùng CSS/SVG nội bộ */}
                <div
                  className="h-36 flex items-center justify-center relative"
                  style={{ background: 'linear-gradient(135deg,#8B1A1A,#c0392b)' }}
                >
                  <span className="text-5xl opacity-70">🏛️</span>
                  <div
                    className="absolute top-2 left-2 rounded-full px-2 py-0.5 text-white"
                    style={{ background: 'rgba(0,0,0,0.3)', fontSize: 9 }}
                  >
                    {ds.cum_di_san}
                  </div>
                </div>

                {/* Body */}
                <div className="p-4">
                  <h3 className="font-bold text-base mb-1 group-hover:underline"
                    style={{ color: '#8B1A1A' }}>
                    {ds.ten}
                  </h3>
                  <p className="text-sm mb-3 line-clamp-2" style={{ color: '#666' }}>
                    {ds.mo_ta}
                  </p>
                  <div className="rounded-lg p-2"
                    style={{ background: '#FFF8E1', border: '1px solid #ffe082' }}>
                    <p className="font-semibold mb-0.5" style={{ fontSize: 10, color: '#F5A623' }}>
                      🎨 Hướng khai thác Mĩ thuật:
                    </p>
                    <p style={{ fontSize: 10, color: '#555' }}>{ds.huong_khai_thac}</p>
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <span
                      className="rounded-full px-2 py-0.5"
                      style={{ background: '#fef2f2', color: '#8B1A1A', fontSize: 10 }}>
                      {ds.cum_di_san}
                    </span>
                    <span style={{ fontSize: 10, color: '#8B1A1A' }}>
                      Khám phá →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="mt-6 flex gap-3 flex-wrap">
            <Link href="/ban-do"
              className="px-5 py-2.5 rounded-lg text-white font-semibold text-sm transition-opacity hover:opacity-90"
              style={{ background: '#8B1A1A' }}>
              🗺️ Xem Bản đồ Di sản
            </Link>
            <Link href="/ai-assistant"
              className="px-5 py-2.5 rounded-lg font-semibold text-sm transition-opacity hover:opacity-90"
              style={{ background: '#FFF8E1', color: '#8B1A1A', border: '1.5px solid #F5A623' }}>
              🤖 Hỏi AI Art Assistant
            </Link>
          </div>
        </div>
      </section>

      {/* E. Footer Info — 5 cột, nhận data di sản thật */}
      <FooterInfo diSan={diSanList} />

    </main>
  )
}
