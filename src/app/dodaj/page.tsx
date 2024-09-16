import AddPost from '@/components/organisms/AddPost'

export default function AddPostPage() {
    return (
        <div className="flex flex-col gap-4 items-center">
            <div>
                <div className="mb-10">
                    <h1 className="text-2xl">Dodaj post!</h1>
                    <p className="text-muted-foreground">
                        Wypełnij wszystkie pola i udostępnij swój post...
                    </p>
                </div>

                <AddPost />
            </div>
        </div>
    )
}
