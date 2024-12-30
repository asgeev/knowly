import { getStrapiUrl } from '@/lib/utils'
import { getAuthToken } from '@/lib/auth'
import { strapi } from '@/lib/axios'

interface LoginUserProps {
    identifier: string
    password: string
}

const baseUrl = getStrapiUrl()

export async function signUpService(
    username: string,
    email: string,
    password: string
) {
    if (!username || !email || !password) {
        throw new Error('Missing one of elements: username, email, password')
    }

    return strapi.post('/api/auth/local/register', {
        username,
        email,
        password,
    })
}

export async function signInService(userData: LoginUserProps) {
    const url = new URL('/api/auth/local', baseUrl)

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ...userData }),
            cache: 'no-cache',
        })

        return response.json()
    } catch (error) {
        console.error('Login Service Error:', error)
        throw error
    }
}

export async function getUserMe() {
    const baseUrl = getStrapiUrl()

    const url = new URL('/api/users/me', baseUrl)
    url.searchParams.append('populate', 'role')

    const authToken = await getAuthToken()
    if (!authToken) return { ok: false, data: null, error: null }

    try {
        const response = await fetch(url.href, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${authToken}`,
            },
            cache: 'no-cache',
        })
        const data = await response.json()
        if (data.error) return { ok: false, data: null, error: data.error }
        return { ok: true, data: data, error: null }
    } catch (error) {
        console.log(error)
        return { ok: false, data: null, error: error }
    }
}

export async function forgotPasswordService(email: string) {
    if (!email) {
        throw new Error('Email is required!')
    }

    return await strapi.post('/api/auth/forgot-password', {
        email: email, // user email
    })
}

export async function resetPasswordService(
    password: string,
    passwordConfirmation: string,
    code: string
) {
    if (!password) {
        throw new Error('New password is required!')
    }

    if (!passwordConfirmation) {
        throw new Error('New password confirmation is required!')
    }

    if (!code) {
        throw new Error('Reset code is required!')
    }

    return await strapi.post('/api/auth/reset-password', {
        code: code, // code contained in the reset link.
        password: password,
        passwordConfirmation: passwordConfirmation,
    })
}
