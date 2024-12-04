import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { uploadFile } from '@/features/post-shared/actions/file-shared-actions'
import { TFile, TResponse } from '@/lib/types'
import { Upload } from 'lucide-react'
import { toast } from 'sonner'
import File from '@/components/atoms/file'
import slugify from 'slugify'

type TDropzone = {
    setFiles: React.Dispatch<React.SetStateAction<Array<TFile>>>
    files: Array<TFile>
}

const acceptFiles = {
    'image/png': [],
    'image/jpeg': [],
    'image/jpg': [],
    'image/webp': [],
    'image/gif': [],
    'text/csv': [],
    'application/msword': [],
    'application/vnd.ms-excel': [],
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
        [],
    'application/pdf': [],
    'application/vnd.ms-powerpoint': [],
    'application/vnd.openxmlformats-officedocument.presentationml.presentation':
        [],
    'application/rtf': [],
    'application/xml': [],
    'application/vnd.rar': [],
    'application/zip': [],
    'application/x-7z-compressed': [],
    'text/plain': [],
}

export default function DropzoneTest(props: TDropzone) {
    const { setFiles, files } = props

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

    const deleteFileState = (name: string) => {
        setFiles((files) =>
            files.filter((element) => element.fileName !== name)
        )
    }

    function haveSameNameValidator(file: File) {
        const hasSameName = files.find((item: TFile) => {
            //Item.fileName in state is slugified. When comparing item.fileName to file.name return false so file.name must be slugiefied too to return true.
            return item.fileName === slugify(file.name)
        })?.fileName

        if (hasSameName) {
            toast.error('Plik już istnieje!', {
                description: 'Plik o tej samej nazwie już istnieje',
            })

            return {
                code: 'file-exists',
                message: `Plik o takiej nazwie już istnieje!`,
            }
        }

        return null
    }

    const onDrop = useCallback(
        (acceptedFiles: Array<File>) => {
            acceptedFiles.forEach(async (file: File) => {
                if (acceptedFiles?.length) {
                    const fileNameSlug = slugify(file.name, {
                        locale: 'pl',
                    })

                    try {
                        //Set files state to upload
                        setFiles((prevFiles: Array<TFile>) => [
                            ...prevFiles,
                            {
                                fileId: undefined,
                                fileName: fileNameSlug,
                                isLoading: true,
                            },
                        ])

                        // //Create new form and update file
                        const form = new FormData()

                        form.append('file', file, fileNameSlug)

                        const response: TResponse = await uploadFile(form)

                        if (response?.error) {
                            deleteFileState(fileNameSlug)
                            return toast.error('Nie udało się wysłać pliku!', {
                                description: response?.error?.message,
                            })
                        }

                        const uploadedFile: TFile = {
                            fileId: response?.data?.id,
                            fileUID: response?.data?.attributes?.fileUID,
                            fileName: response?.data?.attributes?.originalname,
                            size: response?.data?.attributes?.size,
                            isLoading: false,
                        }

                        //Update file state after upload
                        updateFileState(uploadedFile)

                        toast.success('Plik został przesłany!')
                    } catch (e: any) {
                        console.log(e)
                        //Remove file from state
                        deleteFileState(fileNameSlug)
                        toast.error('Nie udało się wysłać pliku!', {
                            description: 'Spróbuj ponownie później...',
                        })
                    }
                }
            })
        },
        [setFiles]
    )

    const { getRootProps, getInputProps, isDragActive, fileRejections } =
        useDropzone({
            accept: acceptFiles,
            maxSize: 1024 * 1000 * 50,
            onDrop,
            validator: haveSameNameValidator,
        })

    const fileRejectionItems = fileRejections.map(({ file, errors }, index) => (
        <div key={index}>
            <File name={file.name} />
            <div className="text-danger text-sm ml-4">
                <p>
                    Plik <span>{file.name}</span> nie może zostać przesłany z
                    powodu błędów: <br />
                </p>
                {errors.map((e) => (
                    <p key={e.code}>{e.message}</p>
                ))}
            </div>
        </div>
    ))

    return (
        <>
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
            {fileRejectionItems}
        </>
    )
}
