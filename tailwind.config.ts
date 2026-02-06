import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                // Backgrounds
                'bg-primary': '#FFFBF8',
                'bg-secondary': '#FFF5F0',
                'bg-accent': '#FFE8E0',

                // Pink spectrum
                'pink-soft': '#FADADD',
                'pink-medium': '#F8B4C0',
                'pink-accent': '#E8899E',
                'pink-deep': '#D4728C',

                // Neutrals
                'cream': '#F5EDE8',
                'beige': '#E8DCD5',
                'brown-light': '#C9B8AC',
                'brown-text': '#5C4A42',

                // Gold accents
                'gold': '#D4AF37',
                'gold-muted': '#C9A962',

                // Text
                'text-primary': '#3D2C29',
                'text-secondary': '#6B5550',
                'text-muted': '#9B8A85',
            },
            fontFamily: {
                playfair: ['var(--font-playfair)', 'serif'],
                inter: ['var(--font-inter)', 'sans-serif'],
            },
            borderRadius: {
                'xl': '16px',
                '2xl': '20px',
                '3xl': '24px',
            },
            boxShadow: {
                'soft': '0 10px 40px rgba(92, 74, 66, 0.08)',
                'medium': '0 15px 50px rgba(92, 74, 66, 0.12)',
                'deep': '0 25px 80px rgba(92, 74, 66, 0.18)',
                'pink': '0 10px 30px rgba(232, 137, 158, 0.25)',
                'button': '0 4px 15px rgba(232, 137, 158, 0.3)',
                'button-hover': '0 6px 20px rgba(232, 137, 158, 0.4)',
            },
            animation: {
                'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
                'slide-in-from-left': 'slideInFromLeft 0.5s ease-out',
                'slide-in-from-right': 'slideInFromRight 0.5s ease-out',
                'slide-out-to-left': 'slideOutToLeft 0.3s ease-in',
                'slide-out-to-right': 'slideOutToRight 0.3s ease-in',
                'fade-in': 'fadeIn 0.3s ease-out',
                'fade-out': 'fadeOut 0.3s ease-in',
                'float': 'float 6s ease-in-out infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(30px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                slideInFromLeft: {
                    '0%': { transform: 'translateX(-100%)' },
                    '100%': { transform: 'translateX(0)' },
                },
                slideInFromRight: {
                    '0%': { transform: 'translateX(100%)' },
                    '100%': { transform: 'translateX(0)' },
                },
                slideOutToLeft: {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-100%)' },
                },
                slideOutToRight: {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(100%)' },
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                fadeOut: {
                    '0%': { opacity: '1' },
                    '100%': { opacity: '0' },
                },
            },
        },
    },
    plugins: [],
}

export default config
