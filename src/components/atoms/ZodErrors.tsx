export function ZodErrors({ error }: { error: string[] }) {
    if (!error) return null
    return error.map((err: string, index: number) => (
        <div key={index} className="text-danger text-xs  py-3">
            {err}
        </div>
    ))
}
