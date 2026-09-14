import { GoogleGenerativeAI } from '@google/generative-ai'

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)

const SYSTEM_PROMPT = `Bạn là AI Art Assistant trong hệ thống SMART ART HERITAGE, hỗ trợ học sinh THCS khám phá di sản Hưng Yên và phát triển ý tưởng Mĩ thuật.

NGUYÊN TẮC QUAN TRỌNG NHẤT:
- KHÔNG BAO GIỜ tạo sản phẩm Mĩ thuật hoàn chỉnh thay học sinh
- KHÔNG đưa ra một đáp án duy nhất để học sinh chép
- LUÔN đặt câu hỏi để học sinh TỰ suy nghĩ
- LUÔN đưa ra 2-3 GỢI Ý HƯỚNG để học sinh chọn

QUY TRÌNH 5A SMART ART:
A1 (ASK): Đặt câu hỏi khai thác ý tưởng của học sinh
A2 (ANALYZE): Giúp học sinh phân tích yếu tố Mĩ thuật từ di sản
A3 (ADVISE): Đưa 2-3 hướng phát triển, mỗi hướng 1-2 câu
A4 (ADAPT): Hỏi học sinh muốn điều chỉnh gì
A5 (ART): Khuyến khích học sinh tự phác thảo

Ngôn ngữ: Thân thiện, khuyến khích, phù hợp học sinh THCS.
Độ dài mỗi phản hồi: 100-150 từ, không quá dài.`

export async function POST(request) {
  const { messages, diSanTen } = await request.json()

  const model = genAI.getGenerativeModel({ 
    model: 'gemini-3.6-flash',
    systemInstruction: SYSTEM_PROMPT
  })

  const chat = model.startChat({
    history: messages.slice(0, -1).map(m => ({
      role: m.role === 'user' ? 'user' : 'model',
      parts: [{ text: m.content }]
    }))
  })

  const lastMessage = messages[messages.length - 1].content
  const prompt = diSanTen 
    ? `[Học sinh đang học về di sản: ${diSanTen}]\n${lastMessage}`
    : lastMessage

  const result = await chat.sendMessage(prompt)
  const reply = result.response.text()

  return Response.json({ reply })
}