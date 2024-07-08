const strapiUrl = process.env.STRAPI_URL

export const imageLoader = (src: string | undefined) => {
    if (src?.substring(0, 4) == 'http') {
        return src
    }
    return `${strapiUrl}${src}`
}
