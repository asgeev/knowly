'use server'

import { TSharedFile } from '@/lib/types'
import { fetchWithAuth } from '@/lib/fetchWithAuth'
import { uploadFileService } from '@/services/file-service'

export async function saveFileShared(fileData: TSharedFile) {
    const payload = {
        data: {
            ...fileData,
        },
    }

    const response = await fetchWithAuth(`/api/shared-files-management`, {
        method: 'POST',
        body: JSON.stringify(payload),
    })

    return response?.json()
}
