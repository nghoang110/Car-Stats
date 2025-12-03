// HƯỚNG DẪN THÊM/SỬA LỖI DTC
// ====================================

// File DTC data được lưu tại: src/data/dtcData.js

// 📌 CẤU TRÚC DỬ LIỆU:
// ====================================
// export const dtcData = [
//   {
//     id: 1,
//     brand: 'Tên hãng xe',     // VD: 'Toyota', 'Honda', 'Hyundai'
//     models: [
//       {
//         name: 'Tên dòng xe',   // VD: 'Camry', 'Civic'
//         dtcCodes: [
//           { 
//             code: 'P0101',     // Mã DTC (format chuẩn)
//             description: 'Mô tả lỗi BẰNG TIẾNG VIỆT', 
//             severity: 'high'   // high (đỏ), medium (vàng), low (xanh)
//           },
//           { code: 'P0102', ... },
//           ...
//         ]
//       }
//     ]
//   }
// ]

// 🔴 MỨC ĐỘ LỖI (Severity):
// ====================================
// - 'high'   : Lỗi nghiêm trọng, CẦN SỬA NGAY (màu đỏ)
// - 'medium' : Lỗi cảnh báo, nên kiểm tra (màu vàng)
// - 'low'    : Thông tin nhỏ, không cấp bách (màu xanh)

// ✏️ VÍ DỤ THÊM LỖI MỚI:
// ====================================

// Bước 1: Mở file src/data/dtcData.js
// Bước 2: Tìm hãng xe bạn muốn thêm (VD: Toyota)
// Bước 3: Tìm dòng xe trong brand đó (VD: Camry)
// Bước 4: Thêm object mới vào mảng dtcCodes:

// TRƯỚC:
// {
//   name: 'Camry',
//   dtcCodes: [
//     { code: 'P0101', description: 'Cảm biến luồng không khí bị lỗi', severity: 'high' },
//     { code: 'P0102', description: 'Cảm biến luồng không khí đọc giá trị quá thấp', severity: 'high' },
//   ]
// }

// SAU:
// {
//   name: 'Camry',
//   dtcCodes: [
//     { code: 'P0101', description: 'Cảm biến luồng không khí bị lỗi', severity: 'high' },
//     { code: 'P0102', description: 'Cảm biến luồng không khí đọc giá trị quá thấp', severity: 'high' },
//     { code: 'P0600', description: 'Lỗi giao tiếp với các thiết bị điều khiển khác', severity: 'high' },  // 👈 Thêm dòng này
//   ]
// }

// ❌ VÍ DỤ XÓA LỖI:
// ====================================

// Bước 1: Mở file src/data/dtcData.js
// Bước 2: Tìm lỗi cần xóa
// Bước 3: Xóa toàn bộ dòng object đó (bao gồm dấu phẩy nếu cần)

// TRƯỚC:
// dtcCodes: [
//   { code: 'P0101', description: '...', severity: 'high' },
//   { code: 'P0102', description: '...', severity: 'high' },
//   { code: 'P0600', description: '...', severity: 'high' },  // ❌ Xóa dòng này
// ]

// SAU:
// dtcCodes: [
//   { code: 'P0101', description: '...', severity: 'high' },
//   { code: 'P0102', description: '...', severity: 'high' },
// ]

// 🔄 VÍ DỤ SỬA LỖI HIỆN CÓ:
// ====================================

// Chỉ cần chỉnh sửa description hoặc severity:
// TRƯỚC:
// { code: 'P0101', description: 'Cảm biến luồng không khí bị lỗi', severity: 'high' }

// SAU (sửa mô tả):
// { code: 'P0101', description: 'Cảm biến luồng không khí bị hỏng, cần thay mới', severity: 'high' }

// SAU (thay đổi mức độ lỗi):
// { code: 'P0101', description: 'Cảm biến luồng không khí bị lỗi', severity: 'medium' }

// 📊 MỚI THÊM HÃY XE MỚI:
// ====================================

// Bước 1: Thêm object brand mới vào mảng dtcData
// Bước 2: Thêm models với dtcCodes tương ứng

// VÍ DỤ:
// {
//   id: 8,                    // ID mới (8, 9, 10...)
//   brand: 'BMW',             // Tên hãng xe
//   models: [
//     {
//       name: 'X5',           // Tên dòng xe
//       dtcCodes: [
//         { code: 'P0101', description: 'Mô tả lỗi', severity: 'high' },
//         { code: 'P0102', description: 'Mô tả lỗi', severity: 'medium' },
//       ]
//     }
//   ]
// }

// 💡 LƯU Ý QUAN TRỌNG:
// ====================================
// 1. Hãy chắc chắn có dấu phẩy sau mỗi object (ngoại trừ object cuối cùng)
// 2. Luôn sử dụng tiếng Việt cho description để dễ đọc
// 3. Mã DTC nên theo chuẩn (P + 4 chữ số hoặc chữ số + chữ cái)
// 4. Severity chỉ có 3 giá trị: 'high', 'medium', 'low'
// 5. Sau khi chỉnh sửa, trang sẽ tự động cập nhật (hot reload)

// 🎯 CÁCH KIỂM TRA:
// ====================================
// 1. Mở trang DTC Stats
// 2. Chọn hãng xe
// 3. Nhấp vào dòng xe để mở rộng
// 4. Kiểm tra xem lỗi mới/sửa đã xuất hiện chưa
// 5. Nếu lỗi không xuất hiện, kiểm tra console (F12) để xem thông báo lỗi
