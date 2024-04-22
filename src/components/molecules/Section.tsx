import React from 'react'

type Props = {
    children: React.ReactNode
    title: string
}

export const Section = (props: Props) => {
    return (
        <section className="">
            <div className="container space-y-6 pt-12">
                <h1 className="font-bold text-2xl md:text-4xl">
                    {props.title}
                </h1>
                {props.children}
            </div>
        </section>
    )
}
