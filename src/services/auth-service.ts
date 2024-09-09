import { getStrapiUrl } from '@/lib/utils'

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
