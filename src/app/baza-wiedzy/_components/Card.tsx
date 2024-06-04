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
            <div className="group-hover:opacity-90 opacity-60 transition-all duration-300 border border-textPrimary rounded-lg text-textPrimary flex items-top gap-4 p-6 h-full">
                {children}
                <div className="leading-7">
                    <p className="font-bold text-base">{title}</p>
                    <p className="text-sm font-medium text-textSecondary">
                        {subtitle}
                    </p>
                </div>
            </div>
        </div>
    )
}
