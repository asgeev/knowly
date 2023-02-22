export const useDate = (isoDate) => {
    const updateAt = new Date(isoDate)

    const updateAtOptions = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    }

    const date = updateAt.toLocaleDateString('pl-pl', updateAtOptions)

    return date
}
