type Props = {
    title: string
    children: React.ReactNode
}

const HitsSection = (props: Props) => {
    return (
        <section className="py-6">
            <p className="text-textSecondary mb-6">{props.title}</p>

            {props.children}
        </section>
    )
}

export default HitsSection
