import React, { useRef } from 'react'
import { SearchButton } from '../atoms/SearchButton'
import { instantMeiliSearch } from '@meilisearch/instant-meilisearch'

import {
    InstantSearch,
    SearchBox,
    Highlight,
    Index,
    Hits,
    PoweredBy,
} from 'react-instantsearch'

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

    const { searchClient, setMeiliSearchParams } = instantMeiliSearch(
        'http://localhost:7700', // Host
        'YSUrA12HFilbkxkpCE72UWJWuvB79EZyZlbQXsKObPc', // API key
        {
            placeholderSearch: false,
            primaryKey: 'id',
        }
    )

    return (
        <>
            <SearchButton openMeilisearch={openMeilisearch} />
            <dialog
                ref={searchDialogRef}
                onClick={closeMeilisearch}
                //TODO: add colors for light theme
                className="my-0 top-32 w-11/12 max-w-3xl backdrop:bg-backdrop backdrop:backdrop-blur-sm bg-inherit"
            >
                <div className="bg-secondary rounded-lg shadow-meilisearch">
                    <InstantSearch
                        searchClient={searchClient}
                        indexName="number"
                    >
                        <div className="flex flex-row px-4 items-center gap-4 border-b border-color_2 ">
                            <span className="material-symbols-outlined md-24 text-textSecondary">
                                search
                            </span>
                            <SearchBox
                                classNames={{
                                    root: 'w-full ',
                                    form: 'appearance-none ',
                                    input: 'unset focus:outline-none bg-transparent h-14 w-full font-medium',
                                    submitIcon: 'hidden',
                                    resetIcon: 'hidden',
                                }}
                                placeholder="Wyszukaj numeru telefonu"
                            />
                            <button
                                onClick={closeMeilisearch}
                                className="apperance-none text-textSecondary text-[10px] font-semibold bg-primary  p-2 rounded-md hover:text-accent"
                            >
                                ESC
                            </button>
                        </div>
                        <div>
                            <p className="py-16 px-6 text-center text-textSecondary font-medium">
                                Brak wyszukiwań
                            </p>
                            {/* <Index indexName="number">
                                <p className="text-bold">Numer</p>
                                <Hits hitComponent={Hit} />
                            </Index>
                            <Index indexName="navigation-item">
                                <p className="text-bold">Baza wiedzy</p>
                                <Hits hitComponent={Hit1} />
                            </Index> */}
                        </div>

                        <div className="border-t border-color_2 h-14 flex justify-end items-center px-4 py-6">
                            <PoweredBy
                                classNames={{
                                    logo: 'h-4 text-red-200',
                                }}
                            />
                        </div>
                    </InstantSearch>
                </div>
            </dialog>
        </>
    )
}

const Hit = ({ hit }) => {
    return (
        <>
            <Highlight attribute="employeeFirstName" hit={hit} />
            <p>{hit.internalNumber}</p>
        </>
    )
}

const Hit1 = ({ hit }) => {
    return (
        <>
            <Highlight attribute="path" hit={hit} />
            <p>{hit.path}</p>
        </>
    )
}
