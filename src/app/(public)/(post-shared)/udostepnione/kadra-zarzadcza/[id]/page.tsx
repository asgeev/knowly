import { getPostSharedById } from '@/features/post-shared/actions/post-shared-actions'
import { notFound } from 'next/navigation'
import File from '@/components/atoms/file'
import Prose from '@/components/molecules/prose'
import { formatBytes } from '@/lib/utils'
import DownloadFileButton from '@/features/post-shared/components/download-file-button'

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
                                        originalname,
                                        size: fileSize,
                                        fileUID,
                                    } = file?.attributes

                                    const size = fileSize
                                        ? formatBytes(fileSize)
                                        : null
                                    return (
                                        <File
                                            key={index}
                                            secondary={true}
                                            name={originalname}
                                            size={size?.toString()}
                                        >
                                            <DownloadFileButton
                                                fileUID={fileUID}
                                                fileName={originalname}
                                            />
                                        </File>
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
