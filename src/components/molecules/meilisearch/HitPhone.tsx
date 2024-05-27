import { Highlight } from 'react-instantsearch'
//TODO: add types
const HitPhone = ({ hit }: { hit: any }) => {
    return (
        <div className="my-6">
            <div className="flex  flex-col md:flex-row gap-y-2 items-start justify-between">
                <div>
                    <div className="space-x-1">
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

                    <div className="flex gap-1 text-textSecondary">
                        <p className="text-sm ">{hit?.unit?.unitName}</p>
                        <p className="text-sm text-textSecondary">
                            {hit?.section?.sectionName}
                        </p>
                    </div>
                </div>

                <div className="flex gap-2 text-sm tracking-wider">
                    {hit?.internalNumber && (
                        <div className="bg-color_2 px-4 py-1 rounded-3xl">
                            {hit?.internalNumber}
                        </div>
                    )}
                    {hit?.companyNumber && (
                        <div className="bg-color_2 px-4 py-1 rounded-3xl">
                            {hit?.companyNumber}
                        </div>
                    )}
                    {hit?.externalNumber && (
                        <div className="bg-color_2 px-4 py-1 rounded-3xl">
                            {hit?.externalNumber}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
export default HitPhone
