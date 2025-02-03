import { Editor } from '@tiptap/react'
import {
    Bold,
    Heading2,
    Heading3,
    Italic,
    List,
    ListOrdered,
} from 'lucide-react'
import { Toggle } from '@/components/ui/toggle'

type ToolBarProps = {
    editor: Editor | null
}

export default function ToolBar({ editor }: ToolBarProps) {
    if (!editor) {
        return null
    }

    return (
        <div className="space-x-1">
            <Toggle
                pressed={editor.isActive('bold') ? true : false}
                onPressedChange={() => {
                    editor.chain().focus().toggleBold().run()
                }}
            >
                <Bold className="h-4 w-4" />
            </Toggle>
            <Toggle
                pressed={editor.isActive('italic') ? true : false}
                onPressedChange={() => {
                    editor.chain().focus().toggleItalic().run()
                }}
            >
                <Italic className="h-4 w-4" />
            </Toggle>
            <Toggle
                pressed={
                    editor.isActive('heading', { level: 2 }) ? true : false
                }
                onPressedChange={() => {
                    editor.chain().focus().toggleHeading({ level: 2 }).run()
                }}
            >
                <Heading2 className="h-4 w-4" />
            </Toggle>
            <Toggle
                pressed={
                    editor.isActive('heading', { level: 3 }) ? true : false
                }
                onPressedChange={() => {
                    editor.chain().focus().toggleHeading({ level: 3 }).run()
                }}
            >
                <Heading3 className="h-4 w-4" />
            </Toggle>
            <Toggle
                pressed={editor.isActive('bulletList') ? true : false}
                onPressedChange={() => {
                    editor.chain().focus().toggleBulletList().run()
                }}
            >
                <List className="h-4 w-4" />
            </Toggle>
            <Toggle
                pressed={editor.isActive('orederedList') ? true : false}
                onPressedChange={() => {
                    editor.chain().focus().toggleOrderedList().run()
                }}
            >
                <ListOrdered className="h-4 w-4" />
            </Toggle>
        </div>
    )
}
