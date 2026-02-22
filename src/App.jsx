import React from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './components/HomePage'
import DashboardPage from './components/DashboardPage'
import DTCStatsPage from './components/DTCStatsPage'
import XeYeuLanding2 from './components/XeYeuLanding2'
import MyGaraLanding2 from './components/MyGaraLanding2'
import PasswordProtection from './components/PasswordProtection'

export default function App() {
  const location = useLocation()
  const isLandingPage = location.pathname.startsWith('/landing-')

  return (
    <div className="min-h-screen bg-gray-50">
      {!isLandingPage && <Navbar />}
      <Routes>
        {/* Trang không cần mật khẩu */}
        <Route path="/" element={<HomePage />} />
        <Route path="/car-dashboard" element={<DashboardPage />} />
        <Route path="/car-dtcs" element={<DTCStatsPage />} />

        {/* Các landing pages CÓ mật khẩu */}

        <Route
          path="/landing-xe-yeu-2"
          element={
            <PasswordProtection password="infinieye">
              <XeYeuLanding2 />
            </PasswordProtection>
          }
        />

        <Route
          path="/landing-my-gara-2"
          element={
            <PasswordProtection password="infinieye">
              <MyGaraLanding2 />
            </PasswordProtection>
          }
        />

        {/* Redirect unknown routes to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  )
}
