import Navigation from './_components/Navigation'
const DocsLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="container flex flex-col md:flex-row gap-6 lg:gap-x-10 max-w-screen-xl mt-10">
            <Navigation />
            <div className="w-full md:basis-2/3 lg:basis-1/2">{children}</div>
            <div className="hidden lg:block lg:basis-1/4 ">
                <h1 className="font-semibold">Na tej stronie</h1>
                <ul className="text-textSecondary text-sm mt-3 space-y-2">
                    <li>aaaaa</li>
                    <li>gdnbgfn</li>

                    <li>aaafgnaa</li>

                    <li>aaarrxfaa</li>

                    <li>aaaaa</li>
                    <li>aaaxfgxfgaa</li>
                    <li>aaagxxfgaa</li>
                    <li>aaaaa</li>
                    <li>aaaaa</li>
                </ul>
            </div>
        </div>
    )
}

export default DocsLayout
