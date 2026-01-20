import React, { useState } from 'react';

export default function MyGaraLanding() {
    return (
        <div className="min-h-screen bg-white font-sans text-gray-900">

            {/* 1. Hero Section - Split Screen */}
            <section className="flex flex-col lg:flex-row min-h-[600px] lg:h-[85vh]">
                {/* Left Content */}
                <div className="lg:w-1/2 bg-[#003366] flex items-center justify-center p-8 lg:p-16 relative overflow-hidden">
                    <div className="relative z-10 max-w-xl text-white space-y-6">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                            My Gara - Nâng Tầm<br />
                            Xưởng Dịch Vụ Của Bạn<br />
                            Bằng Dữ Liệu Thực
                        </h1>
                        <p className="text-lg md:text-xl leading-relaxed opacity-90">
                            Kết nối trực tiếp với hàng ngàn chủ xe "Xế Yêu". Chủ động nhắc lịch,
                            minh bạch sửa chữa và tối ưu vận hành xưởng chỉ trên một nền tảng duy nhất.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <button className="px-8 py-4 bg-[#FFB347] text-[#003366] rounded-lg font-bold text-lg hover:bg-[#FFA500] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                                Đăng Ký Tư Vấn Miễn Phí
                            </button>
                            <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-bold text-lg hover:bg-white hover:text-[#003366] transition-all duration-300">
                                Xem Demo Sản Phẩm
                            </button>
                        </div>
                    </div>
                    {/* Decorative Navy Glow */}
                    <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none"></div>
                </div>

                {/* Right Image */}
                <div className="lg:w-1/2 relative bg-gray-100 h-96 lg:h-auto">
                    <img
                        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
                        alt="Modern Garage Manager"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-[#003366]/10"></div>
                </div>
            </section>

            {/* 2. Pain Points Section */}
            <section className="py-20 px-4 bg-gray-50 text-center">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Gara của bạn có đang gặp phải những "điểm nghẽn" này?
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8 mt-12">
                        {/* Pain Point 1 */}
                        <div className="flex flex-col items-center">
                            <div className="bg-white rounded-full p-6 w-48 h-48 flex items-center justify-center mb-6 hover:scale-105 transition-transform duration-300 shadow-xl border border-gray-100">
                                <svg className="w-24 h-24 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">Doanh thu thụ động, chờ khách đến</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Không biết khi nào khách cần bảo dưỡng, bỏ lỡ cơ hội upsell vì thiếu thông tin lịch sử xe.
                            </p>
                        </div>

                        {/* Pain Point 2 */}
                        <div className="flex flex-col items-center">
                            <div className="bg-white rounded-full p-6 w-48 h-48 flex items-center justify-center mb-6 hover:scale-105 transition-transform duration-300 shadow-xl border border-gray-100">
                                <svg className="w-24 h-24 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">Khó xây dựng lòng tin</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Khách hàng nghi ngờ vẽ bệnh, khó chứng minh hiệu quả trước và sau khi sửa chữa.
                            </p>
                        </div>

                        {/* Pain Point 3 */}
                        <div className="flex flex-col items-center">
                            <div className="bg-white rounded-full p-6 w-48 h-48 flex items-center justify-center mb-6 hover:scale-105 transition-transform duration-300 shadow-xl border border-gray-100">
                                <svg className="w-24 h-24 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">Vận hành lãng phí, khó quản lý thợ</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Không đo lường được năng suất thực tế của thợ, tỷ lệ xe quay lại bảo hành cao nhưng không rõ nguyên nhân.
                            </p>
                        </div>
                    </div>
                </div>
            </section>



            {/* 4. Key Benefits Section */}
            <section className="py-24 px-4 bg-gray-50 overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-900 mb-20">
                        Lợi Ích Cốt Lõi Cho Gara
                    </h2>

                    {/* Benefit 1: Revenue Growth */}
                    <div className="flex flex-col md:flex-row gap-12 items-center mb-24">
                        {/* Left: Image/Dashboard */}
                        <div className="w-full md:w-1/2 relative bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                            <img
                                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop"
                                alt="Dashboard Analytics"
                                className="w-full rounded-2xl"
                            />
                            <div className="absolute top-12 right-12 bg-[#FFB347] text-[#003366] px-4 py-2 rounded-lg font-bold shadow-lg">
                                +35% Doanh thu
                            </div>
                        </div>

                        {/* Right: Content */}
                        <div className="w-full md:w-1/2 space-y-4">
                            <div className="inline-block px-4 py-2 bg-[#FFB347]/10 text-[#FFB347] rounded-lg font-semibold text-sm">
                                TĂNG TRƯỞNG DOANH THU CHỦ ĐỘNG
                            </div>
                            <h3 className="text-3xl font-bold text-gray-900">
                                Nhắc Lịch Đúng Lúc - Upsell Đúng Chỗ
                            </h3>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Dựa trên số ODO và tình trạng thực tế, hệ thống tự động đề xuất các gói bảo dưỡng phù hợp.
                                Gửi thông báo nhắc nhở khách hàng ngay trên app Xế Yêu.
                            </p>
                            <div className="bg-[#003366]/5 border-l-4 border-[#003366] p-4 rounded">
                                <p className="text-[#003366] font-semibold">
                                    Biến khách vãng lai thành khách hàng thân thiết, tối đa hóa giá trị vòng đời khách hàng.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Benefit 2: Trust & Transparency */}
                    <div className="flex flex-col md:flex-row-reverse gap-12 items-center mb-24">
                        {/* Right: Image */}
                        <div className="w-full md:w-1/2 relative bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                            <img
                                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop"
                                alt="Transparent Report"
                                className="w-full rounded-2xl"
                            />
                            <div className="absolute top-12 left-12 bg-[#003366] text-white px-4 py-2 rounded-lg font-bold shadow-lg">
                                100% Minh bạch
                            </div>
                        </div>

                        {/* Left: Content */}
                        <div className="w-full md:w-1/2 space-y-4">
                            <div className="inline-block px-4 py-2 bg-[#003366]/10 text-[#003366] rounded-lg font-semibold text-sm">
                                GIỮ CHÂN KHÁCH BẰNG SỰ MINH BẠCH
                            </div>
                            <h3 className="text-3xl font-bold text-gray-900">
                                Bằng Chứng Số - Niềm Tin Thực
                            </h3>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Cung cấp cho khách hàng "Hồ sơ bệnh án" điện tử đầy đủ hình ảnh, video hiện trạng hư hỏng
                                và kết quả sau sửa chữa. Mọi hạng mục thay thế đều rõ ràng.
                            </p>
                            <div className="bg-[#003366]/5 border-l-4 border-[#003366] p-4 rounded">
                                <p className="text-[#003366] font-semibold">
                                    Loại bỏ nghi ngờ, khách hàng an tâm tuyệt đối và sẵn sàng giới thiệu gara của bạn.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Benefit 3: Operations Optimization */}
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        {/* Left: Image */}
                        <div className="w-full md:w-1/2 relative bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                            <img
                                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&auto=format&fit=crop"
                                alt="Team Management"
                                className="w-full rounded-2xl"
                            />
                            <div className="absolute top-12 right-12 bg-[#FFB347] text-[#003366] px-4 py-2 rounded-lg font-bold shadow-lg">
                                -40% Lãng phí
                            </div>
                        </div>

                        {/* Right: Content */}
                        <div className="w-full md:w-1/2 space-y-4">
                            <div className="inline-block px-4 py-2 bg-[#FFB347]/10 text-[#FFB347] rounded-lg font-semibold text-sm">
                                TỐI ƯU VẬN HÀNH & CHẤT LƯỢNG
                            </div>
                            <h3 className="text-3xl font-bold text-gray-900">
                                Quản Lý Đội Ngũ Thợ Bài Bản
                            </h3>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Theo dõi tiến độ sửa chữa theo thời gian thực. Đánh giá năng suất và chất lượng tay nghề
                                của từng thợ dựa trên dữ liệu xe quay lại do lỗi tái phát (re-work).
                            </p>
                            <div className="bg-[#003366]/5 border-l-4 border-[#003366] p-4 rounded">
                                <p className="text-[#003366] font-semibold">
                                    Nâng cao tay nghề đội ngũ, giảm thiểu lãng phí thời gian và chi phí bảo hành.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Software Packages Section */}
            <section className="py-24 px-4 bg-[#F9FAFB]">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-[#003366] mb-4">
                            Bảng giá phần mềm
                        </h2>
                        <p className="text-lg text-gray-600">
                            Kích hoạt sức mạnh đầy đủ của My Gara để quản lý xưởng toàn diện.
                        </p>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-8 items-stretch justify-center">
                        {/* PRICING CARD */}
                        <div className="flex-1 bg-white rounded-[40px] p-10 shadow-xl border border-gray-100 flex flex-col justify-between max-w-xl">
                            <div>
                                <div className="flex justify-between items-start mb-8">
                                    <div>
                                        <h3 className="text-2xl font-bold text-[#003366]">My Gara Software</h3>
                                        <p className="text-gray-500 text-sm">Trợ lý ảo cho mọi chủ xưởng</p>
                                    </div>
                                    <div className="w-10 h-10 bg-[#FFB347]/20 rounded-xl flex items-center justify-center">
                                        <svg className="w-6 h-6 text-[#FFB347]" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                </div>

                                <div className="space-y-4 mb-10">
                                    {/* Option 1 */}
                                    <div className="relative p-6 rounded-2xl bg-gray-50 border border-gray-200 cursor-pointer group hover:border-[#003366]/30 transition-all">
                                        <div className="flex justify-between items-center">
                                            <div>
                                                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">ĐĂNG KÝ 6 THÁNG</p>
                                                <div className="flex items-baseline gap-1">
                                                    <span className="text-2xl font-black text-[#003366]">10 USD</span>
                                                    <span className="text-gray-400 text-sm italic">/ tháng</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Option 2 (Active/Best Saver) */}
                                    <div className="relative p-6 rounded-2xl bg-[#003366]/5 border-2 border-[#FFB347] shadow-[0_0_20px_rgba(255,179,71,0.15)] cursor-pointer transition-all">
                                        <div className="absolute -top-3 right-6 bg-[#003366] text-[#FFB347] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter">
                                            TIẾT KIỆM HƠN
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <div>
                                                <p className="text-[10px] font-bold text-[#FFB347] uppercase tracking-widest mb-1">GÓI 3 NĂM</p>
                                                <div className="flex items-baseline gap-1">
                                                    <span className="text-2xl font-black text-[#003366]">549 USD</span>
                                                    <span className="text-gray-400 text-sm italic">/ 3 năm</span>
                                                </div>
                                            </div>
                                            <div className="w-6 h-6 bg-[#FFB347] rounded-full flex items-center justify-center">
                                                <svg className="w-4 h-4 text-[#003366]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <button className="w-full py-5 bg-[#003366] text-white rounded-2xl font-bold text-lg hover:bg-black transition-colors">
                                Bắt đầu ngay
                            </button>
                        </div>

                        {/* OFFER CARD */}
                        <div className="flex-1 bg-[#003366] rounded-[40px] p-12 relative overflow-hidden flex flex-col justify-between max-w-md shadow-2xl">
                            {/* Glow effect */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#FFB347]/10 rounded-full blur-[100px] pointer-events-none"></div>

                            <div className="relative z-10">
                                <div className="inline-block px-4 py-1.5 bg-white/10 border border-[#FFB347]/30 rounded-full mb-8">
                                    <p className="text-[#FFB347] text-[10px] font-bold uppercase tracking-widest">LAUNCH OFFER</p>
                                </div>

                                <h3 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-8">
                                    Miễn phí trọn đời cho <span className="text-[#FFB347]">10 gara</span> đầu tiên
                                </h3>

                                <p className="text-white/70 text-lg leading-relaxed mb-12">
                                    Đăng ký sớm để nhận quyền lợi cao cấp nhất mà không tốn bất kỳ chi phí nào.
                                </p>
                            </div>

                            <button className="relative z-10 w-full py-5 bg-[#FFB347] text-[#003366] rounded-2xl font-black text-xl hover:scale-[1.02] transition-transform shadow-[0_0_30px_rgba(255,179,71,0.4)]">
                                Đăng ký giữ chỗ
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Footer CTA */}
            <section className="bg-[#003366] py-20 px-4 text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Sẵn Sàng Chuyển Đổi Số Gara Của Bạn?
                    </h2>
                    <p className="text-xl text-white/90 mb-12 leading-relaxed">
                        Đừng để gara của bạn tụt hậu. Hãy để My Gara trở thành đối tác công nghệ tin cậy,
                        giúp bạn tăng trưởng bền vững.
                    </p>

                    {/* Registration Form */}
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 max-w-2xl mx-auto">
                        <div className="grid md:grid-cols-3 gap-4 mb-6">
                            <input
                                type="text"
                                placeholder="Tên Gara"
                                className="px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#FFB347]"
                            />
                            <input
                                type="tel"
                                placeholder="Số điện thoại"
                                className="px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#FFB347]"
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                className="px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#FFB347]"
                            />
                        </div>
                        <button className="w-full px-8 py-4 bg-[#FFB347] text-[#003366] rounded-lg font-bold text-lg hover:bg-[#FFA500] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                            Nhận Tư Vấn & Demo Miễn Phí Ngay
                        </button>
                    </div>

                    {/* Contact Info */}
                    <div className="mt-12 flex flex-col md:flex-row justify-center gap-8 text-white/80">
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            <span>Hotline B2B: 1900-xxxx</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <span>b2b@mygara.vn</span>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="mt-12 pt-8 border-t border-white/20 text-white/60 text-sm">
                        © 2026 My Gara. Giải pháp quản lý gara thông minh.
                    </div>
                </div>
            </section>
        </div>
    );
}
