import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import HomePage from './components/HomePage'
import DTCStatsPage from './components/DTCStatsPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/car-dashboard" element={<HomePage />} />
      <Route path="/car-dtcs" element={<DTCStatsPage />} />
      {/* Redirect unknown routes to home */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
