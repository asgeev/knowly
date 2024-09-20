import { z } from 'zod'
import { SharedPostSchema } from '@/lib/formSchemas'

export type TSharedPostSchema = z.infer<typeof SharedPostSchema>
