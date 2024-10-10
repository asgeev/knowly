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
import { deleteFileShared } from '@/actions/server/file-shared-actions'
import Dropzone from '@/components/molecules/dropzone'
import File from '@/components/atoms/file'
import { toast } from 'sonner'

export default function SharedPostForm() {
    const [files, setFiles] = useState<Array<TFile>>([])

    const form = useForm<TSharedPostSchema>({
        resolver: zodResolver(SharedPostSchema),
        defaultValues: {
            title: '',
            content: '',
            files: [],
        },
    })

    const deleteFile = async (id: number) => {
        try {
            const response = await deleteFileShared(id)
            if (response) {
                setFiles((files) => files.filter((file) => file.fileId !== id))
            }
        } catch (err) {
            toast.error('Nie udało się wysłać pliku', {
                description: 'Spróbuj ponownie później',
            })
        }
    }

    async function onSubmit(values: TSharedPostSchema) {
        const filesArr = files.map((file) => {
            return file.fileId
        })

        const valuesWithUploadedFiles = {
            ...values,
            files: filesArr,
        }

        try {
            const response: TResponse = await addPostSharedAction(
                valuesWithUploadedFiles
            )

            if (response?.error) {
                toast.error('Nie udało się utworzyć posta', {
                    description: response?.error?.message,
                })
            }

            if (response?.ok) {
                //Reset form
                form.reset()
                setFiles([])
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
                                            placeholder="shadcn"
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
                            <Dropzone setFiles={setFiles} />
                            <FormMessage />
                        </FormItem>
                    </form>
                </Form>
            </FormProvider>
            <div className="space-y-2 pt-2">
                {files?.map((file: TFile, index) => {
                    return (
                        <File
                            key={index}
                            fileData={file}
                            onDelete={deleteFile}
                        />
                    )
                })}
            </div>
            <div className="pt-8">
                <Button onClick={form.handleSubmit(onSubmit)}>
                    Opublikuj post
                </Button>
            </div>
        </>
    )
}
