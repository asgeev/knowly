import axios from 'axios'
import { getStrapiUrl } from './utils'
import { getAuthToken } from './auth'

const strapiURL = getStrapiUrl()

/*Axios instance for calling Strapi service */
export const strapi = axios.create({
    adapter: 'fetch',
    baseURL: strapiURL,
    headers: { 'Content-Type': 'application/json' },
})

strapi.interceptors.request.use(
    async function (config) {
        const authToken = await getAuthToken()

        if (authToken) {
            config.headers.Authorization = `Bearer ${authToken}`
        }

        console.log(config)
        return config
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error)
    }
)
