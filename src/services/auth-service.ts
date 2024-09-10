import { getStrapiUrl } from '@/lib/utils'
import { getAuthToken } from '../lib/getAuthToken'

interface RegisterUserProps {
    username: string
    password: string
    email: string
}

interface LoginUserProps {
    identifier: string
    password: string
}

const baseUrl = getStrapiUrl()

export async function signUpService(userData: RegisterUserProps) {
    const url = new URL('/api/auth/local/register', baseUrl)

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
        console.error('Registration Service Error:', error)
    }
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