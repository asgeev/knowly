export const returnUnitSection = (unit, section) => {
    let text = ''

    if (unit && section) {
        text = `${unit} - ${section}`
    } else if (unit) {
        text = unit
    } else if (section) {
        text = section
    } else {
        text = ''
    }

    return text
}
