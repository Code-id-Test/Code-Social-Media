import { useState } from "react";
import { BaseEditor, createEditor } from "slate"
import { Editable, ReactEditor, Slate, withReact } from "slate-react"

type SlateElement = { type: 'paragraph'; children: SlateText[] }
type SlateText = { text: string }

declare module 'slate' {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor
    Element: SlateElement
    Text: SlateText
  }
}

interface EditorProps {
  text: string
}

const Editor = (props: EditorProps) => {
  const [editor] = useState(() => withReact(createEditor()))

  return (
    <Slate
      editor={editor}
      initialValue={[
        {
          type: 'paragraph',
          children: [{ text: props.text }],
        },
      ]}
    >
      <Editable />
    </Slate>
  )
}

export default Editor