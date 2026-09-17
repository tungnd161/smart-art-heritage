// app/components/home/ModuleRow.tsx

const FLOW_STEPS = ['Ý tưởng', 'Phác thảo 1', 'Phác thảo 2', 'Phác thảo 3', 'Phương án chọn', 'Tác phẩm']

export default function ModuleRow() {
  return (
    <section className="py-6 px-4" style={{ background: '#f8f9fa' }}>
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">

        {/* CARD 7 — XƯỞNG SÁNG TẠO */}
        <div className="rounded-xl p-4 flex flex-col gap-3"
          style={{ background: '#FFF0F5', border: '1.5px solid #F48FB1', minHeight: 260 }}>
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-black"
              style={{ background: '#F48FB1' }}>7</div>
            <span className="font-black text-sm" style={{ color: '#880E4F' }}>
              XƯỞNG SÁNG TẠO
            </span>
          </div>

          {/* Flow steps */}
          <div className="flex flex-wrap gap-1">
            {FLOW_STEPS.map((s, i) => (
              <div key={s} className="flex items-center gap-0.5">
                <span className="rounded-full px-2 py-0.5 text-xs"
                  style={{ background: '#fce7f3', color: '#9d174d', border: '1px solid #f9a8d4', fontSize: 9 }}>
                  {s}
                </span>
                {i < FLOW_STEPS.length - 1 && (
                  <span style={{ color: '#f48fb1', fontSize: 9 }}>→</span>
                )}
              </div>
            ))}
          </div>

          {/* Thumbnail grid placeholder */}
          <div className="grid grid-cols-2 gap-1 flex-1">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="rounded flex items-center justify-center text-lg"
                style={{ background: '#fce7f3', aspectRatio: '1', minHeight: 40 }}>
                {['💡', '✏️', '🎨', '🖼️'][i]}
              </div>
            ))}
          </div>

          {/* CTA — route chưa tồn tại */}
          <div className="flex gap-1 flex-wrap">
            {['Lưu', 'Tải lên', 'Chia sẻ', 'Xuất PDF'].map(btn => (
              <span key={btn}
                className="px-2 py-1 rounded text-white text-xs cursor-not-allowed"
                style={{ background: '#9ca3af', fontSize: 10 }}
                title="Đang hoàn thiện">
                {btn}
              </span>
            ))}
          </div>
          <div className="rounded px-2 py-1 text-center"
            style={{ background: '#fce7f3', color: '#9d174d', fontSize: 9, border: '1px dashed #f48fb1' }}>
            🚧 Đang hoàn thiện — sẽ mở trong giai đoạn tiếp theo
          </div>
        </div>

        {/* CARD 8 — AR GALLERY */}
        <div className="rounded-xl p-4 flex flex-col gap-3"
          style={{ background: '#FFF8E1', border: '1.5px solid #FFB300', minHeight: 260 }}>
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-black"
              style={{ background: '#FFB300' }}>8</div>
            <span className="font-black text-sm" style={{ color: '#E65100' }}>
              AR GALLERY
            </span>
          </div>
          <p className="text-xs font-semibold" style={{ color: '#E65100' }}>
            Triển lãm thực tế tăng cường
          </p>

          {/* Danh sách tác phẩm demo */}
          <div className="flex flex-col gap-1.5 flex-1">
            {[
              { name: 'Sắc mái Chùa Keo', hs: 'Nguyễn An – 7A1' },
              { name: 'Hoa văn Phố Hiến', hs: 'Trần Minh – 7A2' },
              { name: 'Dấu ấn Lê Quý Đôn', hs: 'Phạm Hòa – 8A1' },
            ].map(t => (
              <div key={t.name} className="flex items-center gap-2 rounded p-1.5"
                style={{ background: '#fffde7', border: '1px solid #ffe082' }}>
                <div className="w-8 h-8 rounded flex items-center justify-center text-sm flex-shrink-0"
                  style={{ background: '#fff8e1' }}>🖼️</div>
                <div>
                  <div style={{ fontSize: 9, fontWeight: 600, color: '#333' }}>{t.name}</div>
                  <div style={{ fontSize: 8, color: '#888' }}>{t.hs}</div>
                </div>
              </div>
            ))}
          </div>

          {/* QR placeholder */}
          <div className="flex items-center gap-2">
            <div className="w-14 h-14 rounded flex items-center justify-center text-2xl flex-shrink-0"
              style={{ background: '#fff3e0', border: '1px dashed #FFB300' }}>
              📱
            </div>
            <div>
              <div style={{ fontSize: 8, color: '#555' }}>Quét QR để xem AR</div>
              <div className="rounded px-1.5 py-0.5 mt-1"
                style={{ background: '#fff3e0', color: '#E65100', fontSize: 8, border: '1px solid #FFB300' }}>
                Demo giao diện — Định hướng phát triển
              </div>
            </div>
          </div>
        </div>

        {/* CARD 9 — ĐÁNH GIÁ & PHẢN TƯ */}
        <div className="rounded-xl p-4 flex flex-col gap-3"
          style={{ background: '#F3F4FF', border: '1.5px solid #9FA8DA', minHeight: 260 }}>
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-black"
              style={{ background: '#9FA8DA' }}>9</div>
            <span className="font-black text-sm" style={{ color: '#283593' }}>
              ĐÁNH GIÁ & PHẢN TƯ
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {/* Học sinh */}
            <div className="rounded-lg p-2" style={{ background: '#e8eaf6' }}>
              <div className="font-bold mb-1" style={{ fontSize: 9, color: '#283593' }}>HỌC SINH</div>
              {['Tự đánh giá', 'Phản tư', 'Khảo sát sau học tập'].map(s => (
                <div key={s} className="flex items-center gap-1 mb-0.5">
                  <span style={{ color: '#9FA8DA', fontSize: 8 }}>○</span>
                  <span style={{ fontSize: 8, color: '#555' }}>{s}</span>
                </div>
              ))}
            </div>
            {/* Giáo viên */}
            <div className="rounded-lg p-2" style={{ background: '#e8eaf6' }}>
              <div className="font-bold mb-1" style={{ fontSize: 9, color: '#283593' }}>GIÁO VIÊN</div>
              {['Rubric đánh giá', 'Nhận xét', 'Thống kê kết quả'].map(s => (
                <div key={s} className="flex items-center gap-1 mb-0.5">
                  <span style={{ color: '#9FA8DA', fontSize: 8 }}>○</span>
                  <span style={{ fontSize: 8, color: '#555' }}>{s}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Biểu đồ cột demo */}
          <div className="flex-1 rounded-lg p-2" style={{ background: '#e8eaf6' }}>
            <div className="font-bold mb-1" style={{ fontSize: 9, color: '#283593' }}>
              So sánh kết quả trước – sau
            </div>
            <div className="flex items-end gap-1 h-16 px-1">
              {[
                { label: 'Nhận thức', before: 60, after: 85 },
                { label: 'Kỹ năng', before: 50, after: 80 },
                { label: 'Sáng tạo', before: 45, after: 90 },
              ].map(d => (
                <div key={d.label} className="flex flex-col items-center flex-1 gap-0.5">
                  <div className="flex items-end gap-0.5 w-full justify-center">
                    <div className="w-3 rounded-t" style={{ height: d.before * 0.5, background: '#90caf9' }} />
                    <div className="w-3 rounded-t" style={{ height: d.after * 0.5, background: '#1565C0' }} />
                  </div>
                  <span style={{ fontSize: 6, color: '#555', textAlign: 'center' }}>{d.label}</span>
                </div>
              ))}
              <div className="flex flex-col gap-0.5 mb-1 ml-1">
                <div className="flex items-center gap-0.5">
                  <div className="w-2 h-2 rounded-sm" style={{ background: '#90caf9' }} />
                  <span style={{ fontSize: 7, color: '#555' }}>Trước</span>
                </div>
                <div className="flex items-center gap-0.5">
                  <div className="w-2 h-2 rounded-sm" style={{ background: '#1565C0' }} />
                  <span style={{ fontSize: 7, color: '#555' }}>Sau</span>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded px-2 py-1 text-center"
            style={{ background: '#c5cae9', color: '#283593', fontSize: 9, border: '1px dashed #9FA8DA' }}>
            Demo giao diện — Mở rộng trong giai đoạn tiếp theo
          </div>
        </div>

        {/* CARD DASHBOARD GIÁO VIÊN */}
        <div className="rounded-xl p-4 flex flex-col gap-3"
          style={{ background: '#1A237E', minHeight: 260 }}>
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-black"
              style={{ background: 'rgba(255,255,255,0.2)', color: 'white' }}>📊</div>
            <span className="font-black text-sm text-white">DASHBOARD GIÁO VIÊN</span>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-2">
            {[
              { val: '—', label: 'Tổng lớp' },
              { val: '—', label: 'Hoàn thành' },
              { val: '—', label: 'Tác phẩm' },
            ].map(s => (
              <div key={s.label} className="text-center rounded p-1.5"
                style={{ background: 'rgba(255,255,255,0.08)' }}>
                <div className="font-black text-white text-lg">{s.val}</div>
                <div style={{ fontSize: 8, color: 'rgba(255,255,255,0.6)' }}>{s.label}</div>
              </div>
            ))}
          </div>

          {/* Menu items */}
          <div className="flex flex-col gap-1 flex-1">
            {[
              'Quản lí lớp học', 'Quản lí di sản', 'Quản lí nhiệm vụ',
              'Kết quả học tập', 'Thống kê & báo cáo', 'Xuất dữ liệu',
            ].map(item => (
              <div key={item} className="flex items-center gap-2 rounded px-2 py-1"
                style={{ background: 'rgba(255,255,255,0.06)' }}>
                <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: 9 }}>⊞</span>
                <span style={{ fontSize: 9, color: 'rgba(255,255,255,0.7)' }}>{item}</span>
              </div>
            ))}
          </div>

          {/* Biểu đồ tròn placeholder */}
          <div className="flex items-center gap-2 rounded p-2"
            style={{ background: 'rgba(255,255,255,0.06)' }}>
            <div className="w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center text-2xl"
              style={{ background: 'conic-gradient(#4CAF50 0% 40%, #2196F3 40% 70%, #FF9800 70% 88%, #F44336 88% 100%)' }}>
            </div>
            <div className="flex flex-col gap-0.5">
              {[
                { c: '#4CAF50', l: 'Xuất sắc' }, { c: '#2196F3', l: 'Tốt' },
                { c: '#FF9800', l: 'Khá' }, { c: '#F44336', l: 'Cần cố gắng' },
              ].map(d => (
                <div key={d.l} className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-sm flex-shrink-0" style={{ background: d.c }} />
                  <span style={{ fontSize: 7, color: 'rgba(255,255,255,0.6)' }}>{d.l}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded px-2 py-1 text-center"
            style={{ background: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.5)', fontSize: 8, border: '1px dashed rgba(255,255,255,0.2)' }}>
            Demo giao diện — Chưa kích hoạt dữ liệu thực nghiệm
          </div>
        </div>

      </div>
    </section>
  )
}
