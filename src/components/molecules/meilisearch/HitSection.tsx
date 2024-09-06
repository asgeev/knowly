import React from 'react'

type Props = {
    title: string
    children: React.ReactNode
}

const HitsSection = (props: Props) => {
    return (
        <section className="py-6">
            <p className="mb-6 font-bold">{props.title}</p>

            {props.children}
        </section>
    )
}

export default HitsSection
