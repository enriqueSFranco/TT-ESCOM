import React from "react";
import { Routes, Route } from "react-router-dom";
import { ROLE } from "routes/roles";
import PrivateRoute from "routes/PrivateRoute";
import Home from "pages/Home";
import Company from "pages/Company";
import PageLoginStudent from "pages/login/PageLoginStudent";
import PageReleases from "pages/main/PageReleases";
import PageCreateAccountStudent from "pages/login/PageCreateAccountStudent";
import PageLoginCompany from "pages/login/PageLoginCompany";
import PageRegisterCompany from "pages/login/PageRegisterCompany";
import PageProfileStudent from "pages/student/PageProfileStudent";
import PageLoginStudentUpdate from "pages/login/PageLoginStudentUpdate";
import FormPostJob from "components/Form/postJob/FormPostJob";
import PageHistory from "pages/business/PageHistory";
import PageLanguages from 'pages/student/PageLanguages'
import PageSuccesCompany from "pages/login/PageSuccesCompany";
import PageValidateRecruiter from "pages/admin/PageValidateRecruiter";
import PageApplications from "pages/business/PageApplications";
import PagePostRelease from "pages/business/PagePostRelease";
import PageApplicationsStudent from "pages/student/PageApplicationsStudent";
import ExperienceList from "components/Card/Experience/ExperienceList";
import CertificationList from "components/Card/Certifications/CertificationList";
import Accordion from "components/Accordion/Accordion";
import ListCollaborators from 'pages/admin/ListCollaborators'
import AcademicRecordList from "components/Card/AcademicRecord/AcademicRecordList";
import ModalRelease from "components/Modal/ModalRelease";
import ModalBusiness from "components/Modal/ModalBusiness";
import FullProfileUser from "components/Card/CardStudent/FullProfileUser";
import RegisteredCompanies from "pages/admin/RegisteredCompanies";
import DetailsCompany from "pages/admin/DetailsCompany";
import ValidateCompany from "pages/admin/ValidateCompany"


const Root = () => {
  return (
    <Routes>
      {/* Indice de rutas publicas */}
      <Route path="/" element={<Home />} />

      {/* <Route path="/mis-vacantes" element={<PageHistory />}>
        <Route path=":t200_id_vacant" element={<CardJobDetails />} />
      </Route> */}

      <Route path="/perfil-del-candidato" element={<FullProfileUser />} />

      <Route element={<PrivateRoute role={ROLE.RECRUITER} />}>
        <Route path="/candidatos" element={<PageApplications />} />
        <Route path="/publicar-comunicado" element={<PagePostRelease />} />
        <Route path="/dashboard/" element={<PageHistory />}>
          <Route path="crear-vacante" element={<FormPostJob />} />
          {/* <Route path="mis-vacantes" element={<PageHistory />} /> */}
        </Route>
      </Route>

      {/* RUTAS DEL ADMINISTRADOR */}
      <Route path="/validar-reclutador" element={<PageValidateRecruiter />} />
      <Route path="/validar-empresa" element={<ValidateCompany />} />
      <Route path="/empresas-registradas" element={<RegisteredCompanies />} />
      <Route path="detalles-de-emperesa/:t300_id_company" element={<DetailsCompany />} />
      <Route path="/lista-de-colaboradores" element={<ListCollaborators />} />


      <Route path="/alumno" element={<PageLoginStudent />} />
      <Route path="/registro-alumno" element={<PageCreateAccountStudent />} />
      <Route path="/reclutador" element={<PageLoginCompany />} />
      <Route path="/registro-reclutador" element={<PageRegisterCompany />} />
      <Route path="/pre-registro" element={<PageSuccesCompany />} />

      <Route path="empresas" element={<Company />}>
        <Route path=":t301_id_company" element={<ModalBusiness />} />
      </Route>

      <Route path="comunicados" element={<PageReleases />}>
        <Route path=":t202_id_announcement" element={<ModalRelease />} />
      </Route>

      {/* TODO Hacer ruta privada  */}
      <Route path="/actualiza-alumno" element={<PageLoginStudentUpdate />} />

      {/* Indice de rutas privadas para un alumno si funciona */}
      <Route element={<PrivateRoute role={ROLE.STUDENT} />}>
        <Route path="/perfil" element={<PageProfileStudent />}>
          <Route path="historial-academico" element={<AcademicRecordList />} />
          <Route path="idiomas" element={<PageLanguages />} />
          <Route path="experiencia" element={<ExperienceList />} />
          <Route path="certificaciones" element={<CertificationList />} />
        </Route>
        <Route path="mis-postulaciones" element={<PageApplicationsStudent />} />
      </Route>
    </Routes>
  );
};

export default Root;
