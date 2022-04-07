import React from "react";
import { Routes, Route } from "react-router-dom";
import PageHome from "./pages/main/PageHome";
import PageCompany from "./pages/main/PageCompany";
import PageLoginStudent from "./pages/login/PageLoginStudent";
import PageReleases from "./pages/main/PageReleases";
import PageCreateAccountStudent from "./pages/login/PageCreateAccountStudent";
import PageLoginCompany from "./pages/login/PageLoginCompany";
import PageRegisterCompany from "./pages/login/PageRegisterCompany";
import PageProfileStudent from "./pages/student/PageProfileStudent";
import PrivateRoute from "./routes/PrivateRoute";
import AboutMe from "./components/Card/AboutMe/AboutMe";
import CardJobDetails from "./components/Card/CardJobDetails";
import PageAddJob from "./pages/business/PageAddJob";
import ModalRelease from "./components/Modal/ModalRelease";
import PageLoginStudentUpdate from "./pages/login/PageLoginStudentUpdate";

const Root = () => {
  return (
    <Routes>
      {/* Indice de rutas publicas */}
      <Route path="/" element={<PageHome />}>
        <Route path=":t200_id_vacant" element={<CardJobDetails />} />
      </Route>

      {/* FEATURE:  */}
      {/* <Route path="empleos" element={<PageJobs />}>
        <Route path=":t200_id_vacant" element={<CardJobDetails />} />
      </Route> */}

      <Route path="/alumno" element={<PageLoginStudent />} />
      <Route path="/registro-alumno" element={<PageCreateAccountStudent />} />
      <Route path="/reclutador" element={<PageLoginCompany />} />
      <Route path="/registro-reclutador" element={<PageRegisterCompany />} />
      <Route path="/actualiza-alumno" element={<PageLoginStudentUpdate />}/>
      <Route path="/empresas" element={<PageCompany />} />
      <Route path="comunicados" element={<PageReleases />}>
        <Route path=":t202_id_announcement" element={<ModalRelease />} />
      </Route>

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
