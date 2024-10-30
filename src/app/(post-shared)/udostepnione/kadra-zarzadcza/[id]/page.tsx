import { getPostSharedById } from '@/features/post-shared/actions/post-shared-actions'
import { notFound } from 'next/navigation'
import File from '@/components/atoms/file'
import Prose from '@/components/molecules/prose'

export default async function PostSharedPage({
    params,
}: {
    params: { id: string }
}) {
    const idNumber = Number(params.id)

    if (isNaN(idNumber)) {
        notFound()
    }

    const post = await getPostSharedById(idNumber)

    const { title, content, files } = post?.data?.data?.attributes

    return (
        <div>
            <Prose title={title} htmlContent={content}>
                <div>
                    {files?.data.length ? (
                        <>
                            <h3 className="mb-2 text-lg font-semibold">
                                Pliki
                            </h3>
                            <div className="space-y-2">
                                {files?.data.map((file: any, index: number) => {
                                    const {
                                        originalFileName,
                                        fileUID,
                                        fileSize,
                                    } = file?.attributes
                                    return (
                                        <File
                                            key={index}
                                            secondary={true}
                                            fileData={{
                                                fileId: file.id,
                                                fileUID: fileUID,
                                                fileName: originalFileName,
                                                isLoading: false,
                                                size: 20000,
                                            }}
                                        />
                                    )
                                })}
                            </div>
                        </>
                    ) : null}
                </div>
            </Prose>
        </div>
    )
}
