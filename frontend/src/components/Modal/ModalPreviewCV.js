import React from "react";
import { Document, pdfjs } from "react-pdf";


const ModalPreviewCV = ({ fileUrl }) => {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

  return <Document file={fileUrl}></Document>;
};

export default ModalPreviewCV;
