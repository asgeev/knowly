import { PropsWithChildren } from 'react'
import {
    NewsItemBackground,
    NewsItemRight,
    NewsItemTop,
} from '../molecules/NewsItem'
import { Section } from '../molecules/Section'

type Props = {
    title: string
    items: Array<{
        id: number
        attributes: {
            title: string
            slug: string
            coverUrl?: string | undefined
            tag?: string | undefined
        }
    }>
}

export const Template1 = (props: PropsWithChildren<Props>) => {
    const { title, items } = props

    const content = items?.slice(0, 5).map((item) => {
        return (
            <NewsItemBackground
                key={item?.id}
                href={`/${item?.attributes?.slug}`}
                title={item?.attributes?.title}
                coverUrl="http://localhost:1337/uploads/01893a9429f7588db8058ecb1439bb46_bdbca91336.webp"
                tag="fasf"
            />
        )
    })

    return (
        <Section title={title}>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
                {content}
            </div>
            {props.children}
        </Section>
    )
}

export const Template2 = (props: PropsWithChildren<Props>) => {
    const { title, items } = props

    const contentRight = items.slice(3, 7).map((item) => {
        return (
            <NewsItemRight
                key={item.id}
                title={item?.attributes?.title}
                tag={item?.attributes?.tag}
                href={item?.attributes?.slug}
                coverUrl="http://localhost:1337/uploads/01893a9429f7588db8058ecb1439bb46_bdbca91336.webp"
                className="col-span-12"
            />
        )
    })

    return (
        <Section title={title}>
            <div className="col-span-12 lg:col-span-6 grid grid-cols-12 gap-5">
                <div className="col-span-12 lg:col-span-6 grid grid-cols-12 gap-5">
                    {items[0] && (
                        <NewsItemBackground
                            title={items[0]?.attributes?.title}
                            tag={items[0]?.attributes?.tag}
                            href={items[0]?.attributes?.slug}
                            coverUrl="http://localhost:1337/uploads/01893a9429f7588db8058ecb1439bb46_bdbca91336.webp"
                            className="col-span-12 sm:col-span-6 md:h-[350px]"
                        />
                    )}

                    {items[1] && (
                        <NewsItemBackground
                            title={items[1]?.attributes?.title}
                            tag={items[1]?.attributes?.tag}
                            href={items[1]?.attributes?.slug}
                            coverUrl="http://localhost:1337/uploads/01893a9429f7588db8058ecb1439bb46_bdbca91336.webp"
                            className="col-span-12 sm:col-span-6 md:h-[350px]"
                        />
                    )}
                    {items[2] && (
                        <NewsItemRight
                            title={items[2]?.attributes?.title}
                            tag={items[2]?.attributes?.tag}
                            href={items[2]?.attributes?.slug}
                            coverUrl="http://localhost:1337/uploads/01893a9429f7588db8058ecb1439bb46_bdbca91336.webp"
                            className="col-span-12"
                        />
                    )}
                    {items[3] && (
                        <NewsItemRight
                            title={items[3]?.attributes?.title}
                            tag={items[3]?.attributes?.tag}
                            href={items[3]?.attributes?.slug}
                            coverUrl="http://localhost:1337/uploads/01893a9429f7588db8058ecb1439bb46_bdbca91336.webp"
                            className="col-span-12"
                        />
                    )}
                </div>
                <div className="col-span-12 lg:col-span-6 flex flex-col gap-5">
                    {contentRight}
                </div>
            </div>
            {props.children}
        </Section>
    )
}

export const Template3 = (props: PropsWithChildren<Props>) => {
    const { title, items } = props

    const contentRight = items.slice(1, 4).map((item) => {
        return (
            <NewsItemRight
                key={item.id}
                title="Dodatkowe pieniądze dla NFZ oraz dla innych jednostek współpracyjących Dodatkowe pieniądze dla NFZ oraz dla innych jednostek współpracyjących Dodatkowe pieniądze dla NFZ oraz dla innych jednostek współpracyjących Dodatkowe pieniądze dla NFZ oraz dla innych jednostek współpracyjących"
                tag="fgnfgn"
                href="/aktualnosci/asfas"
                coverUrl="http://localhost:1337/uploads/01893a9429f7588db8058ecb1439bb46_bdbca91336.webp"
                className="col-span-12"
            />
        )
    })

    return (
        <Section title={title}>
            <div className="grid grid-cols-12 gap-5">
                <div className="col-span-12 lg:col-span-6 grid grid-cols-12 gap-5">
                    {items[0] && (
                        <NewsItemBackground
                            title={items[0]?.attributes?.title}
                            tag={items[0]?.attributes?.tag}
                            href={items[0]?.attributes?.slug}
                            coverUrl="http://localhost:1337/uploads/01893a9429f7588db8058ecb1439bb46_bdbca91336.webp"
                            className="col-span-12 min-h-[350px] lg:h-full"
                        />
                    )}
                </div>
                <div className="col-span-12 lg:col-span-6 flex flex-col gap-5">
                    {contentRight}
                </div>
            </div>
        </Section>
    )
}

