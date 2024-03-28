import React, { useRef } from 'react'
import { SearchButton } from '../atoms/SearchButton'
import { instantMeiliSearch } from '@meilisearch/instant-meilisearch'

import {
    InstantSearch,
    SearchBox,
    Index,
    Hits,
    PoweredBy,
    Configure,
} from 'react-instantsearch'
import NoResultsBoundary from '../molecules/meilisearch/NoResultsBoundary'
import EmptyQueryBoundary from '../molecules/meilisearch/EmptyQueryBoundary'
import HitPhone from '../molecules/meilisearch/HitPhone'
import HitPage from '../molecules/meilisearch/HitPage'
import HitsSection from '../molecules/meilisearch/HitSection'

const { searchClient, setMeiliSearchParams } = instantMeiliSearch(
    'http://localhost:7700', // Host
    'YSUrA12HFilbkxkpCE72UWJWuvB79EZyZlbQXsKObPc', // API key
    {
        placeholderSearch: false,
        primaryKey: 'id',
    }
)

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
                className="my-0 top-10 md:top-24 w-11/12 max-w-3xl backdrop:bg-backdrop backdrop:backdrop-blur-sm bg-inherit overflow-hidden "
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
                                placeholder="Wyszukaj telefon lub stronę"
                            />
                            <button
                                onClick={closeMeilisearch}
                                className="apperance-none text-textSecondary text-[10px] font-semibold bg-primary  p-2 rounded-md hover:text-accent"
                            >
                                ESC
                            </button>
                        </div>
                        <div className="px-6 min-h-10 max-h-[600px] overflow-auto transition-all ease-in-out duration-1000 divide-y divide-color_2">
                            <EmptyQueryBoundary text="Brak wyników">
                                <Index indexName="number">
                                    <NoResultsBoundary>
                                        <HitsSection title="Telefon">
                                            <Hits hitComponent={HitPhone} />
                                        </HitsSection>
                                    </NoResultsBoundary>
                                </Index>
                                <Index indexName="page">
                                    <NoResultsBoundary>
                                        <HitsSection title="Baza wiedzy">
                                            <Configure
                                                attributesToSnippet={[
                                                    'content',
                                                ]}
                                            />

                                            <Hits hitComponent={HitPage} />
                                        </HitsSection>
                                    </NoResultsBoundary>
                                </Index>
                            </EmptyQueryBoundary>
                        </div>

                        <div className="border-t border-color_2 h-14 flex justify-end items-center px-4 py-6">
                            <PoweredBy
                                classNames={{
                                    logo: 'h-4',
                                }}
                            />
                        </div>
                    </InstantSearch>
                </div>
            </dialog>
        </>
    )
}
