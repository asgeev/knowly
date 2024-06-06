import { getAllCategories } from '../actions'
import { Tag } from '@/components/atoms/Tag'
import React from 'react'

export default async function NewestLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const { data: allCategories } = await getAllCategories()

    return (
        <div className="container mx-auto">
            <div className="flex gap-2 my-4">
                <Tag text="Najnowsze" href={`/posty/najnowsze`} />
                {allCategories.map((category: any) => {
                    const { name, slug } = category?.attributes
                    return (
                        <Tag
                            key={category.id}
                            text={name}
                            href={`/posty/kategoria/${slug}`}
                        />
                    )
                })}
            </div>
            <div className="lg:grid grid-cols-12 gap-5">
                <div className="col-span-8 rounded-b-lg">{children}</div>
                <div className="mt-6 lg:mt-0 col-span-4 flex flex-col gap-10">
                    {allCategories && (
                        <div>
                            <h1 className="text-md font-bold mb-2 ml-1">
                                Wszystkie kategorie
                            </h1>
                            <div className="flex gap-2 flex-wrap">
                                {allCategories.map((category: any) => {
                                    const { name, slug } = category?.attributes
                                    return (
                                        <Tag
                                            key={category.id}
                                            text={name}
                                            href={`/posty/kategoria/${slug}`}
                                        />
                                    )
                                })}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
