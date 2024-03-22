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
                sans: ['var(--font-roboto)'],
            },
            colors: {
                primary: 'var(--primary)',
                secondary: 'var(--secondary)',
                color_1: 'var(--color-1)',
                color_2: 'var(--color-2)',
                textPrimary: 'var(--text-primary)',
                textSecondary: 'var(--text-secondary)',
                accent: 'var(--accent)',
                backdrop: 'var(--backdrop)',
            },
            boxShadow: {
                meilisearch: 'inset 0 1px 0 0 #ffffff0d',
            },
        },
        container: {
            center: true,
        },
    },
    plugins: [require('@tailwindcss/typography')],
}
export default config
