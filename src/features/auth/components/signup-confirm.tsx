import {
    AlertDialog,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from '@/components/ui/alert-dialog'
import { ArrowRight, CircleCheck, Loader, User } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function SignUpConfirm({
    open,
}: {
    open?: boolean | undefined
}) {
    return (
        <AlertDialog open={open}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>
                        <div className="flex gap-2 items-center">
                            <div className="border border-border p-2 rounded-lg">
                                <User />
                            </div>
                            Konto zostało utworzone!
                        </div>
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                        Na wskazany adres email wysłaliśmy wiadomość z linkiem
                        do aktywacji konta. Postępuj zgodnie z instrukcją podaną
                        w wiadomości, aby ukończyć tworzenie konta!
                    </AlertDialogDescription>
                    <div className="flex flex-col gap-4 justify-between py-4 text-left">
                        <div className="flex gap-6 items-center">
                            <CircleCheck />
                            <div className="text-sm flex gap-2">
                                <div>
                                    <p className="font-semibold">
                                        Rejestracja konta
                                    </p>
                                    <p className="text-muted-foreground">
                                        Twoje konto zostało utworzone
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-6 items-center opacity-50">
                            <Loader />
                            <div className="text-muted-foreground text-sm flex gap-2 ">
                                <div>
                                    <p className="font-bold">
                                        Weryfikacja adresu email
                                    </p>
                                    <p className="">
                                        Potwierdź swój adres email
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <Button asChild>
                        <Link href="/" replace>
                            Przejdź do strony głównej <ArrowRight />
                        </Link>
                    </Button>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}
