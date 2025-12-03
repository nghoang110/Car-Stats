// Historical vehicle data from 2000 to 2025 for each province
// Data is calculated based on 2025 actual values with realistic growth patterns

import { provincesData } from './vehicleData'

// Growth patterns: different provinces have different growth rates
// Rural/Mountain areas: slower growth (1.5-2% per year)
// Urban/Industrial: faster growth (3-5% per year)
// Major cities: fastest growth (4-6% per year)

const getGrowthRate = (provinceName) => {
  // Major cities - fastest growth
  const majorCities = ['TP Hồ Chí Minh', 'Hà Nội', 'Hải Phòng', 'Đà Nẵng', 'Cần Thơ']
  if (majorCities.includes(provinceName)) return 0.045 // 4.5% per year

  // Industrial zones - medium-high growth
  const industrialZones = [
    'Bình Dương',
    'Đồng Nai',
    'Long An',
    'Tiền Giang',
    'Bà Rịa - Vũng Tàu',
    'Hải Dương',
    'Bắc Ninh',
  ]
  if (industrialZones.includes(provinceName)) return 0.035 // 3.5% per year

  // Medium provinces - medium growth
  const mediumProvinces = [
    'Thanh Hóa',
    'Nghệ An',
    'Quảng Ninh',
    'Khánh Hòa',
    'Quảng Nam',
    'Đắk Lắk',
    'Lâm Đồng',
  ]
  if (mediumProvinces.includes(provinceName)) return 0.025 // 2.5% per year

  // Others - slow growth
  return 0.015 // 1.5% per year
}

export const getHistoricalData = (provinceName) => {
  const province = provincesData.find((p) => p.name === provinceName)
  if (!province) return []

  const value2025 = province.carCount
  const growthRate = getGrowthRate(provinceName)

  // Calculate historical values by working backwards from 2025
  // Formula: value_2000 = value_2025 / (1 + growthRate)^25
  const value2000 = value2025 / Math.pow(1 + growthRate, 25)

  // Generate year-by-year data
  return Array.from({ length: 26 }, (_, i) => {
    const year = 2000 + i
    const count = Math.round(value2000 * Math.pow(1 + growthRate, i))
    return {
      year,
      count,
      province: provinceName,
    }
  })
}

// Get all provinces with their historical data
export const getAllProvincesHistorical = () => {
  return provincesData.map((province) => ({
    name: province.name,
    data: getHistoricalData(province.name),
  }))
}
