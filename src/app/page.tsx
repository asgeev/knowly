import {
    Template1,
    Template2,
    Template3,
    Template4,
    Template5,
} from '../components/organisms/NewsTemplates'

const data = [
    {
        id: 1,
        attributes: {
            title: 'How to use Prisma ORM with multiple database schemas',
            slug: 'how-to-use-prisma-orm-with-multiple-database-schemas-1',
        },
    },
    {
        id: 2,
        attributes: {
            title: 'page2',
            slug: 'page2',
        },
    },
    {
        id: 3,
        attributes: {
            title: 'page3',
            slug: 'asfasf',
        },
    },
    {
        id: 4,
        attributes: {
            title: 'Kontrola zarządza',
            slug: 'kontrola-zarzadza-1',
        },
    },
    {
        id: 5,
        attributes: {
            title: 'Petycje',
            slug: 'asfas',
        },
    },
    {
        id: 6,
        attributes: {
            title: 'Procedury',
            slug: 'procedury-1',
        },
    },
    {
        id: 7,
        attributes: {
            title: 'Prosty język',
            slug: 'asfasf',
        },
    },
    {
        id: 8,
        attributes: {
            title: 'Adresy innych stron',
            slug: 'adresy-innych-stron-1',
        },
    },
    {
        id: 9,
        attributes: {
            title: 'Struktura organizacyjna',
            slug: 'struktura-organizacyjna',
        },
    },
    {
        id: 10,
        attributes: {
            title: 'Hasła SZOI/SNRL',
            slug: 'asfas',
        },
    },
    {
        id: 13,
        attributes: {
            title: 'test',
            slug: 'test',
        },
    },
]

export default function Home() {
    return (
        <>
            <Template1 title="Przypięte" items={data} />
            <Template2 title="Najnowsze" items={data} />
            <Template3 title="Cyberbezpieczeństwo" items={data} />
            <Template4 title="Ciekawostki" items={data} />
            <Template5 title="Sport " items={data} />
        </>
    )
}
