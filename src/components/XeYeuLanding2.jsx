import React, { useState, useEffect } from 'react';
import bannerXeyeu from '../assets/landing/banner-xeyeu.png';
import plugInImg from '../assets/landing/plug-in.png';
import connectedImg from '../assets/landing/connected.png';
import deviceImg from '../assets/landing/device.png';
import logoX18 from '../assets/landing/logo-x18.png';

export default function XeYeuLanding2() {
    const [darkMode, setDarkMode] = useState(false);
    const [lang, setLang] = useState('vi');
    const [activeStep, setActiveStep] = useState(0);
    const [isScrolled, setIsScrolled] = useState(false);

    const steps = [
        {
            title: "Cắm thiết bị OBD",
            description: "Cắm vào cổng OBD-II. Thiết bị sẽ \"nghe\" dữ liệu xe phát ra khi vận hành.",
            image: plugInImg
        },
        {
            title: "Mở ứng dụng Xế Yêu",
            description: "Ứng dụng phiên dịch tín hiệu ECU thành thông tin dễ hiểu: xe đang ổn hay có gì cần chú ý.",
            image: deviceImg
        },
        {
            title: "Nhận cảnh báo sớm",
            description: "Khi có dấu hiệu bất thường, Xế Yêu báo sớm để bạn xử lý trước khi thành sự cố.",
            image: connectedImg
        }
    ];

    // Auto-rotate steps every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveStep((prev) => (prev + 1) % steps.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [steps.length]);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    // Handle scroll for navbar z-index
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`font-display selection:bg-xe-primary/30 transition-colors duration-300 min-h-screen ${darkMode ? 'bg-black text-gray-100' : 'bg-xe-bg-light text-xe-dark-accent'}`}>
            <nav className={`sticky top-0 transition-all duration-300 backdrop-blur-xl border-b ${isScrolled ? 'z-[100]' : 'z-30'} ${darkMode ? 'bg-black/90 border-white/10' : 'bg-xe-bg-light/90 border-gray-200/50'}`}>
                <div className="max-w-[1440px] mx-auto px-4 md:px-8 h-20 flex items-center">
                    {/* Left: Logo */}
                    <div className="flex-1 flex items-center">
                        <a href="#hero" className="flex items-center gap-3 group">
                            <div className={`size-12 rounded-full flex items-center justify-center transition-all duration-300 ${darkMode ? 'bg-transparent' : 'bg-xe-dark-accent'}`}>
                                <img src={logoX18} alt="Xế Yêu Logo" className="size-9 object-contain transition-transform group-hover:scale-110" />
                            </div>
                            <h1 className="text-xl md:text-2xl font-bold tracking-tight">Xế Yêu</h1>
                        </a>
                    </div>

                    {/* Center: Desktop Navigation */}
                    <div className="hidden lg:flex items-center justify-center gap-8">
                        <a href="#giup-gi" className="text-sm font-bold uppercase tracking-widest text-gray-500 hover:text-xe-primary transition-colors">Giúp gì chủ xe</a>
                        <a href="#thiet-bi" className="text-sm font-bold uppercase tracking-widest text-gray-500 hover:text-xe-primary transition-colors">Thiết bị phù hợp</a>
                        <a href="#gia" className="text-sm font-bold uppercase tracking-widest text-gray-500 hover:text-xe-primary transition-colors">Giá Xế Yêu</a>
                        <a href="#faq" className="text-sm font-bold uppercase tracking-widest text-gray-500 hover:text-xe-primary transition-colors">Câu hỏi thường gặp</a>
                    </div>

                    {/* Right: Toggles */}
                    <div className="flex-1 flex items-center justify-end gap-4">
                        <div className={`flex items-center rounded-full p-1 transition-colors ${darkMode ? 'bg-white/10' : 'bg-gray-200'}`}>
                            <button
                                onClick={() => setLang('vi')}
                                className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${lang === 'vi' ? (darkMode ? 'bg-xe-primary text-xe-dark-accent' : 'bg-white text-xe-dark-accent shadow-sm') : 'text-gray-500'}`}
                            >
                                VI
                            </button>
                            <button
                                onClick={() => setLang('en')}
                                className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${lang === 'en' ? (darkMode ? 'bg-xe-primary text-xe-dark-accent' : 'bg-white text-xe-dark-accent shadow-sm') : 'text-gray-500'}`}
                            >
                                EN
                            </button>
                        </div>
                        <button
                            onClick={() => setDarkMode(!darkMode)}
                            className={`p-2 rounded-full transition-colors ${darkMode ? 'bg-white/10 text-gray-300 hover:text-xe-primary' : 'bg-gray-200 text-gray-600 hover:text-xe-dark-accent'}`}
                        >
                            <span className="material-symbols-outlined text-xl">
                                {darkMode ? 'light_mode' : 'dark_mode'}
                            </span>
                        </button>
                    </div>
                </div>
            </nav>

            <main className="max-w-[1440px] mx-auto px-4 md:px-8 py-8 md:py-12 space-y-24 md:space-y-32">
                {/* HERO SECTION */}
                <section id="hero" className="relative scroll-mt-32">
                    <div className={`card-premium p-8 md:p-24 relative overflow-hidden transition-colors ${darkMode ? 'bg-xe-dark-card' : 'bg-white'}`}>
                        <div className="absolute top-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-xe-primary/10 blur-[120px] rounded-full translate-x-1/4 -translate-y-1/4"></div>
                        <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6 md:space-y-8">
                                <div className="inline-flex items-center gap-2 bg-xe-primary/20 px-4 py-1.5 rounded-full">
                                    <span className="material-symbols-outlined text-[16px] text-xe-dark-accent dark:text-xe-primary">hub</span>
                                    <span className={`text-[10px] md:text-[11px] font-bold uppercase tracking-[0.1em] ${darkMode ? 'text-white' : 'text-xe-dark-accent font-black'}`}>
                                        2,5 - 5 triệu bản tin mỗi ngày
                                    </span>
                                </div>
                                <h2 className="text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight">
                                    Xe của bạn <br /><span className="text-gray-400">biết nói</span>
                                </h2>
                                <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 leading-relaxed max-w-lg">
                                    Các thiết bị bên trong xe trao đổi 2,5–5 triệu bản tin mỗi ngày.
                                    Bạn không nghe thấy. Và dữ liệu đó thường không được lưu lại để bạn hiểu.
                                    Xế Yêu ghi nhận, phiên dịch và cảnh báo bằng ngôn ngữ dễ hiểu,
                                    để bạn hành động kịp lúc.                                </p>
                                <div className="space-y-4">
                                    <button className="btn-primary-xe text-base md:text-lg w-full md:w-auto">
                                        Tải Xế Yêu – Miễn phí trọn đời
                                    </button>
                                    <p className="text-xs text-gray-400 font-medium md:ml-4 italic">
                                        Áp dụng cho 500 chủ xe đầu tiên cài đặt thành công.
                                    </p>
                                </div>
                            </div>
                            <div className="relative hidden md:block">
                                <div className={`rounded-[40px] flex items-center justify-center overflow-hidden border transition-colors ${darkMode ? 'bg-xe-dark-accent border-white/5' : 'bg-white border-gray-100'}`}>
                                    <img
                                        src={bannerXeyeu}
                                        alt="Banner Xế Yêu"
                                        className="w-full h-auto max-h-[500px] object-contain"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/0 to-xe-primary/5 pointer-events-none"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CONNECTION HIGHLIGHT SECTION */}
                <section className="space-y-12 md:space-y-16">
                    <div className="text-center space-y-4">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Xe là người bạn đường lâu năm</h2>
                        <p className="text-gray-500 dark:text-gray-400 text-base md:text-lg"> Không phải để “thông minh hơn”.<br />
                            Để hiểu nhau hơn.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                        <div className={`card-premium p-8 md:p-10 space-y-6 group transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${darkMode ? 'bg-xe-dark-card' : 'bg-white'}`}>
                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 ${darkMode ? 'bg-white/5 group-hover:bg-xe-primary/20' : 'bg-xe-bg-light group-hover:bg-xe-primary/10'}`}>
                                <span className="material-symbols-outlined text-3xl text-xe-dark-accent dark:text-xe-primary transition-transform group-hover:scale-110">family_restroom</span>
                            </div>
                            <h3 className="text-xl font-bold transition-colors group-hover:text-xe-primary">Gia đình</h3>
                            <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-sm">Giữ cho những chuyến đi cùng người thân
                                ít rủi ro bất ngờ hơn.</p>
                        </div>
                        <div className={`card-premium p-8 md:p-10 space-y-6 group transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${darkMode ? 'bg-xe-dark-card' : 'bg-white'}`}>
                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 ${darkMode ? 'bg-white/5 group-hover:bg-xe-primary/20' : 'bg-xe-bg-light group-hover:bg-xe-primary/10'}`}>
                                <span className="material-symbols-outlined text-3xl text-xe-dark-accent dark:text-xe-primary transition-transform group-hover:scale-110">business_center</span>
                            </div>
                            <h3 className="text-xl font-bold transition-colors group-hover:text-xe-primary">Công việc</h3>
                            <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-sm">Xe ổn định để bạn không bị động
                                vì một lỗi nhỏ thành sự cố lớn.</p>
                        </div>
                        <div className={`card-premium p-8 md:p-10 space-y-6 group transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${darkMode ? 'bg-xe-dark-card' : 'bg-white'}`}>
                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 ${darkMode ? 'bg-white/5 group-hover:bg-xe-primary/20' : 'bg-xe-bg-light group-hover:bg-xe-primary/10'}`}>
                                <span className="material-symbols-outlined text-3xl text-xe-dark-accent dark:text-xe-primary transition-transform group-hover:scale-110">explore</span>
                            </div>
                            <h3 className="text-xl font-bold transition-colors group-hover:text-xe-primary">Đường dài</h3>
                            <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-sm">Đi xa, đi vắng: có cảnh báo sớm để bạn
                                quyết định trước, không phải “đến lúc mới biết”.</p>
                        </div>
                    </div>
                </section>

                {/* WHY YOU NEED SECTION */}
                <section id="giup-gi" className="space-y-12 md:space-y-16 scroll-mt-32">
                    <div className="text-center">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Tại sao bạn cần Xế Yêu?</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                        <div className={`card-premium p-6 md:p-8 flex gap-6 md:gap-8 items-center border-l-4 border-l-xe-primary group transition-all duration-300 hover:scale-[1.02] hover:shadow-xl ${darkMode ? 'bg-xe-dark-card' : 'bg-white'}`}>
                            <span className="material-symbols-outlined text-3xl text-xe-dark-accent dark:text-xe-primary transition-transform group-hover:scale-110">emergency_home</span>
                            <div>
                                <h4 className="font-bold text-lg md:text-xl mb-1 transition-colors group-hover:text-xe-primary">Đèn cảnh báo bật sáng</h4>
                                <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base">Bạn không cần đoán.<br />
                                    Bạn cần giải thích rõ ràng: nhẹ hay nặng, nên làm gì trước.</p>
                            </div>
                        </div>
                        <div className={`card-premium p-6 md:p-8 flex gap-6 md:gap-8 items-center border-l-4 border-l-xe-primary group transition-all duration-300 hover:scale-[1.02] hover:shadow-xl ${darkMode ? 'bg-xe-dark-card' : 'bg-white'}`}>
                            <span className="material-symbols-outlined text-3xl text-xe-dark-accent dark:text-xe-primary transition-transform group-hover:scale-110">handshake</span>
                            <div>
                                <h4 className="font-bold text-lg md:text-xl mb-1 transition-colors group-hover:text-xe-primary">Tin tưởng Garage</h4>
                                <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base">Không phải nghi ngờ ai.<br />
                                    Chỉ là bạn cần dữ liệu để đối chiếu khi trao đổi.</p>
                            </div>
                        </div>
                        <div className={`card-premium p-6 md:p-8 flex gap-6 md:gap-8 items-center border-l-4 border-l-xe-primary group transition-all duration-300 hover:scale-[1.02] hover:shadow-xl ${darkMode ? 'bg-xe-dark-card' : 'bg-white'}`}>
                            <span className="material-symbols-outlined text-3xl text-xe-dark-accent dark:text-xe-primary transition-transform group-hover:scale-110">event_note</span>
                            <div>
                                <h4 className="font-bold text-lg md:text-xl mb-1 transition-colors group-hover:text-xe-primary">Quên lịch bảo dưỡng</h4>
                                <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base">Không chỉ nhắc theo thời gian.<br />
                                    Xế Yêu nhắc theo tình trạng vận hành và thói quen sử dụng.</p>
                            </div>
                        </div>
                        <div className={`card-premium p-6 md:p-8 flex gap-6 md:gap-8 items-center border-l-4 border-l-xe-primary group transition-all duration-300 hover:scale-[1.02] hover:shadow-xl ${darkMode ? 'bg-xe-dark-card' : 'bg-white'}`}>
                            <span className="material-symbols-outlined text-3xl text-xe-dark-accent dark:text-xe-primary transition-transform group-hover:scale-110">local_gas_station</span>
                            <div>
                                <h4 className="font-bold text-lg md:text-xl mb-1 transition-colors group-hover:text-xe-primary">Tiêu hao nhiên liệu</h4>
                                <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base">Khi xe “uống” nhiều hơn, đó là dấu hiệu.<br />
                                    Xế Yêu giúp bạn tìm nguyên nhân hợp lý để xử lý sớm.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* STEPS SECTION (REFACTORED TO INTERACTIVE TIMELINE) */}
                <section className="space-y-16">
                    <div className="text-center">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">CHỈ 3 BƯỚC ĐỂ “NGHE” XE NÓI</h2>
                    </div>

                    <div className="grid md:grid-cols-[1.3fr_0.7fr] gap-12 md:gap-16 items-center">
                        {/* Left: Vertical Timeline Steps */}
                        <div className="relative">
                            {/* Vertical Line Background */}
                            <div className={`absolute left-8 top-10 bottom-10 w-0.5 transition-colors ${darkMode ? 'bg-white/10' : 'bg-gray-200'}`}></div>

                            {/* Animated Progress Line */}
                            <div
                                className="absolute left-8 top-10 w-0.5 bg-xe-primary transition-all duration-700 ease-in-out shadow-glow"
                                style={{
                                    height: `${(activeStep / (steps.length - 1)) * 100}%`,
                                    maxHeight: 'calc(100% - 80px)'
                                }}
                            ></div>

                            {/* Steps */}
                            <div className="space-y-12">
                                {steps.map((step, index) => (
                                    <div
                                        key={index}
                                        onClick={() => setActiveStep(index)}
                                        className="relative flex items-start gap-8 cursor-pointer group transition-all duration-300 hover:translate-x-2"
                                    >
                                        {/* Step Circle/Icon */}
                                        <div className="relative z-10 flex-shrink-0">
                                            <div
                                                className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold transition-all duration-500 ${activeStep === index
                                                    ? 'bg-xe-primary text-xe-dark-accent shadow-glow scale-110'
                                                    : activeStep > index
                                                        ? 'bg-xe-primary text-xe-dark-accent shadow-sm'
                                                        : (darkMode ? 'bg-xe-dark-card border-2 border-white/10 text-gray-400' : 'bg-white border-2 border-gray-200 text-gray-500')
                                                    } group-hover:shadow-glow group-hover:scale-110 group-hover:border-xe-primary/30`}
                                            >
                                                {activeStep > index ? (
                                                    <span className="material-symbols-outlined text-2xl font-bold">check</span>
                                                ) : (
                                                    <span>{index + 1}</span>
                                                )}
                                            </div>
                                        </div>

                                        {/* Step Content */}
                                        <div className="flex-1 pt-2">
                                            <h3
                                                className={`text-2xl font-bold mb-2 transition-all duration-300 ${activeStep === index
                                                    ? 'text-xe-primary'
                                                    : (darkMode ? 'text-white' : 'text-xe-dark-accent')
                                                    } group-hover:text-xe-primary`}
                                            >
                                                {step.title}
                                            </h3>
                                            <p className={`text-base leading-relaxed transition-colors duration-300 ${darkMode ? 'text-gray-400' : 'text-gray-500'} group-hover:text-opacity-100`}>
                                                {step.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right: Image Display */}
                        <div className="relative h-[400px] md:h-[450px] flex items-center justify-center">
                            {steps.map((step, index) => (
                                <div
                                    key={index}
                                    className={`absolute inset-0 transition-all duration-700 ease-in-out ${activeStep === index
                                        ? 'opacity-100 scale-100 z-10'
                                        : 'opacity-0 scale-95 z-0'
                                        }`}
                                >
                                    <div className={`w-full h-full rounded-[30px] flex items-center justify-center overflow-hidden border p-3 transition-colors ${darkMode ? 'bg-xe-dark-card border-white/5' : 'bg-white border-gray-100 shadow-xl'
                                        }`}>
                                        <div className="relative w-full h-full rounded-2xl overflow-hidden group">
                                            <img
                                                src={step.image}
                                                alt={step.title}
                                                className="w-full h-full object-cover"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-40"></div>
                                        </div>
                                    </div>
                                    {/* Decorative background glow behind the image */}
                                    <div className="absolute -inset-4 bg-xe-primary/5 blur-2xl rounded-full -z-10"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* HARDWARE SECTION */}
                <section id="thiet-bi" className="space-y-16 scroll-mt-32">
                    <div className="text-center space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Lựa chọn phần cứng</h2>
                        <div className="inline-flex items-center gap-2 px-6 py-2 bg-xe-primary/10 text-xe-dark-accent dark:text-xe-primary font-bold rounded-full border border-xe-primary/30">
                            <span className="material-symbols-outlined text-sm">info</span>
                            Xế Yêu không bán thiết bị
                        </div>
                        <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto"> Bạn nhập Hãng xe – Dòng xe – Đời xe trong ứng dụng.
                            Xế Yêu sẽ gợi ý 3 lựa chọn thiết bị phù hợp.
                            Bạn tự quyết định và mua từ bên thứ ba theo nhu cầu.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className={`card-premium p-8 flex flex-col ${darkMode ? 'bg-xe-dark-card' : 'bg-white'}`}>
                            <div className="mb-8">
                                <h4 className="text-2xl font-bold">Cơ bản</h4>
                                <p className="text-xe-primary font-bold mt-2 text-xl">200 – 500 nghìn đồng</p>
                            </div>
                            <ul className="space-y-4 mb-10 flex-1">
                                <li className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                                    <span className="material-symbols-outlined text-xe-primary text-xl">check_circle</span>
                                    Phù hợp nhu cầu cơ bản
                                </li>
                                <li className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                                    <span className="material-symbols-outlined text-xe-primary text-xl">check_circle</span>
                                    Hoạt động khi xe đang nổ máy
                                </li>
                                <li className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                                    <span className="material-symbols-outlined text-xe-primary text-xl">check_circle</span>
                                    Có hạn chế về tính năng và độ ổn định
                                </li>
                            </ul>
                            <button className="w-full py-3.5 rounded-xl border-2 border-xe-dark-accent dark:border-xe-primary text-xe-dark-accent dark:text-xe-primary font-bold hover:bg-xe-dark-accent dark:hover:bg-xe-primary hover:text-white dark:hover:text-xe-dark-accent transition-all duration-300">
                                Xem link mua
                            </button>
                        </div>
                        <div className={`card-premium p-8 flex flex-col relative border-2 border-xe-primary ${darkMode ? 'bg-xe-dark-card shadow-glow' : 'bg-white shadow-xl'}`}>
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-xe-primary text-xe-dark-accent px-5 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest">Khuyên dùng</div>
                            <div className="mb-8">
                                <h4 className="text-2xl font-bold">Ổn định</h4>
                                <p className="text-xe-primary font-bold mt-2 text-xl">1,2 – 2,5 triệu đồng</p>
                            </div>
                            <ul className="space-y-4 mb-10 flex-1">
                                <li className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                                    <span className="material-symbols-outlined text-xe-primary text-xl">check_circle</span>
                                    Ổn định hơn, đủ tính năng cho đa số người dùng
                                </li>
                                <li className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                                    <span className="material-symbols-outlined text-xe-primary text-xl">check_circle</span>
                                    Có thể hoạt động liên tục, kể cả khi xe không nổ máy (tùy mẫu)
                                </li>
                            </ul>
                            <button className="w-full py-3.5 rounded-xl bg-xe-primary text-xe-dark-accent font-bold shadow-glow hover:scale-105 transition-all duration-300">
                                Xem link mua
                            </button>
                        </div>
                        <div className={`card-premium p-8 flex flex-col ${darkMode ? 'bg-xe-dark-card' : 'bg-white'}`}>
                            <div className="mb-8">
                                <h4 className="text-2xl font-bold">Chuyên sâu</h4>
                                <p className="text-xe-primary font-bold mt-2 text-xl">Trên 3 triệu đồng</p>
                            </div>
                            <ul className="space-y-4 mb-10 flex-1">
                                <li className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                                    <span className="material-symbols-outlined text-xe-primary text-xl">check_circle</span>
                                    Dành cho xe cao cấp (BMW, Mercedes Benz, Porsche…)
                                </li>
                                <li className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                                    <span className="material-symbols-outlined text-xe-primary text-xl">check_circle</span>
                                    Ổn định nhất, dữ liệu đầy đủ hơn
                                </li>
                            </ul>
                            <button className="w-full py-3.5 rounded-xl border-2 border-xe-dark-accent dark:border-xe-primary text-xe-dark-accent dark:text-xe-primary font-bold hover:bg-xe-dark-accent dark:hover:bg-xe-primary hover:text-white dark:hover:text-xe-dark-accent transition-all duration-300">
                                Xem link mua
                            </button>
                        </div>
                    </div>
                    <div className={`max-w-4xl mx-auto card-premium p-8 md:p-10 border-2 border-xe-primary/20 ${darkMode ? 'bg-xe-dark-card' : 'bg-white'}`}>
                        <div className="text-center mb-8">
                            <h4 className="text-lg font-bold">Chọn xe để gợi ý OBD</h4>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <select className={`input-field-xe border-2 ${darkMode ? 'bg-xe-dark-accent text-white border-white/5' : 'bg-white text-xe-dark-accent border-xe-dark-accent/10'}`}>
                                <option disabled defaultValue>Hãng xe</option>
                                <option>Toyota</option>
                                <option>Honda</option>
                                <option>Mazda</option>
                                <option>Kia/Hyundai</option>
                            </select>
                            <select className={`input-field-xe border-2 ${darkMode ? 'bg-xe-dark-accent text-white border-white/5' : 'bg-white text-xe-dark-accent border-xe-dark-accent/10'}`}>
                                <option disabled defaultValue>Dòng xe</option>
                                <option>Vios</option>
                                <option>City</option>
                                <option>CX-5</option>
                                <option>Santa Fe</option>
                            </select>
                            <select className={`input-field-xe border-2 ${darkMode ? 'bg-xe-dark-accent text-white border-white/5' : 'bg-white text-xe-dark-accent border-xe-dark-accent/10'}`}>
                                <option disabled defaultValue>Năm sản xuất</option>
                                <option>2024</option>
                                <option>2023</option>
                                <option>2022</option>
                                <option>Trước 2020</option>
                            </select>
                        </div>
                    </div>
                </section>

                {/* AUTHORIZATION SECTION */}
                <section className={`card-premium p-8 md:p-12 bg-xe-dark-accent text-white overflow-hidden relative border-none`}>
                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-xe-primary/20 blur-[100px] rounded-full"></div>
                    <div className="relative z-10 flex flex-col md:flex-row items-center gap-12 md:gap-16">
                        <div className="flex-1 space-y-6 text-left">
                            <h2 className="text-3xl md:text-4xl font-bold leading-tight">Chăm xe không chỉ có bạn – hãy mời gara bạn tin tưởng cùng tham gia.</h2>
                            <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                                Bạn đã từng đến một hay vài gara quen. Hãy kết nối, chia sẻ dữ liệu sức khỏe và cách bạn vận hành xe, để gara cùng bạn chăm sóc xe của mình. Bạn là chủ của toàn bộ dữ liệu xe, bạn chỉ cần chia sẻ một phần dữ liệu và không ảnh hưởng tới quyền riêng tư. Xế Yêu luôn tôn trọng và bảo vệ quyền riêng tư của bạn.
                            </p>
                            <div className="flex items-center gap-4 text-xe-primary font-bold">
                                <span className="material-symbols-outlined">person_shield</span>
                                <span>Bạn giữ quyền dữ liệu</span>
                            </div>
                            <div className="flex items-center gap-4 text-xe-primary font-bold">
                                <span className="material-symbols-outlined">car_repair</span>
                                <span>Gara hiểu rõ tình trạng xe trước khi sửa</span>
                            </div>
                            <div className="flex items-center gap-4 text-xe-primary font-bold">
                                <span className="material-symbols-outlined">query_stats</span>
                                <span>Hai bên nói chuyện bằng dữ liệu, không cảm tính</span>
                            </div>

                            <div className="pt-4 mt-6 border-t border-white/10">
                                <p className="text-sm text-gray-400 italic leading-relaxed">
                                    Xế Yêu không thay thế gara. <br />
                                    Xế Yêu giúp bạn và gara hiểu xe giống nhau hơn.
                                </p>
                            </div>
                        </div>
                        <div className="flex-1 space-y-8 bg-white/5 p-8 md:p-10 rounded-[32px] border border-white/10 backdrop-blur-sm">
                            <div className="space-y-2">
                                <h3 className="text-xe-primary text-sm font-black uppercase tracking-widest">Cách kết nối</h3>
                                <p className="text-xl font-bold">Chỉ 1 phút để mời gara:</p>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-center gap-4 group">
                                    <div className="w-8 h-8 rounded-full bg-xe-primary/20 border border-xe-primary/30 flex items-center justify-center text-xe-primary font-bold text-sm transition-all group-hover:scale-110 group-hover:bg-xe-primary group-hover:text-xe-dark-accent">1</div>
                                    <p className="text-gray-300 font-medium">Mở app Xế Yêu</p>
                                </div>
                                <div className="flex items-center gap-4 group">
                                    <div className="w-8 h-8 rounded-full bg-xe-primary/20 border border-xe-primary/30 flex items-center justify-center text-xe-primary font-bold text-sm transition-all group-hover:scale-110 group-hover:bg-xe-primary group-hover:text-xe-dark-accent">2</div>
                                    <p className="text-gray-300 font-medium">Chọn “Mời gara chăm sóc xe”</p>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-4 group">
                                        <div className="w-8 h-8 rounded-full bg-xe-primary/20 border border-xe-primary/30 flex items-center justify-center text-xe-primary font-bold text-sm transition-all group-hover:scale-110 group-hover:bg-xe-primary group-hover:text-xe-dark-accent">3</div>
                                        <p className="text-gray-300 font-medium">Gửi lời mời qua:</p>
                                    </div>
                                    <div className="grid grid-cols-2 gap-3 ml-12">
                                        <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-xl text-sm font-bold text-xe-primary cursor-pointer hover:bg-white/10 transition-colors">
                                            <span className="material-symbols-outlined text-lg">call</span> SĐT
                                        </div>
                                        <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-xl text-sm font-bold text-xe-primary cursor-pointer hover:bg-white/10 transition-colors">
                                            <span className="material-symbols-outlined text-lg">chat</span> Zalo
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={`mt-8 pt-6 border-t border-white/10 text-xs md:text-sm text-gray-400 italic flex items-center gap-2`}>
                                <span className="material-symbols-outlined text-xe-primary text-lg">info</span>
                                Gara nhận link → cài app gara → pairing với xe của bạn.
                            </div>
                        </div>
                    </div>
                </section>

                {/* PRICING SECTION */}
                <section id="gia" className="space-y-16 scroll-mt-32">
                    <div className="text-center space-y-4">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Giá phần mềm</h2>
                        <p className="text-gray-500 dark:text-gray-400 text-base md:text-lg"> Phần mềm Xế Yêu giúp bạn hiểu xe, cảnh báo sớm <br />
                            và lưu lại lịch sử để chủ động và minh bạch khi chăm sóc xe.</p>
                    </div>
                    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
                        <div className={`md:col-span-3 card-premium p-8 md:p-12 space-y-10 ${darkMode ? 'bg-xe-dark-card' : 'bg-white'}`}>
                            <div className="flex justify-between items-start">
                                <div className="text-left">
                                    <h3 className="text-2xl font-bold">Giá chính thức</h3>
                                    <p className="text-gray-400 text-sm mt-1">Đầy đủ tính năng, không giới hạn</p>
                                </div>
                                <span className="material-symbols-outlined text-4xl text-xe-primary">workspace_premium</span>
                            </div>
                            <div className="space-y-4">
                                <label className="block cursor-pointer group">
                                    <input defaultChecked className="hidden peer" name="plan" type="radio" />
                                    <div className={`flex items-center justify-between p-6 rounded-2xl border-2 transition-all peer-checked:border-xe-primary peer-checked:bg-xe-primary/5 ${darkMode ? 'border-white/10' : 'border-gray-100'}`}>
                                        <div className="text-left">
                                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Gói Tháng</p>
                                            <p className="text-2xl font-bold">199.000 đồng <span className="text-base font-normal text-gray-400">/ tháng</span></p>
                                        </div>
                                        <div className={`size-6 rounded-full border-2 transition-all peer-checked:border-xe-primary peer-checked:bg-xe-primary flex items-center justify-center ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                                            <div className="size-2 bg-white rounded-full"></div>
                                        </div>
                                    </div>
                                </label>
                                <label className="block cursor-pointer group">
                                    <input className="hidden peer" name="plan" type="radio" />
                                    <div className={`flex items-center justify-between p-6 rounded-2xl border-2 transition-all peer-checked:border-xe-primary peer-checked:bg-xe-primary/5 relative ${darkMode ? 'border-white/10' : 'border-gray-100'}`}>
                                        <span className="absolute -top-3 right-8 bg-xe-dark-accent text-xe-primary text-[10px] font-black px-3 py-1 rounded-full uppercase">Tiết kiệm 20%</span>
                                        <div className="text-left">
                                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Gói 3 Năm</p>
                                            <p className="text-2xl font-bold">5.999.000 đồng <span className="text-base font-normal text-gray-400">/ 3 năm</span></p>
                                        </div>
                                        <div className={`size-6 rounded-full border-2 transition-all peer-checked:border-xe-primary peer-checked:bg-xe-primary flex items-center justify-center ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                                            <div className="size-2 bg-white rounded-full"></div>
                                        </div>
                                    </div>
                                </label>
                            </div>
                            <button className="w-full btn-primary-xe py-5 text-lg">Kích hoạt ngay</button>
                        </div>
                        <div className={`md:col-span-2 rounded-2xl p-8 md:p-10 text-white flex flex-col justify-center gap-8 shadow-2xl relative overflow-hidden border transition-colors ${darkMode ? 'bg-xe-dark-card border-white/5' : 'bg-xe-dark-accent border-transparent'}`}>
                            <div className="absolute top-0 left-0 w-full h-1 bg-xe-primary"></div>
                            <div className="space-y-4 text-left">
                                <span className="inline-block px-3 py-1 bg-xe-primary/10 text-xe-primary text-[10px] font-black uppercase tracking-widest rounded-md">Ưu đãi ra mắt</span>
                                <h4 className="text-3xl font-bold leading-tight">Miễn phí trọn đời cho 500 chủ xe</h4>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    500 người đầu tiên tải và cài đặt Xế Yêu thành công
                                    sẽ được sử dụng phần mềm trọn đời, không mất phí.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                                    <div className="h-full bg-xe-primary w-[85%]"></div>
                                </div>
                                <p className="text-[11px] text-gray-500 font-bold text-right">Chỉ còn 72 suất</p>
                            </div>
                            <button className="w-full bg-xe-primary text-xe-dark-accent py-4 rounded-xl font-bold hover:scale-105 transition-transform shadow-glow">Nhận suất trọn đời</button>
                        </div>
                    </div>
                </section>

                {/* TRUST SECTION */}
                <section className="space-y-16">
                    <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-y transition-colors ${darkMode ? 'border-white/5' : 'border-gray-100'}`}>
                        <div className="text-center space-y-4 group">
                            <span className="material-symbols-outlined text-xe-primary text-4xl transition-transform group-hover:scale-110">person_shield</span>
                            <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 uppercase font-bold tracking-[0.15em]">Quyền dữ liệu thuộc<br /> về bạn</p>
                        </div>
                        <div className="text-center space-y-4 group">
                            <span className="material-symbols-outlined text-xe-primary text-4xl transition-transform group-hover:scale-110">handshake</span>
                            <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 uppercase font-bold tracking-[0.15em]">Minh bạch khi làm việc<br /> với garage</p>
                        </div>
                        <div className="text-center space-y-4 group">
                            <span className="material-symbols-outlined text-xe-primary text-4xl transition-transform group-hover:scale-110">notifications_active</span>
                            <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 uppercase font-bold tracking-[0.15em]">Cảnh báo sớm<br /> không bị động</p>
                        </div>
                        <div className="text-center space-y-4 group">
                            <span className="material-symbols-outlined text-xe-primary text-4xl transition-transform group-hover:scale-110">update</span>
                            <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 uppercase font-bold tracking-[0.15em]">Cập nhật định kỳ</p>
                        </div>
                    </div>

                    {/* FAQ SECTION */}
                    <div id="faq" className="max-w-3xl mx-auto space-y-8 scroll-mt-32">
                        <h3 className="text-3xl font-bold text-center">Câu hỏi thường gặp</h3>
                        <div className="space-y-4">
                            <details className={`group card-premium p-6 cursor-pointer ${darkMode ? 'bg-xe-dark-card' : 'bg-white'}`} open>
                                <summary className="flex items-center justify-between font-bold list-none text-left">
                                    Xế Yêu có bán kèm thiết bị OBD không?
                                    <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
                                </summary>
                                <p className="mt-4 text-gray-500 dark:text-gray-400 leading-relaxed text-sm text-left">
                                    Không. Xế Yêu chỉ phát triển phần mềm.<br />
                                    Bạn có thể mua thiết bị OBD-II tại các cửa hàng phụ kiện hoặc sàn TMĐT.                                </p>
                            </details>
                            <details className={`group card-premium p-6 cursor-pointer ${darkMode ? 'bg-xe-dark-card' : 'bg-white'}`}>
                                <summary className="flex items-center justify-between font-bold list-none text-left">
                                    Xe đã đồng hành nhiều năm có dùng được không?
                                    <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
                                </summary>
                                <p className="mt-4 text-gray-500 dark:text-gray-400 leading-relaxed text-sm text-left">
                                    Hầu hết xe có cổng OBD-II (thường từ năm 2005 trở về sau) đều tương thích.                                </p>
                            </details>
                            <details className={`group card-premium p-6 cursor-pointer ${darkMode ? 'bg-xe-dark-card' : 'bg-white'}`}>
                                <summary className="flex items-center justify-between font-bold list-none text-left">
                                    Xế Yêu có nhiều gói phần mềm không?
                                    <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
                                </summary>
                                <p className="mt-4 text-gray-500 dark:text-gray-400 leading-relaxed text-sm text-left">
                                    Không. Chỉ có 10 USD/tháng hoặc 249 USD/3 năm.<br />
                                    Ưu đãi trọn đời áp dụng cho 500 người đầu tiên cài đặt thành công.                                </p>
                            </details>
                        </div>
                    </div>
                </section>

                {/* BOTTOM CTA */}
                <section>
                    <div className={`rounded-3xl p-10 md:p-16 text-center text-white space-y-6 md:space-y-8 relative overflow-hidden border shadow-2xl transition-colors ${darkMode ? 'bg-xe-dark-card border-white/5' : 'bg-xe-dark-accent border-transparent'}`}>
                        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #a4ec13 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
                        <div className="relative z-10 space-y-6">
                            <h2 className="text-2xl md:text-5xl font-bold max-w-4xl mx-auto leading-tight">
                                Chiếc xe đã đồng hành cùng bạn nhiều năm. <br />
                                <span className="text-xe-primary">Bạn có muốn nghe nó nói không?</span>
                            </h2>
                            <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                                Đừng đợi đến khi xe buộc bạn phải dừng lại. <br />
                                Nghe sớm, hiểu đúng, xử lý kịp lúc.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center pt-8">
                                <button className="bg-xe-primary text-xe-dark-accent px-8 md:px-10 py-4 rounded-full font-bold text-base md:text-lg shadow-glow hover:scale-105 transition-all flex items-center justify-center gap-2">
                                    <span className="material-symbols-outlined">download</span>
                                    Tải app – kiểm tra suất trọn đời
                                </button>
                                <button className={`px-8 md:px-10 py-4 rounded-full font-bold text-base md:text-lg transition-all flex items-center justify-center gap-2 border bg-white/5 border-white/10 text-xe-primary hover:bg-white/10 hover:scale-105`}>
                                    <span className="material-symbols-outlined">play_circle</span>
                                    Xem video hướng dẫn
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* FOOTER */}
            <footer className={`mt-32 border-t py-16 md:py-20 transition-colors ${darkMode ? 'bg-xe-dark-accent border-white/5' : 'bg-white border-gray-100'}`}>
                <div className="max-w-[1440px] mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
                    <div className="col-span-1 md:col-span-2 space-y-6 text-left">
                        <div className="flex items-center gap-3">
                            <div className={`size-12 rounded-full flex items-center justify-center transition-all duration-300 ${darkMode ? 'bg-transparent' : 'bg-xe-dark-accent'}`}>
                                <img src={logoX18} alt="Xế Yêu Logo" className="size-9 object-contain" />
                            </div>
                            <span className="font-bold text-2xl tracking-tight dark:text-white">Xế Yêu</span>
                        </div>
                        <p className="text-gray-400 max-w-sm leading-relaxed text-sm">
                            Ứng dụng hàng đầu Việt Nam về chăm sóc sức khỏe ô tô qua dữ liệu OBD-II. Giúp chủ xe thấu hiểu người bạn đồng hành hơn bao giờ hết.
                        </p>
                    </div>
                    <div className="space-y-6 text-left">
                        <h5 className="font-bold uppercase text-[10px] tracking-[0.2em] text-gray-400">Liên kết</h5>
                        <div className="flex flex-col gap-3 text-sm font-medium text-gray-600 dark:text-gray-400">
                            <a className="hover:text-xe-primary transition-colors" href="#">Tính năng</a>
                            <a className="hover:text-xe-primary transition-colors" href="#">Phần cứng</a>
                            <a className="hover:text-xe-primary transition-colors" href="#">Bảng giá</a>
                        </div>
                    </div>
                    <div className="space-y-6 text-left">
                        <h5 className="font-bold uppercase text-[10px] tracking-[0.2em] text-gray-400">Pháp lý</h5>
                        <div className="flex flex-col gap-3 text-sm font-medium text-gray-600 dark:text-gray-400">
                            <a className="hover:text-xe-primary transition-colors" href="#">Điều khoản sử dụng</a>
                            <a className="hover:text-xe-primary transition-colors" href="#">Chính sách bảo mật</a>
                            <p className="mt-4 text-xs text-gray-500 font-normal">© 2024 Xế Yêu • xeyeu.x18.io <br />
                                Developed by x18 Technology</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
