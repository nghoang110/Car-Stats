import { create } from 'zustand'
import {
  provincesData,
  getTotalCarCount,
  getProvincesSorted,
  getRegions,
} from '../data/vehicleData'

export const useStore = create((set) => ({
  // Vehicle data
  provinces: provincesData,
  totalCars: getTotalCarCount(),
  selectedRegion: null,
  selectedProvince: null,
  sortBy: 'carCount', // 'carCount' or 'name'

  // Regions list
  regions: getRegions(),

  // Current page
  currentPage: 'home', // 'home' or 'dtc'

  // Actions
  setSelectedRegion: (region) => set({ selectedRegion: region }),
  setSelectedProvince: (province) => set({ selectedProvince: province }),
  setSortBy: (sortBy) => set({ sortBy }),
  setCurrentPage: (page) => set({ currentPage: page }),
}))
