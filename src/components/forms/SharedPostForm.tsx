'use client'

import { useForm } from 'react-hook-form'
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

export default function SharedPostForm() {
    const form = useForm({
        mode: 'onSubmit',
    })

    return (
        <Form {...form}>
            <form className="space-y-8">
                <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Tytuł</FormLabel>
                            <FormControl>
                                <Input
                                    required
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
                <Button type="submit">Opublikuj post</Button>
            </form>
        </Form>
    )
}
