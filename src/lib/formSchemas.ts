import { z } from 'zod'

export const SharedPostSchema = z.object({
    title: z.string().min(2, {
        message: 'Tytuł powienien zawierać conajmniej 2 znaki',
    }),
    content: z.string().min(0),
})
