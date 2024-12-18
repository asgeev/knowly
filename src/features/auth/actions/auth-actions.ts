'use server'

import { z } from 'zod'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import {
    forgotPasswordService,
    resetPasswordService,
    signInService,
    signUpService,
} from '@/features/auth/services/auth-service'

const config = {
    maxAge: 60 * 60 * 24 * 2,
    path: '/',
    domain: process.env.HOST ?? 'localhost',
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
}

const schemaSignIn = z.object({
    identifier: z.string({ required_error: 'Podaj adres email' }).email(),
    password: z.string().min(8).max(100),
})

export async function signInAction(prevState: any, formData: FormData) {
    const validateFields = schemaSignIn.safeParse({
        identifier: formData.get('identifier'),
        password: formData.get('password'),
    })

    if (!validateFields.success) {
        return {
            ...prevState,
            zodErrors: validateFields.error.flatten().fieldErrors,
            message: 'Uzupełnij wszystkie pola!',
        }
    }

    const responseData = await signInService(validateFields?.data)

    if (!responseData) {
        return {
            ...prevState,
            strapiErrors: null,
            zodErrors: null,
            message: 'Oops! Wystąpił błąd. Prosimy spróbować ponownie później.',
        }
    }

    if (responseData.error) {
        return {
            ...prevState,
            strapiErrors: responseData.error,
            zodErrors: null,
            message:
                'Oops! Wystąpił błąd rejestracji. Prosimy spróbować ponownie później.',
        }
    }

    cookies().set('jwt', responseData.jwt, config)
    redirect('/')
}

const schemaSignUp = z
    .object({
        username: z.string().min(3).max(20),
        email: z
            .string({ required_error: 'Wprowadź adres email' })
            .email({ message: 'Nieprawidłowy adres email' }),
        password: z
            .string()
            .min(8, { message: 'Hasło musi zawierać conajmniej 8 znaków' })
            .max(100),
        confirmPassword: z
            .string()
            .min(8, { message: 'Hasło musi zawierać conajmniej 8 znaków' })
            .max(100),
    })
    .refine(
        (values) => {
            return values.password === values.confirmPassword
        },
        {
            message: 'Hasła nie pasują do siebie!',
            path: ['confirmPassword'],
        }
    )
export async function signUpAction(prevState: any, formData: FormData) {
    const validateFields = schemaSignUp.safeParse({
        username: formData.get('username'),
        email: formData.get('email'),
        password: formData.get('password'),
        confirmPassword: formData.get('confirmPassword'),
    })

    if (!validateFields.success) {
        return {
            ...prevState,
            zodErrors: validateFields.error.flatten().fieldErrors,
            message: 'Uzupełnij wszystkie pola!',
        }
    }

    const responseData = await signUpService(validateFields?.data)

    if (!responseData) {
        return {
            ...prevState,
            strapiErrors: null,
            zodErrors: null,
            message: 'Oops! Wystąpił błąd. Prosimy spróbować ponownie później.',
        }
    }

    if (responseData.error) {
        return {
            ...prevState,
            strapiErrors: responseData.error,
            zodErrors: null,
            message:
                'Oops! Wystąpił błąd rejestracji. Prosimy spróbować ponownie później.',
        }
    }

    cookies().set('jwt', responseData.jwt, config)
    redirect('/')
}

export async function logoutAction() {
    cookies().set('jwt', '', { ...config, maxAge: 0 })
    redirect('/')
}

export async function forgotPasswordAction(prevState: any, formData: FormData) {
    const email = formData.get('email') as string

    const schemaForgotPassword = z.object({
        email: z
            .string({ required_error: 'Podaj adres email' })
            .min(1, 'Email jest wymagany')
            .email({ message: 'Nieprawidłowy adres email' }),
    })

    const validateFields = schemaForgotPassword.safeParse({
        email: formData.get('email'),
    })

    if (!validateFields.success) {
        return {
            ...prevState,
            zodErrors: validateFields.error.flatten().fieldErrors,
        }
    }

    try {
        await forgotPasswordService(email)
        return {
            ok: true,
        }
    } catch (err) {
        console.log('Error')
        console.log(err)
        throw new Error(
            'Wystąpił problem podczas wysyłania mejla, spróbuj ponownie później!'
        )
    }
}

export async function resetPasswordAction(
    code: string,
    prevState: any,
    formData: FormData
) {
    const password = formData.get('password') as string
    const confirmPassword = formData.get('confirmPassword') as string

    const schemaResetPassword = z
        .object({
            password: z
                .string()
                .min(8, { message: 'Hasło musi zawierać co najmniej 8 znaków' })
                .max(100),
            confirmPassword: z
                .string()
                .min(8, { message: 'Hasło musi zawierać co najmniej 8 znaków' })
                .max(100),
        })
        .refine(
            (values) => {
                return values.password === values.confirmPassword
            },
            {
                message: 'Hasła nie pasują do siebie!',
                path: ['confirmPassword'],
            }
        )

    const validateFields = schemaResetPassword.safeParse({
        password: password,
        confirmPassword: confirmPassword,
    })

    if (!validateFields.success) {
        return {
            ...prevState,
            zodErrors: validateFields.error.flatten().fieldErrors,
        }
    }

    try {
        await resetPasswordService(password, confirmPassword, code)

        return {
            ok: true,
        }
    } catch (err) {
        console.log('Reset password error')
        console.error(err)
        throw new Error(
            'Kod do zresetowania hasła jest już nie aktualny lub wystapił błąd. Wygeneruj nowy link z kodem przechodząc do sekcji "Zapomniałeś hasła?"'
        )
    }
}
