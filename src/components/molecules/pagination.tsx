'use client'

import { FC } from 'react'
import { usePathname, useSearchParams, useRouter } from 'next/navigation'
import { ChevronsRight, ChevronsLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'

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

    return (
        <Button
            onClick={() => router.push(href)}
            variant={'ghost'}
            aria-disabled={isDisabled}
            disabled={isDisabled}
        >
            {isLeft ? (
                <div className="flex gap-2 items-center">
                    <ChevronsLeft />
                    <p>poprzednia</p>
                </div>
            ) : (
                <div className="flex gap-2 items-center flex-row-reverse">
                    <ChevronsRight />
                    <p>następna</p>
                </div>
            )}
        </Button>
    )
}

export function Pagination({ pageCount }: Readonly<PaginationProps>) {
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
                    <p className="font-semibold text-muted-foreground ">
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
