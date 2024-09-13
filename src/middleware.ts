import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
import { getUserMe } from '@/services/auth-service'

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
    const user = await getUserMe()

    if (
        request.nextUrl.pathname.startsWith('/udostepnione') &&
        user.ok === false
    ) {
        return NextResponse.redirect(new URL('/zaloguj', request.url))
    }

    return NextResponse.next()
}

export const config = {
    matcher: ['/udostepnione/:path'],
}
