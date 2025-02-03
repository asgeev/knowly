import { Calendar, RefreshCcw } from 'lucide-react'
import { PropsWithChildren } from 'react'

type TProse = {
    title: string
    htmlContent: string
    publishedAt?: string
    updatedAt?: string
}

export default function Prose(props: PropsWithChildren<TProse>) {
    const { title, htmlContent, publishedAt, updatedAt } = props
    return (
        <div className="bg-secondary px-6 rounded-lg border border-border">
            <article className="prose max-w-none lg:prose-lg prose-img:rounded-xl dark:prose-invert prose-gray pb-4">
                <div className="pt-16">
                    <h1>{title}</h1>
                    <div className="not-prose flex gap-7 flex-wrap text-base text-muted-foreground">
                        {publishedAt && (
                            <div className="flex items-center gap-2">
                                <Calendar size={18} />
                                <p>Publikacja: {publishedAt}</p>
                            </div>
                        )}
                        {updatedAt && (
                            <div className="flex items-center gap-2">
                                <RefreshCcw size={18} />
                                <p>Aktualizacja: {updatedAt}</p>
                            </div>
                        )}
                    </div>
                </div>
                <div
                    dangerouslySetInnerHTML={{
                        __html: htmlContent,
                    }}
                ></div>
                {props.children && (
                    <div className="not-prose mt-10">{props.children}</div>
                )}
            </article>
        </div>
    )
}
