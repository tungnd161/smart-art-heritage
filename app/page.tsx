import { createClient } from "@supabase/supabase-js";
import Link from "next/link";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

type DiSan = {
  id: string;
  ten?: string;
  ten_di_san?: string;
  mo_ta?: string;
  hinh_anh_url?: string;
  cum_di_san?: string;
  vung_mien?: string;
  the_loai?: string;
  huong_khai_thac?: string;
};

type ModuleItem = {
  num: string;
  emoji: string;
  title: string;
  desc: string;
  href: string | null;
  bg: string;
  color: string;
  badgeBg: string;
  numBg: string;
  real: boolean;
};

const MODULES: ModuleItem[] = [
  {
    num: "01", emoji: "🏛️", title: "Kho Di Sản",
    desc: "5 di sản văn hóa với dữ liệu thật từ Supabase",
    href: "#di-san",
    bg: "#fef2f2", color: "#b91c1c",
    badgeBg: "#fee2e2", numBg: "#b91c1c",
    real: true,
  },
  {
    num: "02", emoji: "🗺️", title: "Bản Đồ Văn Hóa",
    desc: "Bản đồ tương tác định vị di sản theo vùng miền",
    href: "/ban-do",
    bg: "#eff6ff", color: "#1d4ed8",
    badgeBg: "#dbeafe", numBg: "#1d4ed8",
    real: true,
  },
  {
    num: "03", emoji: "🤖", title: "AI Art Assistant",
    desc: "Phân tích hoa văn, gợi ý sáng tạo bằng Gemini AI",
    href: "/ai-assistant",
    bg: "#faf5ff", color: "#7e22ce",
    badgeBg: "#ede9fe", numBg: "#7e22ce",
    real: true,
  },
  {
    num: "04", emoji: "✏️", title: "Xưởng Sáng Tạo",
    desc: "Phác thảo và remix motif truyền thống",
    href: null,
    bg: "#fdf2f8", color: "#be185d",
    badgeBg: "#fce7f3", numBg: "#be185d",
    real: false,
  },
  {
    num: "05", emoji: "📱", title: "Phòng Trưng Bày AR",
    desc: "Triển lãm thực tế tăng cường — không gian 3D",
    href: null,
    bg: "#fff7ed", color: "#c2410c",
    badgeBg: "#ffedd5", numBg: "#c2410c",
    real: false,
  },
  {
    num: "06", emoji: "📋", title: "Đánh Giá & Phản Tư",
    desc: "Nhật ký học tập, đánh giá đồng đẳng",
    href: null,
    bg: "#f9fafb", color: "#4b5563",
    badgeBg: "#f3f4f6", numBg: "#6b7280",
    real: false,
  },
];

function ModuleCard({ mod }: { mod: ModuleItem }) {
  const cardContent = (
    <div
      style={{
        background: mod.bg,
        borderRadius: 16,
        padding: "24px",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 16,
        border: "1px solid transparent",
        transition: "all 0.2s",
        opacity: mod.real ? 1 : 0.7,
      }}
    >
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
        <div style={{
          width: 36, height: 36, borderRadius: "50%",
          background: mod.numBg, color: "white",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 12, fontWeight: 700,
        }}>
          {mod.num}
        </div>
        {!mod.real && (
          <span style={{
            fontSize: 10, padding: "2px 8px", borderRadius: 20,
            background: mod.badgeBg, color: mod.color, fontWeight: 500,
          }}>
            Định hướng phát triển
          </span>
        )}
      </div>
      <div style={{ fontSize: 28 }}>{mod.emoji}</div>
      <div>
        <h3 style={{ fontWeight: 700, fontSize: 15, color: mod.color, margin: 0 }}>{mod.title}</h3>
        <p style={{ fontSize: 13, color: "#6b7280", marginTop: 4, lineHeight: 1.6 }}>{mod.desc}</p>
      </div>
      {mod.real && (
        <div style={{ marginTop: "auto", fontSize: 12, fontWeight: 600, color: mod.color }}>
          Truy cập →
        </div>
      )}
    </div>
  );

  if (mod.real && mod.href) {
    return (
      <Link href={mod.href} style={{ display: "block", textDecoration: "none" }}>
        {cardContent}
      </Link>
    );
  }
  return <div>{cardContent}</div>;
}

