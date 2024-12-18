import ResetPasswordForm from '@/features/auth/components/reset-password-form'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { MessageCircleWarning } from 'lucide-react'
import Link from 'next/link'

export default function ResetPassword({
    searchParams,
}: {
    searchParams: { [key: string]: string | string[] | undefined }
}) {
    const code = searchParams.code as string

    return (
        <div className="container mt-10">
            {searchParams.code || searchParams.code?.length ? (
                <ResetPasswordForm code={code} />
            ) : (
                <Alert>
                    <MessageCircleWarning className="h-4 w-4" />
                    <AlertTitle>Link jest nieprawidłowy!</AlertTitle>
                    <AlertDescription>
                        Link do zresetowania hasła jest nieprawidłowy spróbuj go
                        ponownie wygenerować klikając{' '}
                        <Link
                            className="underline font-bold"
                            href="/forgot-password"
                            replace
                        >
                            tutaj
                        </Link>
                    </AlertDescription>
                </Alert>
            )}
        </div>
    )
}
