'use client'
import { useState } from 'react'

const BUOC_5A = [
  { key: 'A1', ten: 'Khám phá', mau: 'bg-indigo-500' },
  { key: 'A2', ten: 'Phân tích', mau: 'bg-cyan-500' },
  { key: 'A3', ten: 'Gợi ý', mau: 'bg-emerald-500' },
  { key: 'A4', ten: 'Điều chỉnh', mau: 'bg-amber-500' },
  { key: 'A5', ten: 'Sáng tạo', mau: 'bg-red-500' },
]

const DI_SAN = [
  'Phố Hiến', 'Văn Miếu Xích Đằng', 'Đền Trần Hưng Yên', 
  'Chùa Chuông', 'Làng tranh Đông Hồ'
]

export default function AIAssistant() {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [buocHienTai, setBuocHienTai] = useState(0)
  const [diSanChon, setDiSanChon] = useState('')
  const [loading, setLoading] = useState(false)

  const guiTin = async () => {
    if (!input.trim() || loading) return
    const tinMoi = { role: 'user', content: input }
    const danhSachMoi = [...messages, tinMoi]
    setMessages(danhSachMoi)
    setInput('')
    setLoading(true)

    const res = await fetch('/api/ai-art', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages: danhSachMoi, diSanTen: diSanChon })
    })
    const data = await res.json()
    setMessages([...danhSachMoi, { role: 'assistant', content: data.reply }])
    if (buocHienTai < 4) setBuocHienTai(buocHienTai + 1)
    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-amber-50">
      {/* Header */}
      <div className="bg-red-800 text-white text-center py-6">
        <h1 className="text-2xl font-bold">🎨 AI Art Assistant</h1>
        <p className="text-amber-200 text-sm mt-1">Quy trình 5A SMART ART</p>
      </div>

      <div className="max-w-2xl mx-auto p-4">
        {/* Chọn di sản */}
        <div className="bg-white rounded-xl p-4 mb-4 shadow">
          <p className="font-medium text-red-800 mb-2">🏛️ Chọn di sản muốn học:</p>
          <div className="flex flex-wrap gap-2">
            {DI_SAN.map(ds => (
              <button key={ds} onClick={() => setDiSanChon(ds)}
                className={`px-3 py-1 rounded-full text-sm border transition-all
                  ${diSanChon === ds 
                    ? 'bg-red-700 text-white border-red-700' 
                    : 'bg-white text-red-700 border-red-300 hover:bg-red-50'}`}>
                {ds}
              </button>
            ))}
          </div>
        </div>

        {/* Thanh tiến độ 5A */}
        <div className="flex gap-1 mb-4">
          {BUOC_5A.map((b, i) => (
            <div key={b.key} className={`flex-1 rounded-lg p-2 text-center transition-all
              ${i <= buocHienTai ? b.mau + ' text-white' : 'bg-gray-200 text-gray-400'}`}>
              <div className="text-xs font-bold">{b.key}</div>
              <div className="text-xs">{b.ten}</div>
            </div>
          ))}
        </div>

        {/* Khung chat */}
        <div className="bg-white rounded-xl shadow overflow-hidden">
          <div className="h-96 overflow-y-auto p-4 space-y-3">
            {messages.length === 0 && (
              <div className="text-center text-gray-400 mt-16">
                <p className="text-4xl mb-2">🎨</p>
                <p className="font-medium">Chọn di sản và bắt đầu chia sẻ ý tưởng!</p>
                <p className="text-sm mt-1">AI sẽ hỗ trợ em theo quy trình 5A</p>
              </div>
            )}
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl text-sm
                  ${m.role === 'user' 
                    ? 'bg-red-700 text-white rounded-br-none' 
                    : 'bg-amber-50 text-gray-800 border border-amber-200 rounded-bl-none'}`}>
                  {m.role === 'assistant' && <p className="text-xs text-amber-600 font-bold mb-1">🤖 AI Art Assistant</p>}
                  {m.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-amber-50 border border-amber-200 px-4 py-2 rounded-2xl rounded-bl-none">
                  <p className="text-xs text-amber-600">🤖 AI đang suy nghĩ...</p>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="border-t border-gray-100 p-3 flex gap-2">
            <input value={input} onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && guiTin()}
              placeholder={diSanChon ? `Chia sẻ ý tưởng về ${diSanChon}...` : 'Chọn di sản trước nhé...'}
              disabled={!diSanChon}
              className="flex-1 border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-red-400 disabled:bg-gray-50"/>
            <button onClick={guiTin} disabled={!diSanChon || loading}
              className="bg-red-700 text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-red-800 disabled:bg-gray-300 transition-all">
              Gửi
            </button>
          </div>
        </div>

        {/* Link về trang chủ */}
        <a href="/" className="block text-center text-red-700 text-sm mt-4 hover:underline">
          ← Về trang Kho Di Sản
        </a>
      </div>
    </div>
  )
}