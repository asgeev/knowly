'use client'

import { uploadFileService } from '@/services/upload-file-service'
import { createSharedFileEntryService } from '@/services/shared-file-service'
import { TSharedFile } from '@/lib/types'

export const uploadSharedFileClientAction = async (file: File) => {
    try {
        //Upload file to external private file service
        const uploadResponse: any = await uploadFileService(file)

        const fileData: TSharedFile = uploadResponse?.file

        //If upload file success create entry in Strapi
        if (uploadResponse) {
            const saveResponse = await createSharedFileEntryService(fileData)

            if (saveResponse.error) {
                console.log(
                    `Błąd podczas wysyłania pliku! ${saveResponse.error}`
                )
                return
            }

            return {
                message: 'File uploaded and created in strapi!',
                file: saveResponse,
            }
        }

        //If upload file error show toast
    } catch (err) {
        console.error(`Wystąpił błąd podczas wysyłania pliku ${file.name}`)
        console.log('Upload file client action')
        console.log(err)
    }
}
