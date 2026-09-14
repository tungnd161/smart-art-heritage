import { createClient } from "@supabase/supabase-js"
import Link from "next/link"

export const dynamic = 'force-dynamic'

type Props = {
  params: Promise<{ id: string }>
}

export default async function DiSanDetail({ params }: Props) {
  const { id } = await params

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  const { data: ds } = await supabase
    .from("di_san")
    .select("*")
    .eq("id", id)
    .single()

  if (!ds) {
    return (
      <main className="min-h-screen bg-amber-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl text-red-800 font-bold mb-4">Khong tim thay di san</p>
          <Link href="/" className="text-red-700 underline">Quay lai trang chu</Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-amber-50">
      <div className="bg-red-800 text-white text-center py-8">
        <h1 className="text-3xl font-bold">SMART ART HERITAGE</h1>
        <p className="text-amber-200 mt-2">Khám phá di sản Hưng Yên qua Mĩ thuật</p>
      </div>

      <div className="max-w-4xl mx-auto p-6">
        <div className="mb-6">
          <Link href="/" className="text-red-700 hover:underline text-sm">← Quay lại Kho Di Sản</Link>
        </div>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-red-700">
          <div className="bg-gradient-to-br from-red-800 to-amber-700 h-56 flex items-center justify-center">
            <div className="text-center text-white px-6">
              <p className="text-6xl mb-3">🏛</p>
              <p className="text-amber-200 text-base font-medium">{ds.cum_di_san}</p>
            </div>
          </div>

          <div className="p-8">
            <span className="inline-block mb-3 text-xs bg-red-100 text-red-700 px-3 py-1 rounded-full font-medium">
              {ds.cum_di_san}
            </span>
            <h2 className="text-3xl font-bold text-red-800 mb-3">{ds.ten}</h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">{ds.mo_ta}</p>

            <div className="bg-amber-50 rounded-xl p-6 border border-amber-200 mb-4">
              <h3 className="text-amber-700 font-bold text-lg mb-3">Hướng khai thác Mĩ thuật</h3>
              <p className="text-gray-700 leading-relaxed">{ds.huong_khai_thac}</p>
            </div>

            {ds.nhiem_vu && (
              <div className="bg-red-50 rounded-xl p-6 border-2 border-red-300 mb-6">
                <h3 className="text-red-700 font-bold text-lg mb-3">Nhiệm vụ sáng tạo</h3>
                <p className="text-gray-800 leading-relaxed">{ds.nhiem_vu}</p>
                <div className="mt-4 flex gap-2 flex-wrap">
                  <Link href="/ai-assistant" className="bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-800 transition">
                    Hỏi AI để phát triển ý tưởng
                  </Link>
                </div>
              </div>
            )}

            <div className="flex gap-3 flex-wrap">
              <Link href="/ai-assistant" className="bg-red-700 text-white px-5 py-3 rounded-xl font-medium hover:bg-red-800 transition">
                Hỏi AI về di sản này
              </Link>
              <Link href="/ban-do" className="bg-amber-600 text-white px-5 py-3 rounded-xl font-medium hover:bg-amber-700 transition">
                Xem trên Bản đồ
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