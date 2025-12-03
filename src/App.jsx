import React from 'react'
import { useStore } from './store/useStore'
import HomePage from './components/HomePage'
import DTCStatsPage from './components/DTCStatsPage'

export default function App() {
  const { currentPage, setCurrentPage } = useStore()

  return (
    <div>
      {currentPage === 'home' ? <HomePage /> : <DTCStatsPage />}

      {/* Navigation Button - Always visible for quick switching */}
      {currentPage === 'dtc' && (
        <div className="fixed bottom-8 right-8">
          <button
            onClick={() => setCurrentPage('home')}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all transform hover:scale-105"
          >
            ← Quay lại Home
          </button>
        </div>
      )}
    </div>
  )
}
