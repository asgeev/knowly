import { Card } from './_components/Card'

export default function Docs() {
    return (
        <article className="prose max-w-none lg:prose-lg prose-img:rounded-xl dark:prose-invert prose-gray lg:mt-4">
            <div>
                <h1>Wprowadzenie</h1>
                <h2>Czym jest baza wiedzy w Knowly ❓</h2>
                <p>
                    Baza wiedzy zapewnia dostęp do jednolitych danych
                    dotyczących wykonywanych zadań. Jej zadaniem jest zebranie
                    procedur w jedno miejsce i utworzenie tzw. "single source of
                    truth". Dzięki temu podejściu każdy z pracowników będzie
                    miał dostęp do szybkiego wyszukania danego zagadnienia i
                    wykonanie zadania według dokumentacji. Ma to zmniejszyć
                    ilość pomyłek które występują przy danym zadaniu.
                </p>
                <p>
                    Całość podzielona jest na wydziały, daje to możliwość
                    pogrupowania dokumentacji na konkretne grupy. Istnieje
                    również możliwość utworzenia grup tematycznych w dany
                    wydziale w których będą znajdowały się strony z konkretnymi
                    opsami zadań.
                </p>
                <h2>Inne zastosowania 🧩</h2>
                <p>
                    Baza wiedzy Knowly może być również wykorzystywana jako
                    zródło wiedzy dotyczącej całego oddziału. Przykładem mogą
                    być konkretne instrukcje składania wniosków do działu HR,
                    postępowanie z delegacjami (...coś czego nigdy nie
                    pamiętam), postępowanie w przypadku zgubienia karty do
                    drzwi, instrukcja czynności do wykonania dla nowych
                    pracowników itp. itd..
                </p>
                <h2>Co zyskasz 💲</h2>
                <div className="grid grid-cols-12 gap-4 not-prose">
                    <Card
                        title={'Szybkość'}
                        subtitle={'Szybsze wyszukiwanie dzięki wyszukiwarce'}
                        icon={'bolt'}
                    />
                    <Card
                        title="Jednolitość"
                        subtitle="Treść ustalana wspólnie"
                        icon={'verified'}
                    />

                    <Card
                        title={'Dostępność'}
                        subtitle={'Treść dostępna dla każdego użytkownika'}
                        icon={'key'}
                    />
                    <Card
                        title={'Oszczędność'}
                        subtitle={
                            'Zmniejszenie czasu na poszukiwanie rozwiązania'
                        }
                        icon={'acute'}
                    />
                    <Card
                        title={'Jakość'}
                        subtitle={'Zwiększenie jakości wykonywanych zadań'}
                        icon={'show_chart'}
                    />
                    <Card
                        title={'Komfort'}
                        subtitle={'Wszystkie sprawy w jednym miejscu'}
                        icon={'hub'}
                    />
                </div>
                <h2>Dodawanie treści 📄</h2>
                <p>
                    Jeżeli chciałbyś pomóc rozwinąć bazę wiedzy o dodatkowe
                    zagadnienia, zapraszamy Cię do kontaktu!
                </p>
                <div className="flex gap-5 items-center not-prose pt-2">
                    <span className="material-symbols-outlined">mail</span>
                    <p>adam.szymanski@nfz-lublin.pl</p>
                </div>
                <div className="flex gap-5 items-center not-prose pt-2">
                    <span className="material-symbols-outlined">phone</span>
                    <p>3964</p>
                </div>
                <p>
                    Masz już konto i chcesz dodać więcej treści naciśnij
                    przycisk "Dodaj dokumentację" po prawej stronie
                </p>
                <h2>Rozwój 🚀</h2>
                <p>
                    Baza wiedzy w Knowly ma bardzo duży potencjał który chcemy
                    wykorzystać. Na bieżąco dodajemy nowości i staramy się
                    unowocześniać istniejące elementy. Twoje pomysły dotyczące
                    rozwoju są bardzo mile widziane, dlatego zachęcamy Cię do
                    kontaktu z naszą ekipą.
                </p>
                <p>
                    Zaproponuj swoją wizję i stań się członkiem zespołu Knowly!
                </p>
            </div>
        </article>
    )
}
