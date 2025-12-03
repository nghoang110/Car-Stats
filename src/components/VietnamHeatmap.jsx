import React, { useEffect, useState } from 'react'
import EChartsReact from 'echarts-for-react'
import * as echarts from 'echarts'
import { useStore } from '../store/useStore'
import { provincesData } from '../data/vehicleData'

// Simplified Vietnam province map data
// This includes approximate center coordinates for each province
const vietnamProvinces = {
  'Hà Nội': { name: 'Hà Nội', coord: [105.8, 21.0] },
  'Hải Phòng': { name: 'Hải Phòng', coord: [106.7, 20.8] },
  'Quảng Ninh': { name: 'Quảng Ninh', coord: [107.3, 21.0] },
  'Bắc Giang': { name: 'Bắc Giang', coord: [106.2, 21.3] },
  'Bắc Kạn': { name: 'Bắc Kạn', coord: [105.8, 22.2] },
  'Cao Bằng': { name: 'Cao Bằng', coord: [106.3, 22.7] },
  'Hà Giang': { name: 'Hà Giang', coord: [104.9, 22.8] },
  'Lạng Sơn': { name: 'Lạng Sơn', coord: [106.8, 21.8] },
  'Tuyên Quang': { name: 'Tuyên Quang', coord: [105.2, 21.8] },
  'Yên Bái': { name: 'Yên Bái', coord: [104.6, 21.5] },
  'Thái Nguyên': { name: 'Thái Nguyên', coord: [105.8, 21.5] },
  'Phú Thọ': { name: 'Phú Thọ', coord: [105.4, 21.2] },
  'Vĩnh Phúc': { name: 'Vĩnh Phúc', coord: [105.6, 21.2] },
  'Hà Nam': { name: 'Hà Nam', coord: [105.9, 20.5] },
  'Hải Dương': { name: 'Hải Dương', coord: [106.3, 20.9] },
  'Hưng Yên': { name: 'Hưng Yên', coord: [106.0, 20.8] },
  'Thái Bình': { name: 'Thái Bình', coord: [106.3, 20.4] },
  'Nam Định': { name: 'Nam Định', coord: [106.0, 20.4] },
  'Ninh Bình': { name: 'Ninh Bình', coord: [105.7, 20.3] },
  'Thanh Hóa': { name: 'Thanh Hóa', coord: [105.7, 19.7] },
  'Nghệ An': { name: 'Nghệ An', coord: [104.7, 18.8] },
  'Hà Tĩnh': { name: 'Hà Tĩnh', coord: [105.9, 18.3] },
  'Quảng Bình': { name: 'Quảng Bình', coord: [106.6, 17.5] },
  'Quảng Trị': { name: 'Quảng Trị', coord: [107.0, 16.7] },
  'Thừa Thiên Huế': { name: 'Thừa Thiên Huế', coord: [107.6, 16.5] },
  'Đà Nẵng': { name: 'Đà Nẵng', coord: [108.2, 16.0] },
  'Quảng Nam': { name: 'Quảng Nam', coord: [108.0, 15.8] },
  'Quảng Ngãi': { name: 'Quảng Ngãi', coord: [108.8, 15.1] },
  'Bình Định': { name: 'Bình Định', coord: [108.8, 14.0] },
  'Phú Yên': { name: 'Phú Yên', coord: [109.1, 13.1] },
  'Khánh Hòa': { name: 'Khánh Hòa', coord: [109.2, 12.3] },
  'Ninh Thuận': { name: 'Ninh Thuận', coord: [109.0, 11.6] },
  'Bình Thuận': { name: 'Bình Thuận', coord: [108.1, 11.1] },
  'Đắk Lắk': { name: 'Đắk Lắk', coord: [107.7, 12.6] },
  'Đắk Nông': { name: 'Đắk Nông', coord: [107.7, 11.9] },
  'Gia Lai': { name: 'Gia Lai', coord: [107.9, 14.3] },
  'Kon Tum': { name: 'Kon Tum', coord: [107.9, 14.9] },
  'Lâm Đồng': { name: 'Lâm Đồng', coord: [108.4, 11.9] },
  'TP Hồ Chí Minh': { name: 'TP Hồ Chí Minh', coord: [106.7, 10.8] },
  'Long An': { name: 'Long An', coord: [106.2, 10.3] },
  'Tiền Giang': { name: 'Tiền Giang', coord: [106.4, 10.4] },
  'Bến Tre': { name: 'Bến Tre', coord: [106.4, 10.2] },
  'Trà Vinh': { name: 'Trà Vinh', coord: [106.3, 9.9] },
  'Vĩnh Long': { name: 'Vĩnh Long', coord: [105.9, 10.2] },
  'An Giang': { name: 'An Giang', coord: [105.1, 10.3] },
  'Kiên Giang': { name: 'Kiên Giang', coord: [104.6, 10.0] },
  'Cần Thơ': { name: 'Cần Thơ', coord: [105.8, 10.0] },
  'Sóc Trăng': { name: 'Sóc Trăng', coord: [105.8, 9.6] },
  'Bạc Liêu': { name: 'Bạc Liêu', coord: [105.7, 9.3] },
  'Cà Mau': { name: 'Cà Mau', coord: [104.7, 8.8] },
  'Đồng Tháp': { name: 'Đồng Tháp', coord: [105.3, 10.5] },
  'An Phú': { name: 'An Phú', coord: [104.7, 10.3] },
  'Bình Phước': { name: 'Bình Phước', coord: [107.1, 11.7] },
  'Bình Dương': { name: 'Bình Dương', coord: [106.6, 11.3] },
  'Đồng Nai': { name: 'Đồng Nai', coord: [107.3, 11.2] },
  'Bà Rịa - Vũng Tàu': { name: 'Bà Rịa - Vũng Tàu', coord: [107.3, 10.4] },
  'Tây Ninh': { name: 'Tây Ninh', coord: [105.9, 11.3] },
  'Hà Tây': { name: 'Hà Tây', coord: [105.3, 20.8] },
  'Lào Cai': { name: 'Lào Cai', coord: [104.2, 22.3] },
  'Sơn La': { name: 'Sơn La', coord: [103.9, 21.3] },
  'Điện Biên': { name: 'Điện Biên', coord: [103.0, 21.4] },
  'Hòa Bình': { name: 'Hòa Bình', coord: [105.3, 20.7] },
  'Bắc Cạn': { name: 'Bắc Cạn', coord: [105.9, 22.2] },
}

