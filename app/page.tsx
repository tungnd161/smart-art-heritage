import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

export default async function Home() {
  const { data: diSan } = await supabase.from('di_san').select('*')

  return (
    <main className="min-h-screen bg-amber-50">
      {/* Header */}
      <div className="bg-red-800 text-white text-center py-8">
        <h1 className="text-3xl font-bold">🏛️ SMART ART HERITAGE</h1>
        <p className="text-amber-200 mt-2">Khám phá di sản Hưng Yên qua Mĩ thuật</p>
      </div>

      {/* Danh sách di sản */}
      <div className="max-w-4xl mx-auto p-6">
        <h2 className="text-xl font-bold text-red-800 mb-4">🗺️ Kho Di Sản</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {diSan?.map((ds) => (
            <div key={ds.id} className="bg-white rounded-xl shadow p-5 border-l-4 border-red-700">
              <h3 className="font-bold text-lg text-red-800">{ds.ten}</h3>
              <p className="text-gray-600 text-sm mt-1">{ds.mo_ta}</p>
              <div className="mt-3 bg-amber-50 rounded-lg p-2">
                <p className="text-xs text-amber-700 font-medium">🎨 Hướng khai thác Mĩ thuật:</p>
                <p className="text-xs text-gray-700 mt-1">{ds.huong_khai_thac}</p>
              </div>
              <span className="inline-block mt-2 text-xs bg-red-100 text-red-700 px-2 py-1 rounded-full">
                {ds.cum_di_san}
              </span>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}