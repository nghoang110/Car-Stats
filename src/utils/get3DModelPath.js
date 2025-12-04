// Import các model 3D có sẵn
// Thêm import mới khi có model 3D mới
import porsche911 from '../assets/3D/porsche/911/911-3D.gltf?url'
import porscheCayenne from '../assets/3D/porsche/cayenne/scene.gltf?url'
import porscheMacan from '../assets/3D/porsche/macan/macan-3D.gltf?url'
import toyotaCamry from '../assets/3D/toyota/camry/camry-3D.gltf?url'

/**
 * Mapping các model 3D có sẵn
 * Format: 'brand:model' -> import path
 */
const model3DMap = {
  'porsche:911': porsche911,
  'porsche:cayenne': porscheCayenne,
  'porsche:macan': porscheMacan,
  'toyota:camry': toyotaCamry,
  // Thêm các model khác ở đây khi có
  // 'toyota:camry': toyotaCamry,
}

/**
 * Helper function để lấy đường dẫn file 3D dựa trên brand và model name
 * Format: assets/3D/{brand}/{model}-3D.gltf
 * 
 * @param {string} brand - Tên hãng xe (ví dụ: 'Porsche')
 * @param {string} modelName - Tên dòng xe (ví dụ: '911')
 * @returns {string|null} - Đường dẫn đến file 3D hoặc null nếu không tìm thấy
 */
export function get3DModelPath(brand, modelName) {
  if (!brand || !modelName) {
    return null
  }

  // Tạo key để lookup trong map
  const brandLower = brand.toLowerCase()
  const modelFormatted = modelName.replace(/\s+/g, '-').toLowerCase()
  const key = `${brandLower}:${modelFormatted}`
  
  // Debug: log để kiểm tra
  console.log('Looking for 3D model:', { brand, modelName, key, path: model3DMap[key] })
  
  // Trả về path từ map nếu có, hoặc null
  return model3DMap[key] || null
}

