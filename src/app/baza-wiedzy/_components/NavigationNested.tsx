import React, { useState } from 'react'
import { NavigationLink } from './NavigationLink'
import { ChevronDown, ChevronRight } from 'lucide-react'

export const NavigationNested = ({ items }: { items: [] }) => {
    const [isExpand, seIsExpand] = useState(false)

    const toggleExpand = () => {
        seIsExpand(!isExpand)
    }

    return (
        <div className="text-textSecondary px-1">
            {items?.map((item: any) => {
                return (
                    <div key={item.id}>
                        <NavigationLink
                            href={''}
                            item={item}
                            className="flex justify-between hover:text-textPrimary py-1.5"
                            onClick={toggleExpand}
                        >
                            {item.items && item?.items?.length ? (
                                <>
                                    {isExpand ? (
                                        <ChevronDown />
                                    ) : (
                                        <ChevronRight />
                                    )}
                                </>
                            ) : null}
                        </NavigationLink>

                        {item?.items && item?.items?.length ? (
                            <div
                                data-isexpand={`${isExpand}`}
                                className="data-[isexpand=false]:hidden ml-4 border-s border-color_2 pl-3"
                            >
                                {item.items.map((item: any) => {
                                    return (
                                        <NavigationLink
                                            href={''}
                                            key={item.id}
                                            item={item}
                                            className="flex justify-between hover:text-textPrimary py-1.5"
                                        />
                                    )
                                })}
                            </div>
                        ) : null}
                    </div>
                )
            })}
        </div>
    )
}
