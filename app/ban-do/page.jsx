import Link from 'next/link'
import { heritages } from '@/lib/heritage'

export default function BanDo() {
  return (
    <main>
      <header className="shell nav">
        <Link className="brand" href="/">SMART ART HERITAGE · V1.0</Link>
        <Link className="button ghost" href="/">Kho di sản</Link>
      </header>
      <section className="page-head"><div className="shell">
        <div className="breadcrumbs">Trang chủ / Bản đồ di sản</div>
        <div className="kicker">Điểm vào hành trình học tập</div>
        <h1>Bản đồ di sản<br/>và các trục tạo hình.</h1>
        <p className="lead">Chọn một cụm di sản để bắt đầu quan sát. Bản đồ V1 ưu tiên luồng học tập và dữ liệu đã kiểm chứng; tọa độ/đường đi chi tiết chỉ được thêm sau khi đối chiếu nguồn chính thức.</p>
      </div></section>
      <section className="content"><div className="shell">
        <div className="notice" style={{marginBottom:24}}><strong>Hãy bắt đầu bằng điều em nhìn thấy.</strong><br/>Mỗi điểm dẫn tới hồ sơ, Hotspot, phiếu tổng kết 3–2–1 và sau đó mới mở AI 5A.</div>
        <div className="grid">{heritages.map((heritage) => <article className="card" key={heritage.slug}>
          <div className="heritage-code">ĐIỂM {heritage.code} · {heritage.cluster}</div>
          <h3>{heritage.name}</h3><p>{heritage.summary}</p>
          <div className="hotspot"><b>Góc nhìn Mĩ thuật</b>{heritage.artisticFocus}</div>
          <Link className="link" href={`/di-san/${heritage.slug}`}>Mở hồ sơ & bắt đầu quan sát →</Link>
        </article>)}</div>
      </div></section>
    </main>
  )
}
