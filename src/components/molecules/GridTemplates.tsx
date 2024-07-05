import { DynamicPostItem } from './PostItem'
import { GridProps, Post, TemplateObj, TemplateObjVariants } from '@/app/types'

const templateObj1: TemplateObj = {
    grid: 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5',
    elements: [
        {
            grid: '',
            component: 'background',
        },
        {
            grid: '',
            component: 'background',
        },
        {
            grid: '',
            component: 'background',
        },
        {
            grid: '',
            component: 'background',
        },
        {
            grid: '',
            component: 'background',
        },
    ],
}
const templateObj2: TemplateObj = {
    grid: 'grid grid-cols-12 lg:grid-rows-4 gap-5',
    elements: [
        {
            grid: 'col-span-12 md:col-span-6 lg:col-span-3 lg:row-span-2',
            component: 'background',
        },
        {
            grid: 'col-span-12 md:col-span-6 lg:col-span-3 lg:row-span-2 lg:col-start-4',
            component: 'background',
        },
        {
            grid: 'col-span-12 lg:col-span-6 lg:col-start-1 lg:row-start-3',
            component: 'right',
        },
        {
            grid: 'col-span-12 lg:col-span-6 lg:col-start-1 lg:row-start-4',
            component: 'right',
        },
        {
            grid: 'col-span-12 lg:col-span-6 lg:col-start-7 lg:row-start-1',
            component: 'right',
        },
        {
            grid: 'col-span-12 lg:col-span-6 lg:col-start-7 lg:row-start-2',
            component: 'right',
        },
        {
            grid: 'col-span-12 lg:col-span-6 lg:col-start-7 lg:row-start-3',
            component: 'right',
        },
        {
            grid: 'col-span-12  lg:col-span-6 lg:col-start-7 lg:row-start-4',
            component: 'right',
        },
    ],
}
const templateObj3: TemplateObj = {
    grid: 'grid grid-cols-12 gap-5 lg:grid-rows-4',
    elements: [
        {
            grid: 'col-span-12 lg:col-span-5 lg:row-span-2',
            component: 'background',
        },
        {
            grid: 'col-span-12 lg:col-span-7 lg:col-start-6',
            component: 'right',
        },
        {
            grid: 'col-span-12 lg:col-span-7 lg:col-start-6 lg:row-start-2',
            component: 'right',
        },
        {
            grid: 'col-span-6 lg:col-span-3 lg:row-span-2 lg:row-start-3',
            component: 'top',
        },
        {
            grid: 'col-span-6 lg:col-span-3 lg:row-span-2 lg:col-start-4 lg:row-start-3',
            component: 'top',
        },
        {
            grid: 'col-span-6 lg:col-span-3 lg:row-span-2 lg:col-start-7 lg:row-start-3',
            component: 'top',
        },
        {
            grid: 'col-span-6 lg:col-span-3 lg:row-span-2 lg:col-start-10 lg:row-start-3',
            component: 'top',
        },
    ],
}
const templateObj4: TemplateObj = {
    grid: 'grid grid-cols-12 gap-5',
    elements: [
        {
            grid: 'col-span-6 lg:col-span-3',
            component: 'top',
        },
        {
            grid: 'col-span-6 lg:col-span-3',
            component: 'top',
        },
        {
            grid: 'col-span-6 lg:col-span-3',
            component: 'top',
        },
        {
            grid: 'col-span-6 lg:col-span-3',
            component: 'top',
        },
    ],
}
const templateObj5: TemplateObj = {
    grid: 'grid grid-cols-12 gap-5 lg:grid-rows-5',
    elements: [
        {
            grid: 'col-span-12 lg:col-span-6 lg:row-span-3',
            component: 'background',
        },
        {
            grid: 'col-span-12 lg:col-span-6 lg:col-start-7',
            component: 'right',
        },
        {
            grid: 'col-span-12 lg:col-span-6 lg:col-start-7 lg:row-start-2',
            component: 'right',
        },
        {
            grid: 'col-span-12 lg:col-span-6 lg:col-start-7 lg:row-start-3',
            component: 'right',
        },
        {
            grid: 'col-span-6 lg:col-span-3 lg:row-span-2 lg:row-start-4',
            component: 'top',
        },
        {
            grid: 'col-span-6 lg:col-span-3 lg:row-span-2 lg:col-start-4 lg:row-start-4',
            component: 'top',
        },
        {
            grid: 'col-span-6 lg:col-span-3 lg:row-span-2 lg:col-start-7 lg:row-start-4',
            component: 'top',
        },
        {
            grid: 'col-span-6 lg:col-span-3 lg:row-span-2 lg:col-start-10 lg:row-start-',
            component: 'top',
        },
    ],
}
const templateObj6: TemplateObj = {
    grid: 'grid grid-cols-12 lg:grid-rows-4 gap-5',
    elements: [
        {
            grid: 'col-span-12 lg:col-span-6 lg:row-span-2',
            component: 'background',
        },
        {
            grid: 'col-span-6 lg:col-span-3 lg:row-span-2 lg:col-start-7',
            component: 'top',
        },
        {
            grid: 'col-span-6 lg:col-span-3 lg:row-span-2 lg:col-start-10',
            component: 'top',
        },
        {
            grid: 'col-span-12 lg:col-span-6 lg:row-start-3',
            component: 'right',
        },
        {
            grid: 'col-span-12 lg:col-span-6 lg:col-start-7',
            component: 'right',
        },
        {
            grid: 'col-span-12 lg:col-span-6 lg:row-start-4',
            component: 'right',
        },
        {
            grid: 'col-span-12 lg:col-span-6 lg:col-start-7',
            component: 'right',
        },
    ],
}

const Template = ({
    posts,
    templateObj,
}: {
    posts: Array<Post>
    templateObj: TemplateObj
}) => {
    const elements = templateObj.elements.map((element, index) => {
        const variant: TemplateObjVariants = element?.component

        return (
            <div key={index} className={element.grid}>
                {posts[index] && (
                    <DynamicPostItem variant={variant} data={posts[index]} />
                )}
            </div>
        )
    })

    return <div className={templateObj.grid}>{elements}</div>
}

export const GridTemplate = (props: GridProps) => {
    const { template, posts } = props
    //Render grid template for category depend on number
    switch (template) {
        case 1:
            return <Template posts={posts} templateObj={templateObj1} />
        case 2:
            return <Template posts={posts} templateObj={templateObj2} />
        case 3:
            return <Template posts={posts} templateObj={templateObj3} />
        case 4:
            return <Template posts={posts} templateObj={templateObj4} />
        case 5:
            return <Template posts={posts} templateObj={templateObj5} />
        case 6:
            return <Template posts={posts} templateObj={templateObj6} />
        default:
            return <Template posts={posts} templateObj={templateObj6} />
    }
}
