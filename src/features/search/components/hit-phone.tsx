import { Highlight } from 'react-instantsearch'

//TODO: add types
const HitPhone = ({ hit }: { hit: any }) => {
    return (
        <div className="ml-2 my-4 text-sm">
            <div className="flex  flex-col md:flex-row gap-y-2 items-start justify-between">
                <div>
                    <div className="space-x-1 font-medium">
                        <Highlight
                            classNames={{
                                highlighted: 'bg-foreground text-background',
                            }}
                            attribute="employeeFirstName"
                            hit={hit}
                        />
                        <Highlight
                            classNames={{
                                highlighted: 'bg-foreground text-background',
                            }}
                            attribute="employeeLastName"
                            hit={hit}
                        />
                    </div>

                    <div className="flex gap-1 text-muted-foreground">
                        <p>{hit?.unit?.unitName}</p>
                        <p>{hit?.section?.sectionName}</p>
                    </div>
                </div>

                <div className="flex gap-2 text-sm tracking-wider">
                    {hit?.internalNumber && (
                        <div className="bg-accent font-medium px-4 py-1 rounded-3xl border border-border">
                            {hit?.internalNumber}
                        </div>
                    )}
                    {hit?.companyNumber && (
                        <div className="bg-accent font-medium px-4 py-1 rounded-3xl border border-border">
                            {hit?.companyNumber}
                        </div>
                    )}
                    {hit?.externalNumber && (
                        <div className="bg-accent font-medium px-4 py-1 rounded-3xl border border-border">
                            {hit?.externalNumber}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
export default HitPhone
