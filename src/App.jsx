import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './components/HomePage'
import DashboardPage from './components/DashboardPage'
import DTCStatsPage from './components/DTCStatsPage'
import XeYeuLanding from './components/XeYeuLanding'
import MyGaraLanding from './components/MyGaraLanding'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/car-dashboard" element={<DashboardPage />} />
        <Route path="/car-dtcs" element={<DTCStatsPage />} />
        <Route path="/landing-xe-yeu" element={<XeYeuLanding />} />
        <Route path="/landing-my-gara" element={<MyGaraLanding />} />
        {/* Redirect unknown routes to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  )
}
