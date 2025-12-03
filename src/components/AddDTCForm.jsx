// src/components/AddDTCForm.jsx
import React, { useState } from 'react'
import { saveDTC } from '../utils/dtcStorage'

export default function AddDTCForm({ onClose, onSuccess, selectedBrand, selectedModel, availableBrands, availableModels }) {
  const [brand, setBrand] = useState(selectedBrand || '')
  const [model, setModel] = useState(selectedModel || '')
  const [code, setCode] = useState('')
  const [description, setDescription] = useState('')
  const [severity, setSeverity] = useState('high')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [isNewModel, setIsNewModel] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')
    setSuccess('')

    if (!brand || !model || !code || !description) {
      setError('Vui lòng điền đầy đủ thông tin')
      return
    }

    // Validate DTC code format (P0xxx, P1xxx, P2xxx, P3xxx, B0xxx, C0xxx, U0xxx)
    const dtcCodePattern = /^[PBCU][0-9A-F][0-9A-F][0-9A-F][0-9A-F]$/i
    if (!dtcCodePattern.test(code)) {
      setError('Mã DTC không hợp lệ. Ví dụ: P0101, P0128, B0001, C0001, U0001')
      return
    }

    const dtcCode = {
      code: code.toUpperCase(),
      description: description.trim(),
      severity: severity
    }

    const saved = saveDTC(brand, model, dtcCode)
    if (saved) {
      setSuccess('Đã thêm DTC thành công!')
      setTimeout(() => {
        onSuccess && onSuccess()
        onClose && onClose()
      }, 1500)
    } else {
      setError('DTC code này đã tồn tại cho model này')
    }
  }

  const handleBrandChange = (e) => {
    setBrand(e.target.value)
    setModel('')
    setIsNewModel(false)
  }

  const handleModelChange = (e) => {
    const value = e.target.value
    if (value === '__NEW__') {
      setIsNewModel(true)
      setModel('')
    } else {
      setIsNewModel(false)
      setModel(value)
    }
  }

  const modelsForBrand = brand && availableModels[brand] ? availableModels[brand] : []

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center z-10">
          <h2 className="text-2xl font-bold text-gray-800">➕ Thêm DTC mới</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-3xl font-bold leading-none"
            aria-label="Đóng"
          >
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
              {error}
            </div>
          )}

          {success && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
              {success}
            </div>
          )}

          {/* Brand Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Hãng xe <span className="text-red-500">*</span>
            </label>
            <select
              value={brand}
              onChange={handleBrandChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
              required
            >
              <option value="">-- Chọn hãng xe --</option>
              {availableBrands.map((b) => (
                <option key={b} value={b}>
                  {b}
                </option>
              ))}
            </select>
          </div>

          {/* Model Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Dòng xe <span className="text-red-500">*</span>
            </label>
            {brand ? (
              <>
                {modelsForBrand.length > 0 && (
                  <select
                    value={isNewModel ? '__NEW__' : model}
                    onChange={handleModelChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 mb-2"
                  >
                    <option value="">-- Chọn dòng xe --</option>
                    {modelsForBrand.map((m) => (
                      <option key={m} value={m}>
                        {m}
                      </option>
                    ))}
                    <option value="__NEW__">➕ Thêm dòng xe mới</option>
                  </select>
                )}
                {(isNewModel || modelsForBrand.length === 0) && (
                  <input
                    type="text"
                    value={model}
                    onChange={(e) => setModel(e.target.value)}
                    placeholder="Nhập tên dòng xe mới"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    required
                  />
                )}
              </>
            ) : (
              <input
                type="text"
                value={model}
                onChange={(e) => setModel(e.target.value)}
                placeholder="Chọn hãng xe trước"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100"
                disabled
              />
            )}
          </div>

          {/* DTC Code */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Mã DTC <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value.toUpperCase().replace(/[^PBCU0-9A-F]/gi, ''))}
              placeholder="Ví dụ: P0101, P0128, B0001"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
              required
              maxLength={5}
            />
            <p className="text-xs text-gray-500 mt-1">
              Format: P0xxx, P1xxx, P2xxx, P3xxx, B0xxx, C0xxx, U0xxx (chữ cái + 4 ký tự hex)
            </p>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Mô tả lỗi <span className="text-red-500">*</span>
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Nhập mô tả chi tiết về lỗi DTC"
              rows={3}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
              required
            />
          </div>

          {/* Severity */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Mức độ nghiêm trọng <span className="text-red-500">*</span>
            </label>
            <select
              value={severity}
              onChange={(e) => setSeverity(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
              required
            >
              <option value="high">⚠️ Critical - Nghiêm trọng</option>
              <option value="medium">⚡ Warning - Cảnh báo</option>
              <option value="low">✓ Info - Thông tin</option>
            </select>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 pt-4">
            <button
              type="submit"
              className="flex-1 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              💾 Lưu DTC
            </button>
            <button
              type="button"
              onClick={onClose}
              className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-3 px-6 rounded-lg transition-colors"
            >
              Hủy
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

