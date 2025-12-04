/**
 * Mapping các model 3D có sẵn
 * Format: 'brand:model' -> absolute path từ public folder
 * 
 * Lưu ý: File 3D được đặt trong public/assets/3D/ để:
 * - Không bị hash tên file khi build
 * - Đường dẫn tương đối (.bin, textures) hoạt động đúng
 * - Tất cả file được copy vào dist/ khi build
 */
const model3DMap = {
  'porsche:911': '/assets/3D/porsche/911/911-3D.gltf',
  'porsche:cayenne': '/assets/3D/porsche/cayenne/scene.gltf',
  'porsche:macan': '/assets/3D/porsche/macan/macan-3D.gltf',
  'toyota:camry': '/assets/3D/toyota/camry/camry-3D.gltf',
  // Thêm các model khác ở đây khi có
  // Format: 'brand:model': '/assets/3D/brand/model/file.gltf',
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

