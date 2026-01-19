import React from 'react';

// Images
import habitImg from '../assets/landing/habit.png';
import obdPhoneImg from '../assets/landing/OBDII&phone.png';
import assistantImg from '../assets/landing/assistant.png';
import engineImg from '../assets/landing/engine.png';
import walletImg from '../assets/landing/wallet.png';
import driverImg from '../assets/landing/driver.png';

// Icons
const EngineIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-20 h-20 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 2h4" /><path d="M12 2v2" /><path d="M4 11v-4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4" /><path d="M4 11h16" /><path d="M4 11a4 4 0 0 0 4 4" /><path d="M20 11a4 4 0 0 1-4 4" /><path d="M8 15v6" /><path d="M16 15v6" /><path d="M12 5h.01" />
    </svg>
); // Placeholder for Engine?
const WalletIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-20 h-20 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 5c0-1.1-.9-2-2-2h-1c-1.1 0-2 .9-2 2v2H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z" /><path d="M16 7h4v4h-4z" />
    </svg>
); // Placeholder
const WorriedDriverIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-20 h-20 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><path d="M8 14s1.5 2 4 2 4-2 4-2" /><line x1="9" y1="9" x2="9.01" y2="9" /><line x1="15" y1="9" x2="15.01" y2="9" />
    </svg>
); // Placeholder

