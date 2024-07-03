import { getAllCategories } from '@/app/actions'
import { Tag } from '@/components/atoms/Tag'

type Category = {
    id: number
    attributes: {
        name: string
        color: string
        slug: string
    }
}

export default async function AllCategoriesTags() {
    const { data: allCategories } = await getAllCategories()

    return (
        <>
            <div className="flex gap-2 flex-wrap">
                {allCategories.map((category: Category) => {
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
        </>
    )
}
