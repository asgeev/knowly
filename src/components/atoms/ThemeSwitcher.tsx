'use client'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'

const ThemeSwitcher = () => {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }
    return (
        <select
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            className="bg-background border dark:border-color_2 text-sm rounded-lg focus:ring-accent focus:border-accent block w-full p-2.5 "
        >
            <option value="system">System</option>
            <option value="dark">Ciemny</option>
            <option value="light">Jasny</option>
        </select>
    )
}

export default ThemeSwitcher
