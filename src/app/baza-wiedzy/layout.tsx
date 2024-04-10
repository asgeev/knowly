import Navigation from './_components/Navigation'
const DocsLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex flex-col gap-4 md:gap-10 md:flex-row mt-20 justify-center">
            <div className="max-md:w-full min-w-48 sticky top-[120px] self-start h-auto">
                <Navigation />
            </div>
            <div>{children}</div>
            <div className="hidden xl:block sticky top-[120px] self-start h-auto">
                <h1 className="font-semibold">Na tej stronie</h1>
                <ul className="text-textSecondary text-sm mt-3 space-y-2">
                    <li>aaaaa</li>
                    <li>gdnbgfn</li>

                    <li>aaafgnaa</li>

                    <li>aaarrxfaa</li>

                    <li>aaaaa</li>
                    <li>aaaxfgxfgaa asfgerger hrtehert</li>
                    <li>aaagxxfgaa</li>
                    <li>aaaaa</li>
                    <li>aaaaa</li>
                </ul>
            </div>
        </div>
    )
}

export default DocsLayout
