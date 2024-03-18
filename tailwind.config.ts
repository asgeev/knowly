import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                sans: ['var(--font-poppins)'],
            },
            colors: {
                background: 'var(--background)',
                color_1: 'var(--color-1)',
                color_2: 'var(--color-2)',
                textPrimary: 'var(--text-primary)',
                textSecondary: 'var(--text-secondary)',
                accent: 'var(--accent)',
            },
        },
        container: {
            center: true,
            screens: {
                xl: '1200px',
            },
        },
    },
    plugins: [require('@tailwindcss/typography')],
}
export default config
