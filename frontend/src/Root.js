import React from "react";
import { Routes, Route } from "react-router-dom";
import PageHome from "./pages/PageHome";
import PageCompany from "./pages/PageCompany";
import PageLoginStudent from "./pages/PageLoginStudent";
import PageCreateAccountStudent from "./pages/PageCreateAccountStudent";
import PageLoginCompany from "./pages/PageLoginCompany";
import PageRegisterCompany from "./pages/PageRegisterCompany";
import PageProfileStudent from "./pages/PageProfileStudent";
import PrivateRoute from "./routes/PrivateRoute";
import AboutMe from "./components/Card/AboutMe/AboutMe";
import CardJobDetails from "./components/Card/CardJobDetails";
import PageAddJob from "./pages/PageAddJob";

const Root = () => {
  return (
    <Routes>
      {/* Indice de rutas publicas */}
      <Route path="/" element={<PageHome />}>
        <Route path=":t200_id_vacant" element={<CardJobDetails />} />
      </Route>

      <Route path="/alumno" element={<PageLoginStudent />} />
      <Route path="/registro-alumno" element={<PageCreateAccountStudent />} />
      <Route path="/reclutador" element={<PageLoginCompany />} />
      <Route path="/registro-reclutador" element={<PageRegisterCompany />} />
      <Route path="/empresas" element={<PageCompany />} />
      <Route path="/comunicados" element={<h1>Comunicados</h1>} />

      {/* TODO: Hacer ruta privada */}
      <Route path="/publicar-vacante" element={<PageAddJob />} />

      {/* TODO: Hacer ruta privada */}
      <Route path="/perfil" element={<PageProfileStudent />}>
          <Route path="editar" element={<h4>Editar perfil</h4>} />
          <Route path="sobreMi" element={<AboutMe />} />
          <Route path="experiencia" element={<h4>experiencia</h4>} />
          <Route path="certificaciones" element={<h4>certificaciones</h4>} />
      </Route>

      {/* Indice de rutas privadas */}
      <Route element={<PrivateRoute />}>
        {/* Aqui van todas las rutas privadas del sistema */}
      </Route>
    </Routes>
  );
};

export default Root;
