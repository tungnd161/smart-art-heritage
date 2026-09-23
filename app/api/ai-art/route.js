import { GoogleGenerativeAI } from "@google/generative-ai";

const SYSTEM_PROMPT = `Bạn là Trợ lý Mĩ thuật 5A của SMART ART HERITAGE, hỗ trợ học sinh THCS khám phá di sản Hưng Yên và phát triển ý tưởng tạo hình.

NGUYÊN TẮC BẮT BUỘC:
- Không tạo tác phẩm Mĩ thuật hoàn chỉnh, bài mẫu, prompt tạo ảnh hay câu trả lời để học sinh sao chép.
- Không khẳng định dữ kiện lịch sử/di sản nếu học sinh chưa cung cấp căn cứ; khuyến khích quay lại ảnh và Hotspot.
- Luôn gợi học sinh tự quan sát, tự chọn và tự phác thảo.
- Khi gợi ý, chỉ nêu tối đa 2–3 hướng ngắn bằng lời.
- Không yêu cầu dữ liệu cá nhân như họ tên, số điện thoại hoặc địa chỉ.

QUY TRÌNH 5A:
A1 HỎI: làm rõ thông điệp và căn cứ quan sát.
A2 PHÂN TÍCH: hỏi về đường nét, hình, màu, bố cục, hoa văn hoặc vật liệu.
A3 GỢI Ý: đưa 2–3 hướng phát triển ý tưởng.
A4 ĐIỀU CHỈNH: hỏi học sinh sẽ chọn/biến đổi điều gì.
A5 TÁC GIẢ: yêu cầu học sinh xác nhận quyết định sáng tạo của mình.

Trả lời bằng tiếng Việt thân thiện, phù hợp học sinh THCS, tối đa 120 từ. Nếu câu hỏi ngoài chủ đề, nhẹ nhàng đưa học sinh quay lại nhiệm vụ Mĩ thuật.`;

function cleanMessages(messages) {
  if (!Array.isArray(messages)) return [];
  return messages.slice(-6).filter((item) => item && (item.role === "user" || item.role === "assistant") && typeof item.content === "string")
    .map((item) => ({ role: item.role, content: item.content.trim().slice(0, 1200) }))
    .filter((item) => item.content.length > 0);
}

export async function POST(request) {
  if (!process.env.GEMINI_API_KEY) return Response.json({ error: "Trợ lý AI chưa được cấu hình." }, { status: 503 });
  try {
    const body = await request.json();
    const messages = cleanMessages(body.messages);
    const diSanTen = typeof body.diSanTen === "string" ? body.diSanTen.trim().slice(0, 100) : "";
    if (!messages.length || messages[messages.length - 1].role !== "user") return Response.json({ error: "Cần một câu hỏi của học sinh để bắt đầu." }, { status: 400 });

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: process.env.GEMINI_MODEL || "gemini-2.5-flash", systemInstruction: SYSTEM_PROMPT });
    const history = messages.slice(0, -1).map((item) => ({ role: item.role === "assistant" ? "model" : "user", parts: [{ text: item.content }] }));
    const prompt = `${diSanTen ? `[Học sinh đang học về: ${diSanTen}]\n` : ""}${messages[messages.length - 1].content}`;
    const result = await model.startChat({ history }).sendMessage(prompt);
    const reply = result.response.text().trim();
    return Response.json({ reply: reply || "Em hãy quay lại ảnh/Hotspot và thử mô tả một chi tiết tạo hình em quan sát được nhé." });
  } catch (error) {
    const providerStatus = Number(error?.status || error?.response?.status) || 502;
    const providerMessage = String(error?.message || "").replace(/AIza[\w-]+/g, "[redacted]").slice(0, 500);
    console.error("Gemini AI Art error", { providerStatus, providerMessage });
    return Response.json({ error: "Trợ lý đang bận. Em hãy thử lại sau ít phút.", diagnostic: { providerStatus, providerMessage } }, { status: 502 });
  }
}
