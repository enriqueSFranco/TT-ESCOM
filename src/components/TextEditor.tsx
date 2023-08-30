import { useRef, useState } from "react"
import Editor from '@draft-js-plugins/editor'
import createToolbarPlugin from '@draft-js-plugins/static-toolbar'
import { EditorState } from 'draft-js'
import '@draft-js-plugins/static-toolbar/lib/plugin.css'
import { Box } from "./Box"


const toolbarPlugin = createToolbarPlugin({
})
const { Toolbar } = toolbarPlugin
const plugins = [toolbarPlugin]


export const TextEditor = () => {
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty())
  const editorRef = useRef<Editor | null>(null)

  const focus = (e: MouseEvent) => {
    e.preventDefault()
    const $editor = editorRef.current

    if (editorRef != null) {
      $editor?.focus()
    }

  }
  return (
    <Box className="flex flex-col">
      <Toolbar />
      <Box onClick={focus} className="editor flex flex-col border border-slate-300 rounded-sm overflow-hidden">
        <Editor
          editorState={editorState}
          onChange={setEditorState}
          plugins={plugins}
          ref={editorRef}
        />
      </Box>
    </Box>
  )
}
