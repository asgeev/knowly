import { getUserMe } from '@/features/auth/actions/user-action'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
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
import { Settings, User } from 'lucide-react'
import { LogoutButton } from '@/features/auth/components/logout-button'

export default async function UserAvatar() {
    const user = await getUserMe()

    return (
        <div className="flex gap-4">
            {user.ok ? (
                <>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Avatar className="hover:cursor-pointer">
                                <AvatarFallback>
                                    <User size={20} />
                                </AvatarFallback>
                            </Avatar>
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
