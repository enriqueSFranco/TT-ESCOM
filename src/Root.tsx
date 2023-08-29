import { Suspense, lazy } from "react"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { Home } from "./views/Home"
import { Error } from "./views/Error"
// import { ROLE } from "routes/roles"
// import PrivateRoute from "routes/PrivateRoute"
// import Company from "views/Company"
// import PageLoginStudent from "views/login/PageLoginStudent"
// import PageReleases from "views/main/PageReleases"
// import PageCreateAccountStudent from "views/login/PageCreateAccountStudent"
// import PageLoginCompany from "views/login/PageLoginCompany"
// import PageRegisterCompany from "views/login/PageRegisterCompany"
// import PageProfileStudent from "views/student/PageProfileStudent"
// import PageLoginStudentUpdate from "views/login/PageLoginStudentUpdate"
// import PageHistory from "views/business/pageInit/PageHistory"
// import PageLanguages from "views/student/PageLanguages"
// import viewsuccesCompany from "views/login/viewsuccesCompany"
// import PageValidateRecruiter from "views/admin/PageValidateRecruiter"
// import AllCandidates from "views/business/AllCandidates"
// import PagePostRelease from "views/business/PagePostRelease"
// import PageApplicationsStudent from "views/student/PageApplicationsStudent"
// import ExperienceList from "components/Card/Experience/ExperienceList"
// import CertificationList from "components/Card/Certifications/CertificationList"
// import Accordion from "components/Accordion/ApplicantDetails"
// import ListCollaborators from "views/admin/ListCollaborators"
// import AcademicRecordList from "components/Card/AcademicRecord/AcademicRecordList"
// import ModalRelease from "components/Modal/ModalRelease"
// import ModalBusiness from "components/Modal/ModalBusiness"
// import FullProfileUser from "components/Card/CardStudent/FullProfileUser"
// import RegisteredCompanies from "views/admin/RegisteredCompanies"
// import DetailsCompany from "views/admin/DetailsCompany"
// import ValidateCompany from "views/admin/ValidateCompany"
// import ListVacantsAdmin from "views/admin/ListVacantsAdmin"
// import Postulates from "views/business/Postulates"
// import LoginAdmin from "views/login/LoginAdmin"
// import CreateJob from "views/business/CreateJob"

const CreateAccountCandidate = lazy(() => import("./views/CreateAccountCandidate"))
const CreateAccountCompany = lazy(() => import("./views/CreateAccountCompany"))
const DetailsJob = lazy(() => import("./views/DetailsJob"))

const ProfileCandidate = lazy(() => import("./views/ProfileCandidate"))
const Applications = lazy(() => import("./views/Applications"))

const LoginCandidate = lazy(() => import("./views/LoginCandidate"))
const LoginCompany = lazy(() => import("./views/LoginCompany"))


export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home />,
      children: [
        {
          path: "/candidato/iniciar-sesion",
          element: <Suspense fallback={<div>cargando formulario...</div>}><LoginCandidate /></Suspense>
        },
        {
          path: "/reclutador/iniciar-sesion",
          element: <Suspense fallback={<div>cargando formulario...</div>}><LoginCompany /></Suspense>
        },
        {
          path: "candidato/crear-cuenta",
          element: <Suspense fallback={<div>cargando formulario...</div>}><CreateAccountCandidate /></Suspense>
        },
        {
          path: "/reclutador/crear-cuenta",
          element: <Suspense fallback={<div>cargando formulario...</div>}><CreateAccountCompany /></Suspense>
        }
      ]
    },
    {
      path: "/job/:title",
      element: <Suspense fallback={<div>cargando informacion de la vacante...</div>}><DetailsJob /></Suspense>,
      errorElement: <Error />
    },
    {
      path: "/perfil",
      element: <Suspense fallback={<div>cargando informacion de la vacante...</div>}><ProfileCandidate /></Suspense>,
    },
    {
      path: "/postulaciones",
      element: <Suspense fallback={<div>cargando postulaciones...</div>}><Applications /></Suspense>
    }
  ]
)

export function Root () {
  return (
    <RouterProvider router={router} />
  )
}

// const Root = () => {
//   return (
//     <Routes>
//       {/* Indice de rutas publicas */}
//       <Route path="/" element={<Home />} />

//       <Route path="/perfil-del-candidato" element={<FullProfileUser />} />

//       <Route element={<PrivateRoute role={ROLE.RECRUITER} />}>
//         <Route path="/candidatos" element={<AllCandidates />} />
//         <Route path="/publicar-comunicado" element={<PagePostRelease />} />
//         <Route path="/dashboard" element={<PageHistory />} />
//         {/* <Route
//             path=":t200_id_vacant"
//             element={<CardDetailsVacantRecruiter height="80%" />}
//           /> */}
//         <Route path="/crear-vacante" element={<CreateJob />} />
//         <Route path="/postulaciones" element={<Postulates />}>
//           <Route path=":t200_id_vacant" element={<Accordion />} />
//         </Route>
//       </Route>

//       {/* RUTAS DEL ADMINISTRADOR */}
//       <Route element={<PrivateRoute role={ROLE.MANAGER} />}>
//         <Route path="/agregar-colaborador" element={<ListCollaborators />} />
//         <Route path="/validar-reclutador" element={<PageValidateRecruiter />} />
//         <Route path="/validar-empresa" element={<ValidateCompany />} />
//         <Route path="/empresas-registradas" element={<RegisteredCompanies />} />
//         <Route path="/validar-vacante" element={<ListVacantsAdmin />} />
//         <Route
//           path="/detalles-de-emperesa/:t300_id_company"
//           element={<DetailsCompany />}
//         />
//       </Route>

//       <Route path="/alumno" element={<PageLoginStudent />} />
//       <Route path="/registro-alumno" element={<PageCreateAccountStudent />} />
//       <Route path="/reclutador" element={<PageLoginCompany />} />
//       {/* <Route path="/registro-administrador" element={<CreateAccountAdmin />} /> */}
//       <Route path="/administrador" element={<LoginAdmin />} />
//       <Route path="/registro-reclutador" element={<PageRegisterCompany />} />
//       <Route path="/pre-registro" element={<viewsuccesCompany />} />

//       <Route path="empresas" element={<Company />}>
//         <Route path=":t301_id_company" element={<ModalBusiness />} />
//       </Route>

//       <Route path="comunicados" element={<PageReleases />}>
//         <Route path=":t202_id_announcement" element={<ModalRelease />} />
//       </Route>

//       {/* TODO Hacer ruta privada  */}
//       <Route path="/actualiza-alumno" element={<PageLoginStudentUpdate />} />

//       {/* Indice de rutas privadas para un alumno si funciona */}
//       <Route element={<PrivateRoute role={ROLE.STUDENT} />}>
//         <Route path="/perfil" element={<PageProfileStudent />}>
//           <Route path="historial-academico" element={<AcademicRecordList />} />
//           <Route path="idiomas" element={<PageLanguages />} />
//           <Route path="experiencia" element={<ExperienceList />} />
//           <Route path="certificaciones" element={<CertificationList />} />
//         </Route>
//         <Route path="mis-postulaciones" element={<PageApplicationsStudent />} />
//       </Route>
//     </Routes>
//   )
// }