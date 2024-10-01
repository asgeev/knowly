import { z } from 'zod'
import { SharedPostSchema } from '@/lib/formSchemas'

export type TSharedPostSchema = z.infer<typeof SharedPostSchema>

export type TSharedFile = {
    fileUID: string
    originalFileName: string
    fileNameWithExt: string
    fileMime: string
    fileSize: number
    patch: string
    uploadDate: Date
}
