export const changeDate = (date: string) =>
    new Date().toLocaleDateString('pl-PL', {
        month: 'long',
        year: 'numeric',
        day: 'numeric',
    })
