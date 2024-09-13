'use client' // Error components must be Client Components

import React from 'react'
import { useEffect } from 'react'

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
            <h2 className={'text-5xl'}>Wystąpił problem z tą stroną!</h2>
            <p className={'text-textSecondary'}>{error?.message}</p>
            <button
                onClick={
                    // Attempt to recover by trying to re-render the segment
                    () => reset()
                }
            >
                Spróbuj ponownie
            </button>
        </div>
    )
}
