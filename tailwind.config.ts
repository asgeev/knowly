import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['var(--font-poppins)'],
            },
            colors: {
                background: '#F7F7F7',
                textPrimary: 'var(--text-primary)',
                textSecondary: 'var(--text-secondary)',
            },
        },
    },
    plugins: [],
}
export default config
