import React, { useRef } from 'react'
import { SearchButton } from '../atoms/SearchButton'

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
                //TODO: add colors for light theme
                className="my-0 top-32 w-10/12 max-w-3xl backdrop:bg-backdrop backdrop:backdrop-blur-sm bg-inherit"
            >
                <div className="bg-secondary p-10 rounded-lg shadow-meilisearch "></div>
            </dialog>
        </>
    )
}
