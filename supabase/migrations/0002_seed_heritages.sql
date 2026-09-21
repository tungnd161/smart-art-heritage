-- SMART ART HERITAGE V1.0 — seed 5 hồ sơ di sản
-- Chạy sau 0001_smart_art_v1.sql.
-- Các dòng is_published = false: chỉ công bố sau khi đã bổ sung ảnh, nguồn và kiểm chứng nội dung.

insert into public.heritages (slug, name, cluster, summary, artistic_focus, creative_task, source_url, is_published)
values
  ('pho-hien', 'Phố Hiến', 'Đô thị cổ & giao thoa văn hóa',
   'Không gian thương cảng cổ, nơi các lớp kiến trúc và giao thoa văn hóa trở thành chất liệu quan sát Mĩ thuật.',
   'Không gian đô thị cổ, nhịp điệu kiến trúc, hoa văn giao thoa, màu sắc và đường nét.',
   'Thiết kế poster “Phố Hiến – ký ức và tương lai” từ ba đặc điểm quan sát được.', null, false),
  ('chua-keo', 'Chùa Keo (Thần Quang Tự)', 'Kiến trúc gỗ & chạm khắc',
   'Không gian kiến trúc gỗ với mái, cột, kết cấu, chạm khắc và cảnh quan.',
   'Hình khối kiến trúc gỗ, nhịp mái, đặc – rỗng, hoa văn chạm khắc.',
   'Cách điệu nhịp mái và hoa văn thành bìa sách hoặc tờ gấp triển lãm.', null, false),
  ('den-tran', 'Khu lăng mộ và đền thờ các vị vua triều Trần', 'Không gian tưởng niệm & biểu tượng',
   'Không gian lăng mộ, đền thờ, cảnh quan tưởng niệm và dấu ấn triều Trần.',
   'Biểu tượng, hình khối tưởng niệm, trang trí và bố cục không gian.',
   'Sáng tạo tranh “Dấu ấn nhà Trần qua ngôn ngữ tạo hình hiện đại”.', null, false),
  ('le-quy-don', 'Khu lưu niệm Nhà bác học Lê Quý Đôn', 'Tri thức, chữ & thiết kế giáo dục',
   'Không gian gợi mở tinh thần hiếu học qua sách, chữ, hoành phi và kiến trúc truyền thống.',
   'Thư pháp, hoành phi câu đối, bố cục trang trí, biểu tượng tri thức.',
   'Thiết kế bộ nhận diện học thuật gồm logo, bookmark và bìa sách.', null, false),
  ('dong-xam', 'Làng nghề chạm bạc Đồng Xâm', 'Thủ công, hoa văn & bề mặt',
   'Di sản nghề truyền thống với đường nét chạm khắc, bề mặt kim loại và tư duy thiết kế ứng dụng.',
   'Hoa văn, tạo nổi – chìm, đường nét trang trí, bề mặt vật liệu.',
   'Ứng dụng họa tiết Đồng Xâm đã cách điệu vào túi vải, áo hoặc bao bì.', null, false)
on conflict (slug) do update set
  name = excluded.name,
  cluster = excluded.cluster,
  summary = excluded.summary,
  artistic_focus = excluded.artistic_focus,
  creative_task = excluded.creative_task;

-- Kiểm tra kết quả:
select slug, name, is_published from public.heritages order by name;
