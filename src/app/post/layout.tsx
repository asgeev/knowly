export default function PostLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="container mx-auto">
            <div className="lg:grid grid-cols-12 gap-5 mt-10">
                <div className="col-span-8 bg-secondary">{children}</div>
                <div className="max-lg:hidden col-span-4">asfasfasf</div>
            </div>
        </div>
    )
}
