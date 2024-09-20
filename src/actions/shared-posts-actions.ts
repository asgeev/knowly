'use server'

import { redirect } from 'next/navigation'
import {
    createSharedPostsManagementService,
    getSharedPostsManagementService,
} from '@/services/shared-post-service'
import { TSharedPostSchema } from '@/lib/types'
import { SharedPostSchema } from '@/lib/formSchemas'
import slugify from 'slugify'

export const getSharedPostsManagementAction = async () => {
    const response = await getSharedPostsManagementService()

    if (!response || !response?.ok) {
        throw new Error('Fetch error')
    }

    if (response?.status === 403) redirect('/403')

    return response.json()
}

export const createSharedPostsManagementAction = async (
    formData: TSharedPostSchema
) => {
    const validateFields = SharedPostSchema.safeParse(formData)
    console.log(validateFields)

    if (!validateFields.success) {
        throw new Error('Form data are invalid!')
    }

    const formDataWithSlug = {
        ...formData,
        slug: slugify(formData.title),
    }
    const response = await createSharedPostsManagementService(formDataWithSlug)

    console.log(response)

    // console.log(validateFields)
}
