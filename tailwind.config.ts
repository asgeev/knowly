import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: 'var(--primary)',
                secondary: 'var(--secondary)',
                color_1: 'var(--color-1)',
                color_2: 'var(--color-2)',
                info: 'var(--info)',
                warning: 'var(--warning)',
                danger: 'var(--danger)',
                textPrimary: 'var(--text-primary)',
                textSecondary: 'var(--text-secondary)',
                accent: 'var(--accent)',
                backdrop: 'var(--backdrop)',
                red: 'rgba(var(--red), 1)',
                purple: 'rgba(var(--purple), 1)',
                yellow: 'rgba(var(--yellow), 1)',
                orange: 'rgba(var(--orange), 1)',
                green: 'rgba(var(--green), 1)',
                pink: 'rgba(var(--pink), 1)',
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
