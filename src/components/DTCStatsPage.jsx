import React, { useState, useEffect } from 'react'
import { defaultDtcData, reloadDTCData, getModelsByBrand, getDTCByModel, getSeverityColor, getSeverityBadge } from '../data/dtcData'
import AddDTCForm from './AddDTCForm'

export default function DTCStatsPage() {
  const [dtcData, setDtcData] = useState(reloadDTCData())
  const [selectedBrand, setSelectedBrand] = useState(null)
  const [selectedModel, setSelectedModel] = useState(null)
  const [expandedModels, setExpandedModels] = useState(new Set())
  const [showAddForm, setShowAddForm] = useState(false)

  // Reload data when component mounts or after adding DTC
  const reloadData = () => {
    setDtcData(reloadDTCData())
  }

  const brands = dtcData.map((b) => b.brand)
  const selectedBrandData = dtcData.find((b) => b.brand === selectedBrand)
  const models = selectedBrand ? selectedBrandData.models : []

  // Prepare available models for AddDTCForm
  const availableModels = {}
  dtcData.forEach((brand) => {
    availableModels[brand.brand] = brand.models.map(m => m.name)
  })

  const toggleModelExpand = (modelName) => {
    const newExpanded = new Set(expandedModels)
    if (newExpanded.has(modelName)) {
      newExpanded.delete(modelName)
    } else {
      newExpanded.add(modelName)
    }
    setExpandedModels(newExpanded)
  }

  const handleBrandSelect = (brand) => {
    setSelectedBrand(brand)
    setSelectedModel(null)
    setExpandedModels(new Set())
  }

  const getSeverityStats = () => {
    if (!selectedModel || !selectedBrand) return { high: 0, medium: 0, low: 0 }

    const dtcCodes = getDTCByModel(selectedBrand, selectedModel)
    return {
      high: dtcCodes.filter((d) => d.severity === 'high').length,
      medium: dtcCodes.filter((d) => d.severity === 'medium').length,
      low: dtcCodes.filter((d) => d.severity === 'low').length,
    }
  }

  const severityStats = getSeverityStats()
  const selectedModelData = models.find((m) => m.name === selectedModel)
  const selectedDTCCodes = selectedModel ? getDTCByModel(selectedBrand, selectedModel) : []

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-red-600 to-red-800 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex justify-between items-center flex-wrap gap-4">
            <div>
              <h1 className="text-4xl font-bold mb-2">🔧 DTC Statistics</h1>
              <p className="text-red-100">Thống kê lỗi DTC (Diagnostic Trouble Code) của các dòng xe</p>
            </div>
            <button
              onClick={() => setShowAddForm(true)}
              className="bg-white text-red-600 hover:bg-gray-100 font-bold py-3 px-6 rounded-lg shadow-lg transition-all transform hover:scale-105 whitespace-nowrap"
            >
              ➕ Thêm DTC
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left: Brand Selection */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">🏭 Hãng xe</h2>
              <div className="space-y-2">
                {brands.map((brand) => (
                  <button
                    key={brand}
                    onClick={() => handleBrandSelect(brand)}
                    className={`w-full text-left px-4 py-2 rounded-lg font-medium transition-all ${
                      selectedBrand === brand
                        ? 'bg-red-500 text-white shadow-md'
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    }`}
                  >
                    {brand}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Models and DTC Details */}
          <div className="lg:col-span-3">
            {!selectedBrand ? (
              <div className="bg-white rounded-lg shadow-lg p-12 text-center">
                <p className="text-5xl mb-4">👈</p>
                <p className="text-xl text-gray-600">Chọn hãng xe để xem thống kê DTC</p>
              </div>
            ) : (
              <div className="space-y-6">
                {/* Models List */}
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    📋 Dòng xe {selectedBrand}
                  </h3>
                  <div className="space-y-3">
                    {models.map((model) => (
                      <div
                        key={model.name}
                        className="border border-gray-200 rounded-lg overflow-hidden"
                      >
                        <button
                          onClick={() => {
                            setSelectedModel(model.name)
                            toggleModelExpand(model.name)
                          }}
                          className="w-full px-4 py-3 bg-gradient-to-r from-gray-50 to-gray-100 hover:from-gray-100 hover:to-gray-200 flex justify-between items-center transition-all"
                        >
                          <div className="flex items-center gap-3">
                            <span className="text-lg font-semibold text-gray-800">{model.name}</span>
                            <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                              {model.dtcCodes.length} errors
                            </span>
                          </div>
                          <span
                            className={`transform transition-transform ${
                              expandedModels.has(model.name) ? 'rotate-180' : ''
                            }`}
                          >
                            ▼
                          </span>
                        </button>

                        {/* DTC Codes List */}
                        {expandedModels.has(model.name) && (
                          <div className="p-4 bg-white border-t border-gray-200">
                            {model.dtcCodes.length > 0 ? (
                              <div className="space-y-2">
                                {model.dtcCodes.map((dtc) => (
                                  <div key={dtc.code} className="flex items-start gap-3">
                                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-bold text-white ${getSeverityBadge(dtc.severity)}`}>
                                      {dtc.code}
                                    </span>
                                    <div className="flex-1">
                                      <p className="text-sm font-medium text-gray-800">{dtc.description}</p>
                                      <span className={`inline-block mt-1 px-2 py-1 rounded text-xs font-medium border ${getSeverityColor(dtc.severity)}`}>
                                        {dtc.severity === 'high' ? '⚠️ Critical' : dtc.severity === 'medium' ? '⚡ Warning' : '✓ Info'}
                                      </span>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            ) : (
                              <p className="text-gray-500 text-sm">Không có lỗi DTC</p>
                            )}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Selected Model Statistics */}
                {selectedModel && selectedModelData && (
                  <div className="bg-white rounded-lg shadow-lg p-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      📊 Thống kê lỗi - {selectedBrand} {selectedModel}
                    </h3>

                    {/* Statistics Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                      <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-lg p-4 text-white">
                        <p className="text-sm font-medium opacity-90">Lỗi Critical</p>
                        <p className="text-3xl font-bold mt-2">{severityStats.high}</p>
                        <p className="text-xs mt-1 opacity-75">⚠️ Cần sửa ngay</p>
                      </div>
                      <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg p-4 text-white">
                        <p className="text-sm font-medium opacity-90">Lỗi Warning</p>
                        <p className="text-3xl font-bold mt-2">{severityStats.medium}</p>
                        <p className="text-xs mt-1 opacity-75">⚡ Chú ý</p>
                      </div>
                      <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-lg p-4 text-white">
                        <p className="text-sm font-medium opacity-90">Lỗi Info</p>
                        <p className="text-3xl font-bold mt-2">{severityStats.low}</p>
                        <p className="text-xs mt-1 opacity-75">✓ Thông tin</p>
                      </div>
                      <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg p-4 text-white">
                        <p className="text-sm font-medium opacity-90">Tổng lỗi</p>
                        <p className="text-3xl font-bold mt-2">{selectedDTCCodes.length}</p>
                        <p className="text-xs mt-1 opacity-75">Tất cả</p>
                      </div>
                    </div>

                    {/* DTC Codes Table */}
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b-2 border-gray-300">
                            <th className="text-left px-4 py-2 font-bold text-gray-800">Mã lỗi</th>
                            <th className="text-left px-4 py-2 font-bold text-gray-800">Mô tả</th>
                            <th className="text-center px-4 py-2 font-bold text-gray-800">Mức độ</th>
                          </tr>
                        </thead>
                        <tbody>
                          {selectedDTCCodes.map((dtc) => (
                            <tr key={dtc.code} className="border-b border-gray-200 hover:bg-gray-50">
                              <td className="px-4 py-2">
                                <span className={`inline-block px-3 py-1 rounded-full text-sm font-bold text-white ${getSeverityBadge(dtc.severity)}`}>
                                  {dtc.code}
                                </span>
                              </td>
                              <td className="px-4 py-2 text-sm text-gray-700">{dtc.description}</td>
                              <td className="px-4 py-2 text-center">
                                <span className={`inline-block px-3 py-1 rounded text-xs font-medium border ${getSeverityColor(dtc.severity)}`}>
                                  {dtc.severity === 'high' ? '⚠️ Critical' : dtc.severity === 'medium' ? '⚡ Warning' : '✓ Info'}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Info Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mt-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">ℹ️ Thông tin DTC</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>✓ <span className="font-medium">DTC Code:</span> Mã lỗi chẩn đoán (ví dụ: P0101, P0128...)</li>
            <li>✓ <span className="font-medium">Critical:</span> Lỗi nghiêm trọng cần sửa ngay để tránh hư hỏng động cơ</li>
            <li>✓ <span className="font-medium">Warning:</span> Lỗi cảnh báo, nên kiểm tra và sửa chữa sớm</li>
            <li>✓ <span className="font-medium">Info:</span> Thông tin lỗi nhẹ, không ảnh hưởng nhiều đến xe</li>
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

      {/* Add DTC Form Modal */}
      {showAddForm && (
        <AddDTCForm
          onClose={() => setShowAddForm(false)}
          onSuccess={() => {
            reloadData()
            setShowAddForm(false)
          }}
          selectedBrand={selectedBrand}
          selectedModel={selectedModel}
          availableBrands={brands}
          availableModels={availableModels}
        />
      )}
    </div>
  )
}