export default async function HomePage() {
  let diSan: DiSan[] = [];
  let fetchError = false;

  try {
    const { data, error } = await supabase
      .from("di_san")
      .select("*")
      .limit(6);

    if (error) {
      console.error("Supabase error:", error.message);
      fetchError = true;
    } else {
      diSan = data ?? [];
    }
  } catch (err) {
    console.error("Failed to fetch:", err);
    fetchError = true;
  }

  return (
    <main style={{ minHeight: "100vh", background: "#fff", color: "#1f2937" }}>

      {/* ── HERO ── */}
      <section style={{
        minHeight: "92vh",
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        textAlign: "center",
        position: "relative", overflow: "hidden",
        background: "linear-gradient(135deg, #7f1d1d 0%, #991b1b 40%, #92400e 100%)",
      }}>
        {/* Dot pattern overlay */}
        <div style={{
          position: "absolute", inset: 0, opacity: 0.08,
          backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }} />

        <div style={{ position: "relative", zIndex: 1, padding: "0 24px", maxWidth: 800, margin: "0 auto" }}>
          {/* Badge */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            padding: "6px 16px", borderRadius: 999,
            background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)",
            color: "rgba(255,255,255,0.8)", fontSize: 11, fontWeight: 500,
            letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 24,
          }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#fbbf24" }} />
            Dự án học thuật — Hưng Yên &amp; Thái Bình
          </div>

          {/* Title */}
          <h1 style={{ fontSize: "clamp(40px, 8vw, 72px)", fontWeight: 900, color: "white", lineHeight: 1.1, margin: "0 0 8px" }}>
            SMART ART
          </h1>
          <h1 style={{ fontSize: "clamp(40px, 8vw, 72px)", fontWeight: 900, color: "#fbbf24", lineHeight: 1.1, margin: "0 0 20px", filter: "drop-shadow(0 2px 8px rgba(251,191,36,0.4))" }}>
            HERITAGE
          </h1>

          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "clamp(15px, 2.5vw, 18px)", maxWidth: 600, margin: "0 auto 32px", lineHeight: 1.7 }}>
            Hệ thống học tập di sản văn hóa tích hợp AI — kết nối truyền thống với công nghệ số để bảo tồn và phát huy giá trị văn hóa Việt Nam.
          </p>

          {/* CTA Buttons */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>
            <Link href="#di-san" style={{
              padding: "12px 28px", background: "#f59e0b", color: "white",
              fontWeight: 600, borderRadius: 999, textDecoration: "none",
              fontSize: 14, boxShadow: "0 4px 16px rgba(245,158,11,0.4)",
            }}>
              🏛️ Khám phá Di sản
            </Link>
            <Link href="/ban-do" style={{
              padding: "12px 28px", background: "rgba(255,255,255,0.1)",
              color: "white", fontWeight: 600, borderRadius: 999,
              border: "1px solid rgba(255,255,255,0.3)", textDecoration: "none", fontSize: 14,
            }}>
              🗺️ Xem Bản đồ
            </Link>
            <Link href="/ai-assistant" style={{
              padding: "12px 28px", background: "rgba(255,255,255,0.1)",
              color: "white", fontWeight: 600, borderRadius: 999,
              border: "1px solid rgba(255,255,255,0.3)", textDecoration: "none", fontSize: 14,
            }}>
              🤖 AI Assistant
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{
          position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)",
          display: "flex", flexDirection: "column", alignItems: "center", gap: 4,
          color: "rgba(255,255,255,0.4)",
        }}>
          <span style={{ fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase" }}>Cuộn xuống</span>
          <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section style={{ background: "#7f1d1d", padding: "20px 24px" }}>
        <div style={{
          maxWidth: 900, margin: "0 auto",
          display: "grid", gridTemplateColumns: "repeat(4, 1fr)",
          gap: 16, textAlign: "center",
        }}>
          {[
            { num: "5", label: "Di sản văn hóa" },
            { num: "2", label: "Tỉnh thành" },
            { num: "AI", label: "Phân tích thông minh" },
            { num: "5A", label: "Quy trình sáng tạo" },
          ].map(stat => (
            <div key={stat.label}>
              <div style={{ fontSize: 24, fontWeight: 800, color: "#fbbf24" }}>{stat.num}</div>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.6)", marginTop: 2 }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── KHO DI SẢN ── */}
      <section id="di-san" style={{ padding: "80px 24px", background: "#f9fafb" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          {/* Heading */}
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span style={{
              fontSize: 11, fontWeight: 600, letterSpacing: "0.3em",
              textTransform: "uppercase", color: "#b91c1c",
              background: "#fef2f2", padding: "6px 16px", borderRadius: 999,
            }}>
              Dữ liệu thật từ Supabase
            </span>
            <h2 style={{ fontSize: "clamp(24px, 4vw, 36px)", fontWeight: 800, color: "#111827", margin: "16px 0 8px" }}>
              Kho Di Sản Văn Hóa
            </h2>
            <p style={{ color: "#6b7280", maxWidth: 500, margin: "0 auto", lineHeight: 1.6 }}>
              Khám phá 5 di sản văn hóa tiêu biểu của Hưng Yên và Thái Bình
            </p>
            <div style={{ width: 48, height: 4, background: "#f59e0b", borderRadius: 2, margin: "16px auto 0" }} />
          </div>

          {fetchError ? (
            <div style={{ textAlign: "center", padding: "64px 0", color: "#dc2626" }}>
              Không thể tải dữ liệu. Vui lòng kiểm tra kết nối Supabase.
            </div>
          ) : (
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
              gap: 20,
            }}>
              {diSan.map((item, index) => {
                const ten = item.ten ?? item.ten_di_san ?? "Di sản";
                const moTa = item.mo_ta ?? "";
                const cum = item.cum_di_san ?? item.vung_mien ?? "";

                return (
                  <Link
                    key={item.id}
                    href={`/di-san/${item.id}`}
                    style={{ textDecoration: "none", display: "block" }}
                  >
                    <div style={{
                      background: "white", borderRadius: 16,
                      overflow: "hidden", boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                      border: "1px solid #f3f4f6", transition: "all 0.2s",
                    }}>
                      {/* Ảnh placeholder */}
                      <div style={{
                        height: 160,
                        background: "linear-gradient(135deg, #7f1d1d, #c0392b)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        position: "relative",
                      }}>
                        <span style={{ fontSize: 48, opacity: 0.5 }}>🏛️</span>
                        <div style={{
                          position: "absolute", top: 10, left: 10,
                          width: 28, height: 28, borderRadius: "50%",
                          background: "#7f1d1d", color: "white",
                          display: "flex", alignItems: "center", justifyContent: "center",
                          fontSize: 12, fontWeight: 700,
                        }}>
                          {index + 1}
                        </div>
                      </div>

                      <div style={{ padding: "16px" }}>
                        <h3 style={{
                          fontWeight: 700, fontSize: 14, color: "#111827",
                          margin: "0 0 6px", lineHeight: 1.4,
                        }}>
                          {ten}
                        </h3>
                        {moTa && (
                          <p style={{
                            fontSize: 12, color: "#6b7280", lineHeight: 1.6,
                            margin: "0 0 10px",
                            display: "-webkit-box",
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                          }}>
                            {moTa}
                          </p>
                        )}
                        {cum && (
                          <span style={{
                            fontSize: 10, padding: "2px 8px", borderRadius: 999,
                            background: "#fef2f2", color: "#b91c1c", fontWeight: 500,
                          }}>
                            {cum}
                          </span>
                        )}
                        <div style={{
                          fontSize: 12, color: "#b91c1c", fontWeight: 600,
                          marginTop: 10, display: "flex", alignItems: "center", gap: 4,
                        }}>
                          Xem chi tiết →
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}

          {/* CTA */}
          <div style={{ display: "flex", gap: 12, marginTop: 32, flexWrap: "wrap" }}>
            <Link href="/ban-do" style={{
              padding: "12px 24px", background: "#7f1d1d", color: "white",
              fontWeight: 600, borderRadius: 10, textDecoration: "none", fontSize: 14,
            }}>
              🗺️ Xem Bản đồ Di sản
            </Link>
            <Link href="/ai-assistant" style={{
              padding: "12px 24px", background: "#fef2f2", color: "#7f1d1d",
              fontWeight: 600, borderRadius: 10, textDecoration: "none", fontSize: 14,
              border: "1.5px solid #fca5a5",
            }}>
              🤖 Hỏi AI Art Assistant
            </Link>
          </div>
        </div>
      </section>

      {/* ── MODULE SYSTEM ── */}
      <section style={{ padding: "80px 24px", background: "white" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 style={{ fontSize: "clamp(24px, 4vw, 36px)", fontWeight: 800, color: "#111827", margin: "0 0 8px" }}>
              Hệ Thống Học Tập
            </h2>
            <p style={{ color: "#6b7280", maxWidth: 500, margin: "0 auto", lineHeight: 1.6 }}>
              6 module tích hợp — từ khám phá đến sáng tạo và đánh giá
            </p>
            <div style={{ width: 48, height: 4, background: "#7f1d1d", borderRadius: 2, margin: "16px auto 0" }} />
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: 20,
          }}>
            {MODULES.map(mod => (
              <ModuleCard key={mod.num} mod={mod} />
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: "#111827", color: "#9ca3af", padding: "40px 24px" }}>
        <div style={{
          maxWidth: 900, margin: "0 auto",
          display: "flex", flexWrap: "wrap",
          justifyContent: "space-between", alignItems: "flex-start", gap: 24,
        }}>
          <div>
            <div style={{ color: "white", fontWeight: 700, fontSize: 16, marginBottom: 6 }}>
              🏛️ SMART ART HERITAGE
            </div>
            <div style={{ fontSize: 13, marginBottom: 8 }}>Hệ thống học tập di sản văn hóa tích hợp AI</div>
            <div style={{ fontSize: 11, color: "#4b5563" }}>
              Next.js · Supabase · Gemini AI · Tailwind v4
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8, fontSize: 13 }}>
            <Link href="/ban-do" style={{ color: "#9ca3af", textDecoration: "none" }}>🗺️ Bản đồ văn hóa</Link>
            <Link href="/ai-assistant" style={{ color: "#9ca3af", textDecoration: "none" }}>🤖 AI Assistant</Link>
          </div>
        </div>
        <div style={{
          marginTop: 32, paddingTop: 24,
          borderTop: "1px solid #1f2937",
          textAlign: "center", fontSize: 11, color: "#4b5563",
        }}>
          SMART ART HERITAGE · Dự án học thuật · Không sử dụng cho mục đích thương mại
        </div>
      </footer>

    </main>
  );
}
