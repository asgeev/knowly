'use server'

import { notFound, redirect } from 'next/navigation'
import {
    getPostSharedByIdService,
    getSharedPostsService,
    updatePostSharedService,
} from '@/features/post-shared/services/post-shared-service'
import { TSharedPostSchema } from '@/lib/types'
import { SharedPostSchema } from '@/lib/formSchemas'
import { revalidatePath } from 'next/cache'

export const getSharedPostsAction = async () => {
    const response = await getSharedPostsService()

    if (response?.status === 403) redirect('/403')

    return response?.json()
}

export const getPostSharedById = async (id: number) => {
    const response = await getPostSharedByIdService(id)

    if (!id) {
        throw new Error('You must pass post shared id!')
    }

    const data = await response?.json()

    if (response?.ok) {
        return { ok: true, data: data, error: null }
    } else {
        if (response?.status === 403) redirect('/error?status=403')

        if (response?.status === 404) notFound()

        //Other api errors
        throw new Error('Cannot fetch post shared!')
    }
}

export const updatePostShared = async (
    id: number,
    values: TSharedPostSchema
) => {
    const validateFields = SharedPostSchema.safeParse(values)

    if (!id && !values) {
        throw new Error('You must pass post shared id and payload!')
    }

    if (!validateFields.success) {
        throw new Error('Form data are invalid!')
    }

    const response = await updatePostSharedService(id, validateFields.data)

    if (response?.ok) {
        //After success update revalidate path
        revalidatePath(`/udostepnione`)
        return {
            ok: true,
            data: null,
            error: null,
        }
    } else {
        if (response?.status === 403) {
            return {
                ok: false,
                data: null,
                error: {
                    message:
                        'Nie masz uprawnień do tworzenia udostepnionych postów',
                },
            }
        }

        return {
            ok: false,
            data: null,
            error: {
                message:
                    'Wystąpił błąd podczas zapisywania posta spróbuj ponownie później',
            },
        }
    }
}
