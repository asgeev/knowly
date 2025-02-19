'use client'

import { FormProvider, useForm } from 'react-hook-form'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

import Tiptap from '@/components/molecules/tiptap'
import { zodResolver } from '@hookform/resolvers/zod'
import { SharedPostSchema } from '@/lib/formSchemas'
import { TFile, TResponse, TSharedPostSchema } from '@/lib/types'
import { addPostSharedAction } from '@/features/add-post/actions/add-post-actions'
import { useEffect, useState } from 'react'
import Dropzone from '@/components/molecules/dropzone'
import File from '@/components/atoms/file'
import { toast } from 'sonner'
import { updatePostShared } from '@/features/post-shared/actions/post-shared-actions'
import { useWarnIfUnsavedChanges } from '@/hooks/useWarnIfUnsavedChanges'
import DownloadFileButton from './download-file-button'
import DeleteFileButton from './delete-file-button'
import { formatBytes } from '@/lib/utils'

export interface TInitialData extends TSharedPostSchema {
    id: number
}

export default function SharedPostForm({
    initialData,
}: {
    initialData?: TInitialData
}) {
    const [files, setFiles] = useState<Array<TFile>>(initialData?.files ?? [])

    const form = useForm<TSharedPostSchema>({
        resolver: zodResolver(SharedPostSchema),
        defaultValues: {
            title: initialData?.title ?? '',
            content: initialData?.content ?? '',
            files: [],
        },
    })

    //Check if files change
    useEffect(() => {
        if (initialData) {
            if (files.length != initialData?.files?.length) {
                form.setValue('files', '', { shouldDirty: true })
            }
        }
    }, [files, form, initialData, initialData?.files?.length])

    //Warn if exiting page
    useWarnIfUnsavedChanges(form.formState.isDirty)

    async function onSubmit(values: TSharedPostSchema) {
        const filesArr = files.map((file) => {
            return file.fileId
        })

        const valuesWithUploadedFiles = {
            ...values,
            files: filesArr,
        }

        try {
            let response: TResponse

            //If form has initial data update post shared otherwise create new post shared
            if (initialData) {
                response = await updatePostShared(
                    initialData.id,
                    valuesWithUploadedFiles
                )
            } else {
                response = await addPostSharedAction(valuesWithUploadedFiles)
            }

            if (response?.error) {
                toast.error('Nie udało się utworzyć posta', {
                    description: response?.error?.message,
                })
            }

            if (response?.ok) {
                if (!initialData) {
                    //Remove files
                    setFiles([])
                }

                form.reset()

                toast.success('Udało się!', {
                    description: 'Twój post został zapisany!',
                })
            }
        } catch (e) {
            toast.error('Coś poszło nie tak!', {
                description:
                    'Twój post nie może być zapisany, spróbuj ponownie później!',
            })
        }
    }

    return (
        <>
            <FormProvider {...form}>
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-8"
                    >
                        <FormField
                            control={form.control}
                            name="title"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Tytuł</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Wpisz swój tytuł"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="content"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Treść</FormLabel>
                                    <FormControl>
                                        <Tiptap
                                            onChange={field.onChange}
                                            content={field.value}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormItem>
                            <FormLabel>Pliki</FormLabel>
                            <Dropzone setFiles={setFiles} files={files} />
                            <FormMessage />
                        </FormItem>
                    </form>
                </Form>
            </FormProvider>
            <div className="space-y-2 pt-2">
                {files?.map((file: TFile, index) => {
                    const { fileId, fileUID, fileName, size, isLoading } = file

                    const fileSize = size ? formatBytes(size) : null

                    return (
                        <File
                            key={index}
                            name={fileName}
                            size={fileSize?.toString()}
                            isLoading={isLoading}
                        >
                            {fileUID && (
                                <DownloadFileButton
                                    fileUID={Number(fileUID)}
                                    fileName={fileName}
                                />
                            )}
                            {fileId && fileUID && (
                                <DeleteFileButton
                                    fileId={fileId}
                                    fileUID={fileUID}
                                    setFiles={setFiles}
                                />
                            )}
                        </File>
                    )
                })}
            </div>
            <div className="pt-8">
                <Button
                    disabled={!form.formState.isDirty}
                    onClick={form.handleSubmit(onSubmit)}
                >
                    Zapisz
                </Button>
            </div>
        </>
    )
}
