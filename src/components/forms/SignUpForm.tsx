'use client'

import Link from 'next/link'

import { Button } from '@/components/ui/button'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { signUpAction } from '@/actions/auth-actions'
import { useFormState, useFormStatus } from 'react-dom'
import { ZodErrors } from '@/components/atoms/ZodErrors'
import { StrapiErrors } from '@/components/atoms/StrapiErrors'

const INITAL_STATE = {
    data: null,
    zodErrors: null,
    message: null,
}

export default function SignUpForm() {
    const [formState, formAction] = useFormState(signUpAction, INITAL_STATE)
    const status = useFormStatus()

    console.log(formState, 'client')
    return (
        <form action={formAction}>
            <Card className="mx-auto max-w-sm">
                <CardHeader>
                    <CardTitle className="text-2xl">Rejestracja</CardTitle>
                    <CardDescription>
                        Zarejestruj się podając nazwę użytkownika, adres email
                        oraz hasło!
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="username">Nazwa użytkownika</Label>
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
                            <Label htmlFor="email">Email</Label>
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
                                <Label htmlFor="password">Hasło</Label>
                                <Link
                                    href="#"
                                    className="ml-auto inline-block text-sm underline"
                                >
                                    Zapomniałeś hasła?
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
                        <Button
                            type="submit"
                            className="w-full"
                            disabled={status.pending}
                        >
                            Zarejestruj
                        </Button>
                        <StrapiErrors error={formState?.strapiErrors} />
                    </div>
                    <div className="mt-4 text-center text-sm">
                        Masz już konto?{' '}
                        <Link href="/zaloguj" className="underline">
                            Zaloguj się
                        </Link>
                    </div>
                </CardContent>
            </Card>
        </form>
    )
}
