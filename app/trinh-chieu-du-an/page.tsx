"use client";

import Link from "next/link";
import { useState } from "react";

const Icon = ({name, className = ""}:{name:string;className?:string}) => <svg className={`system-icon ${className}`} viewBox="0 0 48 48" aria-hidden="true"><use href={`/system-icons.svg#${name}`}/></svg>;

const modules = [
  { no: "1", title: "TRANG CHỦ", href: "/", image: "/heritages/pho-hien/01.jpg", caption: "Điểm vào dự án" },
  { no: "2", title: "BẢN ĐỒ DI SẢN\nHƯNG YÊN", href: "/ban-do", image: "/heritages/chua-keo/01.jpg", caption: "Khám phá Hưng Yên" },
  { no: "3", title: "05 KHU DI SẢN", href: "/ban-do", image: "/heritages/dong-xam/03.jpg", caption: "Kho học liệu địa phương" },
  { no: "4", title: "HỒ SƠ KHÁM PHÁ\nDI SẢN", href: "/di-san/pho-hien", image: "/heritages/le-quy-don/06.jpg", caption: "Quan sát · Hotspot · 3–2–1" },
  { no: "5", title: "KHÔNG GIAN\nTRỰC QUAN", href: "/di-san/pho-hien", image: "/heritages/den-tran/03.jpg", caption: "Ảnh, hotspot & góc nhìn tạo hình" },
  { no: "6", title: "AI ART ASSISTANT · 5A", href: "/ai-assistant?heritage=pho-hien", image: "/heritages/pho-hien/05.jpg", caption: "AI gợi mở, học sinh quyết định" },
  { no: "7", title: "XƯỞNG SÁNG TẠO", href: "/portfolio", image: "/heritages/chua-keo/06.jpg", caption: "Ý tưởng · Phác thảo · Tác phẩm" },
  { no: "8", title: "GALLERY / QR", href: "/gallery", image: "/heritages/le-quy-don/05.jpg", caption: "Trưng bày tác phẩm có phê duyệt" },
  { no: "9", title: "ĐÁNH GIÁ & PHẢN TƯ", href: "/portfolio", image: "/heritages/dong-xam/06.jpg", caption: "Minh chứng quá trình học tập" },
];
const heritageNames = ["Phố Hiến", "Chùa Keo", "Đền Trần", "Lê Quý Đôn", "Đồng Xâm"];

