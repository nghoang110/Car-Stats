import React, { useMemo } from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts'
import { useStore } from '../store/useStore'
import { provincesData } from '../data/vehicleData'
import { getCarTypeStats, getCarTypeColor } from '../data/carTypeData'

export default function CarTypeBreakdown() {
  const { selectedProvince } = useStore()

  const carTypeData = useMemo(() => {
    if (!selectedProvince) return null

    const province = provincesData.find((p) => p.name === selectedProvince)
    if (!province) return null

    return getCarTypeStats(selectedProvince, province.carCount)
  }, [selectedProvince])

  if (!selectedProvince || !carTypeData) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-6 h-full flex items-center justify-center">
        <div className="text-center">
          <p className="text-2xl text-gray-400 mb-2">🚗</p>
          <p className="text-lg font-semibold text-gray-600">Chọn tỉnh/thành phố</p>
          <p className="text-sm text-gray-500 mt-2">Để xem chi tiết loại xe</p>
        </div>
      </div>
    )
  }

  const total = carTypeData.reduce((sum, item) => sum + item.count, 0)

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Chi tiết loại xe</h2>
        <p className="text-lg font-semibold text-blue-600 mt-1">{selectedProvince}</p>
        <p className="text-sm text-gray-600 mt-1">Phân bố loại xe ô tô năm 2025</p>
      </div>

      {/* Bar Chart */}
      <div className="mb-8">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={carTypeData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="carType" stroke="#9ca3af" style={{ fontSize: '12px' }} />
            <YAxis stroke="#9ca3af" style={{ fontSize: '12px' }} 
              tickFormatter={(value) => {
                if (value >= 1000000) return (value / 1000000).toFixed(1) + 'M'
                if (value >= 1000) return (value / 1000).toFixed(0) + 'K'
                return value
              }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: '#fff',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
              }}
              formatter={(value) => {
                if (value >= 1000000) return [(value / 1000000).toFixed(2) + 'M', 'Số xe']
                if (value >= 1000) return [(value / 1000).toFixed(1) + 'K', 'Số xe']
                return [value, 'Số xe']
              }}
            />
            <Bar dataKey="count" fill="#3b82f6" radius={[8, 8, 0, 0]}>
              {carTypeData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={getCarTypeColor(entry.carType)} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Pie Chart and Table */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Pie Chart */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Tỷ lệ phần trăm</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={carTypeData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ carType, percentage }) => `${carType} ${percentage}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="count"
              >
                {carTypeData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={getCarTypeColor(entry.carType)} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => {
                if (value >= 1000) return [(value / 1000).toFixed(1) + 'K', 'Số xe']
                return [value, 'Số xe']
              }} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Details Table */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Chi tiết số lượng</h3>
          <div className="space-y-3 max-h-80 overflow-y-auto">
            {carTypeData.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                <div className="flex items-center gap-3">
                  <div
                    className="w-4 h-4 rounded"
                    style={{ backgroundColor: getCarTypeColor(item.carType) }}
                  />
                  <span className="font-medium text-gray-700">{item.carType}</span>
                </div>
                <div className="text-right">
                  <p className="font-bold text-gray-800">
                    {item.count >= 1000 ? (item.count / 1000).toFixed(1) + 'K' : item.count}
                  </p>
                  <p className="text-sm text-gray-600">{item.percentage}%</p>
                </div>
              </div>
            ))}
          </div>

          {/* Total */}
          <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <div className="flex justify-between items-center">
              <span className="font-semibold text-gray-800">Tổng cộng:</span>
              <span className="text-xl font-bold text-blue-600">
                {total >= 1000000 ? (total / 1000000).toFixed(2) + 'M' : 
                 total >= 1000 ? (total / 1000).toFixed(1) + 'K' : 
                 total}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
