'use client'

import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useFormState, useFormStatus } from 'react-dom'
import { ZodErrors } from '@/components/atoms/zod-errors'
import { StrapiErrors } from '@/components/atoms/strapi-errors'
import { signInAction } from '@/features/auth/actions/auth-actions'

const INITAL_STATE = {
    data: null,
    zodError: null,
    strapiErrors: null,
    message: null,
}

export default function SignInForm() {
    const [formState, formAction] = useFormState(signInAction, INITAL_STATE)
    const status = useFormStatus()
    return (
        <div>
            <div>
                <h1 className="text-2xl font-semibold tracking-tight">
                    Zaloguj się
                </h1>
                <p className="text-muted-foreground text-sm text-balance mt-1.5">
                    Wprowadź adres email/login oraz hasło{' '}
                </p>
            </div>
            <form action={formAction}>
                <div className="grid gap-6 mt-8">
                    <div className="grid gap-2">
                        <Label htmlFor="identifier">Email lub login</Label>
                        <Input
                            id="identifier"
                            type="text"
                            name="identifier"
                            required
                        />
                        <ZodErrors error={formState?.zodErrors?.identifier} />
                    </div>
                    <div className="grid gap-2">
                        <div className="flex items-center">
                            <Label htmlFor="password">Hasło</Label>
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
                    <StrapiErrors error={formState?.strapiErrors} />
                    <Button
                        type="submit"
                        className="w-full"
                        disabled={status.pending}
                    >
                        Zaloguj
                    </Button>
                </div>
                <div className="mt-6 text-center text-sm">
                    Nie masz konta?{' '}
                    <Link href="/zarejestruj" className="underline">
                        Zarejestruj się
                    </Link>
                </div>
            </form>
        </div>
    )
}
