import React from 'react'
import { useStore } from '../store/useStore'

export default function ProvinceTable() {
  const { provinces, selectedRegion, sortBy, setSortBy } = useStore()

  const filteredProvinces = selectedRegion
    ? provinces.filter((p) => p.region === selectedRegion)
    : provinces

  const sortedProvinces =
    sortBy === 'carCount'
      ? [...filteredProvinces].sort((a, b) => b.carCount - a.carCount)
      : [...filteredProvinces].sort((a, b) => a.name.localeCompare(b.name))

  const formatNumber = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(2) + 'M'
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K'
    return num.toString()
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Danh sách tỉnh thành</h2>
        <div className="flex gap-2">
          <button
            onClick={() => setSortBy('carCount')}
            className={`px-4 py-2 rounded font-medium transition ${
              sortBy === 'carCount'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Sắp xếp theo số xe
          </button>
          <button
            onClick={() => setSortBy('name')}
            className={`px-4 py-2 rounded font-medium transition ${
              sortBy === 'name'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Sắp xếp theo tên
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-100 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left font-semibold text-gray-700">STT</th>
              <th className="px-6 py-3 text-left font-semibold text-gray-700">Tỉnh/Thành phố</th>
              <th className="px-6 py-3 text-left font-semibold text-gray-700">Miền</th>
              <th className="px-6 py-3 text-right font-semibold text-gray-700">Số xe</th>
              <th className="px-6 py-3 text-right font-semibold text-gray-700">Phần trăm</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {sortedProvinces.map((province, idx) => {
              const totalCars = provinces.reduce((sum, p) => sum + p.carCount, 0)
              const percentage = ((province.carCount / totalCars) * 100).toFixed(2)
              return (
                <tr
                  key={province.id}
                  className="hover:bg-gray-50 transition"
                >
                  <td className="px-6 py-4 text-gray-600">{idx + 1}</td>
                  <td className="px-6 py-4 font-medium text-gray-800">{province.name}</td>
                  <td className="px-6 py-4 text-gray-600">{province.region}</td>
                  <td className="px-6 py-4 text-right text-gray-800 font-semibold">
                    {formatNumber(province.carCount)}
                  </td>
                  <td className="px-6 py-4 text-right text-gray-600">{percentage}%</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      <div className="p-4 bg-gray-50 border-t border-gray-200">
        <p className="text-sm text-gray-600">
          Hiển thị {sortedProvinces.length} tỉnh/thành phố
          {selectedRegion && ` (${selectedRegion})`}
        </p>
      </div>
    </div>
  )
}
