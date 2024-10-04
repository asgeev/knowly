import React from 'react'

interface Props {
    title: string
    subtitle: string
    children: React.ReactNode
}

export const Card = (props: Props) => {
    const { title, subtitle, children } = props
    return (
        <div className="group col-span-6 cursor-pointer">
            <div className="opacity-60 group-hover:opacity-100 transition-all duration-300 border border-border rounded-lg flex items-top gap-4 p-6 h-full">
                {children}
                <div className="leading-7">
                    <p className="font-bold text-base">{title}</p>
                    <p className="text-sm font-medium text-muted-foreground">
                        {subtitle}
                    </p>
                </div>
            </div>
        </div>
    )
}
