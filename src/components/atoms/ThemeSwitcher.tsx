'use client'
import { useTheme } from 'next-themes'

export default function ThemeSwitcher() {
    const { resolvedTheme, setTheme } = useTheme()

    return (
        <div>
            <button onClick={() => setTheme('dark')}>
                <span className="material-icons md-36">dark_mode</span>
            </button>
            {/* <button onClick={() => setTheme('light')}>
                <span className="material-icons md-36">dark</span>
            </button> */}
        </div>
    )
}
