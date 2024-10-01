'use server'

import { TSharedFile } from '@/lib/types'
import { createSharedFileEntryService } from '@/services/shared-file-service'

export const createSharedFileManagementAction = async (
    fileData: TSharedFile
) => {
    const response = await createSharedFileEntryService(fileData)

    console.log(response?.json)
    return response?.json()
}
