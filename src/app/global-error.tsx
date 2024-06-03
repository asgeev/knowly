'use client'

export default function GlobalError({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    return (
        <html>
        <body>
        <div>
            <h2 className={'text-5xl'}>Coś poszło nie tak!</h2>
            <button
                onClick={
                    // Attempt to recover by trying to re-render the segment
                    () => reset()
                }
            >

                Spróbuj ponownie
            </button>
            <p className={"text-textSecondary"}>{error?.message}</p>
        </div>
        </body>
        </html>
    )
}
