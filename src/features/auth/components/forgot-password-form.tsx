'use client'

import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useFormState, useFormStatus } from 'react-dom'
import { ZodErrors } from '@/components/atoms/zod-errors'
import { StrapiErrors } from '@/components/atoms/strapi-errors'
import { forgotPasswordAction } from '@/features/auth/actions/auth-actions'
import { Loader2Icon, Terminal } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

const INITIAL_STATE = {
    ok: null,
    zodError: null,
    strapiErrors: null,
}

function SubmitButton() {
    const { pending } = useFormStatus()

    return (
        <Button type="submit" disabled={pending}>
            {pending && <Loader2Icon className="animate-spin" />}
            Wyślij link
        </Button>
    )
}

export default function ForgotPasswordForm() {
    const formRef = useRef<HTMLFormElement>(null)
    const [formState, formAction] = useFormState(
        forgotPasswordAction,
        INITIAL_STATE
    )

    useEffect(() => {
        if (formState.ok) {
            formRef?.current?.reset()
        }
    }, [formState.ok])

    return (
        <div>
            <div>
                <h1 className="text-2xl font-semibold tracking-tight">
                    Nie pamiętasz hasła?
                </h1>
                <p className="text-muted-foreground text-sm text-balance mt-1.5">
                    Podaj adres email, jeżeli konto istnieje w naszym systemie
                    wyślemy Ci link do zresetowania hasła.
                </p>
            </div>
            <div className="mt-8">
                <form action={formAction} ref={formRef}>
                    <div className="flex flex-col gap-4">
                        <Label htmlFor="email">Email</Label>
                        <div>
                            <Input
                                id="email"
                                type="text"
                                name="email"
                                placeholder="imie.nazwisko@nfz-lublin.pl"
                                required
                            />
                            <ZodErrors error={formState?.zodErrors?.email} />
                            <StrapiErrors error={formState?.strapiErrors} />
                        </div>
                        <SubmitButton />

                        <Button asChild variant={'link'} size={'sm'}>
                            <Link href={'/zaloguj'} className="underline">
                                Wróć do strony logowania
                            </Link>
                        </Button>
                    </div>
                </form>
            </div>
            <div className="mt-6">
                {formState.ok && (
                    <Alert>
                        <Terminal className="h-4 w-4" />
                        <AlertTitle>Email został wysłany</AlertTitle>
                        <AlertDescription>
                            Jeżeli konto istnieje to na podany adres email
                            został wysłany link do zresetowania hasła.
                        </AlertDescription>
                    </Alert>
                )}
            </div>
        </div>
    )
}
