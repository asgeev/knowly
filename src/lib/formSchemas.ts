import { z } from 'zod'

const MAX_FILE_SIZE = 1024 * 1024 * 5 //5 MB

const ACCEPTED_IMAGE_MIME_TYPES = [
    'image/jpeg',
    'image/jpg',
    'image/png',
    'image/webp',
]

export const SharedPostSchema = z.object({
    title: z.string().min(2, {
        message: 'Tytuł powienien zawierać conajmniej 2 znaki',
    }),
    content: z.string().min(0),
    files: z.any().optional(),
})
