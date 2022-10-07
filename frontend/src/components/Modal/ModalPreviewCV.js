import React from "react";
import { Document } from "react-pdf";

const ModalPreviewCV = ({ fileUrl }) => {
  console.log(fileUrl);

  return <Document file={fileUrl}></Document>;
};

export default ModalPreviewCV;
