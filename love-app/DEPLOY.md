# 🚀 Deploy lên GitHub Pages

## ✅ Deploy đã thành công!

Branch `gh-pages` đã được tạo. Bây giờ làm theo các bước sau:

## Bước tiếp theo: Cấu hình GitHub Pages

1. Vào repository: **https://github.com/phuong13/love-app**
2. Click **Settings** (góc phải trên)
3. Scroll xuống phần **Pages** (menu bên trái)
4. Trong phần **Source**, chọn:
   - Branch: **gh-pages**
   - Folder: **/ (root)**
5. Click **Save**
6. Đợi 2-3 phút

## 🌐 Truy cập website
```
https://phuong13.github.io/love-app/
```

## 🔄 Update website (khi có thay đổi)
```bash
npm run deploy
```

## ⚠️ Nếu vẫn lỗi 404:
1. Đảm bảo đã chọn branch `gh-pages` trong Settings → Pages
2. Đợi thêm 5-10 phút (GitHub Pages cần thời gian deploy)
3. Clear cache trình duyệt (Ctrl + Shift + R)
4. Kiểm tra tại: Repository → Settings → Pages → xem link website

## 📝 Lưu ý:
- Base URL: `base: '/love-app/'` (đã config trong vite.config.ts)
- Mỗi lần deploy sẽ tự động build và push lên branch `gh-pages`
- Kiểm tra deploy status: Repository → Actions (nếu có)
