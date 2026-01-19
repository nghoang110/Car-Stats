import React from 'react';
import { Link } from 'react-router-dom';

export default function MyGaraLanding() {
    return (
        <div className="min-h-screen bg-gray-900 text-white pt-20">
            {/* Hero Section */}
            <section className="relative h-[80vh] flex items-center overflow-hidden">
                {/* Abstract Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-gray-900 to-black z-0"></div>
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1530906358829-e8122ed2d99f?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-30 mix-blend-overlay"></div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 border border-blue-500/50 text-blue-300 text-sm font-semibold mb-6 animate-fade-in-up">
                        Professional Garage
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent animate-fade-in-up delay-100">
                        My Gara
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-10 animate-fade-in-up delay-200">
                        Quản lý gara của bạn một cách chuyên nghiệp. Theo dõi xe, khách hàng và doanh thu.
                    </p>
                    <div className="flex justify-center gap-4 animate-fade-in-up delay-300">
                        <Link to="/car-dashboard" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl font-bold hover:shadow-lg hover:shadow-blue-500/30 transition transform hover:-translate-y-1">
                            Quản lý ngay
                        </Link>
                        <button className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl font-bold hover:bg-white/20 transition">
                            Tính năng
                        </button>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-gray-800/50 backdrop-blur-lg">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div className="p-6">
                            <div className="text-4xl font-bold text-blue-500 mb-2">100%</div>
                            <div className="text-gray-400">Tự động hóa</div>
                        </div>
                        <div className="p-6">
                            <div className="text-4xl font-bold text-blue-500 mb-2">24/7</div>
                            <div className="text-gray-400">Hỗ trợ</div>
                        </div>
                        <div className="p-6">
                            <div className="text-4xl font-bold text-blue-500 mb-2">50+</div>
                            <div className="text-gray-400">Công cụ</div>
                        </div>
                        <div className="p-6">
                            <div className="text-4xl font-bold text-blue-500 mb-2">10k+</div>
                            <div className="text-gray-400">Khách hàng</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-20 bg-gray-900">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center mb-16">
                        Giải pháp <span className="text-blue-500">Toàn diện</span>
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Service 1 */}
                        <div className="p-8 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 hover:border-blue-500/50 transition duration-300">
                            <h3 className="text-2xl font-bold mb-4 text-white">Quản lý xe</h3>
                            <p className="text-gray-400 mb-6">Theo dõi lịch sử sửa chữa, bảo dưỡng của từng xe chi tiết.</p>
                            <a href="#" className="text-blue-400 hover:text-blue-300 font-semibold flex items-center">
                                Xem chi tiết <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                            </a>
                        </div>
                        {/* Service 2 */}
                        <div className="p-8 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 hover:border-blue-500/50 transition duration-300">
                            <h3 className="text-2xl font-bold mb-4 text-white">Quản lý kho</h3>
                            <p className="text-gray-400 mb-6">Kiểm soát phụ tùng, vật tư tồn kho chính xác và hiệu quả.</p>
                            <a href="#" className="text-blue-400 hover:text-blue-300 font-semibold flex items-center">
                                Xem chi tiết <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                            </a>
                        </div>
                        {/* Service 3 */}
                        <div className="p-8 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 hover:border-blue-500/50 transition duration-300">
                            <h3 className="text-2xl font-bold mb-4 text-white">Báo cáo</h3>
                            <p className="text-gray-400 mb-6">Báo cáo doanh thu, lợi nhuận trực quan với biểu đồ sinh động.</p>
                            <a href="#" className="text-blue-400 hover:text-blue-300 font-semibold flex items-center">
                                Xem chi tiết <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
