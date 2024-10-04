'use client' // Error components must be Client Components

import React from 'react'
import { useEffect } from 'react'
import { Button } from '@/components/ui/button'

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
    }, [error])

    return (
        <div className="container flex justify-center items-center flex-col py-20">
            <h2 className={'text-5xl'}>Coś poszło nie tak!</h2>
            <Button
                onClick={
                    // Attempt to recover by trying to re-render the segment
                    () => reset()
                }
            >
                Spróbuj ponownie
            </Button>
        </div>
    )
}
