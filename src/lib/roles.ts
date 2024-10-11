import { getUserMe } from '@/features/auth/actions/user-action'

const roles = {
    authenticated: process.env.ROLE_AUTHENTICATED ?? 'authenticated',
    viewer: process.env.ROLE_VIEWER ?? 'viewer',
    author: process.env.ROLE_AUTHOR ?? 'author',
}

export const isAuthenticated = async () => {
    const user = await getUserMe()
    const userRole = user?.data?.role?.type

    if (!user || !user.ok) {
        return null
    }

    if (userRole === roles.authenticated) {
        return true
    } else {
        return false
    }
}

export const isViewer = async () => {
    const user = await getUserMe()
    const userRole = user?.data?.role?.type

    if (!user || !user.ok) {
        return null
    }

    if (userRole === roles.viewer) {
        return true
    } else {
        return false
    }
}

export const isAuthor = async () => {
    const user = await getUserMe()
    const userRole = user?.data?.role?.type

    if (!user || !user.ok) {
        return null
    }

    if (userRole === roles.author) {
        return true
    } else {
        return false
    }
}
