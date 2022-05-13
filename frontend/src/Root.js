import React from "react";
import { Routes, Route } from "react-router-dom";
import { ROLE } from "routes/roles";
import PrivateRoute from "routes/PrivateRoute";
import PageHome from "pages/main/PageHome";
import PageCompany from "pages/main/PageCompany";
import PageLoginStudent from "pages/login/PageLoginStudent";
import PageReleases from "pages/main/PageReleases";
import PageCreateAccountStudent from "pages/login/PageCreateAccountStudent";
import PageLoginCompany from "pages/login/PageLoginCompany";
import PageRegisterCompany from "pages/login/PageRegisterCompany";
import PageProfileStudent from "pages/student/PageProfileStudent";
import PageLoginStudentUpdate from "pages/login/PageLoginStudentUpdate";
import PageDashBoard from "pages/business/PageDashBoard";
import PageHistory from "pages/business/PageHistory";
import PageSuccesCompany from "pages/login/PageSuccesCompany";
import PageValidateRecruiter from "pages/admin/PageValidateRecruiter";
import PageApplications from "pages/business/PageApplications";
import PagePostRelease from "pages/business/PagePostRelease";
import PageApplicationsStudent from "pages/student/PageApplicationsStudent";
import ExperienceList from "components/Card/Experience/ExperienceList";
import Certifications from "components/Card/Certifications/Certifications";
import Accordion from "components/Accordion/Accordion";
import AcademicRecord from "components/Card/AcademicRecord/AcademicRecord";
import ModalRelease from "components/Modal/ModalRelease";
import ModalBusiness from "components/Modal/ModalBusiness";
import CardJobDetails from "components/Card/CardJobDetails/CardJobDetails";

const Root = () => {
  return (
    <Routes>
      {/* Indice de rutas publicas */}
      <Route path="/" element={<PageHome />}>
        <Route path="vacante">
          <Route path=":t200_id_vacant" element={<CardJobDetails />} />
        </Route>
      </Route>
      
      <Route element={<PrivateRoute role={ROLE.RECRUITER} />}>   
        <Route path="/dashboard" element={<PageDashBoard />} />
        <Route path="/mis-vacantes" element={<PageHistory />}>
          <Route path=":t200_id_vacant" element={<CardJobDetails />} />
        </Route>
        <Route path="/solicitudes" element={<PageApplications />}>
          <Route path=":t200_id_vacant" element={<Accordion />} />
        </Route>
        <Route path="/publicar-comunicado" element={<PagePostRelease />} />
        {/* <Route path="/candidatos" element={<PageApplications />} /> */}
      </Route>

      {/* FEATURE:  */}
      {/* <Route path="empleos" element={<PageJobs />}>
        <Route path=":t200_id_vacant" element={<CardJobDetails />} />
      </Route> */}

      {/* RUTAS DEL ADMINISTRADOR */}
      <Route path="/validar-reclutador" element={<PageValidateRecruiter />} />


      <Route path="/alumno" element={<PageLoginStudent />} />
      <Route path="/registro-alumno" element={<PageCreateAccountStudent />} />
      <Route path="/reclutador" element={<PageLoginCompany />} />
      <Route path="/registro-reclutador" element={<PageRegisterCompany />} />
      <Route path="/pre-registro" element={<PageSuccesCompany />} />
      
      <Route path="empresas" element={<PageCompany />}>
        <Route path=":t301_id_company" element={<ModalBusiness />} />
      </Route>
      
      <Route path="comunicados" element={<PageReleases />}>
        <Route path=":t202_id_announcement" element={<ModalRelease />} />
      </Route>

      {/* TODO Hacer ruta privada  */}
      <Route path="/actualiza-alumno" element={<PageLoginStudentUpdate />}/>

      {/* Indice de rutas privadas para un alumno si funciona */}
      <Route element={<PrivateRoute role={ROLE.STUDENT} />}>
        <Route path="/perfil" element={<PageProfileStudent />}>
          <Route path="historial-academico" element={<AcademicRecord />} />
          <Route path="experiencia" element={<ExperienceList />} />
          <Route path="certificaciones" element={<Certifications />} />
        </Route>
        <Route path="mis-postulaciones" element={<PageApplicationsStudent />} />
      </Route>

      {/* Indice de rutas privadas para un reclutador */}
      {/* <Route element={<PrivateRoute role={ROLE.RECRUITER} />}>   
        <Route path="/historial" element={<PageHistory />}>
          <Route path="dashboard" element={<PageDashBoard />} />
          <Route path="mis-vacantes" element={<PageMyJobs />} />
          <Route path="solicitudes" element={<PageApplications />} />
          <Route path="publicar-vacante" element={<PageAddJob />} />
          <Route path="publicar-comunicado" element={<PagePostRelease />} />
        </Route>
      </Route> */}

    </Routes>
  );
};

export default Root;
