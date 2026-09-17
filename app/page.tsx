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
    <main className="min-h-screen bg-stone-50 font-sans">

      {/* HEADER */}
      <header className="bg-red-800 text-white sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="text-2xl">🏛</div>
            <div>
              <h1 className="text-lg font-bold leading-tight">SMART ART HERITAGE</h1>
              <p className="text-amber-300 text-xs">Khám phá Di sản – Học Mĩ thuật – Sáng tạo Tương lai</p>
            </div>
          </div>
          <nav className="flex items-center gap-3 text-sm">
            <Link href="#kho-di-san" className="text-amber-200 hover:text-white transition px-2 py-1">Di sản</Link>
            <Link href="/ban-do" className="text-amber-200 hover:text-white transition px-2 py-1">Bản đồ</Link>
            <Link href="#xuong" className="text-amber-200 hover:text-white transition px-2 py-1">Xưởng ST</Link>
            <Link href="/ai-assistant" className="bg-amber-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-amber-400 transition">AI Assistant</Link>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="bg-gradient-to-br from-red-900 via-red-800 to-amber-800 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-amber-300 text-xs font-medium mb-3 tracking-widest">NỀN TẢNG GIÁO DỤC MĨ THUẬT SỐ</p>
            <h2 className="text-5xl font-bold leading-tight mb-4">
              Khám phá Di sản<br/>
              <span className="text-amber-300">Hưng Yên</span><br/>
              qua Mĩ thuật
            </h2>
            <p className="text-red-200 text-base leading-relaxed mb-8 max-w-md">
              Tích hợp AI – 3D – AR giúp học sinh khám phá 5 khu di sản văn hóa Hưng Yên, từ đó sáng tạo tác phẩm Mĩ thuật mang bản sắc riêng.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link href="#kho-di-san" className="bg-amber-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-amber-400 transition shadow-lg">
                Bắt đầu Khám phá
              </Link>
              <Link href="/ai-assistant" className="border-2 border-amber-300 text-amber-300 px-6 py-3 rounded-xl font-semibold hover:bg-white/10 transition">
                Hỏi AI Assistant
              </Link>
            </div>
            <div className="mt-8 flex gap-6">
              <div className="text-center"><p className="text-2xl font-bold text-amber-300">5</p><p className="text-xs text-red-200">Khu di sản</p></div>
              <div className="text-center"><p className="text-2xl font-bold text-amber-300">5A</p><p className="text-xs text-red-200">Quy trình AI</p></div>
              <div className="text-center"><p className="text-2xl font-bold text-amber-300">3</p><p className="text-xs text-red-200">Công nghệ</p></div>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20">
            <p className="text-amber-300 text-xs font-medium mb-5 tracking-widest">HÀNH TRÌNH HỌC TẬP CỦA HỌC SINH</p>
            <div className="space-y-4">
              {[
                {n:"1",icon:"🔍",l:"Khám phá di sản",d:"Xem hồ sơ, ảnh, thông tin chi tiết"},
                {n:"2",icon:"🔬",l:"Quan sát & Phân tích",d:"Đặc điểm Mĩ thuật nổi bật"},
                {n:"3",icon:"🤖",l:"AI gợi ý ý tưởng",d:"Quy trình 5A SMART ART"},
                {n:"4",icon:"🎨",l:"Sáng tạo & Thực hành",d:"Xưởng sáng tạo cá nhân"},
                {n:"5",icon:"🏆",l:"Triển lãm & Đánh giá",d:"AR Gallery + Phản tư"},
              ].map((item,i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">{item.n}</div>
                  <div className="flex-1">
                    <p className="text-white text-sm font-medium">{item.l}</p>
                    <p className="text-red-200 text-xs">{item.d}</p>
                  </div>
                  <span className="text-xl">{item.icon}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CÔNG NGHỆ TÍCH HỢP */}
      <section className="py-10 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-stone-400 text-xs tracking-widest mb-6">CÔNG NGHỆ TÍCH HỢP</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {icon:"🤖",l:"AI Art Assistant",s:"Quy trình 5A",c:"bg-red-50 border-red-200 text-red-700"},
              {icon:"🗺️",l:"Bản đồ tương tác",s:"5 khu di sản",c:"bg-amber-50 border-amber-200 text-amber-700"},
              {icon:"📱",l:"AR Gallery",s:"Triển lãm thực tế ảo",c:"bg-green-50 border-green-200 text-green-700"},
              {icon:"🎨",l:"Xưởng Sáng tạo",s:"Lưu & chia sẻ",c:"bg-blue-50 border-blue-200 text-blue-700"},
            ].map((item,i) => (
              <div key={i} className={`${item.c} border-2 rounded-2xl p-5 text-center hover:shadow-md transition`}>
                <div className="text-4xl mb-3">{item.icon}</div>
                <p className="font-bold text-stone-800 text-sm">{item.l}</p>
                <p className="text-stone-500 text-xs mt-1">{item.s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SƠ ĐỒ HỆ THỐNG */}
      <section className="py-10 bg-stone-100 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center font-bold text-stone-600 text-xs tracking-widest mb-6">SƠ ĐỒ HỆ THỐNG TỔNG THỂ</p>
          <div className="flex flex-wrap justify-center gap-2 items-center">
            {[
              {n:"1",l:"Trang chủ",href:"/",color:"bg-red-700"},
              {n:"2",l:"Bản đồ Di sản",href:"/ban-do",color:"bg-orange-600"},
              {n:"3",l:"5 Khu Di Sản",href:"#kho-di-san",color:"bg-amber-600"},
              {n:"4",l:"Hồ sơ Khám phá",href:"#kho-di-san",color:"bg-yellow-600"},
              {n:"5",l:"Phòng 3D",href:"#",color:"bg-green-600"},
              {n:"6",l:"AI Art Assistant",href:"/ai-assistant",color:"bg-blue-600"},
            ].map((item,i) => (
              <div key={i} className="flex items-center gap-2">
                <Link href={item.href} className="flex items-center gap-2 bg-white border-2 border-stone-200 rounded-xl px-4 py-2 hover:shadow-md transition group">
                  <span className={`w-6 h-6 ${item.color} text-white rounded-full text-xs flex items-center justify-center font-bold`}>{item.n}</span>
                  <span className="text-sm font-medium text-stone-700 group-hover:text-red-700">{item.l}</span>
                </Link>
                {i < 5 && <span className="text-red-400 font-bold text-lg">→</span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KHO DI SẢN */}
      <section id="kho-di-san" className="py-14 px-6 bg-stone-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="text-red-600 text-xs font-medium tracking-widest mb-1">MODULE 3</p>
              <h2 className="text-3xl font-bold text-stone-800">5 Khu Di Sản Hưng Yên</h2>
              <p className="text-stone-500 text-sm mt-1">Click vào di sản để xem hồ sơ đầy đủ và nhiệm vụ sáng tạo</p>
            </div>
            <Link href="/ban-do" className="text-sm text-red-700 border-2 border-red-200 px-4 py-2 rounded-xl hover:bg-red-50 transition font-medium">
              Xem trên Bản đồ →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {diSan?.map((ds, i) => (
              <Link key={ds.id} href={"/di-san/" + ds.id} className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  {ds.hinh_anh_url ? (
                    <img src={ds.hinh_anh_url} alt={ds.ten} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/>
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-red-700 to-amber-600 flex items-center justify-center">
                      <span className="text-6xl">🏛</span>
                    </div>
                  )}
                  <div className="absolute top-3 left-3">
                    <span className="bg-white/95 text-red-700 text-xs font-bold px-2.5 py-1 rounded-full shadow">
                      {String(i+1).padStart(2,'0')}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                    <span className="text-white text-xs bg-red-700/90 px-2 py-1 rounded-full">{ds.cum_di_san}</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-lg text-stone-800 mb-2 group-hover:text-red-700 transition">{ds.ten}</h3>
                  <p className="text-stone-500 text-sm line-clamp-2 mb-3">{ds.mo_ta}</p>
                  {ds.huong_khai_thac && (
                    <div className="bg-amber-50 rounded-lg p-3 mb-3 border border-amber-100">
                      <p className="text-xs text-amber-700 font-semibold mb-1">Hướng khai thác Mĩ thuật</p>
                      <p className="text-xs text-stone-600 line-clamp-2">{ds.huong_khai_thac}</p>
                    </div>
                  )}
                  {ds.nhiem_vu && (
                    <div className="bg-red-50 rounded-lg p-3 mb-3 border border-red-100">
                      <p className="text-xs text-red-700 font-semibold mb-1">Nhiệm vụ sáng tạo</p>
                      <p className="text-xs text-stone-600 line-clamp-2">{ds.nhiem_vu}</p>
                    </div>
                  )}
                  <div className="flex items-center justify-between pt-2 border-t border-stone-100">
                    <span className="text-xs text-stone-400">Xem hồ sơ đầy đủ</span>
                    <span className="text-red-600 font-bold group-hover:translate-x-2 transition-transform">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* AI ASSISTANT */}
      <section className="py-14 px-6 bg-gradient-to-r from-red-800 to-amber-700 text-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-amber-300 text-xs font-medium tracking-widest mb-3">MODULE 6 — AI ART ASSISTANT</p>
            <h2 className="text-4xl font-bold mb-4">Quy trình 5A<br/>SMART ART</h2>
            <p className="text-red-200 mb-6">AI gợi mở, không làm thay — giúp học sinh tự phát triển ý tưởng sáng tạo từ di sản văn hóa.</p>
            <Link href="/ai-assistant" className="inline-block bg-white text-red-800 px-8 py-3 rounded-xl font-bold hover:bg-amber-100 transition shadow-lg">
              Trò chuyện với AI ngay →
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-3">
            {[
              {a:"A",l:"ASK",d:"Đặt câu hỏi về di sản bạn quan tâm"},
              {a:"A",l:"ANALYZE",d:"Phân tích đặc điểm Mĩ thuật nổi bật"},
              {a:"A",l:"ADVISE",d:"AI gợi ý hướng sáng tạo phù hợp"},
              {a:"A",l:"ADAPT",d:"Điều chỉnh ý tưởng theo phong cách riêng"},
              {a:"A",l:"ART",d:"Tạo ra tác phẩm Mĩ thuật độc đáo"},
            ].map((item,i) => (
              <div key={i} className="flex items-center gap-4 bg-white/15 rounded-xl px-4 py-3 border border-white/20">
                <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">{item.a}</div>
                <div>
                  <p className="text-amber-300 text-xs font-bold">{item.l}</p>
                  <p className="text-white text-sm">{item.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* XƯỞNG SÁNG TẠO */}
      <section id="xuong" className="py-14 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="text-pink-600 text-xs font-medium tracking-widest mb-1">MODULE 7</p>
              <h2 className="text-3xl font-bold text-stone-800">Xưởng Sáng tạo</h2>
              <p className="text-stone-500 text-sm mt-1">Lưu quá trình sáng tạo từ ý tưởng đến tác phẩm hoàn thiện</p>
            </div>
            <span className="bg-pink-100 text-pink-700 text-xs font-bold px-3 py-1.5 rounded-full border border-pink-200">Sắp ra mắt</span>
          </div>
          <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-8 border-2 border-dashed border-pink-200">
            <div className="flex gap-4 items-center mb-8 overflow-x-auto pb-2">
              {["Ý tưởng","Phác thảo 1","Phác thảo 2","Phác thảo 3","Phương án chọn","Tác phẩm hoàn thiện"].map((step,i) => (
                <div key={i} className="flex items-center gap-2 flex-shrink-0">
                  <div className="bg-white border-2 border-pink-300 rounded-xl px-4 py-2 text-center min-w-24">
                    <p className="text-pink-700 text-xs font-medium">{step}</p>
                  </div>
                  {i < 5 && <span className="text-pink-300 font-bold">→</span>}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {["Ghi ý tưởng 💡","Tải ảnh lên 📷","Ghi chú 📝","Nhận xét AI 🤖"].map((item,i) => (
                <div key={i} className="bg-white rounded-xl p-4 text-center border border-pink-100 shadow-sm">
                  <p className="text-stone-600 text-sm">{item}</p>
                </div>
              ))}
            </div>
            <div className="flex gap-3 flex-wrap">
              {["💾 Lưu","⬇️ Tải xuống","📤 Chia sẻ","📄 Xuất PDF"].map((btn,i) => (
                <button key={i} className="bg-pink-600 text-white px-5 py-2 rounded-xl text-sm font-medium opacity-60 cursor-not-allowed">{btn}</button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AR GALLERY */}
      <section className="py-14 px-6 bg-stone-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="text-green-600 text-xs font-medium tracking-widest mb-1">MODULE 8</p>
              <h2 className="text-3xl font-bold text-stone-800">AR Gallery — Triển lãm Thực tế Tăng cường</h2>
              <p className="text-stone-500 text-sm mt-1">Quét QR để xem tác phẩm học sinh trong không gian thực tế ảo</p>
            </div>
            <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1.5 rounded-full border border-green-200">Sắp ra mắt</span>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm">
              <h3 className="font-bold text-stone-700 mb-4">Danh sách tác phẩm</h3>
              <div className="space-y-3">
                {[
                  {title:"Sắc mái Chùa Keo",author:"Nguyễn An – 7A1"},
                  {title:"Hoa văn Phố Hiến",author:"Trần Minh – 7A2"},
                  {title:"Dấu ấn Lê Quý Đôn",author:"Phạm Hòa – 8A1"},
                  {title:"Chạm bạc Đồng Xâm",author:"Lê Long – 8A3"},
                ].map((item,i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-stone-50 rounded-xl border border-stone-100">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-teal-500 rounded-lg flex-shrink-0"></div>
                    <div>
                      <p className="text-sm font-medium text-stone-800">{item.title}</p>
                      <p className="text-xs text-stone-500">{item.author}</p>
                    </div>
                    <span className="ml-auto text-green-600 text-xs font-medium">AR</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm flex flex-col items-center justify-center text-center">
              <div className="w-40 h-40 bg-stone-100 rounded-2xl flex items-center justify-center mb-4 border-2 border-dashed border-stone-300">
                <div className="text-center">
                  <p className="text-4xl mb-2">📱</p>
                  <p className="text-xs text-stone-400">QR Code</p>
                </div>
              </div>
              <p className="text-stone-600 font-medium">Quét QR để xem AR</p>
              <p className="text-stone-400 text-sm mt-1">Hoặc mở bằng camera</p>
            </div>
          </div>
        </div>
      </section>

      {/* ĐÁNH GIÁ & DASHBOARD */}
      <section className="py-14 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Đánh giá & Phản tư */}
          <div>
            <p className="text-blue-600 text-xs font-medium tracking-widest mb-1">MODULE 9</p>
            <h2 className="text-2xl font-bold text-stone-800 mb-2">Đánh giá & Phản tư</h2>
            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-white rounded-xl p-4 border border-blue-100">
                  <p className="text-xs text-stone-500 mb-1">Học sinh</p>
                  <div className="space-y-2">
                    {["Tự đánh giá","Phản tư","Khảo sát sau học tập"].map((item,i) => (
                      <div key={i} className="flex items-center gap-2"><span className="w-2 h-2 bg-blue-400 rounded-full"></span><p className="text-xs text-stone-600">{item}</p></div>
                    ))}
                  </div>
                </div>
                <div className="bg-white rounded-xl p-4 border border-blue-100">
                  <p className="text-xs text-stone-500 mb-1">Giáo viên</p>
                  <div className="space-y-2">
                    {["Rubric đánh giá","Nhận xét","Thống kê kết quả"].map((item,i) => (
                      <div key={i} className="flex items-center gap-2"><span className="w-2 h-2 bg-red-400 rounded-full"></span><p className="text-xs text-stone-600">{item}</p></div>
                    ))}
                  </div>
                </div>
              </div>
              <span className="bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full">Sắp ra mắt</span>
            </div>
          </div>

          {/* Dashboard Giáo viên */}
          <div>
            <p className="text-purple-600 text-xs font-medium tracking-widest mb-1">DASHBOARD GIÁO VIÊN</p>
            <h2 className="text-2xl font-bold text-stone-800 mb-2">Theo dõi & Quản lý</h2>
            <div className="bg-stone-800 rounded-2xl p-6 text-white">
              <div className="grid grid-cols-3 gap-3 mb-4">
                {[{n:"128",l:"Tổng học sinh"},{n:"86%",l:"Đã hoàn thành"},{n:"245",l:"Tác phẩm"}].map((item,i) => (
                  <div key={i} className="bg-white/10 rounded-xl p-3 text-center">
                    <p className="text-2xl font-bold text-amber-300">{item.n}</p>
                    <p className="text-xs text-stone-400 mt-1">{item.l}</p>
                  </div>
                ))}
              </div>
              <div className="space-y-2">
                {["Quản lý lớp học","Kết quả học tập","Thống kê & Báo cáo","Xuất dữ liệu"].map((item,i) => (
                  <div key={i} className="flex items-center justify-between bg-white/5 rounded-lg px-3 py-2">
                    <p className="text-sm text-stone-300">{item}</p>
                    <span className="text-stone-500 text-xs">Sắp ra mắt</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-stone-900 text-stone-400 py-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold text-lg mb-2">SMART ART HERITAGE V1.0</h3>
              <p className="text-sm">Đề tài NCKH Mĩ thuật cấp tỉnh 2026–2027</p>
              <p className="text-sm mt-1">Tỉnh Hưng Yên</p>
            </div>
            <div>
              <p className="text-white font-medium mb-3">5 Khu Di Sản</p>
              <div className="space-y-1">
                {["Phố Hiến","Chùa Keo","Đền Trần","Khu lưu niệm Lê Quý Đôn","Chạm bạc Đồng Xâm"].map((item,i) => (
                  <p key={i} className="text-sm text-stone-500">{String(i+1)}. {item}</p>
                ))}
              </div>
            </div>
            <div>
              <p className="text-white font-medium mb-3">Truy cập ngay</p>
              <div className="w-28 h-28 bg-white rounded-xl flex items-center justify-center mb-2">
                <p className="text-stone-800 text-xs text-center font-mono">QR Code<br/>smart-art-heritage<br/>.vercel.app</p>
              </div>
              <p className="text-xs text-stone-500">Mọi lúc – Mọi nơi<br/>Chỉ cần có Internet</p>
            </div>
          </div>
          <div className="border-t border-stone-800 pt-6 flex flex-wrap justify-between items-center gap-4">
            <p className="text-sm">smart-art-heritage.vercel.app</p>
            <div className="flex gap-6 text-sm">
              <Link href="/" className="hover:text-white transition">Trang chủ</Link>
              <Link href="/ban-do" className="hover:text-white transition">Bản đồ</Link>
              <Link href="/ai-assistant" className="hover:text-white transition">AI Assistant</Link>
            </div>
          </div>
        </div>
      </footer>

    </main>
  )
}
