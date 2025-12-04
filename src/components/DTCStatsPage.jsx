import React, { useState, useEffect } from 'react'
import { defaultDtcData, reloadDTCData, getModelsByBrand, getDTCByModel, getSeverityColor, getSeverityBadge } from '../data/dtcData'
import AddDTCForm from './AddDTCForm'
import Car3DViewer from './Car3DViewer'
import { get3DModelPath } from '../utils/get3DModelPath'

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
    <div className="min-h-screen bg-gray-900">
      {/* Header with gradient background */}
      <header className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border-b border-white/10">
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-blue-600/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 py-12">
          <div className="flex justify-between items-center flex-wrap gap-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg shadow-blue-500/30">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                  DTC Statistics
                </h1>
                <p className="text-gray-300 text-lg">
                  Thống kê lỗi DTC (Diagnostic Trouble Code) của các dòng xe
                </p>
              </div>
            </div>
            <button
              onClick={() => setShowAddForm(true)}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-xl shadow-lg shadow-blue-500/30 transition-all transform hover:scale-105 whitespace-nowrap flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Thêm DTC
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-8">
          {/* Left: Brand Selection */}
          <div className="lg:col-span-1">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-white/10 shadow-xl p-6 sticky top-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30">
                  <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h2 className="text-xl font-bold text-white">Hãng xe</h2>
              </div>
              <div className="space-y-2">
                {brands.map((brand) => (
                  <button
                    key={brand}
                    onClick={() => handleBrandSelect(brand)}
                    className={`w-full text-left px-4 py-3 rounded-xl font-medium transition-all ${
                      selectedBrand === brand
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/30'
                        : 'bg-gray-700/30 text-gray-300 hover:bg-gray-700/50 border border-white/5'
                    }`}
                  >
                    {brand}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Middle: Models and DTC Details */}
          <div className="lg:col-span-3">
            {!selectedBrand ? (
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-white/10 shadow-xl p-12 text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30 flex items-center justify-center">
                    <svg className="w-10 h-10 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
                <p className="text-xl text-gray-300 font-semibold">Chọn hãng xe để xem thống kê DTC</p>
                <p className="text-gray-500 text-sm mt-2">Vui lòng chọn một hãng xe từ danh sách bên trái</p>
              </div>
            ) : (
              <div className="space-y-6">
                {/* Models List */}
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-white/10 shadow-xl p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30">
                      <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      Dòng xe {selectedBrand}
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {models.map((model) => (
                      <div
                        key={model.name}
                        className="border border-white/10 rounded-xl overflow-hidden bg-gray-700/20 hover:bg-gray-700/30 transition-colors"
                      >
                        <button
                          onClick={() => {
                            setSelectedModel(model.name)
                            toggleModelExpand(model.name)
                          }}
                          className="w-full px-4 py-4 bg-gradient-to-r from-gray-700/30 to-gray-700/20 hover:from-gray-700/40 hover:to-gray-700/30 flex justify-between items-center transition-all"
                        >
                          <div className="flex items-center gap-3">
                            <span className="text-lg font-semibold text-white">{model.name}</span>
                            <span className="bg-gradient-to-r from-red-500 to-red-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                              {model.dtcCodes.length} errors
                            </span>
                          </div>
                          <svg
                            className={`w-5 h-5 text-gray-400 transform transition-transform ${
                              expandedModels.has(model.name) ? 'rotate-180' : ''
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>

                        {/* DTC Codes List */}
                        {expandedModels.has(model.name) && (
                          <div className="p-4 bg-gray-800/50 border-t border-white/10">
                            {model.dtcCodes.length > 0 ? (
                              <div className="space-y-2">
                                {model.dtcCodes.map((dtc) => (
                                  <div key={dtc.code} className="flex items-start gap-3 p-3 rounded-lg bg-gray-700/20 hover:bg-gray-700/30 transition-colors">
                                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-bold text-white ${getSeverityBadge(dtc.severity)}`}>
                                      {dtc.code}
                                    </span>
                                    <div className="flex-1">
                                      <p className="text-sm font-medium text-gray-200">{dtc.description}</p>
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
                  <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-white/10 shadow-xl p-6">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30">
                        <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-white">
                        Thống kê lỗi - {selectedBrand} {selectedModel}
                      </h3>
                    </div>

                    {/* Statistics Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                      <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-xl p-5 text-white shadow-lg shadow-red-500/30 border border-red-400/20">
                        <p className="text-sm font-medium opacity-90 mb-2">Lỗi Critical</p>
                        <p className="text-4xl font-bold">{severityStats.high}</p>
                        <p className="text-xs mt-2 opacity-75 flex items-center gap-1">
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                          Cần sửa ngay
                        </p>
                      </div>
                      <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl p-5 text-white shadow-lg shadow-yellow-500/30 border border-yellow-400/20">
                        <p className="text-sm font-medium opacity-90 mb-2">Lỗi Warning</p>
                        <p className="text-4xl font-bold">{severityStats.medium}</p>
                        <p className="text-xs mt-2 opacity-75 flex items-center gap-1">
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                          Chú ý
                        </p>
                      </div>
                      <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-5 text-white shadow-lg shadow-green-500/30 border border-green-400/20">
                        <p className="text-sm font-medium opacity-90 mb-2">Lỗi Info</p>
                        <p className="text-4xl font-bold">{severityStats.low}</p>
                        <p className="text-xs mt-2 opacity-75 flex items-center gap-1">
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          Thông tin
                        </p>
                      </div>
                      <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl p-5 text-white shadow-lg shadow-blue-500/30 border border-blue-400/20">
                        <p className="text-sm font-medium opacity-90 mb-2">Tổng lỗi</p>
                        <p className="text-4xl font-bold">{selectedDTCCodes.length}</p>
                        <p className="text-xs mt-2 opacity-75">Tất cả</p>
                      </div>
                    </div>

                    {/* DTC Codes Table */}
                    <div className="overflow-x-auto rounded-xl border border-white/10">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b border-white/10 bg-gray-700/30">
                            <th className="text-left px-4 py-3 font-bold text-white">Mã lỗi</th>
                            <th className="text-left px-4 py-3 font-bold text-white">Mô tả</th>
                            <th className="text-center px-4 py-3 font-bold text-white">Mức độ</th>
                          </tr>
                        </thead>
                        <tbody>
                          {selectedDTCCodes.map((dtc) => (
                            <tr key={dtc.code} className="border-b border-white/5 hover:bg-gray-700/20 transition-colors">
                              <td className="px-4 py-3">
                                <span className={`inline-block px-3 py-1 rounded-full text-sm font-bold text-white ${getSeverityBadge(dtc.severity)}`}>
                                  {dtc.code}
                                </span>
                              </td>
                              <td className="px-4 py-3 text-sm text-gray-200">{dtc.description}</td>
                              <td className="px-4 py-3 text-center">
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

          {/* Right: 3D Model Viewer */}
          <div className="lg:col-span-2">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-white/10 shadow-xl p-6 sticky top-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30">
                  <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <h2 className="text-xl font-bold text-white">Mô hình 3D</h2>
              </div>
              <div className="w-full rounded-xl overflow-hidden border border-white/10" style={{ height: '600px' }}>
                <Car3DViewer modelPath={selectedBrand && selectedModel ? get3DModelPath(selectedBrand, selectedModel) : null} />
              </div>
            </div>
          </div>
        </div>

        {/* Info Section */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-white/10 shadow-xl p-8 mt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30">
              <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white">Thông tin DTC</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-gray-700/30 border border-white/5">
              <p className="text-white font-semibold mb-2">DTC Code</p>
              <p className="text-gray-400 text-sm">Mã lỗi chẩn đoán (ví dụ: P0101, P0128...)</p>
            </div>
            <div className="p-4 rounded-xl bg-gray-700/30 border border-white/5">
              <p className="text-white font-semibold mb-2">Critical</p>
              <p className="text-gray-400 text-sm">Lỗi nghiêm trọng cần sửa ngay để tránh hư hỏng động cơ</p>
            </div>
            <div className="p-4 rounded-xl bg-gray-700/30 border border-white/5">
              <p className="text-white font-semibold mb-2">Warning</p>
              <p className="text-gray-400 text-sm">Lỗi cảnh báo, nên kiểm tra và sửa chữa sớm</p>
            </div>
            <div className="p-4 rounded-xl bg-gray-700/30 border border-white/5">
              <p className="text-white font-semibold mb-2">Info</p>
              <p className="text-gray-400 text-sm">Thông tin lỗi nhẹ, không ảnh hưởng nhiều đến xe</p>
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
