import React, { useState, useEffect } from 'react';

const PasswordProtection = ({ children, pageId, password = "infinieye" }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [inputPassword, setInputPassword] = useState('');
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const storageKey = `isAuthenticated_${pageId}`;

    // Kiểm tra xem đã đăng nhập chưa khi component mount
    useEffect(() => {
        const authStatus = sessionStorage.getItem(storageKey);
        if (authStatus === 'true') {
            setIsAuthenticated(true);
        }
    }, [storageKey]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputPassword === password) {
            setIsAuthenticated(true);
            sessionStorage.setItem(storageKey, 'true');
            setError('');
        } else {
            setError('Mật khẩu không đúng. Vui lòng thử lại.');
            setInputPassword('');
        }
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
        sessionStorage.removeItem(storageKey);
        setInputPassword('');
    };

    // Nếu đã xác thực, hiển thị nội dung
    if (isAuthenticated) {
        return (
            <div>
                {/* Nút logout ẩn ở góc */}
                <button
                    onClick={handleLogout}
                    className="fixed bottom-4 right-4 z-[9999] bg-red-500 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-red-600 transition-colors shadow-lg opacity-30 hover:opacity-100"
                    title="Đăng xuất"
                >
                    <span className="material-symbols-outlined text-sm">logout</span>
                </button>
                {children}
            </div>
        );
    }

    // Nếu chưa xác thực, hiển thị form mật khẩu
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                {/* Card chính */}
                <div className="bg-white rounded-2xl shadow-2xl p-8 border border-slate-200">
                    {/* Logo và tiêu đề */}
                    <div className="text-center mb-8">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                            <span className="material-symbols-outlined text-white text-3xl">lock</span>
                        </div>
                        <h1 className="text-2xl font-black text-slate-800 mb-2">
                            Trang được bảo vệ
                        </h1>
                        <p className="text-slate-500 text-sm">
                            Vui lòng nhập mật khẩu để truy cập
                        </p>
                    </div>

                    {/* Form nhập mật khẩu */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="password" className="block text-sm font-bold text-slate-700 mb-2">
                                Mật khẩu
                            </label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    id="password"
                                    value={inputPassword}
                                    onChange={(e) => {
                                        setInputPassword(e.target.value);
                                        setError('');
                                    }}
                                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors pr-12 font-medium"
                                    placeholder="Nhập mật khẩu"
                                    autoFocus
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                                >
                                    <span className="material-symbols-outlined text-xl">
                                        {showPassword ? 'visibility_off' : 'visibility'}
                                    </span>
                                </button>
                            </div>

                            {/* Thông báo lỗi */}
                            {error && (
                                <div className="mt-3 flex items-center gap-2 text-red-600 text-sm bg-red-50 p-3 rounded-lg border border-red-200">
                                    <span className="material-symbols-outlined text-base">error</span>
                                    <span className="font-medium">{error}</span>
                                </div>
                            )}
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 rounded-lg font-bold hover:from-blue-600 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2"
                        >
                            <span className="material-symbols-outlined">login</span>
                            <span>Đăng nhập</span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PasswordProtection;
