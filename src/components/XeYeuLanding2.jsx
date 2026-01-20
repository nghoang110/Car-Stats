import React, { useState, useEffect } from 'react';

// Images (Using existing assets)
import habitImg from '../assets/landing/habit.png';
import obdPhoneImg from '../assets/landing/OBDII&phone.png';
import assistantImg from '../assets/landing/assistant.png';
import deviceImg from '../assets/landing/device.png';
import plugInImg from '../assets/landing/plug-in.png';
import connectedImg from '../assets/landing/connected.png';

export default function XeYeuLanding2() {
    return (
        <div className="min-h-screen bg-white font-sans text-gray-900">

            {/* 1. Hero Section */}
            <section className="flex flex-col lg:flex-row min-h-[600px] lg:h-[80vh]">
                {/* Left Content */}
                <div className="lg:w-1/2 bg-[#003366] flex items-center justify-center p-8 lg:p-16 relative overflow-hidden">
                    <div className="relative z-10 max-w-xl text-white space-y-6">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                            Xế Yêu 2.0 - Trợ Lý<br />
                            Thông Minh Cho<br />
                            Mọi Hành Trình
                        </h1>
                        <p className="text-lg md:text-xl leading-relaxed opacity-90">
                            Bản nâng cấp tối ưu với kết nối dữ liệu Real-time. Thấu hiểu sức khỏe "xế yêu" của bạn
                            và hỗ trợ cứu hộ khẩn cấp ngay trên điện thoại.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <button className="px-8 py-4 bg-[#FFB347] text-[#003366] rounded-lg font-bold text-lg hover:bg-[#FFA500] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.5 1h-11C5.12 1 4 2.12 4 3.5v17C4 21.88 5.12 23 6.5 23h11c1.38 0 2.5-1.12 2.5-2.5v-17C20 2.12 18.88 1 17.5 1zm-1 20h-9v-1h9v1zm0-3h-9V5.5h9v12.5z" /></svg>
                                Tải App Ngay
                            </button>
                            <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-bold text-lg hover:bg-white hover:text-[#003366] transition-all duration-300">
                                Tìm Hiểu Thêm
                            </button>
                        </div>
                    </div>
                    {/* Decorative Navy Glow */}
                    <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none"></div>
                </div>

                {/* Right Image */}
                <div className="lg:w-1/2 relative bg-gray-100 h-96 lg:h-auto">
                    <img
                        src="https://images.unsplash.com/photo-1449965408869-eaa3f720722e40d?q=80&w=2070&auto=format&fit=crop"
                        alt="Happy Driver v2"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-[#003366]/10"></div>
                </div>
            </section>

            {/* 2. Pain Points Section */}
            <section className="py-20 px-4 bg-gray-50 text-center">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
                        Đừng Để "Xế Yêu" Nằm Đường Vì Những Lỗi Không Đáng Có
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8 mt-12">
                        <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                            <div className="w-16 h-16 bg-[#003366]/10 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                                <svg className="w-8 h-8 text-[#003366]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">Lỗi Đột Ngột</h3>
                            <p className="text-gray-600">Những lỗi engine nhỏ nếu không xử lý kịp thời sẽ dẫn đến hỏng hóc nặng.</p>
                        </div>
                        <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                            <div className="w-16 h-16 bg-[#003366]/10 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                                <svg className="w-8 h-8 text-[#003366]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">Chi Phí Bảo Dưỡng Cao</h3>
                            <p className="text-gray-600">Không nắm rõ lịch trình bảo dưỡng dẫn đến việc thay thế phụ tùng lãng phí.</p>
                        </div>
                        <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                            <div className="w-16 h-16 bg-[#003366]/10 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                                <svg className="w-8 h-8 text-[#003366]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">Khó Tìm Gara Tin Cậy</h3>
                            <p className="text-gray-600">Loay hoay tìm cứu hộ hoặc gara uy tín khi gặp sự cố trên đường vắng.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Core Features */}
            <section className="py-24 px-4 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Quyền Năng Của "Xế Yêu" 2.0</h2>
                        <p className="text-lg text-gray-600">Tất cả những gì bạn cần để làm chủ chiếc xe của mình.</p>
                    </div>

                    <div className="space-y-32">
                        {/* Feature 1 */}
                        <div className="flex flex-col md:flex-row items-center gap-16">
                            <div className="w-full md:w-1/2">
                                <img src={habitImg} alt="Habit Tracking" className="w-full rounded-2xl shadow-2xl border border-gray-100" />
                            </div>
                            <div className="w-full md:w-1/2 space-y-6">
                                <span className="text-[#FFB347] font-bold"># TRỢ LÝ THÓI QUEN LÁI XE</span>
                                <h3 className="text-3xl md:text-4xl font-bold text-gray-900">Chuẩn hóa phong cách lái, tiết kiệm nhiên liệu</h3>
                                <p className="text-lg text-gray-600">Theo dõi hành vi phanh gấp, tăng tốc đột ngột để đưa ra điểm số lái xe an toàn và gợi ý cách tối ưu tiêu hao nhiên liệu.</p>
                            </div>
                        </div>

                        {/* Feature 2 */}
                        <div className="flex flex-col md:flex-row-reverse items-center gap-16">
                            <div className="w-full md:w-1/2">
                                <img src={obdPhoneImg} alt="OBD Connection" className="w-full rounded-2xl shadow-2xl border border-gray-100" />
                            </div>
                            <div className="w-full md:w-1/2 space-y-6">
                                <span className="text-[#FFB347] font-bold"># BÁC SĨ RIÊNG CỦA XE</span>
                                <h3 className="text-3xl md:text-4xl font-bold text-gray-900">Đọc lỗi máy, xóa lỗi nhanh qua Bluetooth</h3>
                                <p className="text-lg text-gray-600">Kết nối trực tiếp với cổng OBDII, cảnh báo ngay lập tức các lỗi engine, acquy, áp suất lốp trước khi chúng trở nên nghiêm trọng.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Software Packages (The new section requested) */}
            <section className="py-24 px-4 bg-[#003366] text-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Gói Phần Mềm & Dịch Vụ</h2>
                        <p className="text-lg text-white/80 max-w-2xl mx-auto">Chọn gói phù hợp để tận hưởng trọn vẹn công nghệ chăm sóc xe thông minh.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Free Tier */}
                        <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 flex flex-col items-center hover:bg-white/10 transition-all">
                            <h3 className="text-2xl font-bold mb-2">Standard</h3>
                            <div className="text-3xl font-bold text-[#FFB347] mb-6">Miễn Phí</div>
                            <ul className="space-y-4 mb-8 w-full">
                                <li className="flex items-center gap-2"><svg className="w-5 h-5 text-[#FFB347]" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" /></svg>Đọc lỗi cơ bản</li>
                                <li className="flex items-center gap-2"><svg className="w-5 h-5 text-[#FFB347]" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" /></svg>Nhắc lịch bảo trì</li>
                            </ul>
                            <button className="w-full py-4 border-2 border-white/30 rounded-xl font-bold hover:bg-white hover:text-[#003366] transition-all">Tải Về Ngay</button>
                        </div>

                        {/* Premium Tier */}
                        <div className="bg-white rounded-3xl p-8 shadow-2xl flex flex-col items-center relative transform scale-105 z-10 text-gray-900 border-4 border-[#FFB347]">
                            <div className="absolute -top-5 bg-[#FFB347] text-[#003366] px-6 py-2 rounded-full font-bold text-sm">ĐƯỢC ĐỀ XUẤT</div>
                            <h3 className="text-2xl font-bold mb-2">Premium</h3>
                            <div className="text-3xl font-bold text-[#003366] mb-6">499.000đ<span className="text-sm font-normal text-gray-500">/năm</span></div>
                            <ul className="space-y-4 mb-8 w-full">
                                <li className="flex items-center gap-2"><svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" /></svg>Phân tích hành vi lái xe chuyên sâu</li>
                                <li className="flex items-center gap-2"><svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" /></svg>Kết nối Gara tin cậy 24/7</li>
                                <li className="flex items-center gap-2"><svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" /></svg>Hồ sơ bệnh án điện tử cho xe</li>
                            </ul>
                            <button className="w-full py-4 bg-[#003366] text-white rounded-xl font-bold hover:bg-black transition-all shadow-lg">Mua Ngay</button>
                        </div>

                        {/* Enterprise Tier */}
                        <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 flex flex-col items-center hover:bg-white/10 transition-all">
                            <h3 className="text-2xl font-bold mb-2">Fleet</h3>
                            <div className="text-3xl font-bold text-[#FFB347] mb-6">Liên Hệ</div>
                            <ul className="space-y-4 mb-8 w-full text-white/80">
                                <li className="flex items-center gap-2"><svg className="w-5 h-5 text-[#FFB347]" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" /></svg>Quản lý đội xe kinh doanh</li>
                                <li className="flex items-center gap-2"><svg className="w-5 h-5 text-[#FFB347]" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" /></svg>Tích hợp hệ thống quản trị ERP</li>
                            </ul>
                            <button className="w-full py-4 border-2 border-white/30 rounded-xl font-bold hover:bg-white hover:text-[#003366] transition-all">Yêu Cầu Demo</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Footer CTA */}
            <section className="bg-white py-24 px-4 text-center">
                <div className="max-w-3xl mx-auto space-y-8">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#003366]">Bắt Đầu Hành Trình Cùng Xế Yêu 2.0</h2>
                    <p className="text-xl text-gray-600">Đăng ký để nhận bộ thiết bị OBDII Bluetooth miễn phí (Dành cho 100 khách hàng đầu tiên).</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <input type="text" placeholder="Họ và tên" className="px-6 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#003366] outline-none" />
                        <input type="tel" placeholder="Số điện thoại" className="px-6 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#003366] outline-none" />
                        <button className="px-10 py-4 bg-[#FFB347] text-[#003366] rounded-xl font-bold hover:bg-[#FFA500] transition-all shadow-lg">Gửi Yêu Cầu</button>
                    </div>
                </div>
            </section>
        </div>
    );
}
