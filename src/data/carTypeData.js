// Detailed car type statistics by province
// Car types: Sedan, SUV, Truck, Minibus, Taxi, Motorbike (for reference)

export const getCarTypesByProvince = (provinceName) => {
  // Base car type distribution percentages (can vary by province)
  const baseDistribution = {
    'Sedan': 0.35,
    'SUV': 0.25,
    'Truck': 0.15,
    'Minibus': 0.10,
    'Taxi': 0.08,
    'Other': 0.07,
  }

  // Regional adjustments based on economic characteristics
  const regionalAdjustments = {
    'Hà Nội': { 'Sedan': 0.45, 'SUV': 0.28, 'Truck': 0.10, 'Minibus': 0.08, 'Taxi': 0.06, 'Other': 0.03 },
    'TP Hồ Chí Minh': { 'Sedan': 0.42, 'SUV': 0.30, 'Truck': 0.12, 'Minibus': 0.08, 'Taxi': 0.05, 'Other': 0.03 },
    'Hải Phòng': { 'Sedan': 0.38, 'SUV': 0.26, 'Truck': 0.18, 'Minibus': 0.10, 'Taxi': 0.05, 'Other': 0.03 },
    'Đà Nẵng': { 'Sedan': 0.40, 'SUV': 0.28, 'Truck': 0.14, 'Minibus': 0.09, 'Taxi': 0.06, 'Other': 0.03 },
    'Cần Thơ': { 'Sedan': 0.36, 'SUV': 0.24, 'Truck': 0.20, 'Minibus': 0.12, 'Taxi': 0.05, 'Other': 0.03 },
    'Bình Dương': { 'Sedan': 0.34, 'SUV': 0.24, 'Truck': 0.22, 'Minibus': 0.10, 'Taxi': 0.07, 'Other': 0.03 },
    'Đồng Nai': { 'Sedan': 0.33, 'SUV': 0.23, 'Truck': 0.24, 'Minibus': 0.10, 'Taxi': 0.07, 'Other': 0.03 },
  }

  // Get distribution for the province
  const distribution = regionalAdjustments[provinceName] || baseDistribution

  // Calculate actual counts based on total cars for the province
  // This will be populated from vehicleData
  return distribution
}

// Get all car type statistics for a province
export const getCarTypeStats = (provinceName, totalCars) => {
  const distribution = getCarTypesByProvince(provinceName)

  return Object.entries(distribution).map(([carType, percentage]) => ({
    carType,
    count: Math.round(totalCars * percentage),
    percentage: (percentage * 100).toFixed(1),
  }))
}

// Car type colors for visualization
export const getCarTypeColor = (carType) => {
  const colors = {
    'Sedan': '#3b82f6', // Blue
    'SUV': '#ef4444', // Red
    'Truck': '#f97316', // Orange
    'Minibus': '#8b5cf6', // Purple
    'Taxi': '#eab308', // Yellow
    'Other': '#6b7280', // Gray
  }
  return colors[carType] || '#6b7280'
}

// Get car type statistics for all provinces
export const getAllCarTypeStats = (provincesData) => {
  return provincesData.map((province) => ({
    province: province.name,
    carTypes: getCarTypeStats(province.name, province.carCount),
    total: province.carCount,
  }))
}
