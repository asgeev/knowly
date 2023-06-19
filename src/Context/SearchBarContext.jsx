import { createContext, useState } from 'react'

export const SearchBarContext = createContext()

export const SearchBarProvider = ({ children }) => {
    const [isSearchOpen, setIsSearchOpen] = useState()
    const openSearchResults = () => {
        setIsSearchOpen(true)
    }
    const closeSearchResults = () => {
        setIsSearchOpen(false)
    }
    return (
        <SearchBarContext.Provider
            value={{ isSearchOpen, openSearchResults, closeSearchResults }}
        >
            {children}
        </SearchBarContext.Provider>
    )
}
