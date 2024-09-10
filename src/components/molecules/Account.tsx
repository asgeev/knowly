import { getUserMe } from '@/services/auth-service'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Settings } from 'lucide-react'
import { LogoutButton } from '@/components/atoms/LogoutButton'

export default async function Account() {
    const user = await getUserMe()

    return (
        <div className="flex gap-4">
            {user.ok ? (
                <>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size={'icon'}>
                                <Avatar>
                                    <AvatarImage src="https://avatar.iran.liara.run/public" />
                                    <AvatarFallback></AvatarFallback>
                                </Avatar>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-52">
                            <DropdownMenuLabel>
                                {user?.data?.username}
                            </DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem disabled>
                                <Settings className="mr-2 h-4 w-4" />
                                Ustawienia
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem asChild>
                                <LogoutButton />
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <Button asChild>
                        <Link href={'/dodaj'}>Dodaj post</Link>
                    </Button>
                </>
            ) : (
                <Button asChild variant="outline">
                    <Link href={'/zaloguj'}>Zaloguj się</Link>
                </Button>
            )}
        </div>
    )
}
