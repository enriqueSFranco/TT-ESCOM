import { forwardRef, useImperativeHandle, useState } from "react"
import ReactQuill from "react-quill"
import "react-quill/dist/quill.snow.css"

export const TextEditor = forwardRef((_, ref) => {
  const [editorHTML, setEditorHTML] = useState("")

  useImperativeHandle(
    ref,
    () => ({
      editorValue: () => editorHTML,
    }),
    [editorHTML]
  )

  function handleChange (html: string) {
    setEditorHTML(html)
  }

  return <ReactQuill
    theme='snow' value={editorHTML}
    placeholder="Detalles de la vacante"
    onChange={handleChange}
  />
})
