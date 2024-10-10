'use server'

import { addPostSharedService } from '@/features/add-post/services/add-post-service'
import { TResponse, TSharedPostSchema } from '@/lib/types'
import { SharedPostSchema } from '@/lib/formSchemas'
import slugify from 'slugify'

export const addPostSharedAction = async (values: TSharedPostSchema) => {
    const validateFields = SharedPostSchema.safeParse(values)

    if (!validateFields.success) {
        throw new Error('Form data are invalid!')
    }

    const formDataWithSlug = {
        ...values,
        slug: slugify(values.title),
    }

    try {
        const response = await addPostSharedService(formDataWithSlug)

        if (response.status === 403) {
            return {
                ok: false,
                data: null,
                error: {
                    message:
                        'Nie masz uprawnień do tworzenia udostepnionych postów',
                },
            } as TResponse
        }

        return {
            ok: true,
            data: null,
            error: null,
        } as TResponse
    } catch (err) {
        return {
            ok: false,
            data: null,
            error: {
                message:
                    'Wystąpił błąd podczas zapisywania posta spróbuj ponownie później',
            },
        } as TResponse
    }
}
