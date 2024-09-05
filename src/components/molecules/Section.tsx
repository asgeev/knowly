import Link from 'next/link'
import { PropsWithChildren } from 'react'
import { Button } from '@/components/ui/button'

type Props = {
    title: string
    categoryUrl?: string
    color?: string
}

export const Section = (props: PropsWithChildren<Props>) => {
    const { title, categoryUrl, color } = props
    console.log(color)

    return (
        <section className="mb-12">
            <div className="container space-y-6">
                <div className="flex mb-6 items-center gap-6">
                    <h1 className="font-bold text-2xl md:text-4xl">{title}</h1>
                    {categoryUrl && (
                        <Link href={categoryUrl}>
                            <Button
                                variant={'ghost'}
                                className="text-muted-foreground text-sm uppercase font-bold"
                            >
                                Zobacz więcej
                            </Button>
                        </Link>
                    )}
                </div>
                {color && (
                    <span
                        className="w-14 h-2 rounded-lg block"
                        style={{ backgroundColor: color }}
                    ></span>
                )}
                {props.children}
            </div>
        </section>
    )
}
