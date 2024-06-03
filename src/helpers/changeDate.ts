export const changeDate = (date: string) => {
    if (date) {
        return new Date(date).toLocaleDateString('pl-PL', {
            month: 'long',
            year: 'numeric',
            day: 'numeric',
        })
    } else {
        return null
    }
}
