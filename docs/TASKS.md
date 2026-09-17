# SMART ART HERITAGE – TASKS

## TASK-01: Đồng bộ source hiện tại
### Mục tiêu
Đảm bảo GitHub, VS Code và Vercel đang dùng cùng một source code.

### Tiêu chí hoàn thành
- Xác định branch/commit Production trên Vercel.
- Source local chạy giống website hiện tại.
- GitHub có đủ source route đang deploy.
- Có branch phát triển riêng cho giao diện.

---

## TASK-02: Làm lại giao diện trang chủ theo UI-SPEC
### Phạm vi
- Chỉ chỉnh UI trang chủ.
- Không đổi Supabase, Gemini API, Map, database, RLS hay route hiện có.
- Giữ hiển thị 5 di sản thật từ database.

### Tiêu chí hoàn thành
- Header 4 cột.
- System Diagram 6 module ngang.
- Module Row 7/8/9/Dashboard.
- Footer 5 cột.
- Responsive mobile/tablet/desktop.
- CTA dẫn đúng route hoặc anchor.
- npm run lint thành công.
- npm run build thành công.
- Chỉ tạo Vercel Preview, chưa deploy Production.

---

## TASK-03: Chuẩn hóa dữ liệu 5 di sản
### Tiêu chí hoàn thành
- Rà tên, mô tả, ảnh, nguồn và nhiệm vụ sáng tạo.
- Không còn nhiệm vụ bị gán nhầm giữa các di sản.
- Có nguồn tư liệu ở mỗi trang.
- Prompt AI phù hợp từng di sản.

---

## TASK-04: Xưởng sáng tạo tối giản
### Tiêu chí hoàn thành
- Học sinh chọn di sản.
- Lưu ý tưởng ban đầu.
- Lưu gợi ý AI 5A.
- Có trường học sinh ghi phần giữ/bỏ/thay đổi từ AI.
- Tải phác thảo và tác phẩm.
- Có phản tư cuối.
- Lưu dữ liệu bằng Supabase.
- Có timeline hành trình sáng tạo.

---

## TASK-05: QA và bàn giao
### Tiêu chí hoàn thành
- Test mobile và desktop.
- Test AI API và trạng thái lỗi.
- Test Supabase RLS.
- Có hướng dẫn sử dụng cơ bản.
- Có Vercel Preview để khách duyệt.