import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            colors: {
                primary: {
                    '10': '#FEF3EB',
                    '100': '#CC9461',
                    '900': '#653D18',
                    DEFAULT: '#281402',
                },
                destructive: '#E7000B',
                font_secondary: '#FF7A00',
            },
            fontFamily: {
                poppins: ['var(--font-poppins)', 'Poppins', 'sans-serif'],
                inter: ['var(--font-inter)', 'Inter', 'sans-serif'],
            },
            screens: {
                vertical_tab: '562px',
                mobile_s: '330px',
            },
        },
    },
    plugins: [require('tailwind-scrollbar-hide')],
};
export default config;
