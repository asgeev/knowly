import Link from 'next/link'
import Navigation from './_components/Navigation'
import React, { Suspense } from 'react'
import { ArrowRight } from 'lucide-react'
import { Button } from '../../components/ui/button'

const DocsLayout = ({ children }: { children: React.ReactNode }) => {
    const strapiPublicUrl = process.env.PUBLIC_STRAPI_URL

    return (
        <div className="container mx-auto lg:grid grid-cols-12 gap-8 mt-6 lg:mt-10 max-md:mx-2">
            <div className=" col-span-3 xl:col-span-2 lg:sticky top-[120px] self-start h-auto">
                <Suspense fallback={null}>
                    <Navigation />
                </Suspense>
            </div>
            <div className="col-span-9 xl:col-span-7 max-lg:mt-16">
                {children}
            </div>
            <div className="hidden xl:block sticky top-[120px] self-start h-auto col-span-3">
                <div className="bg-secondary border border-border p-7 rounded-xl">
                    <h1 className="text-lg font-bold mb-8">
                        Dokumentacja dla Twojego wydziału już dostępna! 🚀🎉🪄
                    </h1>
                    <ul className="mt-4 ml-5 list-disc text-textSecondary space-y-3">
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
                        <Button asChild className="w-full" size="icon">
                            <Link href={`${strapiPublicUrl}/admin`}>
                                Dodaj dokumentację
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DocsLayout
