import React from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import { useStore } from '../store/useStore'
import { getHistoricalData } from '../data/historicalData'

export default function VehicleLineChart() {
  const { selectedProvince } = useStore()

  if (!selectedProvince) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-6 h-full flex items-center justify-center">
        <div className="text-center">
          <p className="text-2xl text-gray-400 mb-2">📊</p>
          <p className="text-lg font-semibold text-gray-600">Chọn tỉnh/thành phố</p>
          <p className="text-sm text-gray-500 mt-2">Nhấp vào bản đồ bên phải để xem thống kê</p>
        </div>
      </div>
    )
  }

  const data = getHistoricalData(selectedProvince)

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Lịch sử số lượng xe</h2>
        <p className="text-lg font-semibold text-blue-600 mt-1">{selectedProvince}</p>
        <p className="text-sm text-gray-600 mt-1">Thống kê từ 2000 đến 2025</p>
      </div>

      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={data}
          margin={{ top: 5, right: 30, left: 0, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis
            dataKey="year"
            stroke="#9ca3af"
            style={{ fontSize: '12px' }}
            tick={{ fill: '#6b7280' }}
          />
          <YAxis
            stroke="#9ca3af"
            style={{ fontSize: '12px' }}
            tick={{ fill: '#6b7280' }}
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
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            }}
            formatter={(value) => {
              if (value >= 1000000) return [(value / 1000000).toFixed(2) + 'M', 'Số xe']
              if (value >= 1000) return [(value / 1000).toFixed(1) + 'K', 'Số xe']
              return [value, 'Số xe']
            }}
            labelStyle={{ color: '#000' }}
          />
          <Legend
            wrapperStyle={{ paddingTop: '20px' }}
            iconType="line"
          />
          <Line
            type="monotone"
            dataKey="count"
            stroke="#3b82f6"
            strokeWidth={3}
            dot={{ fill: '#3b82f6', r: 4 }}
            activeDot={{ r: 6 }}
            name="Số lượng xe"
            isAnimationActive={true}
          />
        </LineChart>
      </ResponsiveContainer>

      {/* Stats */}
      <div className="mt-6 grid grid-cols-3 gap-4">
        <div className="p-3 bg-blue-50 rounded">
          <p className="text-xs text-gray-600">Năm 2000</p>
          <p className="text-lg font-bold text-blue-600">
            {data[0]?.count >= 1000 ? (data[0]?.count / 1000).toFixed(0) + 'K' : data[0]?.count}
          </p>
        </div>
        <div className="p-3 bg-green-50 rounded">
          <p className="text-xs text-gray-600">Năm 2025</p>
          <p className="text-lg font-bold text-green-600">
            {data[25]?.count >= 1000000 ? (data[25]?.count / 1000000).toFixed(2) + 'M' : (data[25]?.count / 1000).toFixed(0) + 'K'}
          </p>
        </div>
        <div className="p-3 bg-purple-50 rounded">
          <p className="text-xs text-gray-600">Tăng trưởng</p>
          <p className="text-lg font-bold text-purple-600">
            {data[25] && data[0] ? ((data[25].count / data[0].count - 1) * 100).toFixed(0) + '%' : '0%'}
          </p>
        </div>
      </div>
    </div>
  )
}
