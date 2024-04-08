import React, { useState } from 'react'
import { NavigationLink } from './NavigationLink'

export const NavigationNested = ({ items }) => {
    const [isExpand, seIsExpand] = useState(false)

    const toggleExpand = () => {
        seIsExpand(!isExpand)
    }

    return (
        <div className="text-textSecondary px-1">
            {items?.map((item) => {
                return (
                    <div key={item.id}>
                        <NavigationLink
                            item={item}
                            className="flex justify-between hover:text-textPrimary py-1.5"
                            onClick={toggleExpand}
                        >
                            {item.items && item?.items?.length ? (
                                <>
                                    {isExpand ? (
                                        <span className="material-symbols-outlined md-24">
                                            expand_more
                                        </span>
                                    ) : (
                                        <span className="material-symbols-outlined md-24">
                                            chevron_right
                                        </span>
                                    )}
                                </>
                            ) : null}
                        </NavigationLink>

                        {item?.items && item?.items?.length ? (
                            <div
                                data-isexpand={`${isExpand}`}
                                className="data-[isexpand=false]:hidden ml-4 border-s border-color_2 pl-3"
                            >
                                {item.items.map((item) => {
                                    return (
                                        <NavigationLink
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
