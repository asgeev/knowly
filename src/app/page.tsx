import { NewsItem } from '../components/molecules/NewsItem'

export default function Home() {
    return (
        <div className="flex flex-col gap-20 md:gap-12 mt-10">
            <h1 className="text-2xl">Aktualności</h1>
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
