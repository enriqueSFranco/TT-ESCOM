import { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";

const TextEditor = ({ id, name, value, onChange }) => {
  const editorRef = useRef(null);

  return (
    <Editor
      
      onInit={(evt, editor) => (editorRef.current = editor)}
      initialValue="
        <h4>Descripción</h4>
        <br/>
        <h4>Requerimientos</h4>
        <br/>
        <h4>Prestaciones</h4>
      "
      init={{
        height: 400,
        width: 800,
        menubar: false,
        plugins:
          "casechange searchreplace autolink directionality advcode visualblocks visualchars link media mediaembed codesample table charmap pagebreak nonbreaking anchor tableofcontents insertdatetime advlist lists checklist wordcount tinymcespellchecker formatpainter permanentpen charmap linkchecker emoticons advtable export print autosave",
        toolbar:
          "spellcheckdialog formatpainter | blocks fontfamily | bold italic | addcomment showcomments | checklist bullist",
      }}
      id={id}
      textareaName={name}
      value={value}
      onEditorChange={onChange}
    />
  );
};


export default TextEditor;
