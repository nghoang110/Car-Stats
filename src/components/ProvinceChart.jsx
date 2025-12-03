import React from 'react'
import { useStore } from '../store/useStore'

export default function ProvinceChart() {
  const { provinces, selectedRegion } = useStore()

  const filteredProvinces = selectedRegion
    ? provinces.filter((p) => p.region === selectedRegion)
    : provinces

  // Get top 10 by car count
  const topProvinces = [...filteredProvinces]
    .sort((a, b) => b.carCount - a.carCount)
    .slice(0, 10)

  const maxCars = topProvinces[0]?.carCount || 1

  const colors = [
    'bg-blue-500',
    'bg-purple-500',
    'bg-pink-500',
    'bg-red-500',
    'bg-orange-500',
    'bg-yellow-500',
    'bg-green-500',
    'bg-teal-500',
    'bg-indigo-500',
    'bg-cyan-500',
  ]

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Top 10 tỉnh/thành phố có nhiều xe nhất
      </h2>

      <div className="space-y-4">
        {topProvinces.map((province, idx) => {
          const percentage = (province.carCount / maxCars) * 100
          const formattedCount =
            province.carCount >= 1000000
              ? (province.carCount / 1000000).toFixed(2) + 'M'
              : (province.carCount / 1000).toFixed(1) + 'K'

          return (
            <div key={province.id} className="space-y-1">
              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-800">
                  {idx + 1}. {province.name}
                </span>
                <span className="text-sm font-semibold text-gray-600">
                  {formattedCount}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-6 overflow-hidden">
                <div
                  className={`h-full ${colors[idx]} transition-all duration-500 flex items-center justify-end pr-2`}
                  style={{ width: `${percentage}%` }}
                >
                  <span className="text-white text-xs font-bold">
                    {percentage > 10 ? Math.round(percentage) + '%' : ''}
                  </span>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <p className="text-sm text-gray-600">
          <span className="font-semibold text-gray-800">Lưu ý:</span> Biểu đồ này hiển thị 10 tỉnh/thành phố
          {selectedRegion ? ` có nhiều xe nhất trong ${selectedRegion}` : ' có nhiều xe nhất trên cả nước'}
        </p>
      </div>
    </div>
  )
}
