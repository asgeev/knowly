import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
import { getUserMe } from '@/features/auth/services/auth-service'
import { isAuthor, isViewer } from './lib/roles'

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
    const user = await getUserMe()
    const author = await isAuthor()
    const viewer = await isViewer()

    if (
        request.nextUrl.pathname.startsWith('/udostepnione') &&
        user.ok === false
    ) {
        return NextResponse.redirect(new URL('/zaloguj', request.url))
    }

    if (
        request.nextUrl.pathname.startsWith('/udostepnione/kadra-zarzadcza') &&
        !viewer &&
        !author
    ) {
        return NextResponse.redirect(new URL('/', request.url))
    }

    if (request.nextUrl.pathname.startsWith('/dodaj') && user.ok === false) {
        return NextResponse.redirect(new URL('/zaloguj', request.url))
    }

    return NextResponse.next()
}

export const config = {
    matcher: [
        '/udostepnione/:path',
        '/udostepnione/kadra-zarzadcza/:path',
        '/dodaj/:path',
    ],
}
