import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const location = useLocation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)

  const isActive = (path) => {
    if (!path) return false
    if (path === '/') {
      return location.pathname === '/'
    }
    return location.pathname === path
  }

  const isParentActive = (children) => {
    if (!children) return false
    return children.some(child => isActive(child.path))
  }

  const navLinks = [
    { path: '/', label: 'Trang chủ', isLink: true },
    {
      label: 'Landing Page',
      isLink: false,
      children: [
        { path: '/landing-xe-yeu', label: 'Xế Yêu' },
        { path: '/landing-xe-yeu-2', label: 'Xế Yêu 2' },
        { path: '/landing-my-gara', label: 'My Gara' },
        { path: '/landing-my-gara-2', label: 'My Gara 2' },
      ]
    },
    { path: '/car-dashboard', label: 'Dashboard', isLink: true },
    { path: '/car-dtcs', label: 'DTC Stats', isLink: true },
  ]

  const toggleDropdown = (label) => {
    if (openDropdown === label) {
      setOpenDropdown(null)
    } else {
      setOpenDropdown(label)
    }
  }

  return (
    <nav className="relative sticky top-0 z-50 transition-all duration-300 bg-black/20 backdrop-blur-md border-b border-white/10">
      {/* Gradient overlay effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-blue-600/5 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between h-20">
          {/* Logo và Brand - Enhanced */}
          <Link to="/" className="flex items-center space-x-3 group relative">
            <div className="relative">
              <div className="relative flex-shrink-0 p-2.5 transition-all duration-300">
                <img
                  src="/minilogo.png"
                  alt="Car-Stats Logo"
                  className="h-8 w-8 object-contain transition-transform group-hover:scale-110 group-hover:rotate-3"
                />
              </div>
            </div>
            <div className="hidden sm:block">
              <span className="font-bold text-xl tracking-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent text-white">
                Car-Stats
              </span>
              <p className="text-sm font-medium tracking-wider uppercase text-gray-300">
                Thống kê xe ô tô
              </p>
            </div>
          </Link>

          {/* Desktop Navigation - Enhanced */}
          <div className="hidden md:flex items-center space-x-3">
            {navLinks.map((link, index) => (
              link.isLink ? (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`
                    relative px-6 py-3 rounded-xl font-medium text-base transition-all duration-300 group overflow-hidden
                    ${isActive(link.path)
                      ? 'text-white shadow-lg shadow-blue-500/30 bg-white/10'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                    }
                  `}
                >
                  {isActive(link.path) && (
                    <span className="absolute inset-0 bg-white/20 backdrop-blur-sm"></span>
                  )}

                  {!isActive(link.path) && (
                    <span className="absolute inset-0 bg-gradient-to-r from-blue-600/0 to-purple-600/0 group-hover:from-blue-600/10 group-hover:to-purple-600/10 transition-all duration-300"></span>
                  )}

                  <span className="relative flex items-center space-x-2">
                    <span className="font-semibold">{link.label}</span>
                  </span>

                  {isActive(link.path) && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent rounded-full"></span>
                  )}
                </Link>
              ) : (
                <div key={index} className="relative group">
                  <button
                    className={`
                        relative px-6 py-3 rounded-xl font-medium text-base transition-all duration-300 group overflow-hidden flex items-center space-x-1 outline-none
                        ${isParentActive(link.children)
                        ? 'text-white shadow-lg shadow-blue-500/30 bg-white/10'
                        : 'text-white/80 hover:text-white hover:bg-white/10'
                      }
                        `}
                  >
                    {isParentActive(link.children) && (
                      <span className="absolute inset-0 bg-white/20 backdrop-blur-sm"></span>
                    )}
                    {!isParentActive(link.children) && (
                      <span className="absolute inset-0 bg-gradient-to-r from-blue-600/0 to-purple-600/0 group-hover:from-blue-600/10 group-hover:to-purple-600/10 transition-all duration-300"></span>
                    )}
                    <span className="relative font-semibold">{link.label}</span>
                    <svg className="w-4 h-4 relative" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>

                    {isParentActive(link.children) && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent rounded-full"></span>
                    )}
                  </button>
                  {/* Dropdown Menu */}
                  <div className="absolute top-full left-0 mt-2 w-56 bg-gray-900/90 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl overflow-hidden transform opacity-0 translate-y-2 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-300 z-50">
                    {link.children.map((child) => (
                      <Link
                        key={child.path}
                        to={child.path}
                        className={`block px-5 py-3 text-sm font-medium transition-colors hover:bg-white/10 ${isActive(child.path) ? 'text-blue-400 bg-white/5' : 'text-gray-300 hover:text-white'}`}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )
            ))}
          </div>

          {/* Mobile menu button - Enhanced */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden relative p-2.5 focus:outline-none transition-colors group text-white/80 hover:text-white"
            aria-label="Toggle menu"
          >
            <div className="absolute inset-0 bg-gray-800/50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <svg
              className="relative h-7 w-7 transition-transform duration-300"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              style={{ transform: isMobileMenuOpen ? 'rotate(90deg)' : 'rotate(0deg)' }}
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation - Enhanced */}
        <div
          className={`
            md:hidden overflow-hidden transition-all duration-300 ease-in-out
            ${isMobileMenuOpen ? 'max-h-[32rem] opacity-100 py-4' : 'max-h-0 opacity-0'}
          `}
        >
          <div className="flex flex-col space-y-2 border-t border-white/10 pt-4">
            {navLinks.map((link, index) => (
              link.isLink ? (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`
                    relative px-5 py-3.5 rounded-xl font-medium text-base transition-all duration-300 overflow-hidden group
                    ${isActive(link.path)
                      ? 'text-white shadow-lg shadow-blue-500/30 bg-white/10'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                    }
                    `}
                >
                  {isActive(link.path) && (
                    <span className="absolute inset-0 bg-white/20 backdrop-blur-sm"></span>
                  )}

                  {!isActive(link.path) && (
                    <span className="absolute inset-0 bg-gradient-to-r from-blue-600/0 to-purple-600/0 group-hover:from-blue-600/10 group-hover:to-purple-600/10 transition-all duration-300"></span>
                  )}

                  <span className="relative flex items-center space-x-3">
                    <span className="font-semibold">{link.label}</span>
                  </span>
                </Link>
              ) : (
                <div key={index} className="flex flex-col">
                  <button
                    onClick={() => toggleDropdown(link.label)}
                    className={`
                            relative px-5 py-3.5 rounded-xl font-medium text-base transition-all duration-300 overflow-hidden group w-full text-left flex justify-between items-center
                            ${isParentActive(link.children) || openDropdown === link.label
                        ? 'text-white bg-white/5'
                        : 'text-white/80 hover:text-white hover:bg-white/10'
                      }
                         `}
                  >
                    <span className="font-semibold">{link.label}</span>
                    <svg className={`w-4 h-4 transition-transform ${openDropdown === link.label ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </button>
                  <div className={`
                            pl-4 flex flex-col space-y-1 transition-all duration-300 overflow-hidden
                            ${openDropdown === link.label ? 'max-h-40 py-2 opacity-100' : 'max-h-0 opacity-0'}
                       `}>
                    {link.children.map(child => (
                      <Link
                        key={child.path}
                        to={child.path}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`
                                    block px-5 py-3 rounded-xl text-sm font-medium transition-colors
                                    ${isActive(child.path) ? 'text-blue-400 bg-white/10' : 'text-gray-300 hover:text-white hover:bg-white/5'}
                                `}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}