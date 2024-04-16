import { NewsItem } from '../components/molecules/NewsItem'
import { PinnedNewsItem } from '../components/molecules/PinnedNewsItem'

export default function Home() {
    return (
        <div className="flex flex-col gap-20 md:gap-12 mt-10">
            <div className="space-y-4">
                <h1 className="text-xl">Przypięte</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <PinnedNewsItem
                        href="/intranet/raporty"
                        title="Nowość! Strona raportów już istnieje!"
                        coverUrl="http://localhost:1337/uploads/37c11901d47e22cb61587cb493ab4872_1bff35cb16.webp"
                        tag="Informatyka"
                    />
                    <PinnedNewsItem
                        href="/raporty/sprawozdania"
                        title="Prace serwisowe dnia 10.02.2023"
                        coverUrl="http://localhost:1337/uploads/Main_2056eb9dfb.png"
                        tag="Oddział"
                    />
                    <PinnedNewsItem
                        href="/raporty/sprawozdania"
                        title="Więcej pieniędzy dla NFZ!"
                        coverUrl="http://localhost:1337/uploads/37c11901d47e22cb61587cb493ab4872_1bff35cb16.webp"
                        tag="Ogólna"
                    />
                    <PinnedNewsItem
                        href="/raporty/sprawozdania"
                        title="Nowe rozwiązania informatyczne już niedługo"
                        coverUrl="http://localhost:1337/uploads/Success_2418e558a5.png"
                        tag="Cyberbezpieczeństwo"
                    />
                </div>
            </div>
            <h1 className="text-xl">Aktualności</h1>
            <NewsItem
                slug="/aktualnosci/asfas"
                coverUrl="http://localhost:1337/uploads/Success_2418e558a5.png"
            />
            <NewsItem
                slug="/aktualnosci/asfas"
                coverUrl="http://localhost:1337/uploads/Main_2056eb9dfb.png"
            />
            <NewsItem
                slug="/aktualnosci/asfas"
                coverUrl="http://localhost:1337/uploads/Success_2418e558a5.png"
            />
            <NewsItem
                slug="/aktualnosci/asfas"
                coverUrl="http://localhost:1337/uploads/Main_2056eb9dfb.png"
            />
        </div>
    )
}
