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
import {
    AlertDialog,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from '@/components/ui/alert-dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useFormState, useFormStatus } from 'react-dom'
import { ZodErrors } from '@/components/atoms/zod-errors'
import { StrapiErrors } from '@/components/atoms/strapi-errors'
import { resetPasswordAction } from '@/features/auth/actions/auth-actions'
import { Loader2Icon } from 'lucide-react'
import { useEffect, useRef } from 'react'

const INITIAL_STATE = {
    ok: null,
    zodErrors: null,
    strapiErrors: null,
}

function SubmitButton() {
    const { pending } = useFormStatus()

    return (
        <Button type="submit" disabled={pending}>
            {pending && <Loader2Icon className="animate-spin" />}
            Zresetuj hasło
        </Button>
    )
}

export default function ResetPasswordForm({ code }: { code: string }) {
    const formRef = useRef<HTMLFormElement>(null)
    const [formState, formAction] = useFormState(
        resetPasswordAction.bind(null, code),
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
                    Zresetuj hasło
                </h1>
                <p className="text-muted-foreground text-sm text-balance mt-1.5">
                    Podaj nowe hasło do swojego konta.
                </p>
                <form action={formAction} ref={formRef}>
                    <div className="flex flex-col gap-6 mt-8">
                        <div className="grid gap-2">
                            <Label htmlFor="password">Nowe Hasło *</Label>
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
                                    Powtórz nowe hasło *
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
                        <Button asChild variant={'link'} size={'sm'}>
                            <Link href={'/zaloguj'} className="underline">
                                Wróć do strony logowania
                            </Link>
                        </Button>
                    </div>
                </form>
            </div>

            <AlertDialog open={formState.ok}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>
                            Hasło zostało zmienione!
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                            Twoje hasło zostało zmienione, teraz, możesz
                            zalogować się do swojego konta nowym hasłem.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <Button asChild>
                            <Link href="/zaloguj" replace>
                                Zaloguj się
                            </Link>
                        </Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    )
}