export default function XeYeuLanding() {
    return (
        <div className="min-h-screen bg-white font-sans text-gray-900">

            {/* 1. Hero Section */}
            <section className="flex flex-col lg:flex-row min-h-[500px] lg:h-[65vh]">
                {/* Left Content */}
                <div className="lg:w-1/2 bg-[#002B49] flex items-center justify-center p-8 lg:p-16 relative overflow-hidden">
                    <div className="relative z-10 max-w-xl text-white space-y-6">
                        <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold leading-tight">
                            Xế Yêu - Trợ Lý<br />
                            Thông Minh Cho<br />
                            Mọi Hành Trình
                        </h1>
                        <p className="text-lg text-gray-200 leading-relaxed font-light">
                            Hiểu rõ 'sức khỏe' xế cưng, cải thiện thói quen lái xe và an tâm tuyệt đối trên mọi nẻo đường chỉ với một thiết bị kết nối nhỏ gọn.
                        </p>

                        <div className="flex flex-col gap-4 pt-4">
                            <button className="w-fit px-8 py-3 bg-[#00CBA9] hover:bg-[#00b596] text-white rounded-lg font-bold transition-all transform hover:scale-105 shadow-lg text-lg">
                                Tải App Ngay (Miễn Phí)
                            </button>

                            <div className="flex gap-4">
                                <button className="bg-black text-white px-4 py-2 rounded-lg flex items-center border border-gray-700 hover:bg-gray-900 transition-colors">
                                    <svg className="w-8 h-8 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.8-1.31.02-2.3-1.23-3.14-2.47-2.93-4.24-2.46-10.46 2.58-10.46 1.6 0 2.68 1.05 3.53 1.05s2.26-1.17 3.86-1.17c.65.02 2.51.26 3.7 1.96-3.22 1.9-2.65 7.6 3.08 8.61zM13 3.5c.66-2.09 3.01-3.66 2.92.51-.83 3.08-3.58 2.37-2.92-.51z" /></svg>
                                    <div className="text-left leading-tight">
                                        <div className="text-[10px]">Download on the</div>
                                        <div className="font-bold text-sm">App Store</div>
                                    </div>
                                </button>
                                <button className="bg-black text-white px-4 py-2 rounded-lg flex items-center border border-gray-700 hover:bg-gray-900 transition-colors">
                                    <svg className="w-8 h-8 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" /><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" /><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" /><path fill="#34A853" d="M24 48c6.48 0 11.95-2.22 15.15-5.66l-7.73-6c-2.15 1.45-4.92 2.3-7.42 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" /><path fill="none" d="M0 0h48v48H0z" /></svg>
                                    <div className="text-left leading-tight">
                                        <div className="text-[10px]">GET IT ON</div>
                                        <div className="font-bold text-sm">Google Play</div>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Decorative Blue Glow */}
                    <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl pointer-events-none"></div>
                </div>

                {/* Right Image */}
                <div className="lg:w-1/2 relative bg-gray-100 h-96 lg:h-auto">
                    {/* Using a placeholder for the happy driver image */}
                    <img
                        src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070&auto=format&fit=crop"
                        alt="Happy Driver"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-[#002B49]/10"></div> {/* Slight overlay to match tone */}
                </div>
            </section>

            {/* 2. Pain Points Section (Moved Up) */}
            <section className="py-20 px-4 bg-white text-center border-b border-gray-100">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#002B49] mb-16">
                        Bạn có thực sự "hiểu" chiếc xe của mình?
                    </h2>

                    <div className="grid md:grid-cols-3 gap-12">
                        {/* Item 1 */}
                        <div className="flex flex-col items-center">
                            <div className="bg-white rounded-full p-6 w-48 h-48 flex items-center justify-center mb-6 hover:scale-105 transition-transform duration-300 shadow-xl shadow-blue-500/10 border border-blue-50">
                                <img src={engineImg} alt="Engine Issue" className="w-28 h-28 object-contain" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800">Hiểu rõ "bệnh" của xe?</h3>
                        </div>

                        {/* Item 2 */}
                        <div className="flex flex-col items-center">
                            <div className="bg-white rounded-full p-6 w-48 h-48 flex items-center justify-center mb-6 hover:scale-105 transition-transform duration-300 shadow-xl shadow-blue-500/10 border border-blue-50">
                                <img src={walletImg} alt="Cost Worry" className="w-28 h-28 object-contain" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800">Lo lắng chi phí sửa chữa?</h3>
                        </div>

                        {/* Item 3 */}
                        <div className="flex flex-col items-center">
                            <div className="bg-white rounded-full p-6 w-48 h-48 flex items-center justify-center mb-6 hover:scale-105 transition-transform duration-300 shadow-xl shadow-blue-500/10 border border-blue-50">
                                <img src={driverImg} alt="Driver Anxiety" className="w-28 h-28 object-contain" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800">Bất an trên mỗi chuyến đi?</h3>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Features Section */}
            <section className="py-24 px-4 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-900 mb-20">
                        Quyền Năng Của "Xế Yêu" Trong Tay Bạn
                    </h2>

                    {/* Feature 1 */}
                    <div className="flex flex-col md:flex-row items-center justify-between mb-24 gap-12">
                        <div className="w-full md:w-1/2 space-y-6 md:pr-12 text-center md:text-left">
                            <div className="inline-flex items-center space-x-2 text-[#00CBA9] font-bold text-lg mb-2 justify-center md:justify-start">
                                <span>#</span><span>Trợ lý thói quen lái xe</span>
                            </div>
                            <h3 className="text-3xl font-bold text-gray-900 mt-0">Lái Xe An Toàn & Tiết Kiệm Hơn</h3>
                            <p className="text-lg text-gray-600 leading-relaxed max-w-md mx-auto md:mx-0">
                                Xế Yêu phân tích hành vi lái xe của bạn theo thời gian thực. Chúng tôi chỉ ra những thói quen chưa tốt (phanh gấp, đạp thốc ga...) và đưa ra gợi ý chỉnh sửa.
                            </p>

                            {/* Highlighted Benefit Section */}
                            <div className="mt-4 p-4 bg-blue-50 rounded-r-xl border-l-4 border-[#00CBA9] text-left max-w-md mx-auto md:mx-0 shadow-sm">
                                <p className="text-[#002B49]">
                                    <span className="font-medium">Giúp bạn lái xe mượt mà hơn, đảm bảo an toàn cho bản thân và gia đình, tiết kiệm nhiên liệu đáng kể.</span>
                                </p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 relative bg-emerald-50 rounded-3xl p-8 md:p-12 flex justify-center items-center group">
                            <div className="absolute inset-0 bg-[#00CBA9]/10 rounded-3xl transform rotate-3 transition-transform group-hover:rotate-6"></div>
                            <img
                                src={habitImg}
                                alt="Driving Score App Screen"
                                className="relative z-10 w-full max-w-[280px] md:max-w-sm rounded-[2.5rem] shadow-2xl border-8 border-gray-900"
                            />
                        </div>
                    </div>

                    {/* Feature 2 - Reversed */}
                    <div className="flex flex-col md:flex-row-reverse items-center justify-between mb-24 gap-12">
                        <div className="w-full md:w-1/2 space-y-6 md:pl-12 text-center md:text-left">
                            <div className="inline-flex items-center space-x-2 text-[#00CBA9] font-bold text-lg mb-2 justify-center md:justify-start">
                                <span>#</span><span>Bác sĩ chẩn đoán 24/7</span>
                            </div>
                            <h3 className="text-3xl font-bold text-gray-900 mt-0">Cảnh Báo Sớm, Ngăn Ngừa Rủi Ro Lớn</h3>
                            <p className="text-lg text-gray-600 leading-relaxed max-w-md mx-auto md:mx-0">
                                Thông qua kết nối OBDII, Xế Yêu "nghe" được nhịp đập của động cơ. App sẽ gửi thông báo ngay lập tức khi phát hiện các dấu hiệu bất thường tiềm ẩn.
                            </p>

                            {/* Highlighted Benefit Section */}
                            <div className="mt-4 p-4 bg-blue-50 rounded-r-xl border-l-4 border-[#00CBA9] text-left max-w-md mx-auto md:mx-0 shadow-sm">
                                <p className="text-[#002B49]">
                                    <span className="font-medium">Phát hiện bệnh từ trong "trứng nước", tránh việc xe nằm đường giữa chừng.</span>
                                </p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 relative bg-emerald-50 rounded-3xl p-8 md:p-12 flex justify-center items-center group">
                            <div className="absolute inset-0 bg-[#00CBA9]/10 rounded-3xl transform rotate-3 transition-transform group-hover:rotate-6"></div>
                            <img
                                src={obdPhoneImg}
                                alt="OBD Device & Phone"
                                className="relative z-10 w-full max-w-[280px] md:max-w-sm rounded-[2.5rem] shadow-2xl border-8 border-gray-900"
                            />
                        </div>
                    </div>

                    {/* Feature 3 */}
                    <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-12">
                        <div className="w-full md:w-1/2 space-y-6 md:pr-12 text-center md:text-left">
                            <div className="inline-flex items-center space-x-2 text-[#00CBA9] font-bold text-lg mb-2 justify-center md:justify-start">
                                <span>#</span><span>Trợ lý kỹ thuật tận tâm</span>
                            </div>
                            <h3 className="text-3xl font-bold text-gray-900 mt-0">Không Còn Hoang Mang Khi Gặp Sự Cố</h3>
                            <p className="text-lg text-gray-600 leading-relaxed max-w-md mx-auto md:mx-0">
                                Khi xe báo lỗi, Xế Yêu không chỉ báo "có lỗi", mà còn giải thích lỗi đó là gì bằng ngôn ngữ dễ hiểu và đưa ra các bước xử lý tức thời cần thiết.
                            </p>

                            {/* Highlighted Benefit Section */}
                            <div className="mt-4 p-4 bg-blue-50 rounded-r-xl border-l-4 border-[#00CBA9] text-left max-w-md mx-auto md:mx-0 shadow-sm">
                                <p className="text-[#002B49]">
                                    <span className="font-medium">Giúp bạn bình tĩnh xử lý tình huống hoặc mô tả chính xác vấn đề cho thợ sửa chữa.</span>
                                </p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 relative bg-emerald-50 rounded-3xl p-8 md:p-12 flex justify-center items-center group">
                            <div className="absolute inset-0 bg-[#00CBA9]/10 rounded-3xl transform -rotate-3 transition-transform group-hover:-rotate-6"></div>
                            <img
                                src={assistantImg}
                                alt="Technical Assistant App Screen"
                                className="relative z-10 w-full max-w-[280px] md:max-w-sm rounded-[2.5rem] shadow-2xl border-8 border-gray-900"
                            />
                        </div>
                    </div>

                </div>
            </section>

            {/* 4. Mission Section */}
            <section className="py-20 px-8 bg-[#002B49] text-center text-white">
                <div className="max-w-4xl mx-auto space-y-8">
                    <h2 className="text-4xl font-bold">Sứ Mệnh Của Chúng Tôi</h2>
                    <p className="text-lg md:text-xl font-light leading-relaxed opacity-90">
                        Tại Xế Yêu, chúng tôi tin rằng việc sở hữu và chăm sóc ô tô nên là một trải nghiệm thú vị, không phải là gánh nặng.
                        Sứ mệnh của chúng tôi là biến công nghệ phức tạp thành người trợ lý thân thiện, giúp mọi chủ xe lái xe an toàn hơn,
                        hiểu xe hơn và tiết kiệm hơn mỗi ngày.
                    </p>
                </div>
            </section>

            {/* Footer CTA & Contact */}
            <section className="bg-[#002B49] py-16 px-4 border-t border-white/10 text-white">
                <div className="max-w-6xl mx-auto">

                    <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
                        {/* Left: Form */}
                        <div className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm border border-white/10">
                            <h2 className="text-2xl font-bold mb-6 text-[#00CBA9]">Đăng ký tư vấn ngay</h2>
                            <form className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium mb-1 text-gray-300">Họ và tên</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-lg bg-black/20 border border-white/10 focus:border-[#00CBA9] focus:ring-1 focus:ring-[#00CBA9] outline-none transition-colors text-white" placeholder="Nhập họ tên của bạn" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1 text-gray-300">Số điện thoại</label>
                                    <input type="tel" className="w-full px-4 py-3 rounded-lg bg-black/20 border border-white/10 focus:border-[#00CBA9] focus:ring-1 focus:ring-[#00CBA9] outline-none transition-colors text-white" placeholder="Nhập số điện thoại" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1 text-gray-300">Email</label>
                                    <input type="email" className="w-full px-4 py-3 rounded-lg bg-black/20 border border-white/10 focus:border-[#00CBA9] focus:ring-1 focus:ring-[#00CBA9] outline-none transition-colors text-white" placeholder="Nhập email" />
                                </div>
                                <button type="button" className="w-full py-3 bg-[#00CBA9] hover:bg-[#00b596] text-white font-bold rounded-lg transition-colors shadow-lg mt-2">
                                    Gửi Thông Tin
                                </button>
                            </form>
                        </div>

                        {/* Right: CTA & Downloads */}
                        <div className="flex flex-col justify-center space-y-8 h-full">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                                    Sẵn sàng trải nghiệm <br /> <span className="text-[#00CBA9]">Xế Yêu</span> ngay hôm nay?
                                </h2>
                                <p className="text-gray-300 text-lg">
                                    Tải ứng dụng ngay để bắt đầu hành trình lái xe an toàn và thông minh hơn.
                                </p>
                            </div>

                            <div className="flex flex-col gap-4">
                                <button className="w-fit px-8 py-3 bg-[#00CBA9] hover:bg-[#00b596] text-white rounded-lg font-bold transition-all transform hover:scale-105 shadow-lg text-lg">
                                    Tải App Ngay (Miễn Phí)
                                </button>

                                <div className="flex gap-4 flex-wrap">
                                    <button className="bg-black text-white px-4 py-2 rounded-lg flex items-center border border-gray-700 hover:bg-gray-900 transition-colors">
                                        <svg className="w-8 h-8 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.8-1.31.02-2.3-1.23-3.14-2.47-2.93-4.24-2.46-10.46 2.58-10.46 1.6 0 2.68 1.05 3.53 1.05s2.26-1.17 3.86-1.17c.65.02 2.51.26 3.7 1.96-3.22 1.9-2.65 7.6 3.08 8.61zM13 3.5c.66-2.09 3.01-3.66 2.92.51-.83 3.08-3.58 2.37-2.92-.51z" /></svg>
                                        <div className="text-left leading-tight">
                                            <div className="text-[10px]">Download on the</div>
                                            <div className="font-bold text-sm">App Store</div>
                                        </div>
                                    </button>
                                    <button className="bg-black text-white px-4 py-2 rounded-lg flex items-center border border-gray-700 hover:bg-gray-900 transition-colors">
                                        <svg className="w-8 h-8 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" /><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" /><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" /><path fill="#34A853" d="M24 48c6.48 0 11.95-2.22 15.15-5.66l-7.73-6c-2.15 1.45-4.92 2.3-7.42 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" /><path fill="none" d="M0 0h48v48H0z" /></svg>
                                        <div className="text-left leading-tight">
                                            <div className="text-[10px]">GET IT ON</div>
                                            <div className="font-bold text-sm">Google Play</div>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom: Company Info */}
                    <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-400">
                        <div className="text-sm">
                            &copy; 2026 Xế Yêu Technology. All rights reserved.
                        </div>
                        <div className="flex gap-6">
                            <a href="#" className="hover:text-white transition-colors flex items-center gap-2">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-1.07 3.97-2.9 5.4z" /></svg>
                                <span>Website</span>
                            </a>
                            <a href="#" className="hover:text-white transition-colors flex items-center gap-2">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.069-4.85.069-3.204 0-3.584-.012-4.849-.069-3.225-.149-4.771-1.664-4.919-4.919-.058-1.265-.069-1.644-.069-4.849 0-3.204.012-3.584.069-4.849.149-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.36-.2 6.78-2.618 6.98-6.98.058-1.28.072-1.689.072-4.948-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                                <span>Facebook</span>
                            </a>
                            <a href="#" className="hover:text-white transition-colors flex items-center gap-2">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" /></svg> {/* Placeholder for Email/Plus */}
                                <span>Support@xeyeu.com</span>
                            </a>
                        </div>
                    </div>

                </div>
            </section>

        </div>
    );
}
