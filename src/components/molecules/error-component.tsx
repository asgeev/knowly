import { Button } from '@/components/ui/button'
import Link from 'next/link'

type TError = {
    status?: string
    title?: string
    description?: string
}

const errors: Array<TError> = [
    {
        status: '403',
        title: 'Błąd 403',
        description:
            'Przepraszamy, ale nie masz dostępu do wyświetlenia tej strony!',
    },
]

interface TErrorComponentProps {
    reset?: () => void
    status?: string
}

export default function Error(props: TErrorComponentProps) {
    const { status } = props
    const error = errors.find((error) => error.status === status)

    return (
        <div className="py-20">
            <h1 className="text-[250px]"> {error?.status ?? '500'}</h1>
            <div>
                <h2 className="text-xl">
                    {error?.title ?? 'Oj, wystąpił błąd!'}
                </h2>
                <h3 className="text-muted-foreground">
                    {error?.description ??
                        'Wystąpił nieznany błąd spróbuj ponownie póżniej!'}
                </h3>
            </div>

            <div className="mt-8">
                <Button asChild className="max-w-fit">
                    <Link href={'/'}>Strona głowna</Link>
                </Button>
            </div>
        </div>
    )
}
