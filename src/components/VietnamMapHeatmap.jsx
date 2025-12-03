import React, { useEffect, useState } from 'react'
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet'
import L from 'leaflet'
import { useStore } from '../store/useStore'
import { provincesData } from '../data/vehicleData'
import 'leaflet/dist/leaflet.css'

export default function VietnamMapHeatmap() {
  const { selectedProvince, setSelectedProvince } = useStore()
  const [geoData, setGeoData] = useState(null)

  // Fetch GeoJSON from Open Development Vietnam
  useEffect(() => {
    const fetchGeoData = async () => {
      try {
        const response = await fetch(
          'https://data.opendevelopmentmekong.net/dataset/999c96d8-fae0-4b82-9a2b-e481f6f50e12/resource/234169fb-ae73-4f23-bbd4-ff20a4fca401/download/diaphantinh.geojson'
        )
        const data = await response.json()
        setGeoData(data)
      } catch (error) {
        console.error('Error fetching GeoJSON:', error)
      }
    }
    fetchGeoData()
  }, [])

  // Get color based on car count (red heatmap)
  const getColor = (provinceName) => {
    const province = provincesData.find((p) => p.name === provinceName)
    if (!province) return '#f5f5f5'

    const maxValue = Math.max(...provincesData.map((p) => p.carCount))
    const ratio = province.carCount / maxValue

    if (ratio > 0.8) return '#8B0000' // Dark red
    if (ratio > 0.6) return '#DC143C' // Crimson
    if (ratio > 0.4) return '#FF6347' // Tomato
    if (ratio > 0.2) return '#FFA07A' // Light salmon
    return '#FFE4E1' // Misty rose
  }

  // Style function for GeoJSON features
  const onEachFeature = (feature, layer) => {
    const provinceName = feature.properties.ten_tinh
    const carCount = provincesData.find((p) => p.name === provinceName)?.carCount || 0

    const style = {
      fillColor: getColor(provinceName),
      weight: selectedProvince === provinceName ? 3 : 1,
      opacity: 1,
      color: selectedProvince === provinceName ? '#1e40af' : '#999',
      fillOpacity: 0.7,
    }

    layer.setStyle(style)

    // Popup on hover
    layer.bindPopup(
      `<div style="font-size: 12px; font-weight: bold; color: #1f2937;">
        ${provinceName}<br/>
        <span style="color: #dc2626;">
        ${carCount >= 1000000 ? (carCount / 1000000).toFixed(2) + 'M' : (carCount / 1000).toFixed(1) + 'K'} xe
        </span>
      </div>`
    )

    // Click handler
    layer.on('click', () => {
      setSelectedProvince(provinceName)
    })

    // Hover effects
    layer.on('mouseover', () => {
      if (selectedProvince !== provinceName) {
        layer.setStyle({
          fillOpacity: 0.9,
          weight: 2,
        })
      }
    })

    layer.on('mouseout', () => {
      if (selectedProvince !== provinceName) {
        layer.setStyle({
          fillOpacity: 0.7,
          weight: 1,
        })
      }
    })
  }

  if (!geoData) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-6 h-full flex items-center justify-center">
        <p className="text-gray-600">Đang tải bản đồ...</p>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 overflow-hidden">
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-1">Bản đồ Heatmap</h2>
        <p className="text-sm text-gray-600">Nhấp vào tỉnh để xem thống kê chi tiết</p>
      </div>

      <MapContainer
        center={[16.5, 107]}
        zoom={6}
        style={{ height: '500px', width: '100%', borderRadius: '8px', zIndex: 0 }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {geoData && <GeoJSON data={geoData} onEachFeature={onEachFeature} />}
      </MapContainer>

      {selectedProvince && (
        <div className="mt-4 p-3 bg-red-50 rounded border border-red-200">
          <p className="text-sm font-semibold text-red-900">
            Đã chọn: <span className="text-lg">{selectedProvince}</span>
          </p>
          <button
            onClick={() => setSelectedProvince(null)}
            className="mt-2 text-xs px-2 py-1 bg-red-200 text-red-900 rounded hover:bg-red-300 transition"
          >
            Bỏ chọn
          </button>
        </div>
      )}

      {/* Legend */}
      <div className="mt-4 p-3 bg-gray-50 rounded text-xs text-gray-600 space-y-1">
        <p className="font-semibold text-gray-800">Chú giải màu sắc:</p>
        <div className="flex items-center gap-2">
          <div style={{ width: '20px', height: '20px', backgroundColor: '#8B0000' }}></div>
          <span>Rất nhiều xe (&gt;80%)</span>
        </div>
        <div className="flex items-center gap-2">
          <div style={{ width: '20px', height: '20px', backgroundColor: '#DC143C' }}></div>
          <span>Nhiều xe (60-80%)</span>
        </div>
        <div className="flex items-center gap-2">
          <div style={{ width: '20px', height: '20px', backgroundColor: '#FF6347' }}></div>
          <span>Trung bình (40-60%)</span>
        </div>
        <div className="flex items-center gap-2">
          <div style={{ width: '20px', height: '20px', backgroundColor: '#FFA07A' }}></div>
          <span>Ít (20-40%)</span>
        </div>
        <div className="flex items-center gap-2">
          <div style={{ width: '20px', height: '20px', backgroundColor: '#FFE4E1' }}></div>
          <span>Rất ít (&lt;20%)</span>
        </div>
      </div>
    </div>
  )
}
