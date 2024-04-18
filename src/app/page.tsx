import { NewsItem } from '../components/molecules/NewsItem'
import { PinnedNewsItem } from '../components/molecules/PinnedNewsItem'

export default function Home() {
    return (
        <div className="flex flex-col gap-20 md:gap-12">
            <div className="container px-1 space-y-6 md:space-y-10 mt-10">
                <h1 className="font-bold text-2xl md:text-4xl">Przypięte</h1>
                <div className=" grid sm:grid-flow-col gap-4 overflow-y-auto py-4">
                    <PinnedNewsItem
                        href="/intranet/raporty"
                        title="Nowość! Strona raportów już istnieje!"
                        coverUrl="http://localhost:1337/uploads/4aca9e73dfe46dbfbc4af8ec53f54d25_179b51d211.webp"
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
                        coverUrl="http://localhost:1337/uploads/01893a9429f7588db8058ecb1439bb46_bdbca91336.webp"
                        tag="Cyberbezpieczeństwo"
                    />
                    <PinnedNewsItem
                        href="/raporty/sprawozdania"
                        title="Nowe rozwiązania informatyczne już niedługo"
                        coverUrl="http://localhost:1337/uploads/01893a9429f7588db8058ecb1439bb46_bdbca91336.webp"
                        tag="Cyberbezpieczeństwo"
                    />
                    <PinnedNewsItem
                        href="/raporty/sprawozdania"
                        title="Nowe rozwiązania informatyczne już niedługo"
                        coverUrl="http://localhost:1337/uploads/01893a9429f7588db8058ecb1439bb46_bdbca91336.webp"
                        tag="Cyberbezpieczeństwo"
                    />
                    <PinnedNewsItem
                        href="/raporty/sprawozdania"
                        title="Nowe rozwiązania informatyczne już niedługo"
                        coverUrl="http://localhost:1337/uploads/01893a9429f7588db8058ecb1439bb46_bdbca91336.webp"
                        tag="Cyberbezpieczeństwo"
                    />
                    <PinnedNewsItem
                        href="/raporty/sprawozdania"
                        title="Nowe rozwiązania informatyczne już niedługo"
                        coverUrl="http://localhost:1337/uploads/01893a9429f7588db8058ecb1439bb46_bdbca91336.webp"
                        tag="Cyberbezpieczeństwo"
                    />
                    <PinnedNewsItem
                        href="/raporty/sprawozdania"
                        title="Nowe rozwiązania informatyczne już niedługo"
                        coverUrl="http://localhost:1337/uploads/01893a9429f7588db8058ecb1439bb46_bdbca91336.webp"
                        tag="Cyberbezpieczeństwo"
                    />
                    <PinnedNewsItem
                        href="/raporty/sprawozdania"
                        title="Nowe rozwiązania informatyczne już niedługo"
                        coverUrl="http://localhost:1337/uploads/01893a9429f7588db8058ecb1439bb46_bdbca91336.webp"
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
