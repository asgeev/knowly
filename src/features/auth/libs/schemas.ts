import { z, ZodRawShape } from 'zod'

const email = z
    .string({ required_error: 'Podaj adres email' })
    .min(1, 'Email jest wymagany')
    .email({ message: 'Nieprawidłowy adres email' })

const passwordValidationSchema = z.object({
    password: z
        .string()
        .min(8, { message: 'Hasło musi zawierać conajmniej 8 znaków' })
        .max(100),
    confirmPassword: z
        .string()
        .min(8, { message: 'Hasło musi zawierać conajmniej 8 znaków' })
        .max(100),
})

export function refinePasswordValidationSchema(schema?: ZodRawShape) {
    return passwordValidationSchema
        .extend(schema ?? {})
        .refine((data) => data.password === data.confirmPassword, {
            message: 'Hasła nie pasują do siebie!',
            path: ['confirmPassword'],
        })
}

/****** All schemas ******/

//Schema for sign in form
export const schemaSignIn = z.object({
    identifier: z.string({ required_error: 'Podaj adres email' }).email(),
    password: z.string().min(1, { message: 'Hasło jest zbyt krótkie' }),
})

//Schema for sign up form
export const schemaSignUp = refinePasswordValidationSchema({
    username: z
        .string()
        .min(3, {
            message: 'Nazwa użytkownika powinna zawierać co najmniej 3 znaki',
        })
        .max(20, {
            message: 'Nazwa użytkownika może zawierać maksymalnie 20 znaków',
        }),
    email: email,
})

//Schema for forgot password form
export const schemaForgotPassword = z.object({
    email: email,
})

//Schema for reset password form
export const schemaResetPassword = refinePasswordValidationSchema()
