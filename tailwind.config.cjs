/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'xe-primary': '#a4ec13',
        'xe-bg-light': '#f7f8f6',
        'xe-dark-accent': '#1c2210',
        'xe-dark-card': '#171b0d',
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
        'glow': '0 0 25px rgba(164, 236, 19, 0.35)',
      },
      fontFamily: {
        'display': ['Space Grotesk', 'sans-serif'],
      },
    },
  },
}
