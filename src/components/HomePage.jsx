import React from 'react'
import { Link } from 'react-router-dom'
import VehicleLineChart from './VehicleLineChart'
import VietnamMapHeatmap from './VietnamMapHeatmap'
import StatsOverview from './StatsOverview'
import CarTypeBreakdown from './CarTypeBreakdown'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-8 flex justify-between items-start">
          <div>
            <h1 className="text-4xl font-bold mb-2">📊 Car-Stats</h1>
            <p className="text-blue-100">
              Thống kê số lượng xe ô tô tại các tỉnh thành Việt Nam (2000-2025)
            </p>
          </div>
          <Link
            to="/car-dtcs"
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg transition-colors"
          >
            🔧 Xem DTC Stats
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats Overview */}
        <StatsOverview />

        {/* Main Layout: Chart Left, Map Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Left: Line Chart */}
          <VehicleLineChart />

          {/* Right: Vietnam Heatmap Map */}
          <VietnamMapHeatmap />
        </div>

        {/* Car Type Breakdown */}
        <div className="mb-8">
          <CarTypeBreakdown />
        </div>

        {/* Info Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">ℹ️ Hướng dẫn sử dụng</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              ✓ <span className="font-medium">Bên phải:</span> Nhấp vào các tỉnh/thành phố trên bản
              đồ để chọn
            </li>
            <li>
              ✓ <span className="font-medium">Bên trái:</span> Xem biểu đồ xu hướng số xe từ 2000
              đến 2025
            </li>
            <li>
              ✓ <span className="font-medium">Thống kê:</span> Thông tin tổng hợp về số lượng xe
              toàn quốc
            </li>
            <li>
              ✓ <span className="font-medium">DTC Stats:</span> Thống kê lỗi DTC của các dòng xe
            </li>
            <li>
              ✓ <span className="font-medium">Dữ liệu:</span> Dựa trên thống kê từ Cục Cảnh sát
              giao thông
            </li>
          </ul>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white mt-16">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <p className="text-center text-gray-400">
            © 2024 Car-Stats. Ứng dụng thống kê xe ô tô tại Việt Nam.
          </p>
        </div>
      </footer>
    </div>
  )
}
