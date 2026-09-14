'use client'
import { useEffect, useState } from 'react'

const DI_SAN_MAP = [
  { id: 1, ten: 'Phố Hiến', lat: 20.8468, lng: 106.0516, mo_ta: 'Đô thị thương cảng cổ thế kỷ 17', cum: 'Di tích lịch sử', mau: '🔴' },
  { id: 2, ten: 'Văn Miếu Xích Đằng', lat: 20.8512, lng: 106.0498, mo_ta: 'Trung tâm giáo dục Nho học', cum: 'Di tích lịch sử', mau: '🔴' },
  { id: 3, ten: 'Đền Trần Hưng Yên', lat: 20.6468, lng: 106.0516, mo_ta: 'Đền thờ các vua Trần', cum: 'Tín ngưỡng dân gian', mau: '🟡' },
  { id: 4, ten: 'Chùa Chuông', lat: 20.8401, lng: 106.0523, mo_ta: 'Ngôi chùa cổ với chuông đồng lớn', cum: 'Tín ngưỡng dân gian', mau: '🟡' },
  { id: 5, ten: 'Làng tranh Đông Hồ', lat: 21.0833, lng: 106.0833, mo_ta: 'Làng nghề tranh dân gian nổi tiếng', cum: 'Làng nghề thủ công', mau: '🟢' },
]

export default function BanDo() {
  const [MapComponent, setMapComponent] = useState(null)
  const [diSanChon, setDiSanChon] = useState(null)

  useEffect(() => {
    // Load leaflet chỉ ở client (không load ở server)
    import('leaflet').then(L => {
      delete L.default.Icon.Default.prototype._getIconUrl
      L.default.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
        iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
      })
    })

    import('react-leaflet').then(({ MapContainer, TileLayer, Marker, Popup }) => {
      import('leaflet/dist/leaflet.css')
      
      const Map = () => (
        <MapContainer 
          center={[20.85, 106.05]} 
          zoom={10} 
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {DI_SAN_MAP.map(ds => (
            <Marker key={ds.id} position={[ds.lat, ds.lng]}>
              <Popup>
                <div style={{ minWidth: 180 }}>
                  <p style={{ fontWeight: 'bold', color: '#991b1b', margin: '0 0 4px' }}>
                    {ds.mau} {ds.ten}
                  </p>
                  <p style={{ fontSize: 12, color: '#555', margin: '0 0 8px' }}>{ds.mo_ta}</p>
                  <a href={`/ai-assistant?diSan=${encodeURIComponent(ds.ten)}`}
                    style={{ background: '#991b1b', color: 'white', padding: '4px 10px', borderRadius: 6, fontSize: 12, textDecoration: 'none' }}>
                    🎨 Bắt đầu sáng tạo →
                  </a>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      )
      setMapComponent(() => Map)
    })
  }, [])

  return (
    <div className="min-h-screen bg-amber-50">
      {/* Header */}
      <div className="bg-red-800 text-white text-center py-6">
        <h1 className="text-2xl font-bold">🗺️ Bản Đồ Di Sản Hưng Yên</h1>
        <p className="text-amber-200 text-sm mt-1">Click vào điểm di sản để khám phá</p>
      </div>

      <div className="max-w-5xl mx-auto p-4">
        {/* Chú thích */}
        <div className="flex gap-4 mb-4 bg-white rounded-xl p-3 shadow text-sm flex-wrap">
          <span>🔴 Di tích lịch sử</span>
          <span>🟡 Tín ngưỡng dân gian</span>
          <span>🟢 Làng nghề thủ công</span>
        </div>

        {/* Bản đồ */}
        <div className="bg-white rounded-xl shadow overflow-hidden" style={{ height: 480 }}>
          {MapComponent ? <MapComponent /> : (
            <div className="flex items-center justify-center h-full text-gray-400">
              <p>Đang tải bản đồ...</p>
            </div>
          )}
        </div>

        {/* Danh sách nhanh */}
        <div className="mt-4 grid grid-cols-2 md:grid-cols-5 gap-2">
          {DI_SAN_MAP.map(ds => (
            <a key={ds.id} href={`/ai-assistant?diSan=${encodeURIComponent(ds.ten)}`}
              className="bg-white rounded-lg p-3 shadow text-center hover:shadow-md transition-all hover:bg-red-50 cursor-pointer">
              <p className="text-lg">{ds.mau}</p>
              <p className="text-xs font-medium text-red-800 mt-1">{ds.ten}</p>
            </a>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex gap-4 mt-4 justify-center text-sm">
          <a href="/" className="text-red-700 hover:underline">← Kho Di Sản</a>
          <a href="/ai-assistant" className="text-red-700 hover:underline">🎨 AI Art Assistant →</a>
        </div>
      </div>
    </div>
  )
}