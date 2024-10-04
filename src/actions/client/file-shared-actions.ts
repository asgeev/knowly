'use client'

import { uploadFileService } from '@/services/file-service'
import { saveFileShared } from '@/actions/server/file-shared-actions'
import { TSharedFile } from '@/lib/types'
import { redirect } from 'next/navigation'

export const uploadFileShared = async (file: File) => {
    //Upload file to external private file service
    const uploadResponse: any = await uploadFileService(file)

    const fileData: TSharedFile = uploadResponse?.file

    //If upload file success create entry in Strapi
    if (uploadResponse) {
        const saveResponse = await saveFileShared(fileData)
        console.log(uploadResponse)

        console.log(saveResponse)

        if (saveResponse?.status === 403) redirect('/403')

        if (saveResponse.error) {
            console.log(`Błąd podczas wysyłania pliku! ${saveResponse.error}`)
            return
        }

        return {
            message: 'File uploaded and created in strapi!',
            file: saveResponse,
        }
    }
}
