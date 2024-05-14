import Link from 'next/link'
import Navigation from './_components/Navigation'
const DocsLayout = ({ children }: { children: React.ReactNode }) => {
    const strapiUrl = process.env.STRAPI_URL

    return (
        // <div className="flex flex-col gap-4 md:gap-10 md:flex-row mt-20 justify-center">
        //     <div className="max-md:w-full min-w-48 sticky top-[120px] self-start h-auto">
        //         <Navigation />
        //     </div>
        //     <div>{children}</div>
        //     <div className="hidden xl:block sticky top-[120px] self-start h-auto">
        //         <h1 className="font-semibold">Na tej stronie</h1>
        //         <ul className="text-textSecondary text-sm mt-3 space-y-2">
        //             <li>aaaaa</li>
        //             <li>gdnbgfn</li>

        //             <li>aaafgnaa</li>

        //             <li>aaarrxfaa</li>

        //             <li>aaaaa</li>
        //             <li>aaaxfgxfgaa asfgerger hrtehert</li>
        //             <li>aaagxxfgaa</li>
        //             <li>aaaaa</li>
        //             <li>aaaaa</li>
        //         </ul>
        //     </div>
        // </div>
        <div className="container mx-auto lg:grid grid-cols-12 gap-8">
            <div className="px-4 lg:px-2 md:col-span-3 xl:col-span-2 lg:sticky top-[120px] self-start h-auto">
                <Navigation />
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
            <div className="md:col-span-9 xl:col-span-7">{children}</div>
            <div className="hidden xl:block sticky top-[120px] self-start h-auto col-span-3">
                <div className="bg-secondary p-7 rounded-xl">
                    <h1 className="text-lg font-bold mb-8">
                        Dokumentacja dla Twojego wydziału już dostępna! 🚀🎉🪄
                    </h1>
                    <ul className="mt-4 ml-5 list-disc text-textSecondary space-y-4">
                        <li>jednolity opis czynności</li>
                        <li>zawsze aktualna treść</li>
                        <li>
                            łatwe wyszukiwanie treści dokumentacji w
                            wyszukiwarce
                        </li>
                        <li>
                            pobieranie plików dotyczących danego zagadnienia z
                            jednego miejsca
                        </li>
                        <li>
                            linki do zewnętrznych stron np. rozporządzenia
                            ministra zdrowia
                        </li>
                        <li>
                            pytania oraz odpowiedzi dla pracowników dotyczące
                            danego zagadnienia
                        </li>
                    </ul>
                    <div className="bg-accent p-2 flex items-center justify-center rounded-lg mt-12 group">
                        <Link
                            href={`${strapiUrl}/admin`}
                            className="flex items-center gap-2 font-medium group-hover:gap-4 transition-all"
                        >
                            Dodaj dokumentację
                            <span className="material-symbols-outlined md-18">
                                arrow_forward
                            </span>
                        </Link>
                    </div>
                </div>
                {/* <h1 className="font-semibold">Na tej stronie</h1>
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
                </ul> */}
            </div>
        </div>
    )
}

export default DocsLayout
