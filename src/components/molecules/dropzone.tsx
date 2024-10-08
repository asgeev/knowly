import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { uploadFile } from '@/actions/server/file-shared-actions'
import { TFile } from '@/lib/types'
import { Upload } from 'lucide-react'

type TDropzone = {
    setFiles: React.Dispatch<React.SetStateAction<Array<TFile>>>
}

export default function DropzoneTest(props: TDropzone) {
    const { setFiles } = props

    const updateFileState = (data: TFile) => {
        setFiles((prevFile: Array<TFile>) =>
            prevFile.map((item: TFile) => {
                if (item.fileName === data?.fileName) {
                    return { ...data }
                } else {
                    return item
                }
            })
        )
    }

    const onDrop = useCallback(
        (acceptedFiles: Array<File>) => {
            acceptedFiles.forEach(async (file: File) => {
                if (acceptedFiles?.length) {
                    //Set files state to upload
                    setFiles((prevFiles: Array<TFile>) => [
                        ...prevFiles,
                        {
                            fileId: undefined,
                            fileName: file.name,
                            isLoading: true,
                        },
                    ])

                    //Create new form and update file
                    const form = new FormData()

                    form.append('file', file)

                    const response = await uploadFile(form)

                    const uploadedFile: TFile = {
                        fileId: response?.data?.id,
                        fileUID: response?.data?.attributes?.fileUID,
                        fileName: response?.data?.attributes?.originalFileName,
                        size: response?.data?.attributes?.fileSize,
                        isLoading: false,
                    }

                    //Update file state after upload
                    updateFileState(uploadedFile)
                }
            })
        },
        [setFiles]
    )
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
    })

    return (
        <div
            {...getRootProps({
                className:
                    'border border-border min-h-52 rounded-lg text-sm flex flex-col gap-6 justify-center items-center',
            })}
        >
            <Upload size={32} />
            <input {...getInputProps()} />
            {isDragActive ? (
                <p>Upuść pliki tutaj...</p>
            ) : (
                <div className="text-center space-y-2">
                    <p>
                        Przeciągnij i upuść pliki tutaj, lub{' '}
                        <span className="underline cursor-pointer">
                            kliknij aby wybrać
                        </span>
                    </p>
                    <p className="text-muted-foreground">
                        Maksymalny rozmiar pliku: 50 MB
                    </p>
                </div>
            )}
        </div>
    )
}
