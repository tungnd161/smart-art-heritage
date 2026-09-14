import { createClient } from '@supabase/supabase-js'
import Link from 'next/link'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export default async function DiSanDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const { data: ds } = await supabase
    .from('di_san')
    .select('*')
    .eq('id', id)
    .single()

  if (!ds) {
    return (
      <main className="min-h-screen bg-amber-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-2xl text-red-800 font-bold mb-4">Không tìm thấy di sản</p>
          <Link href="/" className="text-red-700 underline">← Quay lại trang chủ</Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-amber-50">
      {/* Header */}
      <div className="bg-red-800 text-white text-center py-8">
        <h1 className="text-3xl font-bold">🏛 SMART ART HERITAGE</h1>
        <p className="text-amber-200 mt-2">Khám phá di sản Hưng Yên qua Mĩ thuật</p>
      </div>

      <div className="max-w-4xl mx-auto p-6">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link href="/" className="text-red-700 hover:underline text-sm">← Quay lại Kho Di Sản</Link>
        </div>

        {/* Card chi tiết */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-red-700">
          {/* Banner */}
          <div className="bg-gradient-to-br from-red-800 to-amber-700 h-56 flex items-center justify-center">
            <div className="text-center text-white px-6">
              <div className="text-7xl mb-3">🏛</div>
              <p className="text-amber-200 text-base font-medium">{ds.cum_di_san}</p>
            </div>
          </div>

          {/* Thông tin */}
          <div className="p-8">
            <span className="inline-block mb-3 text-xs bg-red-100 text-red-700 px-3 py-1 rounded-full font-medium">
              {ds.cum_di_san}
            </span>
            <h2 className="text-3xl font-bold text-red-800 mb-3">{ds.ten}</h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">{ds.mo_ta}</p>

            {/* Hướng khai thác */}
            <div className="bg-amber-50 rounded-xl p-6 border border-amber-200 mb-6">
              <h3 className="text-amber-700 font-bold text-lg mb-3">🎨 Hướng khai thác Mĩ thuật</h3>
              <p className="text-gray-700 leading-relaxed">{ds.huong_khai_thac}</p>
            </div>

            {/* Nút hành động */}
            <div className="flex gap-3 flex-wrap">
              <Link href="/ai-assistant" className="bg-red-700 text-white px-5 py-3 rounded-xl font-medium hover:bg-red-800 transition">
                🤖 Hỏi AI về di sản này
              </Link>
              <Link href="/ban-do" className="bg-amber-600 text-white px-5 py-3 rounded-xl font-medium hover:bg-amber-700 transition">
                🗺 Xem trên Bản đồ
              </Link>
              <Link href="/" className="border-2 border-red-700 text-red-700 px-5 py-3 rounded-xl font-medium hover:bg-red-50 transition">
                ← Xem di sản khác
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}