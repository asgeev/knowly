import Image from 'next/image'

export default function AuthLayout({
    children,
}: {
    readonly children: React.ReactNode
}) {
    return (
        <div className="grid min-h-svh lg:grid-cols-2">
            <div className="flex flex-col gap-4 p-6 md:p-10">
                <div className="flex gap-2 md:justify-start">
                    <div className="relative h-10 aspect-square">
                        <Image src="/knowlylogo.svg" fill alt="knowly icon" />
                    </div>
                </div>
                <div className="flex flex-1 items-center justify-center">
                    <div className="w-full max-w-sm">{children}</div>
                </div>
            </div>
            <div className="relative hidden bg-muted lg:block">
                <Image
                    src="/placeholder.svg"
                    alt="Image"
                    fill
                    className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
                />
            </div>
        </div>
    )
}