export default function PresentationPage() {
 const [active,setActive]=useState<string | null>(null);
 return <main className="system-demo">
  <header className="system-demo-header">
   <div className="system-logo"><div className="logo-drawing"><Icon name="palette"/></div><div><b>SMART ART</b><strong>HERITAGE</strong></div></div>
   <div className="system-name"><h1>SMART ART HERITAGE <em>V1.0</em></h1><b>KHÁM PHÁ DI SẢN · HỌC MĨ THUẬT · SÁNG TẠO TƯƠNG LAI</b><p>Nền tảng giáo dục Mĩ thuật tích hợp công nghệ số (AI – 3D – AR), giúp học sinh khám phá di sản văn hoá Hưng Yên, hình thành ý tưởng và sáng tạo tác phẩm mang bản sắc riêng.</p></div>
   <InfoStrip title="CÔNG NGHỆ TÍCH HỢP" items={[["ai","AI Art\nAssistant (5A)"],["cube","Mô hình 3D\ntương tác"],["ar","Thực tế\ntăng cường"],["globe","Website/\nỨng dụng web"]]} />
   <InfoStrip title="HÀNH TRÌNH HỌC TẬP CỦA HỌC SINH" journey items={[["map-pin","Khám phá\ndi sản"],["search","Quan sát &\nphân tích"],["bot","AI gợi ý\ný tưởng (5A)"],["palette","Sáng tạo\n& thực hành"],["gallery","Triển lãm\nAR"],["star","Đánh giá &\nphản tư"]]} />
  </header>
  <section className="system-demo-body">
   <div className="system-demo-title"><b>SƠ ĐỒ HỆ THỐNG</b><span>Chạm vào từng mô-đun để trải nghiệm trực tiếp trên nền tảng.</span></div>
   <div className="system-flow top">{modules.slice(0,6).map((item,i)=><div className="system-node" key={item.no}><Node item={item} active={active===item.no} onHover={()=>setActive(item.no)}/>{i<5&&<div className="system-arrow">→</div>}</div>)}</div>
   <div className="turn-arrow"><span>↓</span><i></i><span>←</span></div>
   <div className="system-flow bottom">{modules.slice(6).map((item,i)=><div className="system-node" key={item.no}><Node item={item} active={active===item.no} onHover={()=>setActive(item.no)}/>{i<2&&<div className="system-arrow">→</div>}</div>)}<TeacherDemo/></div>
   <footer className="system-infographic-footer"><FooterBlock title="05 KHU DI SẢN TRỌNG ĐIỂM"><div className="heritage-dots">{heritageNames.map((name,i)=><span key={name}><b>{i+1}</b>{name}</span>)}</div></FooterBlock><FooterBlock title="CHỨC NĂNG CHÍNH"><ul><li>Khám phá di sản · Hotspot · 3–2–1</li><li>AI 5A gợi ý, học sinh là tác giả</li><li>Xưởng sáng tạo · Portfolio · phản tư</li></ul></FooterBlock><FooterBlock title="THIẾT BỊ HỖ TRỢ"><div className="device-icons"><b>▣</b><b>▤</b><b>▯</b></div><p>Máy tính · Máy tính bảng · Điện thoại</p></FooterBlock><FooterBlock title="GIÁ TRỊ MANG LẠI"><ul className="ticks"><li>Gắn kết học sinh với di sản địa phương</li><li>Phát triển năng lực thẩm mĩ và sáng tạo</li><li>Công nghệ có kiểm soát, học sinh là tác giả</li></ul></FooterBlock><FooterBlock title="TRẢI NGHIỆM NGAY"><div className="qr-demo">▦</div><p>Quét QR để vào SMART ART HERITAGE</p></FooterBlock></footer>
  </section>
 </main>;
}
function InfoStrip({title,items,journey}:{title:string;items:string[][];journey?:boolean}){return <div className={`system-strip ${journey?'journey':''}`}><b>{title}</b><div>{items.map(([icon,text],i)=><span key={text}><i><Icon name={icon}/></i><small>{text.split('\n').map(x=><>{x}<br/></>)}</small>{journey&&i<items.length-1&&<em>→</em>}</span>)}</div></div>}
function Node({item,active,onHover}:{item:typeof modules[number];active:boolean;onHover:()=>void}){return <div className={`system-card ${active?'active':''}`} onMouseEnter={onHover}><div className="node-heading"><b>{item.no}</b><span>{item.title.split('\n').map(x=><>{x}<br/></>)}</span></div><Link href={item.href} className="node-screen photo-screen" aria-label={`Mở ${item.title}`} style={{backgroundImage:`url('${item.image}')`}}><div className="screen-caption"><span>{item.caption}</span><i>Mở mô-đun →</i></div></Link></div>}
function Mini({type}:{type:string}){if(type==='home')return <div className="mini-home"><b>SMART ART<br/>HERITAGE</b><span>Khám phá di sản<br/>· Sáng tạo tương lai</span><i>BẮT ĐẦU KHÁM PHÁ</i><footer><Icon name="map-pin"/><Icon name="book"/><Icon name="bot"/><Icon name="gallery"/></footer></div>;if(type==='map')return <div className="mini-map"><b>HƯNG YÊN</b><i>1</i><i>2</i><i>3</i><i>4</i><i>5</i></div>;if(type==='heritage')return <div className="mini-heritage">{heritageNames.map((x,i)=><span key={x}><b>{i+1}</b><i><Icon name="temple"/></i><small>{x}</small></span>)}</div>;if(type==='profile')return <div className="mini-profile"><header>☰ <span>Tổng quan　Kiến trúc　Hoa văn</span></header><div><Icon name="temple"/></div><b>Đặc điểm Mĩ thuật nổi bật</b><p><Icon name="pattern"/><Icon name="pattern"/><Icon name="pattern"/><Icon name="pattern"/></p></div>;if(type==='space')return <div className="mini-space"><i><Icon name="rotate"/></i><b><Icon name="temple"/></b><span>Xoay 360°</span><small><Icon name="photo"/><Icon name="photo"/><Icon name="photo"/><Icon name="photo"/></small></div>;if(type==='ai')return <div className="mini-ai"><header><Icon name="bot"/> AI Art Assistant 5A　×</header>{['ASK · Đặt câu hỏi','ANALYZE · Phân tích','ADVISE · Gợi ý','ADAPT · Điều chỉnh','ART · Tạo ý tưởng'].map((x,i)=><span key={x}><b>{'A'+(i+1)}</b>{x}</span>)}<i>Nhập câu hỏi của bạn...</i></div>;if(type==='studio')return <div className="mini-studio"><div><b>Ý tưởng</b><b>Phác thảo 01</b><b>Phác thảo 02</b><b>Hoàn thiện</b></div><p><Icon name="idea"/><Icon name="sketch"/><Icon name="sketch"/><Icon name="frame"/></p><footer>Lưu　 Tải lên　 Chia sẻ　 Xuất PDF</footer></div>;if(type==='gallery')return <div className="mini-gallery"><div><span>Danh sách tác phẩm</span><span>Quét QR để xem AR</span></div><b><Icon name="qr"/></b><p>Trang triển lãm số<br/>theo quy trình phê duyệt</p></div>;return <div className="mini-review"><div><b>HỌC SINH</b><span>☑ Tự đánh giá</span><span>☑ Phiếu phản tư</span></div><div><b>GIÁO VIÊN</b><span>☑ Rubric</span><span>☑ Nhận xét</span></div><footer><Icon name="chart"/></footer></div>}
function TeacherDemo(){return <aside className="teacher-demo"><b>DASHBOARD GIÁO VIÊN</b><div><strong>128</strong><strong>86%</strong><strong>245</strong><span>Học sinh<br/>Hoàn thành<br/>Tác phẩm</span></div><ul><li>Quản lí lớp học</li><li>Quản lí di sản</li><li>Đánh giá theo rubric</li><li>Xuất dữ liệu</li></ul><small>Minh hoạ giao diện dự kiến · Không phải dữ liệu nghiên cứu thực tế.</small></aside>}
function FooterBlock({title,children}:{title:string;children:React.ReactNode}){return <section><h3>{title}</h3>{children}</section>}