export default function VietnamHeatmap() {
  const { selectedProvince, setSelectedProvince } = useStore()
  const chartRef = React.useRef(null)

  // Prepare data for heatmap
  const getHeatmapData = () => {
    return provincesData
      .filter((province) => vietnamProvinces[province.name])
      .map((province) => ({
        name: province.name,
        value: province.carCount,
      }))
  }

  // Get color based on car count (red heatmap)
  const getColor = (value) => {
    const maxValue = Math.max(...provincesData.map((p) => p.carCount))
    const ratio = value / maxValue
    
    if (ratio > 0.8) return '#8B0000' // Dark red
    if (ratio > 0.6) return '#DC143C' // Crimson
    if (ratio > 0.4) return '#FF6347' // Tomato
    if (ratio > 0.2) return '#FFA07A' // Light salmon
    return '#FFD5D8' // Very light red
  }

  const heatmapData = getHeatmapData()

  const option = {
    title: {
      text: 'Bản đồ Heatmap Xe ô tô tại Việt Nam',
      left: 'center',
      textStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#1f2937',
      },
    },
    tooltip: {
      trigger: 'item',
      formatter: '{b}: {c:,} xe',
      textStyle: {
        fontSize: 12,
      },
    },
    geo: {
      map: 'vietnam',
      roam: true,
      label: {
        emphasis: { show: true },
      },
      itemStyle: {
        normal: {
          areaColor: '#f5f5f5',
          borderColor: '#999',
        },
        emphasis: {
          areaColor: '#ffebee',
        },
      },
    },
    series: [
      {
        name: 'Số lượng xe',
        type: 'scatter',
        coordinateSystem: 'geo',
        data: heatmapData.map((item) => {
          const province = vietnamProvinces[item.name]
          return {
            name: item.name,
            value: [...province.coord, item.value],
            itemStyle: {
              color: getColor(item.value),
            },
          }
        }),
        symbolSize: (val) => {
          const maxValue = Math.max(...provincesData.map((p) => p.carCount))
          return Math.sqrt(val[2] / maxValue) * 50 + 10
        },
        label: {
          formatter: '{b}',
          position: 'right',
          show: selectedProvince ? true : false,
        },
        itemStyle: {
          borderColor: '#fff',
          borderWidth: 1,
        },
        emphasis: {
          label: {
            show: true,
          },
          itemStyle: {
            borderColor: '#333',
            borderWidth: 2,
          },
        },
      },
    ],
  }

  // Register Vietnam map
  useEffect(() => {
    // Simple Vietnam map register for ECharts
    echarts.registerMap('vietnam', {
      geoJSON: {
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            properties: { name: 'Vietnam' },
            geometry: {
              type: 'Polygon',
              coordinates: [
                [
                  [102.14, 8.6],
                  [102.15, 9.5],
                  [102.4, 10.5],
                  [102.9, 11.0],
                  [103.5, 11.2],
                  [104.5, 11.5],
                  [105.5, 11.0],
                  [106.5, 10.5],
                  [107.5, 10.0],
                  [108.5, 9.5],
                  [109.5, 10.0],
                  [110.0, 11.0],
                  [109.8, 12.0],
                  [109.0, 13.0],
                  [108.0, 14.0],
                  [107.5, 15.0],
                  [108.0, 16.0],
                  [107.5, 17.0],
                  [107.0, 18.0],
                  [106.5, 19.0],
                  [106.0, 20.0],
                  [105.5, 21.0],
                  [105.0, 22.0],
                  [104.5, 22.5],
                  [104.0, 22.0],
                  [103.5, 21.0],
                  [103.0, 21.5],
                  [102.5, 21.0],
                  [102.0, 20.5],
                  [102.14, 8.6],
                ],
              ],
            },
          },
        ],
      },
    })
  }, [])

  const handleChartClick = (params) => {
    if (params.componentSubType === 'scatter' && params.data && params.data.name) {
      const provinceName = params.data.name
      // Verify province exists in our data
      if (provincesData.find((p) => p.name === provinceName)) {
        setSelectedProvince(provinceName)
      }
    }
  }

  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.getEchartsInstance().on('click', handleChartClick)
    }
  }, [])

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <EChartsReact
        ref={chartRef}
        option={option}
        style={{ height: '500px' }}
      />
      {selectedProvince && (
        <div className="mt-4 p-3 bg-red-50 rounded border border-red-200">
          <p className="text-sm font-semibold text-red-900">
            Đã chọn: <span className="text-lg">{selectedProvince}</span>
          </p>
          <button
            onClick={() => setSelectedProvince(null)}
            className="mt-2 text-xs px-2 py-1 bg-red-200 text-red-900 rounded hover:bg-red-300"
          >
            Bỏ chọn
          </button>
        </div>
      )}
    </div>
  )
}
