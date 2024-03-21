import React, { useRef } from 'react'
import { SearchButton } from '../atoms/SearchButton'

// eslint-disable-next-line react/display-name
export const Meilisearch = () => {
    const searchDialogRef = useRef<HTMLDialogElement>(null)

    const openMeilisearch = () => {
        searchDialogRef?.current?.showModal()
    }

    const closeMeilisearch = (e: React.FormEvent<EventTarget>) => {
        if (e.currentTarget === e.target) {
            searchDialogRef?.current?.close()
        }
    }
    return (
        <>
            <SearchButton openMeilisearch={openMeilisearch} />
            <dialog
                ref={searchDialogRef}
                onClick={closeMeilisearch}
                className="p-10"
            >
                afasf
            </dialog>
        </>
    )
}
