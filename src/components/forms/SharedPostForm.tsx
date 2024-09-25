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

import Tiptap from '@/components/molecules/Tiptap'
import { zodResolver } from '@hookform/resolvers/zod'
import { createSharedPostsManagementAction } from '@/actions/shared-posts-actions'
import { SharedPostSchema } from '@/lib/formSchemas'
import { TSharedPostSchema } from '@/lib/types'
import Dropzone from '@/components/molecules/Dropzone'

export default function SharedPostForm() {
    const form = useForm<TSharedPostSchema>({
        resolver: zodResolver(SharedPostSchema),
        defaultValues: {
            title: '',
            content: '',
            files: undefined,
        },
    })

    function onSubmit(values: TSharedPostSchema) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log('Form values on submit')

        console.log(values)
        // createSharedPostsManagementAction(values)
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
                    <Dropzone form={form} />

                    <Button type="submit">Opublikuj post</Button>
                </form>
            </Form>
        </FormProvider>
    )
}
