import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import headerImage from '../assets/image/header.jpg'

export default function HomePage() {
  const featuresRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    )

    if (featuresRef.current) {
      observer.observe(featuresRef.current)
    }

    return () => {
      if (featuresRef.current) {
        observer.unobserve(featuresRef.current)
      }
    }
  }, [])

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section with Image Background - Navbar is already rendered by App.jsx */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={headerImage}
            alt="Car Stats Header"
            className="w-full h-full object-cover"
          />
          {/* Dark overlay gradient - lighter on left, darker on right */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/85 to-gray-900/70"></div>
          {/* Blue accent overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 via-transparent to-purple-600/20"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <div className="space-y-8 text-white">
              {/* Solution Labels */}
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-blue-600/20 backdrop-blur-sm border border-blue-500/30 rounded-full text-sm font-medium text-blue-300">
                  Best solutions
                </span>
                <span className="px-4 py-2 bg-purple-600/20 backdrop-blur-sm border border-purple-500/30 rounded-full text-sm font-medium text-purple-300">
                  Automotive and Cyber Security
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Your car{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  need help
                </span>
              </h1>

              {/* Description */}
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl">
                Like the human body, before illness occurs, every part of car sends out signals for help. 
                Did you know, every day, a car is sending about{' '}
                <span className="text-blue-400 font-semibold">two million messages</span>.
              </p>

              {/* CTA Button */}
              <div className="pt-4">
                <Link
                  to="/car-dashboard"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold text-lg rounded-xl shadow-2xl shadow-blue-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-blue-500/70"
                >
                  <span>Request Demo</span>
                  <svg
                    className="ml-2 w-5 h-5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Right Side - Logo Overlay */}
            <div className="relative lg:block hidden">
              <div className="relative">
                {/* Decorative elements */}
                <div className="absolute -top-10 -right-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>
                
                {/* Logo container with overlay */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/40 via-purple-600/30 to-transparent z-10"></div>
                  {/* Logo display area */}
                  <div className="relative aspect-[4/3] bg-gray-800/50 backdrop-blur-sm">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative w-full h-full flex items-center justify-center">
                        {/* Glow effect behind logo */}
                        <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full"></div>
                        {/* Logo container - fill the available space */}
                        <div className="relative w-full h-full bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl flex items-center justify-center p-6">
                          <img
                            src="/minilogo.png"
                            alt="Car-Stats Logo"
                            className="w-full h-full object-contain drop-shadow-2xl"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative curve separator */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </section>

      {/* Additional Content Sections */}
      <section ref={featuresRef} className="bg-gradient-to-b from-gray-50 to-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header with animation */}
          <div 
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/20 rounded-full text-sm font-semibold text-blue-600">
                Tính năng nổi bật
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Giải pháp thông minh cho xe của bạn
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Theo dõi và phân tích sức khỏe xe của bạn với công nghệ tiên tiến
            </p>
          </div>

          {/* Features Grid with staggered animation */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div 
              className={`group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200 overflow-hidden ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: isVisible ? '100ms' : '0ms' }}
            >
              {/* Gradient background on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-purple-50/0 group-hover:from-blue-50/50 group-hover:to-purple-50/30 transition-all duration-500"></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Number badge */}
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 text-white font-bold text-lg mb-6 shadow-lg shadow-blue-500/30">
                  01
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  Thống kê chi tiết
                </h3>
                <p className="text-gray-600 leading-relaxed text-base">
                  Xem thống kê số lượng xe tại các tỉnh thành Việt Nam với dữ liệu cập nhật theo thời gian thực
                </p>
                
                {/* Decorative line */}
                <div className="mt-6 h-1 w-0 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-500 rounded-full"></div>
              </div>
            </div>

            {/* Feature 2 */}
            <div 
              className={`group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-purple-200 overflow-hidden ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: isVisible ? '200ms' : '0ms' }}
            >
              {/* Gradient background on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50/0 to-pink-50/0 group-hover:from-purple-50/50 group-hover:to-pink-50/30 transition-all duration-500"></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Number badge */}
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-purple-700 text-white font-bold text-lg mb-6 shadow-lg shadow-purple-500/30">
                  02
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                  DTC Diagnostics
                </h3>
                <p className="text-gray-600 leading-relaxed text-base">
                  Chẩn đoán lỗi DTC với mô hình 3D trực quan, giúp bạn hiểu rõ vấn đề của xe một cách dễ dàng
                </p>
                
                {/* Decorative line */}
                <div className="mt-6 h-1 w-0 bg-gradient-to-r from-purple-600 to-pink-600 group-hover:w-full transition-all duration-500 rounded-full"></div>
              </div>
            </div>

            {/* Feature 3 */}
            <div 
              className={`group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200 overflow-hidden ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: isVisible ? '300ms' : '0ms' }}
            >
              {/* Gradient background on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-cyan-50/0 group-hover:from-blue-50/50 group-hover:to-cyan-50/30 transition-all duration-500"></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Number badge */}
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-600 to-cyan-700 text-white font-bold text-lg mb-6 shadow-lg shadow-cyan-500/30">
                  03
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-cyan-600 transition-colors">
                  Mô hình 3D
                </h3>
                <p className="text-gray-600 leading-relaxed text-base">
                  Xem mô hình 3D của các dòng xe phổ biến với độ chi tiết cao và tương tác mượt mà
                </p>
                
                {/* Decorative line */}
                <div className="mt-6 h-1 w-0 bg-gradient-to-r from-cyan-600 to-blue-600 group-hover:w-full transition-all duration-500 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

