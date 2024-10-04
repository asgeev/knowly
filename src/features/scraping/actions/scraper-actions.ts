'use server'

import * as cheerio from 'cheerio'
import axios from 'axios'
import { Post } from '@/app/types'

export const getInfoCen = async () => {
    const url = process.env.INTRANET_HEAD_OFFICE || ''

    return axios
        .get(url)
        .then((response) => {
            const $ = cheerio.load(response.data)

            const items: Array<Post> = []

            $('.wp-block-post').each((index, element) => {
                const href =
                    $(element)
                        .find('.wp-block-post-featured-image a')
                        .attr('href') || ''
                const title = $(element)
                    .find('.wp-block-post-title')
                    .text()
                    .trim()
                const coverUrl =
                    $(element).find('.wp-post-image').attr('src') || ''
                const publishedAt =
                    $(element)
                        .find('.wp-block-post-date time')
                        .attr('datetime') || ''

                items.push({
                    id: index,
                    attributes: {
                        title,
                        cover: {
                            data: {
                                attributes: {
                                    url: coverUrl,
                                },
                            },
                        },
                        publishedAt,
                        href: href,
                        isExternal: true,
                    },
                })
            })

            return items
        })
        .catch((err) => {
            console.log(err)
        })
}
