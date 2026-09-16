import { createClient } from "@supabase/supabase-js"
import Link from "next/link"

export const dynamic = 'force-dynamic'

export default async function Home() {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
  const { data: diSan } = await supabase.from("di_san").select("*")
  return (
    <main className="min-h-screen bg-stone-50">
      <header className="bg-red-800 text-white">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="text-3xl">🏛</div>
            <div>
              <h1 className="text-xl font-bold">SMART ART HERITAGE</h1>
              <p className="text-amber-300 text-xs">Khám phá Di sản – Học Mĩ thuật – Sáng tạo Tương lai</p>
            </div>
          </div>
          <nav className="flex items-center gap-4">
            <Link href="/ban-do" className="text-amber-200 text-sm hover:text-white">Bản đồ</Link>
            <Link href="/ai-assistant" className="bg-amber-500 text-white px-4 py-2 rounded-lg text-sm font-medium">AI Assistant</Link>
          </nav>
        </div>
      </header>

      <section className="bg-gradient-to-br from-red-900 via-red-800 to-amber-800 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-amber-300 text-sm font-medium mb-3">NỀN TẢNG GIÁO DỤC MĨ THUẬT SỐ</p>
            <h2 className="text-4xl font-bold leading-tight mb-4">Khám phá Di sản<br/><span className="text-amber-300">Hưng Yên</span> qua Mĩ thuật</h2>
            <p className="text-red-200 mb-8">Tích hợp AI – 3D – AR giúp học sinh khám phá 5 khu di sản văn hóa Hưng Yên, từ đó sáng tạo tác phẩm Mĩ thuật mang bản sắc riêng.</p>
            <div className="flex gap-4">
              <Link href="#kho-di-san" className="bg-amber-500 text-white px-6 py-3 rounded-xl font-semibold">Bắt đầu Khám phá</Link>
              <Link href="/ai-assistant" className="border-2 border-amber-300 text-amber-300 px-6 py-3 rounded-xl font-semibold">Hỏi AI Assistant</Link>
            </div>
          </div>
          <div className="bg-white/10 rounded-2xl p-6 border border-white/20">
            <p className="text-amber-300 text-xs font-medium mb-4">HÀNH TRÌNH HỌC TẬP CỦA HỌC SINH</p>
            {[
              {n:"1", l:"Khám phá di sản", d:"Xem hồ sơ, ảnh, thông tin"},
              {n:"2", l:"Quan sát & Phân tích", d:"Đặc điểm Mĩ thuật nổi bật"},
              {n:"3", l:"AI gợi ý ý tưởng", d:"Quy trình 5A SMART ART"},
              {n:"4", l:"Sáng tạo & Thực hành", d:"Xưởng sáng tạo cá nhân"},
              {n:"5", l:"Triển lãm & Đánh giá", d:"Chia sẻ và phản tư"},
            ].map((item,i) => (
              <div key={i} className="flex items-center gap-3 mb-3">
                <div className="w-7 h-7 bg-amber-500 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">{item.n}</div>
                <div><p className="text-white text-sm font-medium">{item.l}</p><p className="text-red-200 text-xs">{item.d}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 bg-white border-b">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-center text-stone-400 text-xs mb-6">CÔNG NGHỆ TÍCH HỢP</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {icon:"🤖", l:"AI Art Assistant", s:"Quy trình 5A", c:"bg-red-50 border-red-200"},
              {icon:"🗺️", l:"Bản đồ tương tác", s:"5 khu di sản", c:"bg-amber-50 border-amber-200"},
              {icon:"📱", l:"AR Gallery", s:"Triển lãm thực tế ảo", c:"bg-green-50 border-green-200"},
              {icon:"🎨", l:"Xưởng Sáng tạo", s:"Lưu phác thảo", c:"bg-blue-50 border-blue-200"},
            ].map((item,i) => (
              <div key={i} className={`${item.c} border rounded-xl p-4 text-center`}>
                <div className="text-3xl mb-2">{item.icon}</div>
                <p className="font-semibold text-stone-800 text-sm">{item.l}</p>
                <p className="text-stone-500 text-xs mt-1">{item.s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="kho-di-san" className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="text-red-600 text-xs font-medium mb-1">5 KHU DI SẢN</p>
              <h2 className="text-2xl font-bold text-stone-800">Kho Di Sản Hưng Yên</h2>
            </div>
            <Link href="/ban-do" className="text-sm text-red-700 border border-red-200 px-4 py-2 rounded-lg hover:bg-red-50">Xem trên Bản đồ →</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {diSan?.map((ds, i) => (
              <Link key={ds.id} href={"/di-san/" + ds.id} className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-200 hover:shadow-md hover:-translate-y-1 transition-all">
                <div className="relative h-44 overflow-hidden">
                  {ds.hinh_anh_url ? (
                    <img src={ds.hinh_anh_url} alt={ds.ten} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"/>
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-red-700 to-amber-600 flex items-center justify-center">
                      <span className="text-5xl">🏛</span>
                    </div>
                  )}
                  <div className="absolute top-3 left-3">
                    <span className="bg-white/90 text-red-700 text-xs font-bold px-2 py-1 rounded-full">{String(i+1).padStart(2,'0')}</span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-3">
                    <span className="text-white text-xs bg-red-700/80 px-2 py-0.5 rounded-full">{ds.cum_di_san}</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-base text-stone-800 mb-1 group-hover:text-red-700 transition">{ds.ten}</h3>
                  <p className="text-stone-500 text-sm line-clamp-2 mb-3">{ds.mo_ta}</p>
                  {ds.huong_khai_thac && (
                    <div className="bg-amber-50 rounded-lg p-3 mb-3">
                      <p className="text-xs text-amber-700 font-medium mb-1">Hướng khai thác Mĩ thuật</p>
                      <p className="text-xs text-stone-600 line-clamp-2">{ds.huong_khai_thac}</p>
                    </div>
                  )}
                  <p className="text-right text-red-600 text-sm font-medium group-hover:translate-x-1 transition-transform">Xem chi tiết →</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-6 bg-gradient-to-r from-red-800 to-amber-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-amber-300 text-xs font-medium mb-3">AI ART ASSISTANT – QUY TRÌNH 5A</p>
          <h2 className="text-3xl font-bold mb-4">Gặp gỡ AI Art Assistant</h2>
          <p className="text-red-200 mb-6 max-w-2xl mx-auto">Quy trình Ask – Analyze – Advise – Adapt – Art giúp học sinh phát triển ý tưởng sáng tạo từ di sản văn hóa.</p>
          <div className="flex gap-2 justify-center flex-wrap mb-8">
            {["ASK – Đặt câu hỏi","ANALYZE – Phân tích","ADVISE – Gợi ý","ADAPT – Điều chỉnh","ART – Tạo ý tưởng"].map((s,i) => (
              <span key={i} className="bg-white/20 text-white text-xs px-3 py-1.5 rounded-full border border-white/30">{s}</span>
            ))}
          </div>
          <Link href="/ai-assistant" className="inline-block bg-white text-red-800 px-8 py-3 rounded-xl font-bold hover:bg-amber-100 transition">Bắt đầu với AI Assistant →</Link>
        </div>
      </section>

      <footer className="bg-stone-800 text-stone-400 py-8 px-6 text-center text-sm">
        <p className="text-white font-semibold mb-1">SMART ART HERITAGE V1.0</p>
        <p>Đề tài NCKH Mĩ thuật cấp tỉnh 2026–2027 | Hưng Yên</p>
        <div className="flex justify-center gap-6 mt-4">
          <Link href="/" className="hover:text-white">Trang chủ</Link>
          <Link href="/ban-do" className="hover:text-white">Bản đồ</Link>
          <Link href="/ai-assistant" className="hover:text-white">AI Assistant</Link>
        </div>
      </footer>
    </main>
  )
}