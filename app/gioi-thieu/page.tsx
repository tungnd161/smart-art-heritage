import Link from "next/link";

const systems = [
  ["01", "Kho di sản", "05 hồ sơ di sản, tư liệu có nguồn, ảnh và mô-típ tạo hình đã kiểm chứng.", "Public"],
  ["02", "Quan sát Hotspot", "15 ảnh/tư liệu mỗi hồ sơ: Nhìn ảnh → Em có biết? → Thử làm nhé.", "Học sinh"],
  ["03", "Phiếu 3–2–1", "Lưu dấu vết quan sát: 3 điều hiểu thêm, 2 đặc điểm có lý do, 1 ý tưởng.", "Cổng sư phạm"],
  ["04", "AI Art Assistant 5A", "Hỏi, phân tích, gợi ý tối đa 2–3 hướng, điều chỉnh và tự đánh giá — không tạo bài thay học sinh.", "Học sinh"],
  ["05", "Xưởng sáng tạo", "Ý tưởng, phác thảo theo phiên bản, phương án chọn, tác phẩm và tuyên bố tác giả.", "Học sinh"],
  ["06", "Portfolio & Rubric", "Timeline minh chứng quá trình; tự đánh giá và phản hồi theo 6 tiêu chí.", "Học sinh · Giáo viên"],
  ["07", "Dashboard nghiên cứu", "Tiến độ lớp, rubric, dữ liệu pre/post và xuất dữ liệu ẩn danh.", "Giáo viên"],
  ["08", "QR / AR Gallery", "Chỉ tác phẩm có đồng ý và được giáo viên phê duyệt mới được công khai.", "Triển lãm"],
];

export default function AboutSystemPage() {
  return <main><header className="shell nav"><Link className="brand" href="/">SMART ART HERITAGE · V1.0</Link><nav className="navlinks"><Link href="/">Trang chủ</Link><Link href="/ban-do">Kho di sản</Link></nav><Link className="button ghost" href="/ban-do">Bắt đầu khám phá</Link></header>
    <section className="page-head"><div className="shell"><div className="breadcrumbs">Trang chủ / Sơ đồ hệ thống</div><div className="kicker">Tổng quan giải pháp</div><h1>Hệ sinh thái học Mĩ thuật số<br/>từ di sản đến tác phẩm.</h1><p className="lead">Sơ đồ này dùng để giới thiệu dự án với giáo viên, khách hàng và giám khảo. Website học sinh sẽ hiển thị từng bước phù hợp, không dồn toàn bộ chức năng vào một màn hình.</p></div></section>
    <section className="content"><div className="shell"><div className="notice"><strong>Nguyên tắc cốt lõi: NO OBSERVATION → NO AI.</strong><br/>AI là công cụ gợi mở sau quan sát, còn toàn bộ quyết định sáng tạo thuộc về học sinh.</div><div style={{height:30}} />
      <div className="grid">{systems.map(([number,title,description,audience]) => <article className="card" key={number}><div className="heritage-code">MODULE {number} · {audience}</div><h3>{title}</h3><p>{description}</p>{number === "03" && <span className="pill">Bắt buộc trước AI 5A</span>}{number === "08" && <span className="pill">Riêng tư mặc định</span>}</article>)}</div>
      <div className="panel" style={{marginTop:26}}><div className="kicker">Cách các vai trò sử dụng hệ thống</div><div className="two-col" style={{marginTop:14}}><div><h2>Học sinh</h2><p className="small">Bắt đầu từ một di sản, hoàn thành quan sát và 3–2–1, rồi mới được vào AI 5A và Xưởng sáng tạo. Hành trình lưu thành Portfolio của chính em.</p></div><div><h2>Giáo viên</h2><p className="small">Theo dõi tiến độ theo mã học sinh, xem minh chứng, phản hồi rubric và phê duyệt tác phẩm cho Gallery; không cần xem dữ liệu cá nhân không cần thiết.</p></div></div></div>
    </div></section></main>;
}
