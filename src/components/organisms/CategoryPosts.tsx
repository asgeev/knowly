import { getAllCategoriesWithPosts } from '@/app/actions'
import { Section } from '@/components/molecules/Section'
import { GridTemplate } from '@/components/molecules/GridTemplates'

export default async function CategoryPosts() {
    const { data: allCategories } = await getAllCategoriesWithPosts()

    //Sort categories by order
    const categories = allCategories?.sort((a: any, b: any) => {
        return a?.attributes?.order - b?.attributes?.order
    })

    return (
        <>
            {categories?.map((category: any) => {
                const { name, slug, posts, color, grid } = category?.attributes

                return (
                    <Section
                        key={category?.id}
                        title={name}
                        color={color}
                        categoryUrl={`/posty/kategoria/${slug}`}
                    >
                        {posts?.data?.length ? (
                            <GridTemplate
                                template={grid?.grid_template}
                                posts={posts?.data}
                            />
                        ) : (
                            <p className="text-xl text-muted-foreground uppercase font-semibold">
                                Brak postów
                            </p>
                        )}
                    </Section>
                )
            })}
        </>
    )
}
