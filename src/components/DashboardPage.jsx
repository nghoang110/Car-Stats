import React from 'react'
import { Link } from 'react-router-dom'
import VehicleLineChart from './VehicleLineChart'
import VietnamMapHeatmap from './VietnamMapHeatmap'
import StatsOverview from './StatsOverview'
import CarTypeBreakdown from './CarTypeBreakdown'

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header with gradient background */}
      <header className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border-b border-white/10">
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-blue-600/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 py-12">
          <div className="flex items-center gap-4 mb-2">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg shadow-blue-500/30">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                Car-Stats Dashboard
              </h1>
              <p className="text-gray-300 text-lg">
                Thống kê số lượng xe ô tô tại các tỉnh thành Việt Nam (2000-2025)
              </p>
            </div>
          </div>
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
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-white/10 shadow-xl p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30">
              <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white">Hướng dẫn sử dụng</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-700/30 border border-white/5 hover:bg-gray-700/50 transition-colors">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-xs font-bold">
                1
              </div>
              <div>
                <p className="text-white font-semibold mb-1">Bản đồ tương tác</p>
                <p className="text-gray-400 text-sm">Nhấp vào các tỉnh/thành phố trên bản đồ để chọn và xem thống kê</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-700/30 border border-white/5 hover:bg-gray-700/50 transition-colors">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-xs font-bold">
                2
              </div>
              <div>
                <p className="text-white font-semibold mb-1">Biểu đồ xu hướng</p>
                <p className="text-gray-400 text-sm">Xem biểu đồ xu hướng số xe từ 2000 đến 2025 theo thời gian</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-700/30 border border-white/5 hover:bg-gray-700/50 transition-colors">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-xs font-bold">
                3
              </div>
              <div>
                <p className="text-white font-semibold mb-1">Thống kê tổng hợp</p>
                <p className="text-gray-400 text-sm">Thông tin tổng hợp về số lượng xe toàn quốc và theo loại xe</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-700/30 border border-white/5 hover:bg-gray-700/50 transition-colors">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-xs font-bold">
                4
              </div>
              <div>
                <p className="text-white font-semibold mb-1">Dữ liệu chính xác</p>
                <p className="text-gray-400 text-sm">Dựa trên thống kê từ Cục Cảnh sát giao thông và các nguồn chính thức</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900/50 backdrop-blur-sm border-t border-white/10 mt-16">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <p className="text-center text-gray-400">
            © 2024 Car-Stats. Ứng dụng thống kê xe ô tô tại Việt Nam.
          </p>
        </div>
      </footer>
    </div>
  )
}
