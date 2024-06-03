'use client'
import { FC } from 'react'
import { usePathname, useSearchParams, useRouter } from 'next/navigation'
import { ChevronsRight, ChevronsLeft } from 'lucide-react'

interface PaginationProps {
    pageCount: number
}

interface PaginationArrowProps {
    direction: 'left' | 'right'
    href: string
    isDisabled: boolean
}

const PaginationArrow: FC<PaginationArrowProps> = ({
    direction,
    href,
    isDisabled,
}) => {
    const router = useRouter()
    const isLeft = direction === 'left'
    const disabledClassName = isDisabled
        ? 'text-textSecondary pointer-events-none'
        : ''

    return (
        <button
            onClick={() => router.push(href)}
            className={`hover:text-accent font-semibold ${disabledClassName}`}
            aria-disabled={isDisabled}
            disabled={isDisabled}
        >
            {isLeft ? (
                <div className="flex gap-2">
                    <ChevronsLeft />
                    <p>poprzednia</p>
                </div>
            ) : (
                <div className="flex gap-2 flex-row-reverse">
                    <ChevronsRight />
                    <p>następna</p>
                </div>
            )}
        </button>
    )
}

export function PaginationComponent({ pageCount }: Readonly<PaginationProps>) {
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const currentPage = Number(searchParams.get('page')) || 1

    const createPageURL = (pageNumber: number | string) => {
        const params = new URLSearchParams(searchParams)
        params.set('page', pageNumber.toString())
        return `${pathname}?${params.toString()}`
    }

    pageCount = pageCount <= 0 ? 1 : pageCount

    return (
        <div className="py-5">
            <div className="flex justify-between gap-2 items-center">
                <PaginationArrow
                    direction="left"
                    href={createPageURL(currentPage - 1)}
                    isDisabled={currentPage <= 1}
                />
                <div>
                    <p className="font-semibold text-textSecondary ">
                        strona {currentPage} z {pageCount}
                    </p>
                </div>
                <PaginationArrow
                    direction="right"
                    href={createPageURL(currentPage + 1)}
                    isDisabled={currentPage >= pageCount}
                />
            </div>
        </div>
    )
}
