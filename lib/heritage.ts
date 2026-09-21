export type Heritage = {
  slug: string;
  name: string;
  code: string;
  cluster: string;
  summary: string;
  artisticFocus: string;
  task: string;
  colors: string[];
  observations: string[];
};

export const heritages: Heritage[] = [
  { slug: 'pho-hien', code: '01', name: 'Phố Hiến', cluster: 'Đô thị cổ & giao thoa văn hóa', summary: 'Không gian thương cảng cổ, nơi các lớp kiến trúc và câu chuyện giao thoa Đông – Tây cùng hiện diện.', artisticFocus: 'Không gian đô thị cổ, nhịp điệu kiến trúc, hoa văn giao thoa, màu sắc và đường nét.', task: 'Thiết kế poster “Phố Hiến – ký ức và tương lai” từ ba đặc điểm quan sát được.', colors: ['#C3422D', '#E6A23C'], observations: ['Tìm ba lớp không gian trong một công trình.', 'So sánh đường cong, đường thẳng và nhịp điệu mái.', 'Chọn một họa tiết có thể biến đổi thành ngôn ngữ hiện đại.'] },
  { slug: 'chua-keo', code: '02', name: 'Chùa Keo', cluster: 'Kiến trúc gỗ & chạm khắc', summary: 'Không gian kiến trúc Phật giáo cổ với mái, cột, kết cấu gỗ và nhịp điệu chạm khắc đặc sắc.', artisticFocus: 'Hình khối kiến trúc gỗ, nhịp mái, đặc – rỗng, hoa văn chạm khắc.', task: 'Cách điệu nhịp mái và hoa văn thành bìa sách hoặc tờ gấp triển lãm.', colors: ['#7D5430', '#C99B5F'], observations: ['Tìm nhịp lặp lại của mái.', 'Phân tích tương quan đặc – rỗng.', 'Ký họa một chi tiết hoa văn.'] },
  { slug: 'den-tran', code: '03', name: 'Khu di tích Đền Trần', cluster: 'Không gian tưởng niệm & biểu tượng', summary: 'Không gian lăng mộ, đền thờ, cảnh quan tưởng niệm và dấu ấn triều Trần.', artisticFocus: 'Biểu tượng, hình khối tưởng niệm, trang trí và bố cục không gian.', task: 'Sáng tạo tranh “Dấu ấn nhà Trần qua ngôn ngữ tạo hình hiện đại”.', colors: ['#813A38', '#D6B575'], observations: ['Tìm biểu tượng gợi ý về lịch sử.', 'Phân tích trục đối xứng.', 'Chọn một mảng hình nổi bật.'] },
  { slug: 'le-quy-don', code: '04', name: 'Khu lưu niệm Lê Quý Đôn', cluster: 'Tri thức, chữ & thiết kế giáo dục', summary: 'Không gian gợi mở tinh thần hiếu học qua sách, chữ, hoành phi và kiến trúc truyền thống.', artisticFocus: 'Thư pháp, hoành phi câu đối, bố cục trang trí, biểu tượng tri thức.', task: 'Thiết kế bộ nhận diện học thuật gồm logo, bookmark và bìa sách.', colors: ['#315C4A', '#D4A84D'], observations: ['Quan sát nhịp điệu của chữ.', 'Nhận diện bố cục hoành phi.', 'Tạo một biểu tượng “cây tri thức”.'] },
  { slug: 'dong-xam', code: '05', name: 'Làng nghề chạm bạc Đồng Xâm', cluster: 'Thủ công, hoa văn & bề mặt', summary: 'Di sản nghề truyền thống với đường nét chạm khắc, bề mặt kim loại và tư duy thiết kế ứng dụng.', artisticFocus: 'Hoa văn, tạo nổi – chìm, đường nét trang trí, bề mặt vật liệu.', task: 'Ứng dụng họa tiết Đồng Xâm đã cách điệu vào túi vải, áo hoặc bao bì.', colors: ['#56646B', '#B7A06B'], observations: ['Tìm đường nét chủ đạo.', 'Phân biệt tạo nổi và tạo chìm.', 'Lập bảng mô-típ cho sản phẩm đương đại.'] },
];

export const getHeritage = (slug: string) => heritages.find((item) => item.slug === slug);
