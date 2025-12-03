// src/utils/dtcStorage.js
// Utility functions để quản lý DTC data trong localStorage

const STORAGE_KEY = 'car_stats_dtc_data'

// Load dữ liệu từ localStorage và merge với dữ liệu mặc định
export const loadDTCData = (defaultDtcData) => {
  try {
    const savedData = localStorage.getItem(STORAGE_KEY)
    if (!savedData) {
      return defaultDtcData
    }
    
    const customData = JSON.parse(savedData)
    // Merge custom data với default data
    return mergeDTCData(defaultDtcData, customData)
  } catch (error) {
    console.error('Error loading DTC data:', error)
    return defaultDtcData
  }
}

// Merge dữ liệu custom với dữ liệu mặc định
const mergeDTCData = (defaultData, customData) => {
  const merged = JSON.parse(JSON.stringify(defaultData)) // Deep clone
  
  customData.forEach((customBrand) => {
    const existingBrandIndex = merged.findIndex(b => b.brand === customBrand.brand)
    
    if (existingBrandIndex >= 0) {
      // Brand đã tồn tại, merge models
      const existingBrand = merged[existingBrandIndex]
      customBrand.models.forEach((customModel) => {
        const existingModelIndex = existingBrand.models.findIndex(m => m.name === customModel.name)
        
        if (existingModelIndex >= 0) {
          // Model đã tồn tại, merge DTC codes (tránh trùng lặp)
          const existingModel = existingBrand.models[existingModelIndex]
          const existingCodes = new Set(existingModel.dtcCodes.map(d => d.code))
          
          customModel.dtcCodes.forEach((dtc) => {
            if (!existingCodes.has(dtc.code)) {
              existingModel.dtcCodes.push(dtc)
            }
          })
        } else {
          // Model mới, thêm vào
          existingBrand.models.push(customModel)
        }
      })
    } else {
      // Brand mới, thêm vào
      merged.push(customBrand)
    }
  })
  
  return merged
}

// Lưu DTC mới vào localStorage
export const saveDTC = (brand, model, dtcCode) => {
  try {
    const savedData = localStorage.getItem(STORAGE_KEY)
    let customData = savedData ? JSON.parse(savedData) : []
    
    // Tìm hoặc tạo brand
    let brandData = customData.find(b => b.brand === brand)
    if (!brandData) {
      brandData = {
        id: Date.now(),
        brand: brand,
        models: []
      }
      customData.push(brandData)
    }
    
    // Tìm hoặc tạo model
    let modelData = brandData.models.find(m => m.name === model)
    if (!modelData) {
      modelData = {
        name: model,
        dtcCodes: []
      }
      brandData.models.push(modelData)
    }
    
    // Kiểm tra DTC code đã tồn tại chưa
    const existingDTC = modelData.dtcCodes.find(d => d.code === dtcCode.code)
    if (!existingDTC) {
      modelData.dtcCodes.push(dtcCode)
      localStorage.setItem(STORAGE_KEY, JSON.stringify(customData))
      return true
    }
    
    return false // DTC đã tồn tại
  } catch (error) {
    console.error('Error saving DTC:', error)
    return false
  }
}

// Xóa DTC từ localStorage
export const deleteDTC = (brand, model, dtcCode) => {
  try {
    const savedData = localStorage.getItem(STORAGE_KEY)
    if (!savedData) return false
    
    const customData = JSON.parse(savedData)
    const brandData = customData.find(b => b.brand === brand)
    if (!brandData) return false
    
    const modelData = brandData.models.find(m => m.name === model)
    if (!modelData) return false
    
    modelData.dtcCodes = modelData.dtcCodes.filter(d => d.code !== dtcCode)
    
    // Xóa model nếu không còn DTC nào
    if (modelData.dtcCodes.length === 0) {
      brandData.models = brandData.models.filter(m => m.name !== model)
    }
    
    // Xóa brand nếu không còn model nào
    if (brandData.models.length === 0) {
      customData.splice(customData.indexOf(brandData), 1)
    }
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(customData))
    return true
  } catch (error) {
    console.error('Error deleting DTC:', error)
    return false
  }
}

// Reset về dữ liệu mặc định
export const resetDTCData = () => {
  localStorage.removeItem(STORAGE_KEY)
}

// Lấy danh sách brands từ custom data
export const getCustomBrands = () => {
  try {
    const savedData = localStorage.getItem(STORAGE_KEY)
    if (!savedData) return []
    const customData = JSON.parse(savedData)
    return customData.map(b => b.brand)
  } catch (error) {
    console.error('Error getting custom brands:', error)
    return []
  }
}

