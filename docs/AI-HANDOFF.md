# SMART ART HERITAGE – AI HANDOFF

## Mục tiêu dự án
SMART ART HERITAGE là hệ sinh thái học tập Mĩ thuật số cho học sinh THCS, khai thác di sản địa phương làm nguồn cảm hứng sáng tạo.

Quy trình AI 5A:
Ask → Analyze → Advise → Adapt → Art.

AI chỉ có vai trò gợi mở. AI không tạo tác phẩm thay học sinh.

## Công nghệ hiện có
- Next.js
- Tailwind CSS v4
- Supabase
- Gemini AI
- Leaflet + OpenStreetMap
- Vercel
- GitHub

## Không được thay đổi nếu chưa có yêu cầu rõ
- Supabase database schema.
- Supabase RLS.
- Gemini API và API route hiện có.
- File .env.local và biến môi trường.
- Leaflet/OpenStreetMap.
- Route /ai-assistant.
- Route /ban-do.
- Route /di-san/[id].
- Cấu hình Vercel.
- Logic fetch dữ liệu di sản hiện có.

## Quy tắc làm việc
1. Luôn đọc các file trong docs/ trước khi code.
2. Kiểm tra git status trước khi sửa.
3. Mỗi lần chỉ xử lý một task trong TASKS.md.
4. Nêu file dự kiến sửa/thêm trước khi code.
5. Không viết lại toàn bộ dự án.
6. Không tự đoán schema Supabase; đọc code/type/schema hiện có.
7. Không dùng dữ liệu giả thay thế dữ liệu di sản thật.
8. Không deploy Production hoặc merge main nếu chưa được yêu cầu.
9. Chạy npm run lint và npm run build trước khi kết thúc.
10. Cập nhật CHANGELOG-AI.md sau mỗi task hoàn tất.