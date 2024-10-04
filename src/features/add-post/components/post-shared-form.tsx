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
import { TSharedPostSchema } from '@/lib/types'
import Dropzone from '@/components/molecules/dropzone'
import { uploadFileShared } from '@/actions/client/file-shared-actions'
import { addPostSharedAction } from '@/features/add-post/actions/add-post-actions'
import { useState } from 'react'

export default function SharedPostForm() {
    const [files, setFiles] = useState<Array<File>>([])

    const form = useForm<TSharedPostSchema>({
        resolver: zodResolver(SharedPostSchema),
        defaultValues: {
            title: '',
            content: '',
            files: undefined,
        },
    })

    async function onSubmit(values: TSharedPostSchema) {
        let uploadedFiles = []
        // 1. Upload files from client to external service and add files item to strapi by server action
        if (values.files.length) {
            uploadedFiles = await Promise.all(
                values.files?.map((file: File) => {
                    return uploadFileShared(file)
                })
            )
        }

        console.log(uploadedFiles)
        //Get id of created files
        const getFilesIdArray = () => {
            let idsArray: Array<number> = []
            uploadedFiles.map(({ file }) => {
                idsArray.push(file?.data?.id)
            })
            return idsArray
        }
        const valuesWithUploadedFiles = {
            ...values,
            files: getFilesIdArray(),
        }
        console.log(valuesWithUploadedFiles)
        // 3. Create shared post in strapi by server action
        const response = await addPostSharedAction(valuesWithUploadedFiles)
        //Reset form
        if (response) {
            console.log('Shared post created!')
            form.reset()
            setFiles([])
        }
    }

    return (
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
                                    <Input placeholder="shadcn" {...field} />
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
                    <Dropzone form={form} setFiles={setFiles} />

                    <ul className="space-y-2">
                        {files?.map((file: File) => {
                            return <li key={file.name}>{file.name}</li>
                        })}
                    </ul>

                    <Button type="submit">Opublikuj post</Button>
                </form>
            </Form>
        </FormProvider>
    )
}
