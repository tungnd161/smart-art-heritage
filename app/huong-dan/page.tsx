import Link from "next/link";

const steps = [
  ["1", "Mở học liệu", "Vào Kho di sản, chọn một hồ sơ và xem ảnh/Hotspot cùng học sinh."],
  ["2", "Hoàn thành 3–2–1", "Mỗi em ghi 3 điều quan sát, 2 điều muốn tìm hiểu và 1 ý tưởng ban đầu. Khi đủ 8 ý, Trợ lý 5A mới mở."],
  ["3", "Đi cùng Trợ lý 5A", "Ở từng bước 5A, học sinh viết nhận xét của mình trước rồi mới bấm nhận gợi ý. AI chỉ gợi mở, không làm bài thay."],
  ["4", "Lưu Portfolio", "Học sinh ghi ý tưởng, phác thảo và tự lưu sản phẩm vào Portfolio trên chính thiết bị đang dùng."],
  ["5", "Trưng bày có đồng ý", "Chỉ đưa tác phẩm đã có sự đồng ý phù hợp vào Gallery. Dùng QR Gallery cho khách tham quan."],
];

export default function GuidePage() {
  return <main>
    <header className="shell nav"><Link className="brand" href="/">SMART ART HERITAGE · V1.0</Link><Link className="button ghost" href="/gallery">Mở Gallery</Link></header>
    <section className="page-head"><div className="shell"><div className="breadcrumbs">Trang chủ / Hướng dẫn triển khai</div><div className="kicker">Tài liệu bàn giao V1</div><h1>Triển khai một buổi học<br/>từ di sản đến sáng tạo.</h1><p className="lead">Hướng dẫn ngắn cho giáo viên và học sinh. Hệ thống ưu tiên quan sát, suy nghĩ độc lập và an toàn dữ liệu.</p></div></section>
    <section className="content"><div className="shell"><div className="notice handover-download"><div><strong>File bàn giao có thể tải và in</strong><br/><span>Phiên bản đầy đủ dành cho giáo viên, học sinh và khu trưng bày.</span></div><a className="button" href="/downloads/HUONG_DAN_BAN_GIAO_SU_DUNG_SMART_ART_HERITAGE_V1.html" download>Tải file hướng dẫn →</a></div></div><div className="shell two-col" style={{marginTop:26}}><div className="panel"><div className="kicker">Quy trình 5 bước</div><h2>Thực hiện trong lớp</h2><ol className="handover-steps">{steps.map(([number, title, description]) => <li key={number}><span>{number}</span><div><h3>{title}</h3><p>{description}</p></div></li>)}</ol></div><aside className="panel"><div className="kicker">Kiểm tra trước giờ học</div><h2>Checklist giáo viên</h2><ul className="checklist"><li>✓ Kiểm tra Wi‑Fi và mở thử trang Kho di sản.</li><li>✓ Chọn trước một di sản phù hợp với bài học.</li><li>✓ Nhắc học sinh không nhập họ tên, số điện thoại hoặc thông tin riêng tư vào AI.</li><li>✓ Nhắc học sinh dùng AI như người gợi ý, không sao chép câu trả lời.</li><li>✓ Chỉ công bố tác phẩm khi có sự đồng ý phù hợp.</li></ul></aside></div></section>
    <section className="content handover-section"><div className="shell grid"><article className="card"><div className="heritage-code">DÀNH CHO HỌC SINH</div><h3>Em cần làm gì?</h3><p>Quan sát ảnh/Hotspot, viết suy nghĩ của em, dùng gợi ý AI để phát triển ý tưởng và tự hoàn thiện sản phẩm.</p><Link className="link" href="/ai-assistant">Bắt đầu Trợ lý 5A →</Link></article><article className="card"><div className="heritage-code">DÀNH CHO GIÁO VIÊN</div><h3>AI có làm bài hộ không?</h3><p>Không. Trợ lý 5A được thiết kế để đặt câu hỏi, gợi ý tối đa ba hướng quan sát và đưa học sinh trở lại nguồn học liệu.</p><Link className="link" href="/ban-do">Mở Kho di sản →</Link></article><article className="card"><div className="heritage-code">DÀNH CHO TRIỂN LÃM</div><h3>Dùng QR thế nào?</h3><p>In QR ở trang Gallery và đặt cạnh không gian trưng bày. Khách quét bằng camera điện thoại để vào Gallery công khai.</p><Link className="link" href="/gallery">Mở QR Gallery →</Link></article></div></section>
    <footer className="footer"><div className="shell">SMART ART HERITAGE V1 · Học từ di sản, sáng tạo có căn cứ.</div></footer>
  </main>;
}
