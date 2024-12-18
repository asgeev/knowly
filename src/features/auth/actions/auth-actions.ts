'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import {
    forgotPasswordService,
    resetPasswordService,
    signInService,
    signUpService,
} from '@/features/auth/services/auth-service'
import {
    schemaForgotPassword,
    schemaResetPassword,
    schemaSignIn,
    schemaSignUp,
} from '@/features/auth/libs/schemas'

const config = {
    maxAge: 60 * 60 * 24 * 2,
    path: '/',
    domain: process.env.HOST ?? 'localhost',
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
}

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

export async function signUpAction(prevState: any, formData: FormData) {
    const username = formData.get('username') as string
    const email = formData.get('email') as string
    const password = formData.get('password') as string
    const confirmPassword = formData.get('confirmPassword')

    const validateFields = schemaSignUp.safeParse({
        username,
        email,
        password,
        confirmPassword,
    })

    if (!validateFields.success) {
        return {
            ...prevState,
            zodErrors: validateFields.error.flatten().fieldErrors,
            message: 'Uzupełnij wszystkie pola!',
        }
    }

    const responseData = await signUpService(username, email, password)

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
