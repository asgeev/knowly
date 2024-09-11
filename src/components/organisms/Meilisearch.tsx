import React, { useRef } from 'react'
import { SearchBar } from '@/components/atoms/SearchBar'
import { instantMeiliSearch } from '@meilisearch/instant-meilisearch'
import { Search } from 'lucide-react'
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

const meilisearchUrl: string =
    process.env.MEILISEARCH_URL || 'http://localhost:7700'
const melisearchApiKey: string = process.env.MEILISEARCH_API_KEY || 'api_key'

const { searchClient } = instantMeiliSearch(
    meilisearchUrl, // Host
    melisearchApiKey, // API key
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
            <SearchBar onClick={openMeilisearch} />
            <dialog
                ref={searchDialogRef}
                onClick={closeMeilisearch}
                //TODO: add colors for light theme
                className="top-10 my-0 w-11/12 max-w-3xl overflow-hidden bg-inherit backdrop:bg-backdrop backdrop:backdrop-blur-[2px] md:top-24"
            >
                <div className="rounded-lg border border-primary bg-secondary shadow-meilisearch">
                    <InstantSearch
                        searchClient={searchClient}
                        indexName="number"
                        future={{
                            preserveSharedStateOnUnmount: true,
                        }}
                    >
                        <div className="flex flex-row items-center gap-4 border-b border-color_2 px-4">
                            <Search size={20} className="text-textSecondary" />
                            <SearchBox
                                classNames={{
                                    root: 'w-full ',
                                    form: 'appearance-none',
                                    input: 'unset focus:outline-none bg-transparent h-14 w-full font-medium',
                                    submitIcon: 'hidden',
                                    resetIcon: 'hidden',
                                }}
                                placeholder="Wyszukaj telefon lub stronę"
                            />
                            <button
                                onClick={closeMeilisearch}
                                className="apperance-none rounded-md bg-primary p-2 text-[10px] font-semibold text-textSecondary hover:text-accent"
                            >
                                ESC
                            </button>
                        </div>
                        <div className="max-h-[600px] min-h-10 divide-y divide-color_2 overflow-auto px-6 transition-all duration-1000 ease-in-out">
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

                        <div className="flex h-14 items-center justify-end border-t border-color_2 px-4 py-6">
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
