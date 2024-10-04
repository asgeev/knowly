'use client'

import Document from '@tiptap/extension-document'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import ToolBar from '@/components/atoms/tool-bar'

type TiptapProps = {
    onChange: (richText: string) => void
    content: string
}

const Tiptap = ({ onChange, content }: TiptapProps) => {
    const editor = useEditor({
        extensions: [StarterKit, Document, Paragraph, Text],
        content: content,
        editorProps: {
            attributes: {
                class: 'rounded-md border border-border min-h-72 p-4',
            },
        },
        immediatelyRender: false,
        onUpdate({ editor }) {
            onChange(editor.getHTML())
        },
    })

    return (
        <>
            <ToolBar editor={editor} />
            <EditorContent editor={editor} />
        </>
    )
}

export default Tiptap
