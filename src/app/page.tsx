import {
    NewsItemBackground,
    NewsItemRight,
    NewsItemTop,
} from '../components/molecules/NewsItem'
import { Section } from '../components/molecules/Section'

export default function Home() {
    return (
        <div>
            <Section>
                <h1 className="font-bold text-2xl md:text-4xl">Przypięte</h1>
                <div className="grid sm:grid-flow-col gap-4 overflow-auto">
                    <NewsItemBackground
                        href="/intranet/raporty"
                        title="Nowość! Strona raportów już istnieje!"
                        coverUrl="http://localhost:1337/uploads/4aca9e73dfe46dbfbc4af8ec53f54d25_179b51d211.webp"
                        tag="Informatyka"
                        className="h-40"
                    />
                    <NewsItemBackground
                        href="/raporty/sprawozdania"
                        title="Prace serwisowe dnia 10.02.2023"
                        coverUrl="http://localhost:1337/uploads/Main_2056eb9dfb.png"
                        tag="Oddział"
                    />
                    <NewsItemBackground
                        href="/raporty/sprawozdania"
                        title="Więcej pieniędzy dla NFZ!"
                        coverUrl="http://localhost:1337/uploads/37c11901d47e22cb61587cb493ab4872_1bff35cb16.webp"
                        tag="Ogólna"
                    />
                    <NewsItemBackground
                        href="/raporty/sprawozdania"
                        title="Nowe rozwiązania informatyczne już niedługo"
                        coverUrl="http://localhost:1337/uploads/01893a9429f7588db8058ecb1439bb46_bdbca91336.webp"
                        tag="Cyberbezpieczeństwo"
                    />
                    <NewsItemBackground
                        href="/raporty/sprawozdania"
                        title="Nowe rozwiązania informatyczne już niedługo"
                        coverUrl="http://localhost:1337/uploads/01893a9429f7588db8058ecb1439bb46_bdbca91336.webp"
                        tag="Cyberbezpieczeństwo"
                    />
                    <NewsItemBackground
                        href="/raporty/sprawozdania"
                        title="Nowe rozwiązania informatyczne już niedługo"
                        coverUrl="http://localhost:1337/uploads/01893a9429f7588db8058ecb1439bb46_bdbca91336.webp"
                        tag="Cyberbezpieczeństwo"
                    />
                    <NewsItemBackground
                        href="/raporty/sprawozdania"
                        title="Nowe rozwiązania informatyczne już niedługo"
                        coverUrl="http://localhost:1337/uploads/01893a9429f7588db8058ecb1439bb46_bdbca91336.webp"
                        tag="Cyberbezpieczeństwo"
                    />
                    <NewsItemBackground
                        href="/raporty/sprawozdania"
                        title="Nowe rozwiązania informatyczne już niedługo"
                        coverUrl="http://localhost:1337/uploads/01893a9429f7588db8058ecb1439bb46_bdbca91336.webp"
                        tag="Cyberbezpieczeństwo"
                    />
                    <NewsItemBackground
                        href="/raporty/sprawozdania"
                        title="Nowe rozwiązania informatyczne już niedługo"
                        coverUrl="http://localhost:1337/uploads/01893a9429f7588db8058ecb1439bb46_bdbca91336.webp"
                        tag="Cyberbezpieczeństwo"
                    />
                    <NewsItemBackground
                        href="/raporty/sprawozdania"
                        title="Nowe rozwiązania informatyczne już niedługo"
                        coverUrl="http://localhost:1337/uploads/01893a9429f7588db8058ecb1439bb46_bdbca91336.webp"
                        tag="Cyberbezpieczeństwo"
                    />
                </div>
            </Section>
            <Section>
                <h1 className="font-bold text-2xl md:text-4xl">Aktualności</h1>
                <div className="grid grid-cols-12 gap-5">
                    <div className="col-span-12 lg:col-span-6 grid grid-cols-12 gap-5">
                        <NewsItemBackground
                            title="asfas"
                            tag="fgnfgn"
                            href="/aktualnosci/asfas"
                            coverUrl="http://localhost:1337/uploads/4aca9e73dfe46dbfbc4af8ec53f54d25_179b51d211.webp"
                            className="col-span-12 sm:col-span-6 h-[350px]"
                        />
                        <NewsItemBackground
                            title="Dodatkowe pieniądze dla NFZ oraz dla innych jednostek współpracyjących"
                            href="/aktualnosci/asfas"
                            tag="Ogólna"
                            coverUrl="http://localhost:1337/uploads/Main_2056eb9dfb.png"
                            className="col-span-12 sm:col-span-6 h-[350px]"
                        />
                        <NewsItemRight
                            title="asfas"
                            tag="fgnfgn"
                            href="/aktualnosci/asfas"
                            coverUrl="http://localhost:1337/uploads/4aca9e73dfe46dbfbc4af8ec53f54d25_179b51d211.webp"
                            className="col-span-12"
                        />

                        <NewsItemRight
                            title="asfas"
                            tag="fgnfgn"
                            href="/aktualnosci/asfas"
                            coverUrl="http://localhost:1337/uploads/4aca9e73dfe46dbfbc4af8ec53f54d25_179b51d211.webp"
                            className="col-span-12"
                        />
                    </div>
                    <div className="col-span-12 lg:col-span-6 flex flex-col gap-5">
                        <NewsItemRight
                            title="Dodatkowe pieniądze dla NFZ oraz dla innych jednostek współpracyjących Dodatkowe pieniądze dla NFZ oraz dla innych jednostek współpracyjących Dodatkowe pieniądze dla NFZ oraz dla innych jednostek współpracyjących Dodatkowe pieniądze dla NFZ oraz dla innych jednostek współpracyjących"
                            tag="fgnfgn"
                            href="/aktualnosci/asfas"
                            coverUrl="http://localhost:1337/uploads/4aca9e73dfe46dbfbc4af8ec53f54d25_179b51d211.webp"
                            className="col-span-12"
                        />
                        <NewsItemRight
                            title="asfas"
                            href="/aktualnosci/asfas"
                            tag="fgnfgn"
                            coverUrl="http://localhost:1337/uploads/Main_2056eb9dfb.png"
                            className="col-span-12"
                        />
                        <NewsItemRight
                            title="asfas"
                            href="/aktualnosci/asfas"
                            tag="fgnfgn"
                            coverUrl="http://localhost:1337/uploads/01893a9429f7588db8058ecb1439bb46_bdbca91336.webp"
                            className="col-span-12"
                        />
                        <NewsItemRight
                            title="asfas"
                            href="/aktualnosci/asfas"
                            tag="fgnfgn"
                            coverUrl="http://localhost:1337/uploads/Main_2056eb9dfb.png"
                            className="col-span-12"
                        />
                    </div>
                </div>
            </Section>
            <Section>
                <h1 className="font-bold text-2xl md:text-4xl">Kategoria</h1>
                <div className="grid grid-cols-12 gap-5">
                    <div className="col-span-12 lg:col-span-6 grid grid-cols-12 gap-5">
                        <NewsItemBackground
                            title="asfas"
                            tag="fgnfgn"
                            href="/aktualnosci/asfas"
                            coverUrl="http://localhost:1337/uploads/4aca9e73dfe46dbfbc4af8ec53f54d25_179b51d211.webp"
                            className="col-span-12 sm:h-auto"
                        />
                        {/* <NewsItemBackground
                            title="Dodatkowe pieniądze dla NFZ oraz dla innych jednostek współpracyjących"
                            href="/aktualnosci/asfas"
                            tag="Ogólna"
                            coverUrl="http://localhost:1337/uploads/Main_2056eb9dfb.png"
                            className="col-span-6 sm:h-[350px]"
                        />
                        <NewsItemBackground
                            title="Dodatkowe pieniądze dla NFZ oraz dla innych jednostek współpracyjących"
                            href="/aktualnosci/asfas"
                            tag="Ogólna"
                            coverUrl="http://localhost:1337/uploads/Main_2056eb9dfb.png"
                            className="col-span-12 sm:h-[350px]"
                        /> */}
                    </div>
                    <div className="col-span-12 lg:col-span-6 flex flex-col gap-5">
                        <NewsItemRight
                            title="Dodatkowe pieniądze dla NFZ oraz dla innych jednostek współpracyjących Dodatkowe pieniądze dla NFZ oraz dla innych jednostek współpracyjących Dodatkowe pieniądze dla NFZ oraz dla innych jednostek współpracyjących Dodatkowe pieniądze dla NFZ oraz dla innych jednostek współpracyjących"
                            tag="fgnfgn"
                            href="/aktualnosci/asfas"
                            coverUrl="http://localhost:1337/uploads/4aca9e73dfe46dbfbc4af8ec53f54d25_179b51d211.webp"
                            className="col-span-12"
                        />
                        <NewsItemRight
                            title="asfas"
                            href="/aktualnosci/asfas"
                            tag="fgnfgn"
                            coverUrl="http://localhost:1337/uploads/Main_2056eb9dfb.png"
                            className="col-span-12"
                        />
                        <NewsItemRight
                            title="asfas"
                            href="/aktualnosci/asfas"
                            tag="fgnfgn"
                            coverUrl="http://localhost:1337/uploads/01893a9429f7588db8058ecb1439bb46_bdbca91336.webp"
                            className="col-span-12"
                        />
                        <NewsItemRight
                            title="asfas"
                            href="/aktualnosci/asfas"
                            tag="fgnfgn"
                            coverUrl="http://localhost:1337/uploads/Main_2056eb9dfb.png"
                            className="col-span-12"
                        />
                    </div>
                </div>
            </Section>
            <Section>
                <h1 className="font-bold text-2xl md:text-4xl">Ciekawostki</h1>

                <div className="grid grid-cols-12 gap-5">
                    <NewsItemTop
                        title="Dodatkowe pieniądze dla NFZ oraz dla innych jednostek współpracyjących Dodatkowe pieniądze dla NFZ oraz dla innych jednostek współpracyjących Dodatkowe pieniądze dla NFZ oraz dla innych jednostek współpracyjących Dodatkowe pieniądze dla NFZ oraz dla innych jednostek współpracyjących"
                        tag="fgnfgn"
                        href="/aktualnosci/asfas"
                        coverUrl="http://localhost:1337/uploads/01893a9429f7588db8058ecb1439bb46_bdbca91336.webp"
                        className="col-span-6 md:col-span-3"
                    />
                    <NewsItemTop
                        title="Dodatkowe pieniądze dla NFZ oraz dla innych jednostek współpracyjących Dodatkowe pieniądze dla NFZ oraz dla innych jednostek współpracyjących Dodatkowe pieniądze dla NFZ oraz dla innych jednostek współpracyjących Dodatkowe pieniądze dla NFZ oraz dla innych jednostek współpracyjących"
                        tag="fgnfgn"
                        href="/aktualnosci/asfas"
                        coverUrl="http://localhost:1337/uploads/01893a9429f7588db8058ecb1439bb46_bdbca91336.webp"
                        className="col-span-6 md:col-span-3"
                    />
                    <NewsItemTop
                        title="Dodatkowe pieniądze dla NFZ oraz dla innych jednostek współpracyjących Dodatkowe pieniądze dla NFZ oraz dla innych jednostek współpracyjących Dodatkowe pieniądze dla NFZ oraz dla innych jednostek współpracyjących Dodatkowe pieniądze dla NFZ oraz dla innych jednostek współpracyjących"
                        tag="fgnfgn"
                        href="/aktualnosci/asfas"
                        coverUrl="http://localhost:1337/uploads/01893a9429f7588db8058ecb1439bb46_bdbca91336.webp"
                        className="col-span-6 md:col-span-3"
                    />
                    <NewsItemTop
                        title="Dodatkowe pieniądze dla NFZ oraz dla innych jednostek współpracyjących Dodatkowe pieniądze dla NFZ oraz dla innych jednostek współpracyjących Dodatkowe pieniądze dla NFZ oraz dla innych jednostek współpracyjących Dodatkowe pieniądze dla NFZ oraz dla innych jednostek współpracyjących"
                        tag="fgnfgn"
                        href="/aktualnosci/asfas"
                        coverUrl="http://localhost:1337/uploads/01893a9429f7588db8058ecb1439bb46_bdbca91336.webp"
                        className="col-span-6 md:col-span-3"
                    />
                </div>
            </Section>
        </div>
    )
}
