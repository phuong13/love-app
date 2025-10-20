# 🚀 Deploy lên GitHub Pages

## Bước 1: Push code lên GitHub
```bash
git add .
git commit -m "Setup for GitHub Pages deployment"
git push origin dev
```

## Bước 2: Deploy
```bash
npm run deploy
```

Lệnh này sẽ:
1. Build project (tạo thư mục `dist`)
2. Deploy thư mục `dist` lên branch `gh-pages`

## Bước 3: Cấu hình GitHub Pages
1. Vào repository trên GitHub: https://github.com/phuong13/love-app
2. Click **Settings** → **Pages**
3. Chọn:
   - Source: **Deploy from a branch**
   - Branch: **gh-pages** / **root**
4. Click **Save**

## Bước 4: Truy cập website
Sau vài phút, truy cập:
```
https://phuong13.github.io/love-app/
```

## Lưu ý:
- Mỗi lần có thay đổi, chạy `npm run deploy` để cập nhật
- Base URL đã được cấu hình trong `vite.config.ts`: `base: '/love-app/'`

## 💡 Tips:
- Kiểm tra deploy status tại: Repository → Actions
- Nếu lỗi 404, đảm bảo branch `gh-pages` đã được tạo
- Website sẽ tự động update sau mỗi lần deploy
