import React from "react";
import { Viewer, Worker } from '@react-pdf-viewer/core'

const ModalPreviewCV = ({ fileUrl }) => {
  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.1.81/build/pdf.worker.js">
      <div style={{ height: '750px' }}>
        <Viewer 
          fileUrl={fileUrl}
        />
      </div>
    </Worker>
  )
};

export default ModalPreviewCV;
