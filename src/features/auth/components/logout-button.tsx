import { logoutAction } from '@/features/auth/actions/auth-actions'
import { LogOut } from 'lucide-react'

export function LogoutButton() {
    return (
        <form action={logoutAction}>
            <button type="submit" className="flex">
                <LogOut className="mr-2 h-4 w-4" />
                Wyloguj
            </button>
        </form>
    )
}
