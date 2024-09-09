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
import { signInAction } from '@/actions/auth-actions'
import { useFormState } from 'react-dom'

const INITAL_STATE = {
    data: null,
    zodError: null,
    message: null,
}

export default function SignInForm() {
    const [formState, formAction] = useFormState(signInAction, INITAL_STATE)
    return (
        <form action={formAction}>
            <Card className="mx-auto max-w-sm">
                <CardHeader>
                    <CardTitle className="text-2xl">Logowanie</CardTitle>
                    <CardDescription>
                        Zaloguj się podając swój email lub nazwę użytkownika
                        oraz hasło
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email lub login</Label>
                            <Input
                                id="email"
                                type="email"
                                name="email"
                                placeholder="imie.nazwisko@nfz-lublin.pl"
                                required
                            />
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
                        </div>
                        <Button type="submit" className="w-full">
                            Zaloguj
                        </Button>
                    </div>
                    <div className="mt-4 text-center text-sm">
                        Nie masz konta?{' '}
                        <Link href="/zarejestruj" className="underline">
                            Zarejestruj się
                        </Link>
                    </div>
                </CardContent>
            </Card>
        </form>
    )
}
