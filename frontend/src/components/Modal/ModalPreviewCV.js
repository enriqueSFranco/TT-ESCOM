import React from "react";
import { Viewer, Worker } from '@react-pdf-viewer/core'

const ModalPreviewCV = ({ fileUrl }) => {
  if (!fileUrl) return null
  
  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.1.81/build/pdf.worker.js">
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <h2>Mi Curriculum</h2>
        <Viewer 
          fileUrl={fileUrl}
        />
      </div>
    </Worker>
  )
};

export default ModalPreviewCV;
