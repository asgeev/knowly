import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { useFieldArray, UseFormReturn } from 'react-hook-form'
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'
import { TSharedPostSchema } from '@/lib/types'

type TDropzone = {
    form: UseFormReturn<TSharedPostSchema>
    setFiles: React.Dispatch<React.SetStateAction<Array<File>>>
}

export default function Dropzone(props: TDropzone) {
    const { form, setFiles } = props
    const { append } = useFieldArray({
        name: 'files',
        control: form.control,
    })

    const onDrop = useCallback(
        async (acceptedFiles: Array<File>) => {
            console.log(acceptedFiles)
            if (acceptedFiles?.length) {
                setFiles((previousFiles: Array<File>) => [
                    ...previousFiles,
                    ...acceptedFiles,
                ])
                append(acceptedFiles.map((file) => ({ value: file })))
                await form.trigger('files')
            }
        },
        [append, form, setFiles]
    )

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
    })
    const filesRef = form.register('files')
    return (
        <>
            <FormField
                control={form.control}
                name="files"
                render={() => {
                    return (
                        <FormItem>
                            <FormLabel>Tytuł</FormLabel>
                            <FormControl>
                                <div className="w-full h-52 flex items-center justify-center border border-border">
                                    <div {...getRootProps()}>
                                        <input
                                            {...getInputProps()}
                                            id="files"
                                            {...filesRef}
                                        />
                                        {isDragActive ? (
                                            <p>Upuść pliki tutaj...</p>
                                        ) : (
                                            <p>
                                                Przeciągnij i upuść pliki lub
                                                kliknij, żeby wybrać pliki
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )
                }}
            />
        </>
    )
}
