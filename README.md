## Car-Stats – Ứng dụng thống kê & tra cứu DTC ô tô

**Live site:** [https://hoanguyen.online](https://hoanguyen.online)

Car-Stats là một ứng dụng frontend (React + Vite) giúp:
- Thống kê số lượng xe theo tỉnh/thành và khu vực tại Việt Nam
- Xem biểu đồ, bản đồ nhiệt, bảng chi tiết theo tỉnh
- Tra cứu mã lỗi DTC (Diagnostic Trouble Code) cho nhiều hãng xe (Toyota, Honda, Mercedes, BMW, Porsche, Range Rover, …)
- Thêm mới mã lỗi DTC trực tiếp trên giao diện và lưu lại bằng `localStorage` (không cần backend)

---

## Công nghệ sử dụng

- **React** + **Vite**
- **Tailwind CSS** cho UI
- **Zustand** cho global store đơn giản
- **Recharts / ECharts / React-Leaflet** cho biểu đồ & bản đồ

---

## Chạy dự án trên máy local

### 1. Cài dependency

```bash
npm install
```

### 2. Chạy dev server

```bash
npm run dev
```

Mặc định Vite sẽ chạy tại `http://localhost:5173` (hoặc port khác nếu 5173 bận).

### 3. Build production

```bash
npm run build
```

Build xong sẽ nằm trong thư mục `dist/`, có thể deploy lên bất kỳ static hosting nào (Vercel, Netlify, Cloudflare Pages, Nginx, …).

---

## Chức năng chính

- **Dashboard Home**
  - Thống kê tổng số xe
  - Biểu đồ theo thời gian, theo khu vực, theo tỉnh
  - Bản đồ Việt Nam (heatmap) hiển thị phân bố xe

- **Trang DTC Statistics**
  - Chọn **hãng xe** → chọn **dòng xe** → xem danh sách mã lỗi DTC
  - Thống kê số lỗi theo mức độ: Critical / Warning / Info
  - Bảng chi tiết mã lỗi: mã, mô tả, mức độ

- **Thêm DTC trực tiếp trên giao diện**
  - Nút **“➕ Thêm DTC”** trên trang DTC
  - Chọn hãng xe, dòng xe (hoặc tạo dòng xe mới)
  - Nhập mã lỗi DTC, mô tả, mức độ
  - Lưu vào `localStorage` với key `car_stats_dtc_data`
  - Lần sau mở lại trang, dữ liệu custom vẫn còn (trên máy đó)

Chi tiết hơn về DTC có thể xem trong file `DTC_GUIDE.md`.

---

## Ghi chú về lưu trữ DTC (localStorage)

- Dữ liệu DTC mặc định nằm trong `src/data/dtcData.js` (`defaultDtcData`)
- Dữ liệu do người dùng thêm được lưu trong trình duyệt (localStorage) và **không cần backend**
- Chỉ lưu trên thiết bị hiện tại:
  - Mỗi máy, mỗi trình duyệt sẽ có bộ DTC custom riêng
  - Xóa cache/cookie hoặc localStorage sẽ mất dữ liệu custom

Logic quản lý DTC:
- `src/utils/dtcStorage.js`: đọc/ghi/xóa DTC trong localStorage
- `src/components/AddDTCForm.jsx`: form thêm DTC mới
- `src/components/DTCStatsPage.jsx`: UI hiển thị và gọi form thêm DTC

---

## Triển khai (Deploy)

Project hiện đang được deploy tại:

- **Production:** [https://hoanguyen.online](https://hoanguyen.online)

Quy trình deploy cơ bản:
1. Build:
   ```bash
   npm run build
   ```
2. Upload nội dung thư mục `dist/` lên server / hosting (Nginx, Apache, static hosting, …)
3. Trỏ domain `hoanguyen.online` về server/hosting đó.

---

## Ghi chú phát triển

- Store toàn cục nằm trong `src/store/useStore.js` (Zustand)
- `src/App.jsx` điều hướng giữa:
  - `HomePage` (dashboard)
  - `DTCStatsPage` (DTC)
- Styling sử dụng Tailwind CSS đã được cấu hình sẵn.

Nếu bạn fork/clone dự án này:
- Thay domain trong README cho phù hợp
- Có thể thay đổi hoặc reset dữ liệu DTC tùy nhu cầu.

