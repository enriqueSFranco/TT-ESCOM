import React from 'react';
import succes from 'images/giphy1.gif';

let wrapper = {
  position: "relative",
  top: "4rem",
  height: "calc(100vh - 4rem)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  fontFamily: 'Poppins',
};

let image = {
  width: "500px",
  height: "300px",
  display: "inline-block",
}

let title = {
  'background': 'linear-gradient(27deg, #3f5efb, #fc466b)',
  'background-clip': 'text',
  '-webkit-background-clip': 'text',
  'color': 'transparent'
}

const PageSuccesCompany = () => {

  return (
    <section style={wrapper}>
      <h2 style={title}>
        Gracias, tu pre-registro se ha enviado exitosamente. <br />
        En cuanto se validen tus datos se te haran llegar tus accesos al correo que registraste.
      </h2>
      <img style={image} src={succes} alt="trato hecho" />
    </section>
  )
}

export default PageSuccesCompany;