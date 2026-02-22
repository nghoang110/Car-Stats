import React, { useState, useEffect } from 'react';
import logoX18 from '../assets/landing/logo-x18.png';

const BertaLanding2 = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [lang, setLang] = useState(() => {
        const saved = localStorage.getItem('lang');
        return saved || 'vi';
    });

    // Force light mode on mount to ensure "Nền trắng chữ đen"
    useEffect(() => {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        setDarkMode(false);
    }, []);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [darkMode]);

    useEffect(() => {
        localStorage.setItem('lang', lang);
        document.title = lang === 'vi' ? 'BERTA - Giải pháp quản lý Gara' : 'BERTA - Garage Management Solution';
    }, [lang]);

    const t = (vi, en) => (lang === 'vi' ? vi : en);

    const styles = {
        glassHeader: "sticky top-0 z-50 w-full backdrop-blur-md bg-white/95 dark:bg-mg-bg-dark/90 border-b border-mg-border-light dark:border-mg-border-dark transition-all duration-300",
        surfaceCard: "bg-white dark:bg-mg-surface-dark border border-mg-border-light dark:border-mg-border-dark shadow-sm rounded-xl transition-all duration-200",
        btnPrimary: "bg-mg-primary text-white px-6 py-3 rounded-lg font-bold hover:opacity-90 transition-opacity flex items-center justify-center gap-2",
        btnOutline: "border border-mg-border-light dark:border-mg-border-dark px-6 py-3 rounded-lg font-bold hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 transition-colors flex items-center justify-center gap-2"
    };

    return (
        <div className={`selection:bg-mg-primary/30 min-h-screen bg-white dark:bg-mg-bg-dark text-slate-900 dark:text-slate-100 font-sans transition-colors duration-200 ${darkMode ? 'dark' : ''}`}>
            <header className={styles.glassHeader}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        {/* Dark theme: không có nền */}
                        <div className="hidden dark:flex">
                            <img src={logoX18} alt="x18 Logo" className="h-10 w-auto" />
                        </div>
                        {/* Light theme: có nền tròn dark */}
                        <div className="flex dark:hidden w-12 h-12 bg-slate-800 rounded-full items-center justify-center p-2 shadow-lg">
                            <img src={logoX18} alt="x18 Logo" className="w-full h-full object-contain" />
                        </div>
                        <span className="text-xl font-extrabold tracking-tight text-mg-primary">BERTA</span>
                    </div>
                    <nav className="hidden lg:flex items-center gap-8">
                        {['problems', 'features', 'ben-connection', 'pricing'].map((id) => (
                            <a
                                key={id}
                                className="text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-mg-primary dark:hover:text-mg-primary transition-colors"
                                href={`#${id}`}
                            >
                                {id === 'problems' && t('Vấn đề', 'Problems')}
                                {id === 'features' && t('Tính năng', 'Features')}
                                {id === 'ben-connection' && t('Kết nối', 'Connection')}
                                {id === 'pricing' && t('Giá cả', 'Pricing')}
                            </a>
                        ))}
                    </nav>
                    <div className="flex items-center gap-4">
                        <div className="flex items-center bg-slate-100 dark:bg-slate-800 rounded-lg p-1">
                            <button
                                onClick={() => setLang('vi')}
                                className={`px-3 py-1 text-xs font-bold rounded-md transition-all ${lang === 'vi' ? 'bg-white dark:bg-slate-700 shadow-sm text-mg-primary' : 'text-slate-500'}`}
                            >VI</button>
                            <button
                                onClick={() => setLang('en')}
                                className={`px-3 py-1 text-xs font-bold rounded-md transition-all ${lang === 'en' ? 'bg-white dark:bg-slate-700 shadow-sm text-mg-primary' : 'text-slate-500'}`}
                            >EN</button>
                        </div>
                        <button
                            onClick={() => setDarkMode(!darkMode)}
                            className="p-2 rounded-lg border border-mg-border-light dark:border-mg-border-dark hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                        >
                            <span className="material-symbols-outlined block dark:hidden">dark_mode</span>
                            <span className="material-symbols-outlined hidden dark:block">light_mode</span>
                        </button>
                        <a className="hidden sm:inline-flex bg-mg-primary text-white px-4 py-2 rounded-lg text-sm font-bold hover:opacity-90 transition-opacity" href="#">
                            {t('Đăng ký BERTA', 'Register BERTA')}
                        </a>
                    </div>
                </div>
            </header>

            <main>
                <section className="relative pt-20 pb-24 overflow-hidden bg-gradient-to-b from-mg-primary/10 via-mg-bg-light/50 to-mg-bg-light dark:from-mg-primary/5 dark:via-mg-bg-dark/50 dark:to-mg-bg-dark border-b border-mg-primary/5">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="relative z-10">
                                <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6 text-slate-900 dark:text-white">
                                    {t('Khách đã đến sẽ còn quay lại', 'Customers who come once will come back')}
                                </h1>
                                <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-xl font-medium leading-relaxed">
                                    {t('Phần mềm giúp gara liên tục nhận dữ liệu từ xe của khách hàng sau khi rời gara, nhắc bảo dưỡng đúng lúc, giảm sửa chữa “chữa cháy”, tăng việc đều đặn', "Software that helps workshops continuously receive vehicle data from customers after they leave the workshop, send timely maintenance reminders, reduce “firefighting” repairs, and create steady work.")}
                                </p>
                                <ul className="space-y-4 mb-10">
                                    <li className="flex items-center gap-4">
                                        <span className="material-symbols-outlined text-mg-primary text-2xl">check_circle</span>
                                        <span className="font-bold text-slate-800 dark:text-slate-200">
                                            {t('Không mất dấu xe của khách sau khi rời gara', 'No losing track of customer vehicles after leaving the garage')}
                                        </span>
                                    </li>
                                    <li className="flex items-center gap-4">
                                        <span className="material-symbols-outlined text-mg-primary text-2xl">check_circle</span>
                                        <span className="font-bold text-slate-800 dark:text-slate-200">
                                            {t('Chủ động nhắc đúng lúc, khách quay lại đúng gara quen', 'Proactively remind at the right time, customers return to the familiar garage')}
                                        </span>
                                    </li>
                                    <li className="flex items-center gap-4">
                                        <span className="material-symbols-outlined text-mg-primary text-2xl">check_circle</span>
                                        <span className="font-bold text-slate-800 dark:text-slate-200">
                                            {t('Thợ có thông tin trước, làm nhanh hơn, ít đoán mò', 'Mechanics have advance info, work faster, less guesswork')}
                                        </span>
                                    </li>
                                </ul>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <button className={styles.btnPrimary + " h-14 px-8 text-lg"}>
                                        {t('Đăng ký BERTA cho gara', 'Register BERTA for workshops')}
                                    </button>
                                    <button className={styles.btnOutline + " h-14 px-8 text-lg"}>
                                        {t('Xem cách mời khách cài BEN', 'See how to invite customers to install BEN')}
                                    </button>
                                </div>
                            </div>
                            <div className="relative">
                                <div className="bg-mg-surface-light dark:bg-mg-surface-dark p-6 aspect-video flex flex-col items-center justify-center relative border-2 border-mg-primary/10 overflow-hidden shadow-2xl rounded-2xl">
                                    <div className="w-24 h-24 bg-mg-primary/5 rounded-full flex items-center justify-center text-mg-primary/20 mb-4">
                                        <span className="material-symbols-outlined text-[100px]">analytics</span>
                                    </div>
                                    <div className="text-center px-6 relative z-10">
                                        <div className="font-black text-3xl text-mg-primary mb-2">
                                            {t('Gia tăng 40% tỷ lệ quay lại', 'Increase retention by 40%')}
                                        </div>
                                        <div className="text-sm text-slate-500 font-medium">
                                            {t('Dựa trên dữ liệu thực tế từ các đối tác sử dụng BERTA', 'Based on real data from BERTA partners')}
                                        </div>
                                    </div>
                                    <div className="absolute top-6 right-6 bg-orange-500 text-white px-4 py-2 rounded-lg text-xs font-black uppercase tracking-wider shadow-lg">
                                        {t('Đối tác tin dùng', 'Trusted Partner')}
                                    </div>
                                </div>
                                <div className="absolute -z-10 -top-10 -right-10 w-64 h-64 bg-mg-primary/10 blur-[80px] rounded-full"></div>
                                <div className="absolute -z-10 -bottom-10 -left-10 w-48 h-48 bg-blue-400/10 blur-[60px] rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-24" id="problems">
                    <div className="max-w-7xl mx-auto px-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
                            {t('Thực tế mà gara nào cũng gặp', 'Real problems every workshop faces')}
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                            {[
                                { icon: 'person_off', color: 'red', vi: 'Khách không quay lại', en: "Customers do not return", viDesc: 'Xong việc là mất liên lạc. Đến kỳ bảo dưỡng, khách đi nơi khác', enDesc: 'The workshop loses contact completely after customers pay and leave.', bg: 'bg-red-100 dark:bg-red-900/20', text: 'text-red-600' },
                                { icon: 'car_repair', color: 'orange', vi: 'Xe hỏng bất ngờ', en: 'Unexpected breakdowns', viDesc: 'Khách gặp sự cố nhưng không nhớ gara quen để gọi', enDesc: "Customers encounter problems on the road but do not remember your workshop.", bg: 'bg-orange-100 dark:bg-orange-900/20', text: 'text-orange-600' },
                                { icon: 'database', color: 'blue', vi: 'Thiếu thông tin xe', en: 'Lack of vehicle information  ', viDesc: 'Xe quay lại nhưng gara không biết trước tình trạng', enDesc: 'Not knowing maintenance history makes consultations passive', bg: 'bg-blue-100 dark:bg-blue-900/20', text: 'text-blue-600' },
                                { icon: 'leak_remove', color: 'purple', vi: 'Mất kết nối sau sửa', en: 'Lost connection after repair ', viDesc: 'Gara chỉ gặp khách khi có vấn đề', enDesc: 'Difficulty reminding customers about oil changes and periodic maintenance.', bg: 'bg-purple-100 dark:bg-purple-900/20', text: 'text-purple-600' }
                            ].map((item, i) => (
                                <div key={i} className={styles.surfaceCard + " p-8 hover:-translate-y-1"}>
                                    <div className={`w-12 h-12 rounded-lg ${item.bg} ${item.text} flex items-center justify-center mb-6`}>
                                        <span className="material-symbols-outlined">{item.icon}</span>
                                    </div>
                                    <h3 className="text-lg font-bold mb-3">{t(item.vi, item.en)}</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">{t(item.viDesc, item.enDesc)}</p>
                                </div>
                            ))}
                        </div>
                        <div className="max-w-3xl mx-auto p-8 rounded-xl bg-mg-primary/5 border-l-4 border-mg-primary italic text-center">
                            <p className="text-lg font-medium text-slate-700 dark:text-slate-300">
                                {t('"Gara mất việc không phải vì tay nghề, mà vì mất kết nối với xe của khách"', '"Workshops do not lose jobs because of skill, but because they lose connection with customer vehicles"')}
                            </p>
                        </div>
                    </div>
                </section>

                <section className="py-24 bg-white dark:bg-mg-surface-dark/30" id="features">
                    <div className="max-w-7xl mx-auto px-4">
                        <h2 className="text-3xl md:text-4xl font-black text-center mb-16 text-slate-900 dark:text-white">
                            {t('BERTA giúp gara làm được những việc này', 'BERTA helps workshops do these things')}
                        </h2>
                        <div className="grid md:grid-cols-3 gap-12">
                            {[
                                {
                                    icon: 'monitoring',
                                    vi: '1. Theo dõi xe của khách',
                                    en: '1. Track customer vehicles ',
                                    noteVi: '(Khi khách đồng ý kết nối qua BEN)',
                                    noteEn: '(When customers agree to connect via BEN)',
                                    bulletsVi: ['Biết xe có lỗi, có đèn báo', 'Biết xe sắp đến kỳ chăm sóc', 'Không cần đợi xe hỏng mới biết'],
                                    bulletsEn: ['Know if the car has faults/warning lights', 'Knowing your car is due for maintenance soon', "Don't wait for breakdown to know"]
                                },
                                {
                                    icon: 'notifications_active',
                                    vi: '2. Nhắc khách quay lại đúng lúc',
                                    en: '2. Timely return reminders',
                                    bulletsVi: ['Nhắc thay dầu, kiểm tra, bảo dưỡng', 'Gara chủ động gọi trước', 'Khách thấy gara có trách nhiệm, dễ quay lại'],
                                    bulletsEn: ['Remind oil changes, inspections, maintenance', 'Garages proactively call first', 'Customers see responsibility, return easily']
                                },
                                {
                                    icon: 'engineering',
                                    vi: '3. Thợ làm việc dễ hơn',
                                    en: '3. Easier for mechanics',
                                    bulletsVi: ['Có thông tin xe trước khi khách tới', 'Chuẩn bị sẵn phương án sửa chữa', 'Giảm thời gian đoán bệnh'],
                                    bulletsEn: ['Have vehicle info before customer arrives', 'Prepare repair solutions in advance', 'Reduce diagnosis time']
                                }
                            ].map((feature, i) => (
                                <div key={i} className="flex flex-col items-center">
                                    <div className="w-20 h-20 bg-mg-primary/10 text-mg-primary rounded-2xl flex items-center justify-center mb-8">
                                        <span className="material-symbols-outlined text-4xl">{feature.icon}</span>
                                    </div>
                                    <h3 className="text-2xl font-black mb-2 text-slate-900 dark:text-white text-center">{t(feature.vi, feature.en)}</h3>

                                    {feature.noteVi && (
                                        <p className="text-sm text-slate-400 mb-4 font-medium italic text-center">
                                            {t(feature.noteVi, feature.noteEn)}
                                        </p>
                                    )}

                                    <ul className="space-y-3 mt-2">
                                        {(lang === 'vi' ? feature.bulletsVi : feature.bulletsEn).map((bullet, j) => (
                                            <li key={j} className="flex items-start gap-2 text-slate-600 dark:text-slate-400">
                                                <span className="text-mg-primary font-bold mt-1">•</span>
                                                <span className="font-medium text-left">{bullet}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-24 bg-mg-primary/5 dark:bg-blue-900/5 border-y border-mg-primary/10" id="ben-connection">
                    <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight text-slate-900 dark:text-white">
                                {t('Vì sao BERTA giúp gara giữ chân khách hàng', 'Why does BERTA help workshops retain customers')}
                            </h2>
                            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                                {t('BERTA làm được điều này không phải nhờ thiết bị phức tạp, mà nhờ kết nối trực tiếp với app BEN của khách hàng.', 'BERTA achieves this not through complicated equipment, but through a direct connection with the customer\'s BEN app.')}
                            </p>
                            <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed font-medium">
                                {t('Khi khách dùng BEN, gara có thể theo dõi tình trạng xe sau khi rời gara (khi khách đồng ý) để chăm sóc đúng lúc', 'When customers use BEN, the garage can monitor the vehicle\'s condition after leaving (with consent) to provide timely care.')}
                            </p>

                            <h3 className="text-2xl font-black mb-8 text-mg-primary">
                                {t('BEN là “trợ lý số thông minh” cho chủ xe', 'BEN is a "smart digital assistant" for car owners')}
                            </h3>

                            <div className="grid sm:grid-cols-2 gap-6">
                                {[
                                    { icon: 'interpreter_mode', vi: 'Hiểu những thông điệp mà xe phát ra mỗi ngày', en: 'Understand the messages the car sends every day' },
                                    { icon: 'health_and_safety', vi: 'Biết khi nào xe cần được chăm sóc trước khi hỏng', en: 'Know when the car needs care before it breaks down' },
                                    { icon: 'bolt', vi: 'Hướng dẫn chủ xe vận hành đúng, tăng tuổi thọ xe', en: 'Guide owners on correct operation, increasing car lifespan' },
                                    { icon: 'star', vi: 'Tạo trải nghiệm số để chủ xe dùng hằng ngày', en: 'Create a digital experience for car owners to use daily' }
                                ].map((bullet, i) => (
                                    <div key={i} className="flex gap-3 items-start p-2">
                                        <span className="material-symbols-outlined text-mg-primary mt-1">check_circle</span>
                                        <span className="font-bold text-slate-800 dark:text-slate-200 text-sm leading-snug">{t(bullet.vi, bullet.en)}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-white dark:bg-mg-surface-dark p-10 border-2 border-mg-primary shadow-2xl relative overflow-hidden rounded-3xl">
                            <h3 className="text-xl font-black mb-10 text-slate-900 dark:text-white leading-tight">
                                {t('Khi chủ xe tin và dùng BEN mỗi ngày, BERTA trở thành cầu nối để gara', 'When car owners trust and use BEN every day, BERTA becomes a bridge for the garage')}
                            </h3>
                            <ul className="space-y-6 mb-12">
                                {[
                                    { vi: 'Biết thời điểm phù hợp để nhắc khách quay lại', en: 'Know the right time to remind customers to return' },
                                    { vi: 'Chăm sóc xe chủ động, không chờ hỏng', en: 'Proactive car care, don\'t wait for breakdown' },
                                    { vi: 'Thợ sửa có chuẩn bị, ít sai sót', en: 'Mechanics are prepared, fewer mistakes' }
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-5 p-5 bg-mg-primary/5 rounded-2xl border border-mg-primary/10">
                                        <span className="text-2xl font-black text-mg-primary/30">0{i + 1}</span>
                                        <span className="font-bold text-lg text-slate-800 dark:text-slate-100 leading-tight">{t(item.vi, item.en)}</span>
                                    </li>
                                ))}
                            </ul>
                            <a className="flex items-center justify-center gap-3 w-full bg-slate-900 dark:bg-mg-primary text-white py-5 rounded-2xl font-black hover:scale-[1.02] active:scale-100 transition-all shadow-xl text-lg text-center" href="https://hoanguyen.online/landing-xe-yeu-2" target="_blank" rel="noreferrer">
                                {t('Xem chi tiết app BEN', 'View BEN App Details')}
                                <span className="material-symbols-outlined">arrow_forward</span>
                            </a>
                        </div>
                    </div>
                </section>

                <section className="py-24 bg-white dark:bg-mg-bg-dark">
                    <div className="max-w-7xl mx-auto px-4">
                        <h2 className="text-3xl md:text-4xl font-black text-center mb-24 text-slate-900 dark:text-white">
                            {t('BERTA và BEN đi cùng nhau', 'BERTA and BEN work together')}
                        </h2>
                        <div className="flex flex-col md:flex-row items-center justify-between gap-12 relative max-w-5xl mx-auto">
                            {/* Horizontal Line */}
                            <div className="hidden md:block absolute top-[64px] left-0 w-full h-[2px] bg-slate-100 dark:bg-slate-800 -z-0"></div>

                            {/* Item 1 */}
                            <div className="text-center group relative z-10 bg-white dark:bg-mg-bg-dark px-10">
                                <div className="w-32 h-32 rounded-full border-4 border-slate-50 dark:border-slate-800 flex items-center justify-center mx-auto mb-8 group-hover:border-mg-primary transition-all duration-300 bg-white dark:bg-slate-900 shadow-xl shadow-slate-200/50 dark:shadow-none">
                                    <span className="material-symbols-outlined text-7xl text-mg-primary transition-transform group-hover:scale-110">storefront</span>
                                </div>
                                <h4 className="font-bold text-xl mb-3 text-slate-900 dark:text-white">{t('Gara cài BERTA', 'Garage installs BERTA')}</h4>
                                <p className="text-sm text-slate-500 font-medium max-w-[200px] mx-auto">{t('Tạo tài khoản, thiết lập gara, phân quyền cho thợ', 'Create account, set up garage, set mechanic permissions')}</p>
                            </div>

                            {/* Item 2 */}
                            <div className="text-center group relative z-10 bg-white dark:bg-mg-bg-dark px-10">
                                <div className="w-40 h-40 rounded-full bg-mg-primary/5 border-4 border-mg-primary flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-mg-primary/20 transition-transform group-hover:scale-105">
                                    <span className="material-symbols-outlined text-9xl text-mg-primary">person_add</span>
                                </div>
                                <h4 className="font-bold text-xl mb-3 text-slate-900 dark:text-white">{t('Mời khách cài BEN', 'Invite customers to install BEN')}</h4>
                                <p className="text-sm text-slate-500 font-medium max-w-[200px] mx-auto">{t('Gửi link mời khi bàn giao xe. Khách tự cài trong vài phút', 'Send invite link on vehicle delivery. Customers install in minutes')}</p>
                            </div>

                            {/* Item 3 */}
                            <div className="text-center group relative z-10 bg-white dark:bg-mg-bg-dark px-10">
                                <div className="w-32 h-32 rounded-full border-4 border-slate-50 dark:border-slate-800 flex items-center justify-center mx-auto mb-8 group-hover:border-mg-primary transition-all duration-300 bg-white dark:bg-slate-900 shadow-xl shadow-slate-200/50 dark:shadow-none">
                                    <span className="material-symbols-outlined text-7xl text-mg-primary transition-transform group-hover:scale-110">event_repeat</span>
                                </div>
                                <h4 className="font-bold text-xl mb-3 text-slate-900 dark:text-white">{t('Khách quay lại đều', 'Regular customer returns')}</h4>
                                <p className="text-sm text-slate-500 font-medium max-w-[200px] mx-auto">{t('Bảo dưỡng định kỳ, sửa chữa đúng lúc', 'Periodic maintenance, timely repairs')}</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-24 bg-slate-50 dark:bg-slate-900/50" id="pricing">
                    <div className="max-w-7xl mx-auto px-4 text-center">
                        <div className="max-w-4xl mx-auto bg-mg-primary text-white p-12 rounded-3xl shadow-2xl relative overflow-hidden">
                            <div className="relative z-10">
                                <h2 className="text-3xl md:text-5xl font-black mb-8">
                                    {t('BERTA chỉ thu phí khi gara có lợi', 'BERTA only charges when the garage profits')}
                                </h2>
                                <p className="text-white/90 text-xl mb-10 leading-relaxed max-w-2xl mx-auto">
                                    {t('BERTA áp dụng Value-based Pricing.', 'BERTA applies Value-based Pricing.')}
                                    <br />
                                    {t('Gara chỉ trả phí sau khi đã kết nối đủ khách hàng và thấy rõ hiệu quả kinh doanh', 'Garages only pay after connecting enough customers and seeing clear business results')}
                                </p>
                                <div className="inline-flex items-center gap-3 px-8 py-4 bg-white/20 backdrop-blur-md rounded-2xl border border-white/30 font-bold text-xl">
                                    <span className="material-symbols-outlined">payments</span>
                                    {t('Liên hệ để nhận báo giá cá nhân hóa', 'Contact us for personalized pricing')}
                                </div>
                            </div>
                            <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full -ml-20 -mb-20 blur-3xl"></div>
                        </div>
                    </div>
                </section>

                <section className="py-24 bg-white dark:bg-mg-bg-dark">
                    <div className="max-w-7xl mx-auto px-4">
                        <h2 className="text-3xl md:text-4xl font-black text-center mb-16 text-slate-900 dark:text-white">
                            {t('Gara trở thành đối tác phân phối BEN', 'Garage becomes a BEN distribution partner')}
                        </h2>
                        <div className="grid md:grid-cols-3 gap-12">
                            {[
                                { titleVi: 'Quyền lợi', titleEn: 'Benefits', itemsVi: ['Doanh thu từ gói BEN', 'Việc đều từ bảo dưỡng định kỳ', 'Nâng tầm hình ảnh gara'], itemsEn: ['Revenue from BEN packages', 'Steady workflow from periodic maintenance', 'Co-marketing support'] },
                                { titleVi: 'Trách nhiệm', titleEn: 'Responsibilities', itemsVi: ['Hướng dẫn khách cài BEN', 'Hỗ trợ kết nối cơ bản', 'Đảm bảo chất lượng sửa chữa'], itemsEn: ['Guide customers to install BEN', 'Support basic connection', 'Ensure repair quality'] },
                                { titleVi: 'Vai trò x18', titleEn: 'x18 role', itemsVi: ['Cung cấp & cập nhật phần mềm', 'Đào tạo sử dụng & tư vấn', 'Hỗ trợ truyền thông cho gara'], itemsEn: ['Provide & update software', 'Usage training & consulting', 'Marketing support for garages'] }
                            ].map((col, i) => (
                                <div key={i} className="bg-slate-50 dark:bg-mg-surface-dark p-10 rounded-3xl border border-slate-100 dark:border-mg-border-dark transition-transform hover:-translate-y-1">
                                    <h4 className="text-xl font-black mb-8 text-mg-primary uppercase tracking-wider">{t(col.titleVi, col.titleEn)}</h4>
                                    <ul className="space-y-6">
                                        {col.itemsVi.map((item, j) => (
                                            <li key={j} className="flex items-center gap-3">
                                                <span className="material-symbols-outlined text-mg-primary">verified</span>
                                                <span className="font-bold text-slate-700 dark:text-slate-300">{t(item, col.itemsEn[j])}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-24 bg-mg-primary text-white text-center relative overflow-hidden">
                    <div className="max-w-5xl mx-auto px-4 relative z-10">
                        <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
                            {t('Bắt đầu từ những khách quen của bạn', 'Start with your existing customers')}
                        </h2>
                        <p className="text-xl text-white/90 mb-12 leading-relaxed max-w-2xl mx-auto font-medium">
                            {t('Đừng để khách quen rời đi chỉ vì không nhắc đúng lúc.', 'Don\'t let regular customers leave just because you didn\'t remind them in time.')}
                            <br />
                            {t('Số hóa gara ngay hôm nay để việc đều – doanh thu đều', 'Digitize your garage today for steady work – steady revenue')}
                        </p>
                        <div className="flex flex-wrap justify-center gap-6">
                            <button className="bg-white text-mg-primary px-10 py-5 rounded-2xl font-black shadow-2xl hover:scale-105 active:scale-100 transition-all text-xl">
                                {t('Đăng ký BERTA', 'Register BERTA')}
                            </button>
                            <button className="bg-white/10 border-2 border-white/30 text-white px-10 py-5 rounded-2xl font-black hover:bg-white/20 transition-all text-xl">
                                {t('Tìm hiểu đại lý', 'Learn about agency')}
                            </button>
                            <button className="bg-slate-900/50 border border-white/10 text-white px-10 py-5 rounded-2xl font-black hover:bg-slate-900 transition-all text-xl">
                                {t('Liên hệ x18 Technology', 'Contact x18 Technology')}
                            </button>
                        </div>
                    </div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] border border-white/5 rounded-full pointer-events-none"></div>
                </section>
            </main>

            <footer className="py-16 bg-white dark:bg-mg-bg-dark border-t border-mg-border-light dark:border-mg-border-dark">
                <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-start gap-12">
                    <div className="max-w-md">
                        <div className="flex items-center gap-2 mb-6">
                            {/* Dark theme: không có nền */}
                            <div className="hidden dark:flex">
                                <img src={logoX18} alt="x18 Logo" className="h-10 w-auto" />
                            </div>
                            {/* Light theme: có nền tròn dark */}
                            <div className="flex dark:hidden w-12 h-12 bg-slate-800 rounded-full items-center justify-center p-2 shadow-lg">
                                <img src={logoX18} alt="x18 Logo" className="w-full h-full object-contain" />
                            </div>
                            <span className="font-black text-2xl text-mg-primary tracking-tighter">BERTA</span>
                        </div>
                        <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
                            {t('Giải pháp chuyển đổi số cho ngành dịch vụ ô tô Việt Nam. Tăng trưởng bền vững dựa trên niềm tin khách hàng', 'Digital transformation solution for the Vietnamese automotive service industry. Sustainable growth based on customer trust')}
                        </p>
                        <div className="flex gap-4">
                            <a className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 hover:text-mg-primary transition-colors" href="#">
                                <span className="material-symbols-outlined">public</span>
                            </a>
                            <a className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 hover:text-mg-primary transition-colors" href="#">
                                <span className="material-symbols-outlined">mail</span>
                            </a>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <p className="font-black text-slate-900 dark:text-white text-lg">x18 Technology Co., Ltd.</p>
                        <div className="space-y-2 text-slate-600 dark:text-slate-400">
                            <div className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-mg-primary">mail</span>
                                <span>Email: contact@x18.io</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-mg-primary">phone_in_talk</span>
                                <span>Hotline: (84) 1800-xxxx</span>
                            </div>
                            <p className="pt-6 text-xs text-slate-400">© 2024 x18 Technology. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default BertaLanding2;
