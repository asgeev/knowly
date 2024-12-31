'use client'

import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { signUpAction } from '@/features/auth/actions/auth-actions'
import { useFormState, useFormStatus } from 'react-dom'
import { ZodErrors } from '@/components/atoms/zod-errors'
import { StrapiErrors } from '@/components/atoms/strapi-errors'
import { Loader2Icon } from 'lucide-react'
import { useEffect, useRef } from 'react'

import SignUpConfirm from './signup-confirm'

const INITIAL_STATE = {
    ok: false,
    zodErrors: null,
    strapiErrors: null,
    message: null,
}

function SubmitButton() {
    const { pending } = useFormStatus()

    return (
        <Button type="submit" className="w-full mt-6" disabled={pending}>
            {pending && <Loader2Icon className="animate-spin" />}
            Zarejestruj
        </Button>
    )
}

export default function SignUpForm() {
    const [formState, formAction] = useFormState(signUpAction, INITIAL_STATE)
    const formRef = useRef<HTMLFormElement>(null)

    useEffect(() => {
        if (formState.ok) {
            formRef?.current?.reset()
        }
    }, [formState.ok])

    return (
        <div>
            <div>
                <h1 className="text-2xl font-semibold tracking-tight">
                    Zarejestruj się
                </h1>
                <p className="text-muted-foreground text-sm text-balance mt-1.5">
                    Podaj nazwę użytkownika, adres email oraz hasło
                </p>
            </div>
            <form action={formAction} ref={formRef}>
                <div className="grid gap-6 mt-8">
                    <div className="grid gap-2">
                        <Label htmlFor="username">Login *</Label>
                        <Input
                            id="username"
                            type="text"
                            name="username"
                            placeholder="nazwa.użytkownika"
                            required
                        />
                        <ZodErrors error={formState?.zodErrors?.username} />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                            id="email"
                            type="email"
                            name="email"
                            placeholder="imie.nazwisko@nfz-lublin.pl"
                            required
                        />
                        <ZodErrors error={formState?.zodErrors?.email} />
                    </div>
                    <div className="grid gap-2">
                        <div className="flex items-center">
                            <Label htmlFor="password">Hasło *</Label>
                            <Link
                                href="/forgot-password"
                                className="ml-auto inline-block text-sm underline"
                            >
                                Nie pamiętasz hasła?
                            </Link>
                        </div>

                        <Input
                            id="password"
                            type="password"
                            name="password"
                            required
                        />
                        <ZodErrors error={formState?.zodErrors?.password} />
                    </div>
                    <div className="grid gap-2">
                        <div className="flex items-center">
                            <Label htmlFor="confirmPassword">
                                Powtórz hasło *
                            </Label>
                        </div>
                        <Input
                            id="confirmPassword"
                            type="password"
                            name="confirmPassword"
                            required
                        />
                        <ZodErrors
                            error={formState?.zodErrors?.confirmPassword}
                        />
                    </div>
                    <SubmitButton />
                    <StrapiErrors error={formState?.strapiErrors} />
                </div>
                <div className="text-danger my-2">
                    <p>{formState?.message}</p>
                </div>

                <div className="mt-4 text-center text-sm">
                    Masz już konto?{' '}
                    <Link href="/zaloguj" className="underline">
                        Zaloguj się
                    </Link>
                </div>
            </form>
            {/* @ts-ignore */}
            <SignUpConfirm open={formState.ok} />
        </div>
    )
}
