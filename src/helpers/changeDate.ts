export const changeDate = (date: string) =>
    new Date(date).toLocaleDateString('pl-PL', {
        month: 'long',
        year: 'numeric',
        day: 'numeric',
    })
