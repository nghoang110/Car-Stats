import React from 'react'
import { useStore } from '../store/useStore'
import { getHistoricalData } from '../data/historicalData'
import { provincesData } from '../data/vehicleData'

export default function StatsOverview() {
  const { selectedProvince } = useStore()

  if (!selectedProvince) {
    // Show national stats if no province selected
    const totalCars = provincesData.reduce((sum, p) => sum + p.carCount, 0)
    const avgCarsPerProvince = Math.round(totalCars / provincesData.length)

    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {/* Total Cars */}
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg shadow-lg p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium opacity-90">Tổng số xe</p>
              <p className="text-4xl font-bold mt-2">
                {(totalCars / 1000000).toFixed(1)}M
              </p>
            </div>
            <div className="text-6xl opacity-20">🚗</div>
          </div>
          <p className="text-xs mt-4 opacity-75">Toàn quốc năm 2025</p>
        </div>

        {/* Number of Provinces */}
        <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg shadow-lg p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium opacity-90">Số tỉnh thành</p>
              <p className="text-4xl font-bold mt-2">{provincesData.length}</p>
            </div>
            <div className="text-6xl opacity-20">📍</div>
          </div>
          <p className="text-xs mt-4 opacity-75">Tất cả khu vực</p>
        </div>

        {/* Average Cars */}
        <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-lg shadow-lg p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium opacity-90">Trung bình/tỉnh</p>
              <p className="text-4xl font-bold mt-2">
                {(avgCarsPerProvince / 1000).toFixed(0)}K
              </p>
            </div>
            <div className="text-6xl opacity-20">📊</div>
          </div>
          <p className="text-xs mt-4 opacity-75">Năm 2025</p>
        </div>
      </div>
    )
  }

  // Show stats for selected province
  const historicalData = getHistoricalData(selectedProvince)
  const currentYear = historicalData[historicalData.length - 1]
  const year2000 = historicalData[0]
  const growth = year2000.count > 0 ? ((currentYear.count - year2000.count) / year2000.count * 100) : 0

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      {/* Year 2000 */}
      <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg shadow-lg p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium opacity-90">Năm 2000</p>
            <p className="text-3xl font-bold mt-2">
              {year2000.count >= 1000 ? (year2000.count / 1000).toFixed(1) + 'K' : year2000.count}
            </p>
          </div>
          <div className="text-5xl opacity-20">📈</div>
        </div>
        <p className="text-xs mt-4 opacity-75">{selectedProvince}</p>
      </div>

      {/* Year 2025 */}
      <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-lg shadow-lg p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium opacity-90">Năm 2025</p>
            <p className="text-3xl font-bold mt-2">
              {currentYear.count >= 1000000 ? (currentYear.count / 1000000).toFixed(2) + 'M' : (currentYear.count / 1000).toFixed(1) + 'K'}
            </p>
          </div>
          <div className="text-5xl opacity-20">🔴</div>
        </div>
        <p className="text-xs mt-4 opacity-75">Thực tế năm 2025</p>
      </div>

      {/* Growth */}
      <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-lg shadow-lg p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium opacity-90">Tăng trưởng</p>
            <p className="text-3xl font-bold mt-2">
              {growth.toFixed(0)}%
            </p>
          </div>
          <div className="text-5xl opacity-20">📊</div>
        </div>
        <p className="text-xs mt-4 opacity-75">2000 → 2025</p>
      </div>
    </div>
  )
}
