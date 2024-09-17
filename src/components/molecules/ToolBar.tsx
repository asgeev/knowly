import { Editor } from '@tiptap/react'
import { Bold, Heading2 } from 'lucide-react'
import { Toggle } from '@/components/ui/toggle'

type ToolBarProps = {
    editor: Editor | null
}

export default function ToolBar({ editor }: ToolBarProps) {
    if (!editor) {
        return null
    }

    return (
        <div>
            <Toggle
                pressed={editor.isActive('bold')}
                onPressedChange={() => {
                    editor.chain().focus().toggleBold()
                }}
            >
                <Bold className="h-4 w-4" />
            </Toggle>
            <Toggle
                pressed={editor.isActive('bold')}
                onPressedChange={() => {
                    editor.chain().focus().setHeading({ level: 2 }).run()
                }}
            >
                <Heading2 className="h-4 w-4" />
            </Toggle>
        </div>
    )
}
