import React from 'react'

export const Section = ({ children }: { children: React.ReactNode }) => {
    return (
        <section className="container px-1 space-y-4 md:space-y-6 mt-20">
            {children}
        </section>
    )
}
