import ErrorComponent from '@/components/molecules/error-component'

type TErrorPageProps = {
    searchParams?: {
        status: string
    }
}

export default function Error(props: TErrorPageProps) {
    const status = props.searchParams?.status

    if (!status) {
        return <ErrorComponent />
    }

    return (
        <div className="container">
            <ErrorComponent status={status} />
        </div>
    )
}
