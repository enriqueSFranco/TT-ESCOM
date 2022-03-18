import { Routes, Route, Navigate } from "react-router-dom";
import React from "react"

import PageHome from "./pages/PageHome";
import PageCompany from "./pages/PageCompany";
import PageLoginStudent from "./pages/PageLoginStudent";
import PageCreateAccountStudent from "./pages/PageCreateAccountStudent";
import PageLoginCompany from "./pages/PageLoginCompany";
import PageRegisterCompany from "./pages/PageRegisterCompany";
import PageDetailsUser from "./pages/PageDetailsUser";
import PrivateRoute from "./routes/PrivateRoute";
import CardJobDetails from "./components/Card/CardJobDetails";
import PageAddJob from "./pages/PageAddJob";

const Root = () => {
  return (
    <>
      <Routes>
        {/* Rutas publicas */}
        <Route path="/" element={<PageHome />}>
          <Route path=":id" element={<CardJobDetails />} />
        </Route>
        <Route path="/empresas" element={<PageCompany />} />
        
        <Route path="/iniciar-sesion-alumno" element={<PageLoginStudent/>} />
        <Route path="/crear-cuenta-alumno" element={<PageCreateAccountStudent />} />

        
        <Route path="/reclutador" element={<PageLoginCompany />} />
        <Route path="/publicar-vacante" element={<PageAddJob />} />
        <Route path="/registro-empresa" element={<PageRegisterCompany />} />
          
            <Route path="/perfil" element={<PageDetailsUser />} />


        {/* Rutas privadas */}
        <Route element={<PrivateRoute />}>
          {/* <Route path="/reclutador" element={<PageRecruiter />} /> */}
          {/* <Route path="/configuracion" element={<PageDetailsUser />} /> */}
        </Route>
      </Routes>
    </>
  );
};

export default Root;
