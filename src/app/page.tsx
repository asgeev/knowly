'use client'
import { useTheme } from 'next-themes'

export default function Home() {
    const { theme, setTheme } = useTheme()

    return (
        <div>
            <p>home page</p>
            <button onClick={() => setTheme('light')}>Light Mode</button>
            <button onClick={() => setTheme('dark')}>Dark Mode</button>
        </div>
    )
}
