'use server'

import { redirect } from 'next/navigation'
import {
    addSharedPostService,
    getSharedPostsService,
} from '@/services/shared-post-service'
import { TSharedPostSchema } from '@/lib/types'
import { SharedPostSchema } from '@/lib/formSchemas'
import slugify from 'slugify'

export const getSharedPostsAction = async () => {
    const response = await getSharedPostsService()

    if (!response || !response?.ok) {
        throw new Error('Fetch error')
    }

    if (response?.status === 403) redirect('/403')

    return response.json()
}

export const addSharedPostAction = async (values: TSharedPostSchema) => {
    const validateFields = SharedPostSchema.safeParse(values)
    console.log(validateFields)

    if (!validateFields.success) {
        throw new Error('Form data are invalid!')
    }

    const formDataWithSlug = {
        ...values,
        slug: slugify(values.title),
    }
    const response = await addSharedPostService(formDataWithSlug)

    return response
}
