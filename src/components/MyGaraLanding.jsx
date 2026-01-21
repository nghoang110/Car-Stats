import React, { useState } from 'react';

export default function MyGaraLanding() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="selection:bg-primary/30 min-h-screen bg-background-light">
            <header className="sticky top-0 z-50 w-full bg-white border-b border-border-light shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center gap-2">
                            <div className="text-primary">
                                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M42.4379 44C42.4379 44 36.0744 33.9038 41.1692 24C46.8624 12.9336 42.2078 4 42.2078 4L7.01134 4C7.01134 4 11.6577 12.932 5.96912 23.9969C0.876273 33.9029 7.27094 44 7.27094 44L42.4379 44Z"></path>
                                </svg>
                            </div>
                            <span className="text-xl font-bold tracking-tight uppercase">MyGara</span>
                        </div>

                        <button
                            className="md:hidden p-2 text-slate-600 cursor-pointer"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <span className="material-symbols-outlined !text-2xl">menu</span>
                        </button>

                        <nav className="hidden md:flex items-center gap-6">
                            <a className="text-sm font-medium text-slate-muted hover:text-primary transition-colors" href="#problems">Vấn đề</a>
                            <a className="text-sm font-medium text-slate-muted hover:text-primary transition-colors" href="#features">Tính năng</a>
                            <a className="text-sm font-medium text-slate-muted hover:text-primary transition-colors" href="#xeyeu-connection">Kết nối</a>
                            <a className="text-sm font-medium text-slate-muted hover:text-primary transition-colors" href="#pricing">Giá cả</a>
                            <a className="flex items-center gap-1 px-4 py-2 bg-[#f0f2f5] text-[#111418] rounded-lg text-sm font-bold transition-colors" href="https://xeyeu.x18.io">
                                <span className="material-symbols-outlined text-slate-muted">directions_car</span>
                                Xế Yêu
                            </a>
                            <button className="bg-primary text-white px-5 py-2 rounded-lg text-sm font-bold shadow-sm">
                                Cài MyGara
                            </button>
                        </nav>

                        {/* Mobile Menu */}
                        <div className={`${isMenuOpen ? 'flex' : 'hidden'} absolute top-16 left-0 w-full bg-white border-b border-border-light md:hidden shadow-lg flex-col p-4 space-y-4`}>
                            <a className="text-base font-medium text-slate-700" href="#problems" onClick={() => setIsMenuOpen(false)}>Vấn đề</a>
                            <a className="text-base font-medium text-slate-700" href="#features" onClick={() => setIsMenuOpen(false)}>Tính năng</a>
                            <a className="text-base font-medium text-slate-700" href="#xeyeu-connection" onClick={() => setIsMenuOpen(false)}>Kết nối</a>
                            <a className="text-base font-medium text-slate-700" href="#pricing" onClick={() => setIsMenuOpen(false)}>Giá cả</a>
                            <hr className="border-border-light" />
                            <a className="flex items-center justify-center gap-2 w-full py-3 bg-[#f0f2f5] text-[#111418] rounded-lg font-bold" href="https://xeyeu.x18.io">
                                <span className="material-symbols-outlined">directions_car</span>
                                Xế Yêu
                            </a>
                            <button className="w-full bg-primary text-white py-3 rounded-lg font-bold">
                                Cài MyGara
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto bg-white">
                <section className="px-4 py-8 md:py-24 bg-surface-light border-b border-border-light">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
                        <div className="space-y-6 md:space-y-8">
                            <div className="space-y-4">
                                <h1 className="text-[#0c7ae9]">MyGara – Giữ khách cũ, có thêm việc đều cho gara độc lập</h1>
                                <p className="max-w-xl text-base text-slate-muted">
                                    MyGara giúp gara theo dõi tình trạng xe của khách sau khi rời gara, nhắc bảo dưỡng đúng lúc, để khách quay lại đúng gara quen.
                                </p>
                            </div>
                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-primary">check_circle</span>
                                    <span className="font-medium text-slate-700">Không mất dấu xe của khách</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-primary">check_circle</span>
                                    <span className="font-medium text-slate-700">Chủ động gọi khách trước khi xe hỏng</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-primary">check_circle</span>
                                    <span className="font-medium text-slate-700">Thợ chuẩn bị trước, làm nhanh và chính xác hơn</span>
                                </div>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                                <button className="w-full sm:w-auto bg-primary text-white px-8 py-4 md:py-3 rounded-lg text-base font-bold shadow-sm">
                                    Cài MyGara cho gara
                                </button>
                                <button className="w-full sm:w-auto bg-[#f0f2f5] text-[#111418] px-8 py-4 md:py-3 rounded-lg text-base font-bold">
                                    Xem cách mời khách cài app Xế Yêu
                                </button>
                            </div>
                        </div>
                        <div className="relative order-first lg:order-last">
                            <div
                                className="aspect-video rounded-xl overflow-hidden shadow-sm border border-border-light bg-slate-200"
                                style={{
                                    backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCLPLPATrl8zqFp9Rmxp-xH1o33JD6PfcB7O1_qc2Og8OeNAtKs18hnQAmJzNdwWFP65-ak3-KnLmkOjwyEf3qZCOLIFrLQRj7vHLVf89VzmnRGi0qatfwKAe1RdQ8dQHgAR1v9E7qACbIgFQfeICul-FxKji6Cgh97XaJkW7Kf1tvaWib8wVbGnZbdVWGaxO1x-0e9r1PF_4t_Arkxr9vNAweevfUc_wACqr1IgPx2zPSkqwRYSQKyJeaidv8rkJHshOnMk-M3sn3f')",
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center'
                                }}
                            >
                            </div>
                            <div className="absolute -bottom-4 -left-4 bg-blue-50 text-primary border border-blue-100 px-4 py-2 rounded-lg shadow-sm hidden md:block">
                                <p className="font-bold text-sm text-primary">Chiết khấu</p>
                                <p className="text-[10px] font-bold uppercase tracking-wider">Hấp dẫn cho đối tác</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="px-4 py-8 md:py-20 bg-background-light" id="problems">
                    <div className="text-center mb-8 md:mb-16 space-y-4">
                        <h2 className="uppercase tracking-tight text-slate-900 font-bold">Thực tế mà gara nào cũng gặp</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                        <div className="p-6 bg-white rounded-lg shadow-sm border border-border-light">
                            <span className="material-symbols-outlined text-slate-muted text-3xl mb-4">person_off</span>
                            <h3 className="text-base font-bold mb-2">Khách không quay lại</h3>
                            <p className="leading-relaxed text-slate-muted">Không biết khi nào khách cần bảo dưỡng để gọi, dẫn đến mất khách vào tay đối thủ.</p>
                        </div>
                        <div className="p-6 bg-white rounded-lg shadow-sm border border-border-light">
                            <span className="material-symbols-outlined text-slate-muted text-3xl mb-4">emergency_home</span>
                            <h3 className="text-base font-bold mb-2">Xe hỏng bất ngờ</h3>
                            <p className="leading-relaxed text-slate-muted">Khách gọi cứu hộ bên khác vì không nhớ gara quen khi gặp sự cố trên đường.</p>
                        </div>
                        <div className="p-6 bg-white rounded-lg shadow-sm border border-border-light">
                            <span className="material-symbols-outlined text-slate-muted text-3xl mb-4">database_off</span>
                            <h3 className="text-base font-bold mb-2">Thiếu dữ liệu xe</h3>
                            <p className="leading-relaxed text-slate-muted">Không nắm được lịch sử sửa chữa chi tiết của xe khách sau khi họ rời gara.</p>
                        </div>
                        <div className="p-6 bg-white rounded-lg shadow-sm border border-border-light">
                            <span className="material-symbols-outlined text-slate-muted text-3xl mb-4">link_off</span>
                            <h3 className="text-base font-bold mb-2">Mất kết nối</h3>
                            <p className="leading-relaxed text-slate-muted">Khách rời đi sau khi sửa xong mà không có cách nào duy trì liên lạc tự động.</p>
                        </div>
                    </div>
                    <div className="mt-12 md:mt-16 text-center">
                        <p className="text-lg md:text-xl font-bold text-slate-800 italic">"Gara mất việc không phải vì tay nghề, mà vì mất kết nối với xe của khách."</p>
                    </div>
                </section>

                <section className="px-4 py-8 md:py-20 bg-surface-light border-y border-border-light" id="features">
                    <h2 className="text-center mb-8 md:mb-16 text-slate-900 font-bold text-[20px] md:text-[32px]">MyGara giúp gara làm được những việc này</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
                        <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm border border-border-light">
                            <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                                <span className="material-symbols-outlined text-primary">monitoring</span>
                            </div>
                            <h3 className="text-lg font-bold mb-4">1. Theo dõi xe của khách</h3>
                            <p className="mb-6 italic text-sm">(Khi khách đồng ý thông qua kết nối Xế Yêu)</p>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <span className="material-symbols-outlined text-slate-muted">check</span>
                                    <span className="text-slate-700">Biết xe có lỗi, có đèn báo</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="material-symbols-outlined text-slate-muted">check</span>
                                    <span className="text-slate-700">Biết xe sắp đến kỳ bảo dưỡng</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="material-symbols-outlined text-slate-muted">check</span>
                                    <span className="text-slate-700">Không cần đợi xe hỏng mới biết</span>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm border border-border-light">
                            <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                                <span className="material-symbols-outlined text-primary">notifications_active</span>
                            </div>
                            <h3 className="text-lg font-bold mb-4">2. Nhắc khách quay lại đúng lúc</h3>
                            <ul className="space-y-4 md:pt-4">
                                <li className="flex items-start gap-3">
                                    <span className="material-symbols-outlined text-slate-muted">check</span>
                                    <span className="text-slate-700">Nhắc thay dầu, kiểm tra, bảo dưỡng</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="material-symbols-outlined text-slate-muted">check</span>
                                    <span className="text-slate-700">Gara chủ động gọi khách</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="material-symbols-outlined text-slate-muted">check</span>
                                    <span className="text-slate-700">Khách thấy gara quan tâm, dễ quay lại</span>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm border border-border-light">
                            <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                                <span className="material-symbols-outlined text-primary">handyman</span>
                            </div>
                            <h3 className="text-lg font-bold mb-4">3. Thợ làm việc dễ hơn</h3>
                            <ul className="space-y-4 md:pt-4">
                                <li className="flex items-start gap-3">
                                    <span className="material-symbols-outlined text-slate-muted">check</span>
                                    <span className="text-slate-700">Có thông tin xe trước khi khách tới</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="material-symbols-outlined text-slate-muted">check</span>
                                    <span className="text-slate-700">Chuẩn bị sẵn phương án sửa chữa</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="material-symbols-outlined text-slate-muted">check</span>
                                    <span className="text-slate-700">Giảm thời gian đoán bệnh</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="px-4 py-8 md:py-20 bg-background-light" id="xeyeu-connection">
                    <div className="bg-surface-light p-6 md:p-12 rounded-lg border border-border-light shadow-sm">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
                            <div className="space-y-6 md:space-y-8">
                                <h2 className="text-slate-900 font-bold">Vì sao MyGara có thể giúp gara giữ chân khách hàng?</h2>
                                <p className="text-base text-slate-muted">MyGara làm được điều này không phải nhờ thiết bị phức tạp, mà nhờ kết nối trực tiếp với app Xế Yêu của khách hàng. Khi khách hàng cài app Xế Yêu, gara và khách được kết nối với nhau một cách tự nhiên.</p>
                                <div className="space-y-4">
                                    <h3 className="text-lg font-bold text-primary">Xế Yêu là “trợ lý số thông minh” cho chủ xe</h3>
                                    <ul className="space-y-4">
                                        <li className="flex items-start gap-3">
                                            <span className="material-symbols-outlined text-slate-muted">auto_awesome</span>
                                            <span className="text-slate-700">Xế Yêu hiểu hàng triệu thông điệp mà xe nói mỗi ngày</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="material-symbols-outlined text-slate-muted">health_and_safety</span>
                                            <span className="text-slate-700">Xế Yêu biết khi nào xe mệt, khi nào xe cần được chăm sóc và báo cho chủ xe biết trước</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="material-symbols-outlined text-slate-muted">speed</span>
                                            <span className="text-slate-700">Xế Yêu hiểu cách vận hành xe và giúp chủ xe vận hành xe đúng cách, tăng tuổi thọ cho xe</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="material-symbols-outlined text-slate-muted">stars</span>
                                            <span className="text-slate-700">Xế Yêu cung cấp những trải nghiệm số thú vị cho chủ xe</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="bg-background-light p-6 md:p-8 rounded-lg border border-border-light space-y-6">
                                <p className="text-base text-slate-900 font-medium">Khi chủ xe tin và dùng Xế Yêu mỗi ngày, MyGara trở thành cầu nối giúp gara chăm sóc xe của khách tốt hơn.</p>
                                <ul className="space-y-4">
                                    <li className="flex items-center gap-4">
                                        <div className="w-8 h-8 flex-shrink-0 bg-white border border-border-light rounded-lg flex items-center justify-center">
                                            <span className="material-symbols-outlined text-primary">event_repeat</span>
                                        </div>
                                        <span className="text-slate-700">Gara biết thời điểm phù hợp để nhắc khách quay lại</span>
                                    </li>
                                    <li className="flex items-center gap-4">
                                        <div className="w-8 h-8 flex-shrink-0 bg-white border border-border-light rounded-lg flex items-center justify-center">
                                            <span className="material-symbols-outlined text-primary">volunteer_activism</span>
                                        </div>
                                        <span className="text-slate-700">Gara chủ động chăm sóc xe, không chỉ chờ xe hỏng</span>
                                    </li>
                                    <li className="flex items-center gap-4">
                                        <div className="w-8 h-8 flex-shrink-0 bg-white border border-border-light rounded-lg flex items-center justify-center">
                                            <span className="material-symbols-outlined text-primary">engineering</span>
                                        </div>
                                        <span className="text-slate-700">Thợ làm việc có chuẩn bị, ít đoán mò, ít sai sót</span>
                                    </li>
                                </ul>
                                <div className="pt-4">
                                    <a className="flex items-center justify-center gap-2 w-full md:w-auto md:inline-flex bg-primary text-white px-6 py-4 md:py-3 rounded-lg font-bold shadow-sm" href="https://xeyeu.x18.io">
                                        Xem chi tiết app Xế Yêu
                                        <span className="material-symbols-outlined text-white">arrow_forward</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="px-4 py-12 md:py-24 text-center bg-surface-light">
                    <h2 className="text-slate-900 mb-8 md:mb-16 font-bold">MyGara và Xế Yêu đi cùng nhau</h2>
                    <div className="flex flex-col md:flex-row justify-center items-start gap-8 max-w-5xl mx-auto mb-12 md:mb-16">
                        <div className="flex-1 space-y-4 w-full">
                            <div className="w-12 h-12 bg-primary text-white rounded-lg flex items-center justify-center text-xl font-bold mx-auto shadow-sm">1</div>
                            <h4 className="font-bold text-lg">Gara cài MyGara</h4>
                            <p className="text-slate-muted">Đăng ký tài khoản và thiết lập thông tin gara của bạn.</p>
                        </div>
                        <div className="hidden md:block pt-4 text-slate-300">
                            <span className="material-symbols-outlined">arrow_forward</span>
                        </div>
                        <div className="md:hidden flex justify-center text-slate-300">
                            <span className="material-symbols-outlined">arrow_downward</span>
                        </div>
                        <div className="flex-1 space-y-4 w-full">
                            <div className="w-12 h-12 bg-primary text-white rounded-lg flex items-center justify-center text-xl font-bold mx-auto shadow-sm">2</div>
                            <h4 className="font-bold text-lg">Mời khách cài Xế Yêu</h4>
                            <p className="text-slate-muted">Gara mời khách cài app Xế Yêu để kết nối và nhận dữ liệu xe.</p>
                        </div>
                        <div className="hidden md:block pt-4 text-slate-300">
                            <span className="material-symbols-outlined">arrow_forward</span>
                        </div>
                        <div className="md:hidden flex justify-center text-slate-300">
                            <span className="material-symbols-outlined">arrow_downward</span>
                        </div>
                        <div className="flex-1 space-y-4 w-full">
                            <div className="w-12 h-12 bg-primary text-white rounded-lg flex items-center justify-center text-xl font-bold mx-auto shadow-sm">3</div>
                            <h4 className="font-bold text-lg">Gặt hái doanh thu</h4>
                            <p className="text-slate-muted">Khách quay lại bảo dưỡng định kỳ và sửa chữa thường xuyên.</p>
                        </div>
                    </div>
                    <a className="text-primary font-bold hover:underline flex items-center justify-center gap-1 text-sm md:text-base" href="https://xeyeu.x18.io">
                        Tìm hiểu thêm về app Xế Yêu cho khách hàng
                        <span className="material-symbols-outlined">open_in_new</span>
                    </a>
                </section>

                <section className="px-4 py-8 md:py-20 bg-background-light" id="pricing">
                    <div className="text-center mb-8 md:mb-16 space-y-4">
                        <h2 className="uppercase text-slate-900 font-bold">Ưu đãi dành riêng cho gara tham gia sớm</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
                        <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm border border-border-light">
                            <span className="material-symbols-outlined text-primary text-4xl mb-6">featured_seasonal_and_gifts</span>
                            <h3 className="text-xl mb-4 font-bold">Quà tặng đặc biệt cho những gara đối tác đầu tiên</h3>
                            <ul className="space-y-3 text-sm">
                                <li className="flex items-start gap-3">
                                    <span className="material-symbols-outlined text-primary">check_circle</span>
                                    <span className="font-bold text-slate-700">Tặng 10 licence Xế Yêu trọn đời</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="material-symbols-outlined text-slate-muted">info</span>
                                    <span className="text-slate-muted">Áp dụng cho 100 gara đầu tiên đăng ký tham gia đối tác</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="material-symbols-outlined text-slate-muted">card_giftcard</span>
                                    <span className="text-slate-muted">Gara dùng để tặng khách hàng thân thiết</span>
                                </li>
                                <li className="flex items-start gap-3 italic text-slate-500">
                                    <span className="material-symbols-outlined text-primary">timer</span>
                                    <span className="text-slate-muted">Số lượng có giới hạn.</span>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm border border-border-light flex flex-col justify-between">
                            <div>
                                <span className="material-symbols-outlined text-primary text-4xl mb-6">percent</span>
                                <h3 className="text-xl mb-4 font-bold">Mô hình đại lý</h3>
                                <p className="text-base font-bold text-primary mb-4 italic text-[#0c7ae9]">Được hưởng chiết khấu hấp dẫn khi phân phối gói Xế Yêu</p>
                                <p className="text-slate-muted">Trở thành đối tác chiến lược giai đoạn đầu để nhận được chính sách hỗ trợ tốt nhất từ x18 Technology.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="px-4 py-12 md:py-20 text-center max-w-3xl mx-auto bg-surface-light">
                    <h2 className="mb-8 font-bold">MyGara chỉ thu phí khi gara có lợi</h2>
                    <div className="p-6 md:p-8 bg-background-light rounded-lg border border-border-light shadow-sm">
                        <p className="text-base leading-relaxed text-slate-700">
                            Chúng tôi áp dụng mô hình <span className="text-primary font-bold">Value-based Pricing</span>. Gara chỉ bắt đầu thanh toán phí dịch vụ sau khi đã đạt được số lượng kết nối khách hàng thành công và thấy rõ hiệu quả kinh doanh.
                        </p>
                    </div>
                </section>

                <section className="px-4 py-12 md:py-24 bg-background-light border-y border-border-light">
                    <h2 className="text-center mb-8 md:mb-16 text-slate-900 font-bold">Gara trở thành đối tác phân phối Xế Yêu</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
                        <div className="bg-white p-6 md:p-8 rounded-lg border border-border-light shadow-sm space-y-6">
                            <div className="flex items-center gap-3 text-primary">
                                <span className="material-symbols-outlined font-bold">military_tech</span>
                                <h4 className="text-sm font-bold uppercase tracking-wide">Quyền lợi</h4>
                            </div>
                            <ul className="space-y-4 text-sm text-slate-muted">
                                <li className="flex items-start gap-2">
                                    <span className="material-symbols-outlined text-primary text-base">check_circle</span>
                                    <span>Doanh thu trực tiếp từ việc cung cấp gói giải pháp Xế Yêu</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="material-symbols-outlined text-primary text-base">check_circle</span>
                                    <span>Doanh thu ổn định từ dịch vụ bảo dưỡng định kỳ</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="material-symbols-outlined text-primary text-base">check_circle</span>
                                    <span>Nâng tầm thương hiệu Gara Chuyên nghiệp - Công nghệ</span>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-white p-6 md:p-8 rounded-lg border border-border-light shadow-sm space-y-6">
                            <div className="flex items-center gap-3 text-slate-700">
                                <span className="material-symbols-outlined font-bold">assignment_ind</span>
                                <h4 className="text-sm font-bold uppercase tracking-wide">Trách nhiệm</h4>
                            </div>
                            <ul className="space-y-4 text-sm text-slate-muted">
                                <li className="flex items-start gap-2">
                                    <span className="material-symbols-outlined text-slate-muted text-base">check_circle</span>
                                    <span>Tư vấn và hướng dẫn khách hàng cài đặt app Xế Yêu</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="material-symbols-outlined text-slate-muted text-base">check_circle</span>
                                    <span>Hỗ trợ kỹ thuật cơ bản khi khách hàng kết nối</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="material-symbols-outlined text-slate-muted text-base">check_circle</span>
                                    <span>Đảm bảo chất lượng sửa chữa khi khách quay lại</span>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-white p-6 md:p-8 rounded-lg border border-border-light shadow-sm space-y-6">
                            <div className="flex items-center gap-3 text-slate-700">
                                <span className="material-symbols-outlined font-bold">handshake</span>
                                <h4 className="text-sm font-bold uppercase tracking-wide">Vai trò x18 Tech</h4>
                            </div>
                            <ul className="space-y-4 text-sm text-slate-muted">
                                <li className="flex items-start gap-2">
                                    <span className="material-symbols-outlined text-slate-muted text-base">check_circle</span>
                                    <span>Cung cấp và cập nhật phần mềm MyGara & Xế Yêu</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="material-symbols-outlined text-slate-muted text-base">check_circle</span>
                                    <span>Đào tạo sử dụng hệ thống và kỹ năng tư vấn công nghệ</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="material-symbols-outlined text-slate-muted text-base">check_circle</span>
                                    <span>Hỗ trợ marketing và truyền thông cho đối tác Gara</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="px-4 py-12 md:py-24 text-center max-w-4xl mx-auto bg-surface-light">
                    <h2 className="mb-8 font-bold">Bắt đầu từ những khách quen của bạn</h2>
                    <p className="text-base text-slate-muted mb-8 md:mb-12 max-w-2xl mx-auto">Đừng để khách hàng thân thiết rời đi chỉ vì một sơ suất nhỏ trong việc giữ liên lạc. Số hóa gara ngay hôm nay.</p>
                    <div className="flex flex-col md:flex-row justify-center gap-3 md:gap-4">
                        <button className="w-full md:w-auto bg-primary text-white px-10 py-4 rounded-lg text-lg font-bold shadow-sm">
                            Đăng ký MyGara
                        </button>
                        <button className="w-full md:w-auto bg-[#f0f2f5] text-[#111418] px-10 py-4 rounded-lg text-lg font-bold">
                            Tìm hiểu đại lý
                        </button>
                        <button className="w-full md:w-auto bg-slate-900 text-white px-10 py-4 rounded-lg text-lg font-bold">
                            Liên hệ x18
                        </button>
                    </div>
                </section>
            </main>

            <footer className="bg-white border-t border-border-light pt-12 md:pt-16 pb-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12 md:mb-16">
                        <div className="space-y-6">
                            <div className="flex items-center gap-2">
                                <div className="text-primary">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 48 48">
                                        <path d="M42.4379 44C42.4379 44 36.0744 33.9038 41.1692 24C46.8624 12.9336 42.2078 4 42.2078 4L7.01134 4C7.01134 4 11.6577 12.932 5.96912 23.9969C0.876273 33.9029 7.27094 44 7.27094 44L42.4379 44Z"></path>
                                    </svg>
                                </div>
                                <span className="text-lg font-bold tracking-tight uppercase">MyGara</span>
                            </div>
                            <p className="text-sm leading-relaxed text-slate-muted">Giải pháp quản lý và giữ chân khách hàng dành riêng cho gara sửa chữa ô tô độc lập tại Việt Nam.</p>
                        </div>
                        <div>
                            <h5 className="font-bold mb-4 md:mb-6 uppercase text-[10px] tracking-widest text-slate-400">Ứng dụng</h5>
                            <ul className="space-y-3 md:space-y-4">
                                <li><a className="text-sm text-slate-muted hover:text-primary transition-colors" href="#">MyGara App</a></li>
                                <li><a className="text-sm text-slate-muted hover:text-primary transition-colors" href="https://xeyeu.x18.io">Xế Yêu App</a></li>
                                <li><a className="text-sm text-slate-muted hover:text-primary transition-colors" href="#">Hỗ trợ kết nối</a></li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="font-bold mb-4 md:mb-6 uppercase text-[10px] tracking-widest text-slate-400">Liên kết</h5>
                            <ul className="space-y-3 md:space-y-4">
                                <li><a className="text-sm text-slate-muted hover:text-primary transition-colors" href="#">Về chúng tôi</a></li>
                                <li><a className="text-sm text-slate-muted hover:text-primary transition-colors" href="#">Chính sách bảo mật</a></li>
                                <li><a className="text-sm text-slate-muted hover:text-primary transition-colors" href="#">Điều khoản dịch vụ</a></li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="font-bold mb-4 md:mb-6 uppercase text-[10px] tracking-widest text-slate-400">Liên hệ</h5>
                            <p className="text-sm text-slate-muted mb-2">x18 Technology Co., Ltd.</p>
                            <p className="text-sm text-slate-muted">Email: contact@x18.io</p>
                            <p className="text-sm text-slate-muted mt-4">Hotline: (84) 1800-xxxx</p>
                        </div>
                    </div>
                    <div className="text-center pt-8 border-t border-border-light text-[10px] text-slate-400">
                        © 2024 x18 Technology. All rights reserved. MyGara and Xế Yêu are registered trademarks.
                    </div>
                </div>
            </footer>
        </div>
    );
}
