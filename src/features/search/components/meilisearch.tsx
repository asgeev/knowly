import React, { useRef } from 'react'
import { SearchButton } from '@/features/search/components/search-button'
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
import NoResults from '@/features/search/components/no-results'
import EmptyQuery from '@/features/search/components/empty-query'
import HitPhone from '@/features/search/components/hit-phone'
import HitPage from '@/features/search/components/hit-page'
import HitsSection from '@/features/search/components/hit-section'

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
            <SearchButton openMeilisearch={openMeilisearch} />
            <dialog
                ref={searchDialogRef}
                onClick={closeMeilisearch}
                className="my-0 top-10 md:top-24 w-11/12 max-w-3xl backdrop:bg-backdrop bg-inherit overflow-hidden "
            >
                <div className="bg-popover rounded-lg shadow-meilisearch border border-border">
                    <InstantSearch
                        searchClient={searchClient}
                        indexName="number"
                    >
                        <div className="flex flex-row px-4 items-center gap-4 border-b border-border">
                            <Search size={20} />
                            <SearchBox
                                classNames={{
                                    root: 'w-full',
                                    form: 'appearance-none',
                                    input: 'w-full bg-transparent unset focus:outline-none h-14 font-medium',
                                    submitIcon: 'hidden',
                                    resetIcon: 'hidden',
                                }}
                                placeholder="Wyszukaj telefon lub stronę"
                            />
                            <button
                                onClick={closeMeilisearch}
                                className="apperance-none text-muted-foreground text-[10px] font-semibold bg-secondary border border-border p-2 rounded-md hover:text-secondary-foreground"
                            >
                                ESC
                            </button>
                        </div>
                        <div className="px-6 min-h-10 max-h-[600px] overflow-auto transition-all ease-in-out duration-1000 divide-y divide-border">
                            <EmptyQuery text="Brak wyników">
                                <Index indexName="number">
                                    <NoResults>
                                        <HitsSection title="Telefon">
                                            <Hits hitComponent={HitPhone} />
                                        </HitsSection>
                                    </NoResults>
                                </Index>
                                <Index indexName="page">
                                    <NoResults>
                                        <HitsSection title="Baza wiedzy">
                                            <Configure
                                                attributesToSnippet={[
                                                    'content',
                                                ]}
                                            />

                                            <Hits hitComponent={HitPage} />
                                        </HitsSection>
                                    </NoResults>
                                </Index>
                            </EmptyQuery>
                        </div>

                        <div className="border-t border-border h-14 flex justify-end items-center px-4 py-6">
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
