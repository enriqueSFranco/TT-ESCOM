import { useRef } from "react"
import { Editor } from "@tinymce/tinymce-react"

const TextEditor = ({ id, name, value, onChange }) => {
  const editorRef = useRef(null);

  return (
    <Editor 
      onInit={(evt, editor) => editorRef.current = editor}
      init={{
        height: 400,
        width: 800,
        menubar: false,
        plugins: [
          'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
          'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
          'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
        ],
        toolbar: 'blocks | ' +
            'bold italic' +
            'bullist numlist outdent indent | ',
      }}
      id={id}
      textareaName={name}
      value={value}
      onEditorChange={onChange}
    />
  )
}

export default TextEditor