export const Template4 = (props: PropsWithChildren<Props>) => {
    const { title, items } = props

    const content = items.slice(0, 4).map((item) => {
        return (
            <NewsItemTop
                key={item?.id}
                title={item?.attributes?.title}
                tag="asfas"
                href={item?.attributes?.title}
                coverUrl="http://localhost:1337/uploads/01893a9429f7588db8058ecb1439bb46_bdbca91336.webp"
                className="col-span-6 md:col-span-3"
            />
        )
    })

    return (
        <Section title={title}>
            <div className="grid grid-cols-12 gap-5">{content}</div>
        </Section>
    )
}

export const Template5 = (props: PropsWithChildren<Props>) => {
    const { title, items } = props

    const contentBottom = items?.slice(3, 7).map((item) => {
        return (
            <NewsItemTop
                key={item?.id}
                title={item?.attributes?.title}
                tag="asfas"
                href={item?.attributes?.title}
                coverUrl="http://localhost:1337/uploads/01893a9429f7588db8058ecb1439bb46_bdbca91336.webp"
                className="col-span-6 md:col-span-3"
            />
        )
    })

    if (!items) {
        return null
    }

    return (
        <Section title={title}>
            <div className="grid grid-cols-12 gap-5">
                {items[0] && (
                    <NewsItemBackground
                        title={items[0]?.attributes?.title}
                        tag={items[0]?.attributes?.tag}
                        href={items[0]?.attributes?.slug}
                        coverUrl="http://localhost:1337/uploads/01893a9429f7588db8058ecb1439bb46_bdbca91336.webp"
                        className="col-span-12 md:col-span-5 h-[350px]"
                    />
                )}
                <div className="col-span-12 md:col-span-7 grid grid-rows-2 gap-5">
                    {items[1] && (
                        <NewsItemRight
                            key={items[1]?.id}
                            title={items[1]?.attributes?.title}
                            tag="asfas"
                            href={items[1]?.attributes?.title}
                            coverUrl="http://localhost:1337/uploads/01893a9429f7588db8058ecb1439bb46_bdbca91336.webp"
                            className="col-span-12 md:col-span-6"
                        />
                    )}
                    {items[2] && (
                        <NewsItemRight
                            key={items[2]?.id}
                            title={items[2]?.attributes?.title}
                            tag="asfas"
                            href={items[2]?.attributes?.title}
                            coverUrl="http://localhost:1337/uploads/01893a9429f7588db8058ecb1439bb46_bdbca91336.webp"
                            className="col-span-12 md:col-span-6"
                        />
                    )}
                </div>
                {contentBottom}

                {/* <NewsItemTop
                    key={items[4]?.id}
                    title={items[4]?.attributes?.title}
                    tag="asfas"
                    href={items[4]?.attributes?.title}
                    coverUrl="http://localhost:1337/uploads/01893a9429f7588db8058ecb1439bb46_bdbca91336.webp"
                    className="col-span-3"
                />
                <NewsItemTop
                    key={items[5]?.id}
                    title={items[5]?.attributes?.title}
                    tag="asfas"
                    href={items[5]?.attributes?.title}
                    coverUrl="http://localhost:1337/uploads/01893a9429f7588db8058ecb1439bb46_bdbca91336.webp"
                    className="col-span-3"
                />
                <NewsItemTop
                    key={items[6]?.id}
                    title={items[6]?.attributes?.title}
                    tag="asfas"
                    href={items[6]?.attributes?.title}
                    coverUrl="http://localhost:1337/uploads/01893a9429f7588db8058ecb1439bb46_bdbca91336.webp"
                    className="col-span-3"
                /> */}
            </div>
        </Section>
    )
}
