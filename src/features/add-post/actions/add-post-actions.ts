'use server'

import { addPostSharedService } from '@/features/add-post/services/add-post-service'
import { TSharedPostSchema } from '@/lib/types'
import { SharedPostSchema } from '@/lib/formSchemas'
import slugify from 'slugify'

export const addPostSharedAction = async (values: TSharedPostSchema) => {
    const validateFields = SharedPostSchema.safeParse(values)
    console.log(validateFields)

    if (!validateFields.success) {
        throw new Error('Form data are invalid!')
    }

    const formDataWithSlug = {
        ...values,
        slug: slugify(values.title),
    }
    const response = await addPostSharedService(formDataWithSlug)

    return response
}

// export const createSharedFileManagementAction = async (
//     fileData: TSharedFile
// ) => {
//     const response = await createSharedFileEntryService(fileData)

//     console.log(response?.json)
//     return response?.json()
// }
