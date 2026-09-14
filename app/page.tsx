import { createClient } from "@supabase/supabase-js"
import Link from "next/link"

export default async function Home() {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
  const { data: diSan, error } = await supabase.from("di_san").select("*")
  return (
    <main className="min-h-screen bg-amber-50">
      <div className="bg-red-800 text-white text-center py-8">
        <h1 className="text-3xl font-bold">SMART ART HERITAGE</h1>
        <p className="text-amber-200 mt-2">Kham pha di san Hung Yen</p>
      </div>
      <div className="max-w-4xl mx-auto px-6 pt-6 flex gap-3">
        <Link href="/ai-assistant" className="bg-red-700 text-white px-4 py-2 rounded-lg text-sm">AI Assistant</Link>
        <Link href="/ban-do" className="bg-amber-600 text-white px-4 py-2 rounded-lg text-sm">Ban do</Link>
      </div>
      <div className="max-w-4xl mx-auto p-6">
        <h2 className="text-xl font-bold text-red-800 mb-4">Kho Di San ({diSan?.length ?? 0})</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {diSan?.map((ds) => (
            <Link key={ds.id} href={"/di-san/" + ds.id} className="block bg-white rounded-xl shadow p-5 border-l-4 border-red-700 hover:shadow-lg transition-all">
              <h3 className="font-bold text-lg text-red-800">{ds.ten}</h3>
              <p className="text-gray-600 text-sm mt-1">{ds.mo_ta}</p>
              <span className="inline-block mt-2 text-xs bg-red-100 text-red-700 px-2 py-1 rounded-full">{ds.cum_di_san}</span>
              <p className="text-right text-xs text-red-600 mt-2">Xem chi tiet</p>
            </Link>
          ))}
        </div>
        {(!diSan || diSan.length === 0) && (
          <p className="text-center py-12 text-gray-500">Khong co du lieu: {error?.message}</p>
        )}
      </div>
    </main>
  )
}