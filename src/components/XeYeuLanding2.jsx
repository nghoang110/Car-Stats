import React, { useState, useEffect } from 'react';
import bannerXeyeu from '../assets/landing/banner-xeyeu.png';
import plugInImg from '../assets/landing/plug-in.png';
import connectedImg from '../assets/landing/connected.png';
import deviceImg from '../assets/landing/device.png';
import logoX18 from '../assets/landing/logo-x18.png';

export default function XeYeuLanding2() {
    const [darkMode, setDarkMode] = useState(false);
    const [lang, setLang] = useState(() => {
        const saved = localStorage.getItem('lang');
        return saved || 'vi';
    });
    const [activeStep, setActiveStep] = useState(0);
    const [isScrolled, setIsScrolled] = useState(false);

    const steps = [
        {
            titleVi: "Cắm thiết bị OBD",
            titleEn: "Plug in OBD device",
            descriptionVi: "Cắm vào cổng OBD-II. Thiết bị sẽ \"nghe\" dữ liệu xe phát ra khi vận hành.",
            descriptionEn: "Plug into the OBD-II port. The device will \"listen\" to the data your car emits during operation.",
            image: plugInImg
        },
        {
            titleVi: "Mở ứng dụng Xế Yêu",
            titleEn: "Open Xe Yeu app",
            descriptionVi: "Ứng dụng phiên dịch tín hiệu ECU thành thông tin dễ hiểu: xe đang ổn hay có gì cần chú ý.",
            descriptionEn: "The app translates ECU signals into easy-to-understand information: whether your car is fine or needs attention.",
            image: deviceImg
        },
        {
            titleVi: "Nhận cảnh báo sớm",
            titleEn: "Get early warnings",
            descriptionVi: "Khi có dấu hiệu bất thường, Xế Yêu báo sớm để bạn xử lý trước khi thành sự cố.",
            descriptionEn: "When there are abnormal signs, Xế Yêu alerts you early so you can handle it before it becomes a problem.",
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

    useEffect(() => {
        localStorage.setItem('lang', lang);
        document.title = lang === 'vi' ? 'Xế Yêu - Trợ lý thông minh cho xe' : 'Xe Yeu - Smart Assistant for Your Car';
    }, [lang]);

    const t = (vi, en) => (lang === 'vi' ? vi : en);

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
                            <h1 className="text-xl md:text-2xl font-bold tracking-tight"> {t('Xế Yêu', 'Xe Yeu')}</h1>
                        </a>
                    </div>

                    {/* Center: Desktop Navigation */}
                    <div className="hidden lg:flex items-center justify-center gap-8">
                        <a href="#giup-gi" className="text-sm font-bold uppercase tracking-widest text-gray-500 hover:text-xe-primary transition-colors">{t('Giúp gì chủ xe', 'For Car Owners')}</a>
                        <a href="#thiet-bi" className="text-sm font-bold uppercase tracking-widest text-gray-500 hover:text-xe-primary transition-colors">{t('Thiết bị phù hợp', 'Compatible Devices')}</a>
                        <a href="#gia" className="text-sm font-bold uppercase tracking-widest text-gray-500 hover:text-xe-primary transition-colors">{t('Giá Xế Yêu', 'Pricing')}</a>
                        <a href="#faq" className="text-sm font-bold uppercase tracking-widest text-gray-500 hover:text-xe-primary transition-colors">{t('Câu hỏi thường gặp', 'FAQ')}</a>
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
                                        {t('2,5 - 5 triệu bản tin mỗi ngày', '2.5 - 5 million messages per day')}
                                    </span>
                                </div>
                                <h2 className="text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight">
                                    {t('Xe của bạn', 'Your car')} <br /><span className="text-gray-400">{t('biết nói', 'can speak')}</span>
                                </h2>
                                <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 leading-relaxed max-w-lg">
                                    {t('Các thiết bị bên trong xe trao đổi 2,5–5 triệu bản tin mỗi ngày. Bạn không nghe thấy. Và dữ liệu đó thường không được lưu lại để bạn hiểu. Xế Yêu ghi nhận, phiên dịch và cảnh báo bằng ngôn ngữ dễ hiểu, để bạn hành động kịp lúc.', 'Devices inside your car exchange 2.5–5 million messages every day. You don\'t hear them. And that data is usually not saved for you to understand. Xe Yeu records, translates, and alerts in easy-to-understand language, so you can act in time.')}
                                </p>
                                <div className="space-y-4">
                                    <button className="btn-primary-xe text-base md:text-lg w-full md:w-auto">
                                        {t('Tải Xế Yêu – Miễn phí trọn đời', 'Download Xe Yeu – Free for Life')}
                                    </button>
                                    <p className="text-xs text-gray-400 font-medium md:ml-4 italic">
                                        {t('Áp dụng cho 500 chủ xe đầu tiên cài đặt thành công.', 'For the first 500 car owners who successfully install.')}
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
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight"> {t('Xe là người bạn đường lâu năm', 'Cars are long-time companions')}</h2>
                        <p className="text-gray-500 dark:text-gray-400 text-base md:text-lg"> {t('Không phải để “thông minh hơn”.', 'Not to be "smarter"')}<br />
                            {t('Để hiểu nhau hơn', 'To understand each other better')}</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                        <div className={`card-premium p-8 md:p-10 space-y-6 group transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${darkMode ? 'bg-xe-dark-card' : 'bg-white'}`}>
                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 ${darkMode ? 'bg-white/5 group-hover:bg-xe-primary/20' : 'bg-xe-bg-light group-hover:bg-xe-primary/10'}`}>
                                <span className="material-symbols-outlined text-3xl text-xe-dark-accent dark:text-xe-primary transition-transform group-hover:scale-110">family_restroom</span>
                            </div>
                            <h3 className="text-xl font-bold transition-colors group-hover:text-xe-primary">{t('Gia đình', 'Family')}</h3>
                            <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-sm">{t('Giữ cho những chuyến đi cùng người thân ít rủi ro bất ngờ hơn.', 'Keep trips with loved ones less risky and more predictable.')}</p>
                        </div>
                        <div className={`card-premium p-8 md:p-10 space-y-6 group transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${darkMode ? 'bg-xe-dark-card' : 'bg-white'}`}>
                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 ${darkMode ? 'bg-white/5 group-hover:bg-xe-primary/20' : 'bg-xe-bg-light group-hover:bg-xe-primary/10'}`}>
                                <span className="material-symbols-outlined text-3xl text-xe-dark-accent dark:text-xe-primary transition-transform group-hover:scale-110">business_center</span>
                            </div>
                            <h3 className="text-xl font-bold transition-colors group-hover:text-xe-primary">{t('Công việc', 'Work')}</h3>
                            <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-sm">{t('Xe ổn định để bạn không bị động vì một lỗi nhỏ thành sự cố lớn.', 'A stable car so you\'re not caught off guard by a small error becoming a big problem.')}</p>
                        </div>
                        <div className={`card-premium p-8 md:p-10 space-y-6 group transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${darkMode ? 'bg-xe-dark-card' : 'bg-white'}`}>
                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 ${darkMode ? 'bg-white/5 group-hover:bg-xe-primary/20' : 'bg-xe-bg-light group-hover:bg-xe-primary/10'}`}>
                                <span className="material-symbols-outlined text-3xl text-xe-dark-accent dark:text-xe-primary transition-transform group-hover:scale-110">explore</span>
                            </div>
                            <h3 className="text-xl font-bold transition-colors group-hover:text-xe-primary">{t('Đường dài', 'Long Distance')}</h3>
                            <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-sm">{t('Đi xa, đi vắng: có cảnh báo sớm để bạn quyết định trước, không phải “đến lúc mới biết”.', 'Going away, being absent: early warnings allow you to make decisions in advance, not "find it at the last minute".')}</p>
                        </div>
                    </div>
                </section>

                {/* WHY YOU NEED SECTION */}
                <section id="giup-gi" className="space-y-12 md:space-y-16 scroll-mt-32">
                    <div className="text-center">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{t('Tại sao bạn cần Xế Yêu?', 'Why do you need Xe Yeu?')}</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                        <div className={`card-premium p-6 md:p-8 flex gap-6 md:gap-8 items-center border-l-4 border-l-xe-primary group transition-all duration-300 hover:scale-[1.02] hover:shadow-xl ${darkMode ? 'bg-xe-dark-card' : 'bg-white'}`}>
                            <span className="material-symbols-outlined text-3xl text-xe-dark-accent dark:text-xe-primary transition-transform group-hover:scale-110">emergency_home</span>
                            <div>
                                <h4 className="font-bold text-lg md:text-xl mb-1 transition-colors group-hover:text-xe-primary">{t('Đèn cảnh báo bật sáng', 'Warning lights on')}</h4>
                                <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base">{t('Bạn không cần đoán.', 'You don\'t need to guess.')}<br />
                                    {t('Bạn cần giải thích rõ ràng: nhẹ hay nặng, nên làm gì trước.', 'You need a clear explanation: minor or serious, what to do first.')}</p>
                            </div>
                        </div>
                        <div className={`card-premium p-6 md:p-8 flex gap-6 md:gap-8 items-center border-l-4 border-l-xe-primary group transition-all duration-300 hover:scale-[1.02] hover:shadow-xl ${darkMode ? 'bg-xe-dark-card' : 'bg-white'}`}>
                            <span className="material-symbols-outlined text-3xl text-xe-dark-accent dark:text-xe-primary transition-transform group-hover:scale-110">handshake</span>
                            <div>
                                <h4 className="font-bold text-lg md:text-xl mb-1 transition-colors group-hover:text-xe-primary">{t('Tin tưởng Garage', 'Trust your Garage')}</h4>
                                <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base">{t('Không phải nghi ngờ ai.', 'Not about doubting anyone.')}<br />
                                    {t('Chỉ là bạn cần dữ liệu để đối chiếu khi trao đổi.', 'Just that you need data to cross-check when discussing.')}</p>
                            </div>
                        </div>
                        <div className={`card-premium p-6 md:p-8 flex gap-6 md:gap-8 items-center border-l-4 border-l-xe-primary group transition-all duration-300 hover:scale-[1.02] hover:shadow-xl ${darkMode ? 'bg-xe-dark-card' : 'bg-white'}`}>
                            <span className="material-symbols-outlined text-3xl text-xe-dark-accent dark:text-xe-primary transition-transform group-hover:scale-110">event_note</span>
                            <div>
                                <h4 className="font-bold text-lg md:text-xl mb-1 transition-colors group-hover:text-xe-primary">{t('Quên lịch bảo dưỡng', 'Forget maintenance schedule')}</h4>
                                <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base">{t('Không chỉ nhắc theo thời gian.', 'Not just time-based reminders.')}<br />
                                    {t('Xế Yêu nhắc theo tình trạng vận hành và thói quen sử dụng.', 'Xế Yêu reminds based on operating condition and usage habits.')}</p>
                            </div>
                        </div>
                        <div className={`card-premium p-6 md:p-8 flex gap-6 md:gap-8 items-center border-l-4 border-l-xe-primary group transition-all duration-300 hover:scale-[1.02] hover:shadow-xl ${darkMode ? 'bg-xe-dark-card' : 'bg-white'}`}>
                            <span className="material-symbols-outlined text-3xl text-xe-dark-accent dark:text-xe-primary transition-transform group-hover:scale-110">local_gas_station</span>
                            <div>
                                <h4 className="font-bold text-lg md:text-xl mb-1 transition-colors group-hover:text-xe-primary">{t('Tiêu hao nhiên liệu', 'Fuel consumption')}</h4>
                                <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base">{t('Khi xe "uống" nhiều hơn, đó là dấu hiệu.', 'When your car "drinks" more, that\'s a sign.')}<br />
                                    {t('Xế Yêu giúp bạn tìm nguyên nhân hợp lý để xử lý sớm.', 'Xế Yêu helps you find reasonable causes to handle early.')}</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* STEPS SECTION (REFACTORED TO INTERACTIVE TIMELINE) */}
                <section className="space-y-16">
                    <div className="text-center">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{t('CHỈ 3 BƯỚC ĐỂ "NGHE" XE NÓI', 'JUST 3 STEPS TO "HEAR" YOUR CAR SPEAK')}</h2>
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
                                                {lang === 'vi' ? step.titleVi : step.titleEn}
                                            </h3>
                                            <p className={`text-base leading-relaxed transition-colors duration-300 ${darkMode ? 'text-gray-400' : 'text-gray-500'} group-hover:text-opacity-100`}>
                                                {lang === 'vi' ? step.descriptionVi : step.descriptionEn}
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
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{t('Lựa chọn phần cứng', 'Hardware Options')}</h2>
                        <div className="inline-flex items-center gap-2 px-6 py-2 bg-xe-primary/10 text-xe-dark-accent dark:text-xe-primary font-bold rounded-full border border-xe-primary/30">
                            <span className="material-symbols-outlined text-sm">info</span>
                            {t('Xế Yêu không bán thiết bị', 'Xe Yeu does not sell devices')}
                        </div>
                        <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">{t('Bạn nhập Hãng xe – Dòng xe – Đời xe trong ứng dụng. Xế Yêu sẽ gợi ý 3 lựa chọn thiết bị phù hợp. Bạn tự quyết định và mua từ bên thứ ba theo nhu cầu.', 'Enter your car brand, model, and year in the app. Xe Yeu will suggest 3 suitable device options. You decide and purchase from third parties as needed.')}</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className={`card-premium p-8 flex flex-col ${darkMode ? 'bg-xe-dark-card' : 'bg-white'}`}>
                            <div className="mb-8">
                                <h4 className="text-2xl font-bold">{t('Cơ bản', 'Basic')}</h4>
                                <p className="text-xe-primary font-bold mt-2 text-xl">{t('200 – 500 nghìn đồng', '200 – 500 thousand VND')}</p>
                            </div>
                            <ul className="space-y-4 mb-10 flex-1">
                                <li className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                                    <span className="material-symbols-outlined text-xe-primary text-xl">check_circle</span>
                                    {t('Phù hợp nhu cầu cơ bản', 'Suitable for basic needs')}
                                </li>
                                <li className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                                    <span className="material-symbols-outlined text-xe-primary text-xl">check_circle</span>
                                    {t('Hoạt động khi xe đang nổ máy', 'Works when engine is running')}
                                </li>
                                <li className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                                    <span className="material-symbols-outlined text-xe-primary text-xl">check_circle</span>
                                    {t('Có hạn chế về tính năng và độ ổn định', 'Limited features and stability')}
                                </li>
                            </ul>
                            <button className="w-full py-3.5 rounded-xl border-2 border-xe-dark-accent dark:border-xe-primary text-xe-dark-accent dark:text-xe-primary font-bold hover:bg-xe-dark-accent dark:hover:bg-xe-primary hover:text-white dark:hover:text-xe-dark-accent transition-all duration-300">
                                {t('Xem link mua', 'View purchase link')}
                            </button>
                        </div>
                        <div className={`card-premium p-8 flex flex-col relative border-2 border-xe-primary ${darkMode ? 'bg-xe-dark-card shadow-glow' : 'bg-white shadow-xl'}`}>
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-xe-primary text-xe-dark-accent px-5 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest">{t('Khuyên dùng', 'Recommended')}</div>
                            <div className="mb-8">
                                <h4 className="text-2xl font-bold">{t('Ổn định', 'Stable')}</h4>
                                <p className="text-xe-primary font-bold mt-2 text-xl">{t('1,2 – 2,5 triệu đồng', '1.2 – 2.5 million VND')}</p>
                            </div>
                            <ul className="space-y-4 mb-10 flex-1">
                                <li className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                                    <span className="material-symbols-outlined text-xe-primary text-xl">check_circle</span>
                                    {t('Ổn định hơn, đủ tính năng cho đa số người dùng', 'More stable, sufficient features for most users')}
                                </li>
                                <li className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                                    <span className="material-symbols-outlined text-xe-primary text-xl">check_circle</span>
                                    {t('Có thể hoạt động liên tục, kể cả khi xe không nổ máy (tùy mẫu)', 'Can operate continuously, even when engine is off (model dependent)')}
                                </li>
                            </ul>
                            <button className="w-full py-3.5 rounded-xl bg-xe-primary text-xe-dark-accent font-bold shadow-glow hover:scale-105 transition-all duration-300">
                                {t('Xem link mua', 'View purchase link')}
                            </button>
                        </div>
                        <div className={`card-premium p-8 flex flex-col ${darkMode ? 'bg-xe-dark-card' : 'bg-white'}`}>
                            <div className="mb-8">
                                <h4 className="text-2xl font-bold">{t('Chuyên sâu', 'Advanced')}</h4>
                                <p className="text-xe-primary font-bold mt-2 text-xl">{t('Trên 3 triệu đồng', 'Over 3 million VND')}</p>
                            </div>
                            <ul className="space-y-4 mb-10 flex-1">
                                <li className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                                    <span className="material-symbols-outlined text-xe-primary text-xl">check_circle</span>
                                    {t('Dành cho xe cao cấp (BMW, Mercedes Benz, Porsche…)', 'For luxury cars (BMW, Mercedes Benz, Porsche…)')}
                                </li>
                                <li className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                                    <span className="material-symbols-outlined text-xe-primary text-xl">check_circle</span>
                                    {t('Ổn định nhất, dữ liệu đầy đủ hơn', 'Most stable, more complete data')}
                                </li>
                            </ul>
                            <button className="w-full py-3.5 rounded-xl border-2 border-xe-dark-accent dark:border-xe-primary text-xe-dark-accent dark:text-xe-primary font-bold hover:bg-xe-dark-accent dark:hover:bg-xe-primary hover:text-white dark:hover:text-xe-dark-accent transition-all duration-300">
                                {t('Xem link mua', 'View purchase link')}
                            </button>
                        </div>
                    </div>
                    <div className={`max-w-4xl mx-auto card-premium p-8 md:p-10 border-2 border-xe-primary/20 ${darkMode ? 'bg-xe-dark-card' : 'bg-white'}`}>
                        <div className="text-center mb-8">
                            <h4 className="text-lg font-bold">{t('Chọn xe để gợi ý OBD', 'Select car to suggest OBD')}</h4>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <select className={`input-field-xe border-2 ${darkMode ? 'bg-xe-dark-accent text-white border-white/5' : 'bg-white text-xe-dark-accent border-xe-dark-accent/10'}`}>
                                <option disabled defaultValue>{t('Hãng xe', 'Car Brand')}</option>
                                <option>Toyota</option>
                                <option>Honda</option>
                                <option>Mazda</option>
                                <option>Kia/Hyundai</option>
                            </select>
                            <select className={`input-field-xe border-2 ${darkMode ? 'bg-xe-dark-accent text-white border-white/5' : 'bg-white text-xe-dark-accent border-xe-dark-accent/10'}`}>
                                <option disabled defaultValue>{t('Dòng xe', 'Car Model')}</option>
                                <option>Vios</option>
                                <option>City</option>
                                <option>CX-5</option>
                                <option>Santa Fe</option>
                            </select>
                            <select className={`input-field-xe border-2 ${darkMode ? 'bg-xe-dark-accent text-white border-white/5' : 'bg-white text-xe-dark-accent border-xe-dark-accent/10'}`}>
                                <option disabled defaultValue>{t('Năm sản xuất', 'Year')}</option>
                                <option>2024</option>
                                <option>2023</option>
                                <option>2022</option>
                                <option>{t('Trước 2020', 'Before 2020')}</option>
                            </select>
                        </div>
                    </div>
                </section>

                {/* AUTHORIZATION SECTION */}
                <section className={`card-premium p-8 md:p-12 bg-xe-dark-accent text-white overflow-hidden relative border-none`}>
                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-xe-primary/20 blur-[100px] rounded-full"></div>
                    <div className="relative z-10 flex flex-col md:flex-row items-center gap-12 md:gap-16">
                        <div className="flex-1 space-y-6 text-left">
                            <h2 className="text-3xl md:text-4xl font-bold leading-tight">{t('Chăm xe không chỉ có bạn – hãy mời gara bạn tin tưởng cùng tham gia.', 'Car care isn\'t just you – invite your trusted garage to join.')}</h2>
                            <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                                {t('Bạn đã từng đến một hay vài gara quen. Hãy kết nối, chia sẻ dữ liệu sức khỏe và cách bạn vận hành xe, để gara cùng bạn chăm sóc xe của mình. Bạn là chủ của toàn bộ dữ liệu xe, bạn chỉ cần chia sẻ một phần dữ liệu và không ảnh hưởng tới quyền riêng tư. Xế Yêu luôn tôn trọng và bảo vệ quyền riêng tư của bạn.', 'You\'ve been to one or a few familiar garages. Connect and share your car\'s health data and how you operate it, so the garage can care for your car with you. You own all the car data, you only need to share part of the data without affecting privacy. Xế Yêu always respects and protects your privacy.')}
                            </p>
                            <div className="flex items-center gap-4 text-xe-primary font-bold">
                                <span className="material-symbols-outlined">person_shield</span>
                                <span>{t('Bạn giữ quyền dữ liệu', 'You retain data rights')}</span>
                            </div>
                            <div className="flex items-center gap-4 text-xe-primary font-bold">
                                <span className="material-symbols-outlined">car_repair</span>
                                <span>{t('Gara hiểu rõ tình trạng xe trước khi sửa', 'Garage understands car condition before repair')}</span>
                            </div>
                            <div className="flex items-center gap-4 text-xe-primary font-bold">
                                <span className="material-symbols-outlined">query_stats</span>
                                <span>{t('Hai bên nói chuyện bằng dữ liệu, không cảm tính', 'Both sides communicate with data, not emotions')}</span>
                            </div>

                            <div className="pt-4 mt-6 border-t border-white/10">
                                <p className="text-sm text-gray-400 italic leading-relaxed">
                                    {t('Xế Yêu không thay thế gara.', 'Xế Yêu does not replace garages.')}<br />
                                    {t('Xế Yêu giúp bạn và gara hiểu xe giống nhau hơn.', 'Xế Yêu helps you and the garage understand the car better together.')}
                                </p>
                            </div>
                        </div>
                        <div className="flex-1 space-y-8 bg-white/5 p-8 md:p-10 rounded-[32px] border border-white/10 backdrop-blur-sm">
                            <div className="space-y-2">
                                <h3 className="text-xe-primary text-sm font-black uppercase tracking-widest">{t('Cách kết nối', 'How to Connect')}</h3>
                                <p className="text-xl font-bold">{t('Chỉ 1 phút để mời gara:', 'Just 1 minute to invite garage:')}</p>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-center gap-4 group">
                                    <div className="w-8 h-8 rounded-full bg-xe-primary/20 border border-xe-primary/30 flex items-center justify-center text-xe-primary font-bold text-sm transition-all group-hover:scale-110 group-hover:bg-xe-primary group-hover:text-xe-dark-accent">1</div>
                                    <p className="text-gray-300 font-medium">{t('Mở app Xế Yêu', 'Open Xe Yeu app')}</p>
                                </div>
                                <div className="flex items-center gap-4 group">
                                    <div className="w-8 h-8 rounded-full bg-xe-primary/20 border border-xe-primary/30 flex items-center justify-center text-xe-primary font-bold text-sm transition-all group-hover:scale-110 group-hover:bg-xe-primary group-hover:text-xe-dark-accent">2</div>
                                    <p className="text-gray-300 font-medium">{t('Chọn "Mời gara chăm sóc xe"', 'Select "Invite garage to care for car"')}</p>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-4 group">
                                        <div className="w-8 h-8 rounded-full bg-xe-primary/20 border border-xe-primary/30 flex items-center justify-center text-xe-primary font-bold text-sm transition-all group-hover:scale-110 group-hover:bg-xe-primary group-hover:text-xe-dark-accent">3</div>
                                        <p className="text-gray-300 font-medium">{t('Gửi lời mời qua:', 'Send invitation via:')}</p>
                                    </div>
                                    <div className="grid grid-cols-2 gap-3 ml-12">
                                        <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-xl text-sm font-bold text-xe-primary cursor-pointer hover:bg-white/10 transition-colors">
                                            <span className="material-symbols-outlined text-lg">call</span> {t('SĐT', 'Phone')}
                                        </div>
                                        <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-xl text-sm font-bold text-xe-primary cursor-pointer hover:bg-white/10 transition-colors">
                                            <span className="material-symbols-outlined text-lg">chat</span> Zalo
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={`mt-8 pt-6 border-t border-white/10 text-xs md:text-sm text-gray-400 italic flex items-center gap-2`}>
                                <span className="material-symbols-outlined text-xe-primary text-lg">info</span>
                                {t('Gara nhận link → cài app gara → pairing với xe của bạn.', 'Garage receives link → installs garage app → pairs with your car.')}
                            </div>
                        </div>
                    </div>
                </section>

                {/* PRICING SECTION */}
                <section id="gia" className="space-y-16 scroll-mt-32">
                    <div className="text-center space-y-4">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{t('Giá phần mềm', 'Software Pricing')}</h2>
                        <p className="text-gray-500 dark:text-gray-400 text-base md:text-lg">{t('Phần mềm Xế Yêu giúp bạn hiểu xe, cảnh báo sớm và lưu lại lịch sử để chủ động và minh bạch khi chăm sóc xe.', 'Xế Yêu software helps you understand your car, get early warnings, and save history for proactive and transparent car care.')}<br />
                        </p>
                    </div>
                    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
                        <div className={`md:col-span-3 card-premium p-8 md:p-12 space-y-10 ${darkMode ? 'bg-xe-dark-card' : 'bg-white'}`}>
                            <div className="flex justify-between items-start">
                                <div className="text-left">
                                    <h3 className="text-2xl font-bold">{t('Giá chính thức', 'Official Price')}</h3>
                                    <p className="text-gray-400 text-sm mt-1">{t('Đầy đủ tính năng, không giới hạn', 'Full features, unlimited')}</p>
                                </div>
                                <span className="material-symbols-outlined text-4xl text-xe-primary">workspace_premium</span>
                            </div>
                            <div className="space-y-4">
                                <label className="block cursor-pointer group">
                                    <input defaultChecked className="hidden peer" name="plan" type="radio" />
                                    <div className={`flex items-center justify-between p-6 rounded-2xl border-2 transition-all peer-checked:border-xe-primary peer-checked:bg-xe-primary/5 ${darkMode ? 'border-white/10' : 'border-gray-100'}`}>
                                        <div className="text-left">
                                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">{t('Gói Tháng', 'Monthly Plan')}</p>
                                            <p className="text-2xl font-bold">{t('199.000 đồng', '199,000 VND')} <span className="text-base font-normal text-gray-400">{t('/ tháng', '/ month')}</span></p>
                                        </div>
                                        <div className={`size-6 rounded-full border-2 transition-all peer-checked:border-xe-primary peer-checked:bg-xe-primary flex items-center justify-center ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                                            <div className="size-2 bg-white rounded-full"></div>
                                        </div>
                                    </div>
                                </label>
                                <label className="block cursor-pointer group">
                                    <input className="hidden peer" name="plan" type="radio" />
                                    <div className={`flex items-center justify-between p-6 rounded-2xl border-2 transition-all peer-checked:border-xe-primary peer-checked:bg-xe-primary/5 relative ${darkMode ? 'border-white/10' : 'border-gray-100'}`}>
                                        <span className="absolute -top-3 right-8 bg-xe-dark-accent text-xe-primary text-[10px] font-black px-3 py-1 rounded-full uppercase">{t('Tiết kiệm 20%', 'Save 20%')}</span>
                                        <div className="text-left">
                                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">{t('Gói 3 Năm', '3-Year Plan')}</p>
                                            <p className="text-2xl font-bold">{t('5.999.000 đồng', '5,999,000 VND')} <span className="text-base font-normal text-gray-400">{t('/ 3 năm', '/ 3 years')}</span></p>
                                        </div>
                                        <div className={`size-6 rounded-full border-2 transition-all peer-checked:border-xe-primary peer-checked:bg-xe-primary flex items-center justify-center ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                                            <div className="size-2 bg-white rounded-full"></div>
                                        </div>
                                    </div>
                                </label>
                            </div>
                            <button className="w-full btn-primary-xe py-5 text-lg">{t('Kích hoạt ngay', 'Activate Now')}</button>
                        </div>
                        <div className={`md:col-span-2 rounded-2xl p-8 md:p-10 text-white flex flex-col justify-center gap-8 shadow-2xl relative overflow-hidden border transition-colors ${darkMode ? 'bg-xe-dark-card border-white/5' : 'bg-xe-dark-accent border-transparent'}`}>
                            <div className="absolute top-0 left-0 w-full h-1 bg-xe-primary"></div>
                            <div className="space-y-4 text-left">
                                <span className="inline-block px-3 py-1 bg-xe-primary/10 text-xe-primary text-[10px] font-black uppercase tracking-widest rounded-md">{t('Ưu đãi ra mắt', 'Launch Offer')}</span>
                                <h4 className="text-3xl font-bold leading-tight">{t('Miễn phí trọn đời cho 500 chủ xe', 'Free for Life for 500 Car Owners')}</h4>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {t('500 người đầu tiên tải và cài đặt Xế Yêu thành công sẽ được sử dụng phần mềm trọn đời, không mất phí.', 'The first 500 people to download and successfully install Xế Yêu will get lifetime software access, free of charge.')}
                                </p>
                            </div>
                            <div className="space-y-2">
                                <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                                    <div className="h-full bg-xe-primary w-[85%]"></div>
                                </div>
                                <p className="text-[11px] text-gray-500 font-bold text-right">{t('Chỉ còn 72 suất', 'Only 72 slots left')}</p>
                            </div>
                            <button className="w-full bg-xe-primary text-xe-dark-accent py-4 rounded-xl font-bold hover:scale-105 transition-transform shadow-glow">{t('Nhận suất trọn đời', 'Get Lifetime Access')}</button>
                        </div>
                    </div>
                </section>

                {/* TRUST SECTION */}
                <section className="space-y-16">
                    <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-y transition-colors ${darkMode ? 'border-white/5' : 'border-gray-100'}`}>
                        <div className="text-center space-y-4 group">
                            <span className="material-symbols-outlined text-xe-primary text-4xl transition-transform group-hover:scale-110">person_shield</span>
                            <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 uppercase font-bold tracking-[0.15em]">{t('Quyền dữ liệu thuộc', 'Data rights belong')}<br />{t('về bạn', 'to you')}</p>
                        </div>
                        <div className="text-center space-y-4 group">
                            <span className="material-symbols-outlined text-xe-primary text-4xl transition-transform group-hover:scale-110">handshake</span>
                            <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 uppercase font-bold tracking-[0.15em]">{t('Minh bạch khi làm việc', 'Transparent when working')}<br />{t('với garage', 'with garage')}</p>
                        </div>
                        <div className="text-center space-y-4 group">
                            <span className="material-symbols-outlined text-xe-primary text-4xl transition-transform group-hover:scale-110">notifications_active</span>
                            <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 uppercase font-bold tracking-[0.15em]">{t('Cảnh báo sớm', 'Early warnings')}<br />{t('không bị động', 'not passive')}</p>
                        </div>
                        <div className="text-center space-y-4 group">
                            <span className="material-symbols-outlined text-xe-primary text-4xl transition-transform group-hover:scale-110">update</span>
                            <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 uppercase font-bold tracking-[0.15em]">{t('Cập nhật định kỳ', 'Regular updates')}</p>
                        </div>
                    </div>

                    {/* FAQ SECTION */}
                    <div id="faq" className="max-w-3xl mx-auto space-y-8 scroll-mt-32">
                        <h3 className="text-3xl font-bold text-center">{t('Câu hỏi thường gặp', 'Frequently Asked Questions')}</h3>
                        <div className="space-y-4">
                            <details className={`group card-premium p-6 cursor-pointer ${darkMode ? 'bg-xe-dark-card' : 'bg-white'}`} open>
                                <summary className="flex items-center justify-between font-bold list-none text-left">
                                    {t('Xế Yêu có bán kèm thiết bị OBD không?', 'Does Xe Yeu sell OBD devices?')}
                                    <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
                                </summary>
                                <p className="mt-4 text-gray-500 dark:text-gray-400 leading-relaxed text-sm text-left">
                                    {t('Không. Xế Yêu chỉ phát triển phần mềm. Bạn có thể mua thiết bị OBD-II tại các cửa hàng phụ kiện hoặc sàn TMĐT.', 'No. Xe Yeu only develops software. You can buy OBD-II devices at accessory stores or e-commerce platforms.')}<br />
                                </p>
                            </details>
                            <details className={`group card-premium p-6 cursor-pointer ${darkMode ? 'bg-xe-dark-card' : 'bg-white'}`}>
                                <summary className="flex items-center justify-between font-bold list-none text-left">
                                    {t('Xe đã đồng hành nhiều năm có dùng được không?', 'Can older cars use it?')}
                                    <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
                                </summary>
                                <p className="mt-4 text-gray-500 dark:text-gray-400 leading-relaxed text-sm text-left">
                                    {t('Hầu hết xe có cổng OBD-II (thường từ năm 2005 trở về sau) đều tương thích.', 'Most cars with OBD-II ports (usually from 2005 onwards) are compatible.')}
                                </p>
                            </details>
                            <details className={`group card-premium p-6 cursor-pointer ${darkMode ? 'bg-xe-dark-card' : 'bg-white'}`}>
                                <summary className="flex items-center justify-between font-bold list-none text-left">
                                    {t('Xế Yêu có nhiều gói phần mềm không?', 'Does Xế Yêu have multiple software packages?')}
                                    <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
                                </summary>
                                <p className="mt-4 text-gray-500 dark:text-gray-400 leading-relaxed text-sm text-left">
                                    {t('Không. Chỉ có 10 USD/tháng hoặc 249 USD/3 năm. Ưu đãi trọn đời áp dụng cho 500 người đầu tiên cài đặt thành công.', 'No. Only 10 USD/month or 249 USD/3 years. Lifetime offer applies to the first 500 successful installations.')}<br />
                                </p>
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
                                {t('Chiếc xe đã đồng hành cùng bạn nhiều năm.', 'The car that has been with you for many years.')}<br />
                                <span className="text-xe-primary">{t('Bạn có muốn nghe nó nói không?', 'Do you want to hear it speak?')}</span>
                            </h2>
                            <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                                {t('Đừng đợi đến khi xe buộc bạn phải dừng lại.', 'Don\'t wait until the car forces you to stop.')}<br />
                                {t('Nghe sớm, hiểu đúng, xử lý kịp lúc.', 'Hear early, understand correctly, handle in time.')}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center pt-8">
                                <button className="bg-xe-primary text-xe-dark-accent px-8 md:px-10 py-4 rounded-full font-bold text-base md:text-lg shadow-glow hover:scale-105 transition-all flex items-center justify-center gap-2">
                                    <span className="material-symbols-outlined">download</span>
                                    {t('Tải app – kiểm tra suất trọn đời', 'Download app – check lifetime slots')}
                                </button>
                                <button className={`px-8 md:px-10 py-4 rounded-full font-bold text-base md:text-lg transition-all flex items-center justify-center gap-2 border bg-white/5 border-white/10 text-xe-primary hover:bg-white/10 hover:scale-105`}>
                                    <span className="material-symbols-outlined">play_circle</span>
                                    {t('Xem video hướng dẫn', 'Watch tutorial video')}
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
                            <span className="font-bold text-2xl tracking-tight dark:text-white">{t('Xế Yêu', 'Xe Yeu')}</span>
                        </div>
                        <p className="text-gray-400 max-w-sm leading-relaxed text-sm">
                            {t('Ứng dụng hàng đầu Việt Nam về chăm sóc sức khỏe ô tô qua dữ liệu OBD-II. Giúp chủ xe thấu hiểu người bạn đồng hành hơn bao giờ hết.', 'Vietnam\'s leading app for car health care via OBD-II data. Helps car owners understand their companion better than ever.')}
                        </p>
                    </div>
                    <div className="space-y-6 text-left">
                        <h5 className="font-bold uppercase text-[10px] tracking-[0.2em] text-gray-400">{t('Liên kết', 'Links')}</h5>
                        <div className="flex flex-col gap-3 text-sm font-medium text-gray-600 dark:text-gray-400">
                            <a className="hover:text-xe-primary transition-colors" href="#">{t('Tính năng', 'Features')}</a>
                            <a className="hover:text-xe-primary transition-colors" href="#">{t('Phần cứng', 'Hardware')}</a>
                            <a className="hover:text-xe-primary transition-colors" href="#">{t('Bảng giá', 'Pricing')}</a>
                        </div>
                    </div>
                    <div className="space-y-6 text-left">
                        <h5 className="font-bold uppercase text-[10px] tracking-[0.2em] text-gray-400">{t('Pháp lý', 'Legal')}</h5>
                        <div className="flex flex-col gap-3 text-sm font-medium text-gray-600 dark:text-gray-400">
                            <a className="hover:text-xe-primary transition-colors" href="#">{t('Điều khoản sử dụng', 'Terms of Service')}</a>
                            <a className="hover:text-xe-primary transition-colors" href="#">{t('Chính sách bảo mật', 'Privacy Policy')}</a>
                            <p className="mt-4 text-xs text-gray-500 font-normal">© 2024 Xế Yêu • xeyeu.x18.io <br />
                                Developed by x18 Technology</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
