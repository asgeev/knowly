import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import SharedPostForm, {
    TInitialData,
} from '@/features/post-shared/components/post-shared-form'
import { getPostSharedById } from '@/features/post-shared/actions/post-shared-actions'
import { TFile, TResponse } from '@/lib/types'
import { notFound } from 'next/navigation'

type TEditPostShared = {
    params: {
        id: string
    }
}

export default async function EditPostShared(props: TEditPostShared) {
    const { id } = props.params

    const idNumber = Number(id)

    if (isNaN(idNumber)) {
        notFound()
    }

    const { data }: TResponse = await getPostSharedById(idNumber)

    const postTitle = data?.data?.attributes?.title
    const postContent = data?.data?.attributes?.content
    const postFiles = data?.data?.attributes?.files?.data

    //Create TFile array for initial data
    const filesArr = postFiles.map((file: any) => {
        const newFile: TFile = {
            fileId: file?.id,
            fileUID: file.attributes.fileUID,
            fileName: file.attributes.originalname,
            size: file.attributes.size,
            isLoading: false,
        }
        return newFile
    })

    const initialData: TInitialData = {
        id: idNumber,
        title: postTitle,
        content: postContent,
        files: filesArr,
    }

    return (
        <div className="container mt-10">
            <Card className="mx-auto max-w-[700px]">
                <CardHeader>
                    <CardTitle>Edytuj udostępniony post</CardTitle>
                    <CardDescription>
                        Udostępniony post pojawi się tylko dla wybranej grupy
                        osób.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                    <SharedPostForm initialData={initialData} />
                </CardContent>
            </Card>
        </div>
    )
}
