import { getInfoCen } from '@/features/scraping/actions/scraper-actions'
import { GridTemplate } from '@/components/molecules/grid-templates'
import { Section } from '@/components/molecules/section'

export default async function IntranetHeadOfficePosts() {
    const intranetHeadOfficePosts = await getInfoCen()

    const intranetHeadOfficeUrl = process.env.INTRANET_HEAD_OFFICE || '#'

    return (
        <>
            <Section
                title="Intranet centrali"
                categoryUrl={intranetHeadOfficeUrl}
            >
                {intranetHeadOfficePosts?.length ? (
                    <GridTemplate
                        template={5}
                        posts={intranetHeadOfficePosts}
                    />
                ) : (
                    <p className="text-xl text-textSecondary uppercase font-semibold">
                        Brak postów
                    </p>
                )}
            </Section>
        </>
    )
}
