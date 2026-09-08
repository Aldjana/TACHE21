/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Sidebar dark blue/black
        sidebar: {
          bg: '#0f172a',
          hover: '#1e293b',
          active: '#1e3a5f',
          text: '#e2e8f0',
          textMuted: '#94a3b8',
        },
        // Primary colors
        primary: {
          DEFAULT: '#0f172a',
          hover: '#1e293b',
        },
        // Status colors
        success: '#10b981',
        warning: '#f59e0b',
        danger: '#ef4444',
        info: '#3b82f6',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'card': '0.5rem',
        'button': '0.375rem',
      },
      boxShadow: {
        'card': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
      },
    },
  },
  plugins: [],
}
