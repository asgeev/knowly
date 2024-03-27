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
import NoResultsBoundary from '../molecules/meilisearch/NoResultsBoundary'
import EmptyQueryBoundary from '../molecules/meilisearch/EmptyQueryBoundary'

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
                                placeholder="Wyszukaj numeru telefonu"
                            />
                            <button
                                onClick={closeMeilisearch}
                                className="apperance-none text-textSecondary text-[10px] font-semibold bg-primary  p-2 rounded-md hover:text-accent"
                            >
                                ESC
                            </button>
                        </div>
                        <div className="px-6 min-h-10 max-h-[600px] overflow-auto transition-all ease-in-out duration-1000">
                            <EmptyQueryBoundary text="Brak wyników">
                                <Index indexName="number">
                                    <NoResultsBoundary>
                                        <HitsSection title="Telefon">
                                            <Hits hitComponent={Hit} />
                                        </HitsSection>
                                    </NoResultsBoundary>
                                </Index>
                                <Index indexName="navigation-item">
                                    <NoResultsBoundary>
                                        <HitsSection title="Baza wiedzy">
                                            <Hits hitComponent={Hit1} />
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

const Hit = ({ hit }) => {
    console.log(hit)

    return (
        <div className="my-6">
            <div>
                <div className="grid grid-flow-col grid-cols-[minmax(200px,300px)_minmax(300px,_1fr)]	 ">
                    <div className="flex gap-1">
                        <Highlight
                            classNames={{
                                highlighted: 'bg-transparent text-accent',
                            }}
                            attribute="employeeFirstName"
                            hit={hit}
                        />
                        <Highlight
                            classNames={{
                                highlighted: 'bg-transparent text-accent',
                            }}
                            attribute="employeeLastName"
                            hit={hit}
                        />
                    </div>

                    <div className="flex gap-6 text-textSecondary">
                        <div>{hit?.internalNumber}</div>
                        <div className="w-[2px] h-full bg-neutral-600 mx-2" />
                        <div>{hit?.companyNumber}</div>
                        <div className="w-[2px] h-full bg-neutral-600 mx-2" />
                        <div>{hit?.externalNumber}</div>
                    </div>
                </div>
                <div className="flex gap-1 text-textSecondary">
                    <p className="text-sm ">{hit?.unit?.unitName}</p>
                    <p className="text-sm text-textSecondary">
                        {hit?.section?.sectionName}
                    </p>
                </div>
            </div>
        </div>
    )
}

const Hit1 = ({ hit }) => {
    return (
        <>
            <Highlight attribute="path" hit={hit} />
            <Highlight attribute="path" hit={hit} />
            <p>{hit.path}</p>
        </>
    )
}

const HitsSection = ({ children, title }) => {
    return (
        <section className="py-6 ">
            <p className="text-textSecondary mb-6">{title}</p>

            {children}
        </section>
    )
}
