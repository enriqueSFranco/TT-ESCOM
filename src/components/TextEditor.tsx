import { forwardRef, useImperativeHandle, useRef, useState } from "react"
import Editor from '@draft-js-plugins/editor'
import createToolbarPlugin from '@draft-js-plugins/static-toolbar'
import { EditorState } from 'draft-js'
import { Box } from "./Box"
import '@draft-js-plugins/static-toolbar/lib/plugin.css'


const toolbarPlugin = createToolbarPlugin({
})
const { Toolbar } = toolbarPlugin
const plugins = [toolbarPlugin]


export const TextEditor = forwardRef((_, ref) => {
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty())
  const editorRef = useRef<Editor | null>(null)

  useImperativeHandle(ref, () => ({
    editorValue: () => editorState.getCurrentContent().getPlainText()
  }), [])

  const focus = (e: MouseEvent) => {
    e.preventDefault()
    const $editor = editorRef.current

    if ($editor != null) {
      $editor.focus()
    }
  }

  return (
    <Box className="flex flex-col">
      <Toolbar />
      <Box onClick={focus} className="editor flex flex-col border border-slate-300 rounded-sm overflow-hidden">
        <Editor
          data-editor
          editorState={editorState}
          onChange={setEditorState}
          plugins={plugins}
          ref={editorRef}
        />
      </Box>
    </Box>
  )
})
