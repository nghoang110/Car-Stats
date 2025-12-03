import React from 'react'
import { useStore } from '../store/useStore'
import { provincesData } from '../data/vehicleData'

export default function VietnamMap() {
  const { selectedProvince, setSelectedProvince } = useStore()

  // Simplified Vietnam map with province regions (using circles as placeholders)
  // In production, this would be a proper SVG map with actual province boundaries
  const provincePositions = {
    'Hà Nội': { x: 55, y: 25 },
    'Hải Phòng': { x: 75, y: 20 },
    'Quảng Ninh': { x: 85, y: 18 },
    'Bắc Giang': { x: 65, y: 22 },
    'Bắc Kạn': { x: 70, y: 18 },
    'Cao Bằng': { x: 80, y: 15 },
    'Hà Giang': { x: 75, y: 10 },
    'Lạng Sơn': { x: 85, y: 20 },
    'Tuyên Quang': { x: 70, y: 15 },
    'Yên Bái': { x: 60, y: 12 },
    'Thái Nguyên': { x: 68, y: 20 },
    'Phú Thọ': { x: 62, y: 18 },
    'Vĩnh Phúc': { x: 62, y: 22 },
    'Hà Nam': { x: 58, y: 28 },
    'Hải Dương': { x: 70, y: 25 },
    'Hưng Yên': { x: 65, y: 27 },
    'Thái Bình': { x: 72, y: 28 },
    'Nam Định': { x: 68, y: 30 },
    'Ninh Bình': { x: 62, y: 32 },
    'Thanh Hóa': { x: 58, y: 35 },
    'Nghệ An': { x: 52, y: 42 },
    'Hà Tĩnh': { x: 55, y: 45 },
    'Quảng Bình': { x: 58, y: 48 },
    'Quảng Trị': { x: 58, y: 50 },
    'Thừa Thiên Huế': { x: 58, y: 52 },
    'Đà Nẵng': { x: 60, y: 55 },
    'Quảng Nam': { x: 58, y: 58 },
    'Quảng Ngãi': { x: 60, y: 60 },
    'Bình Định': { x: 62, y: 62 },
    'Phú Yên': { x: 64, y: 64 },
    'Khánh Hòa': { x: 68, y: 67 },
    'Ninh Thuận': { x: 72, y: 70 },
    'Bình Thuận': { x: 75, y: 73 },
    'Đắk Lắk': { x: 55, y: 65 },
    'Đắk Nông': { x: 58, y: 68 },
    'Gia Lai': { x: 50, y: 62 },
    'Kon Tum': { x: 52, y: 58 },
    'Lâm Đồng': { x: 65, y: 72 },
    'TP Hồ Chí Minh': { x: 68, y: 82 },
    'Long An': { x: 62, y: 80 },
    'Tiền Giang': { x: 65, y: 85 },
    'Bến Tre': { x: 70, y: 87 },
    'Trà Vinh': { x: 72, y: 90 },
    'Vĩnh Long': { x: 68, y: 88 },
    'An Giang': { x: 58, y: 90 },
    'Kiên Giang': { x: 52, y: 88 },
    'Cần Thơ': { x: 62, y: 92 },
    'Sóc Trăng': { x: 65, y: 95 },
    'Bạc Liêu': { x: 68, y: 97 },
    'Cà Mau': { x: 70, y: 100 },
    'Đồng Tháp': { x: 58, y: 85 },
    'An Phú': { x: 55, y: 92 },
    'Bình Phước': { x: 72, y: 78 },
    'Bình Dương': { x: 68, y: 75 },
    'Đồng Nai': { x: 72, y: 80 },
    'Bà Rịa - Vũng Tàu': { x: 78, y: 82 },
    'Tây Ninh': { x: 60, y: 78 },
    'Hà Tây': { x: 52, y: 25 },
    'Lào Cai': { x: 70, y: 5 },
    'Sơn La': { x: 50, y: 10 },
    'Điện Biên': { x: 42, y: 8 },
    'Hòa Bình': { x: 55, y: 20 },
    'Bắc Cạn': { x: 75, y: 22 },
  }

  const getProvinceColor = (provinceName) => {
    if (selectedProvince === provinceName) return '#2563eb'
    const province = provincesData.find((p) => p.name === provinceName)
    return province ? '#e5e7eb' : '#f3f4f6'
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Bản đồ Việt Nam</h2>
      <p className="text-sm text-gray-600 mb-4">Nhấp vào tỉnh/thành phố để xem thống kê</p>

      <svg viewBox="0 0 100 110" className="w-full border border-gray-200 rounded">
        {/* Background */}
        <rect width="100" height="110" fill="#f0f9ff" />

        {/* Province circles */}
        {Object.entries(provincePositions).map(([provinceName, { x, y }]) => (
          <g
            key={provinceName}
            onClick={() => setSelectedProvince(provinceName)}
            className="cursor-pointer transition-all"
          >
            <circle
              cx={x}
              cy={y}
              r="2.5"
              fill={getProvinceColor(provinceName)}
              stroke={selectedProvince === provinceName ? '#1e40af' : '#9ca3af'}
              strokeWidth={selectedProvince === provinceName ? '1.5' : '0.5'}
              className="hover:r-3 transition-all"
            />
            {selectedProvince === provinceName && (
              <text
                x={x}
                y={y - 4}
                fontSize="2"
                fill="#1e3a8a"
                textAnchor="middle"
                fontWeight="bold"
                pointerEvents="none"
              >
                ★
              </text>
            )}
          </g>
        ))}

        {/* Labels for major cities */}
        {['Hà Nội', 'TP Hồ Chí Minh', 'Hải Phòng', 'Đà Nẵng', 'Cần Thơ'].map((city) => {
          const pos = provincePositions[city]
          return (
            <text
              key={`label-${city}`}
              x={pos.x}
              y={pos.y + 5}
              fontSize="1.8"
              fill="#334155"
              textAnchor="middle"
              pointerEvents="none"
            >
              {city.substring(0, 3)}
            </text>
          )
        })}
      </svg>

      {selectedProvince && (
        <div className="mt-4 p-3 bg-blue-50 rounded border border-blue-200">
          <p className="text-sm font-semibold text-blue-900">
            Đã chọn: <span className="text-lg">{selectedProvince}</span>
          </p>
          <button
            onClick={() => setSelectedProvince(null)}
            className="mt-2 text-xs px-2 py-1 bg-blue-200 text-blue-900 rounded hover:bg-blue-300"
          >
            Bỏ chọn
          </button>
        </div>
      )}

      <div className="mt-4 text-xs text-gray-500">
        <p>📌 Có {Object.keys(provincePositions).length} tỉnh/thành phố</p>
      </div>
    </div>
  )
}
