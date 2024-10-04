import { getAllCategories } from '@/features/post/actions/category-actions'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

type Category = {
    id: number
    attributes: {
        name: string
        color: string
        slug: string
    }
}

export default async function AllCategories() {
    const { data: allCategories } = await getAllCategories()

    return (
        <>
            <div className="flex gap-2 flex-wrap">
                {allCategories.map((category: Category) => {
                    const { name, slug } = category?.attributes
                    return (
                        <Button key={category.id} asChild variant="secondary">
                            <Link href={`/posty/kategoria/${slug}`}>
                                {name}
                            </Link>
                        </Button>
                    )
                })}
            </div>
        </>
    )
}
