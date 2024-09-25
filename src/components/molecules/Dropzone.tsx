import { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { useFieldArray } from 'react-hook-form'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'

export default function Dropzone({ form }: { form: any }) {
    const [files, setFiles] = useState<Array<File>>([])

    const { fields, append } = useFieldArray({
        name: 'files',
        control: form.control,
    })

    const onDrop = useCallback(
        async (acceptedFiles: Array<File>) => {
            console.log(acceptedFiles)
            if (acceptedFiles?.length) {
                setFiles((previousFiles) => [
                    ...previousFiles,
                    ...acceptedFiles,
                ])
                append(acceptedFiles.map((file) => ({ value: file })))
                await form.trigger('files')
            }
        },
        [form]
    )

    const { acceptedFiles, getRootProps, getInputProps, isDragActive } =
        useDropzone({
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

            <ul className="space-y-2">
                {files?.map((file) => {
                    return <li key={file.name}>{file.name}</li>
                })}
            </ul>
        </>
    )
}
