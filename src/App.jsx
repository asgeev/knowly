import { useEffect, useState } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { GlobalStyles } from './Components/GlobalStyles/GlobalStyles'
import { ThemeProvider, ThemeContext } from 'styled-components'
import { darkTheme, baseTheme, lightTheme } from './assets/Theme/theme'
import { AppLayout } from './Components/AppLayout/AppLayout'
import { PageNotFound } from './Components/PageNotFound/PageNotFound'
import { Page } from './Components/Page/Page'
import { HomePage } from './Components/HomePage/HomePage'
import { SkeletonTheme } from 'react-loading-skeleton'
import './assets/Theme/normalize.css'

function App() {
    const initial = JSON.parse(localStorage.getItem('isDarkMode'))
    const [isDarkMode, setIsDarkMode] = useState(initial)

    useEffect(() => {
        localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode))
    }, [isDarkMode])

    const theme = {
        dark: { ...darkTheme, ...baseTheme },
        light: { ...lightTheme, ...baseTheme },
    }

    return (
        <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
            <ThemeProvider theme={isDarkMode ? theme.dark : theme.light}>
                <GlobalStyles />
                <SkeletonTheme
                    baseColor={
                        isDarkMode
                            ? theme.dark.color.skeletonBase
                            : theme.light.color.skeletonBase
                    }
                    highlightColor={
                        isDarkMode
                            ? theme.dark.color.skeletonHighlight
                            : theme.light.color.skeletonHighlight
                    }
                >
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<AppLayout />}>
                                <Route index element={<HomePage />} />
                                <Route
                                    index
                                    path="page/:pageId"
                                    element={<Page />}
                                />
                            </Route>
                            <Route path="*" element={<PageNotFound />} />
                            <Route
                                path="not-found"
                                element={<PageNotFound />}
                            />
                        </Routes>
                    </BrowserRouter>
                </SkeletonTheme>
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}

export default App
