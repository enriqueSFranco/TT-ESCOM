import { Suspense, lazy } from "react"
import { createHashRouter } from "react-router-dom"
import { Home } from '../views/app/home'
import { PrivateRoute } from "./PrivateRoute"
import { TypeUser } from "../shared"

const CreateAccountCandidate = lazy(() => import('../views/auth/create-account-candidate'))
const CreateAccountCompany = lazy(() => import('../views/auth/create-account-company'))
const DetailsJob = lazy(() => import('../views/app/job-detail'))

const ProfileCandidate = lazy(() => import('../views/candidate/profile-candidate'))
const Applications = lazy(() => import('../views/candidate/ApplicationView'))

const Candidate = lazy(() => import('../views/Candidate'))
const FormLoginCandidate = lazy(() => import('../components/FormLoginCandidate'))


const LoginCompany = lazy(() => import('../views/auth/login-company'))
const RecruiterJobs = lazy(() => import('../views/recruiter/jobs-list'))
const FormLoginCompany = lazy(() => import('../components/FormLoginCompany'))
const CreateJob = lazy(() => import('../views/recruiter/create-job'))


export const router = createHashRouter(
  [
    {
      path: '/',
      element: <Home />,

    },
    {
      path: '/candidato/iniciar-sesion',
      element: <Suspense fallback={<div>cargando informacion de la vacante...</div>}><FormLoginCandidate /></Suspense>
    },
    {
      path: '/candidato/crear-cuenta',
      element: <Suspense fallback={<div>cargando informacion de la vacante...</div>}><CreateAccountCandidate /></Suspense>
    },
    {
      path: '/candidato',
      element: <PrivateRoute typeUser={TypeUser.CANDIDATE} />,
      children: [
        {
          path: 'perfil',
          element: <Suspense fallback={<div>cargando informacion de la vacante...</div>}><ProfileCandidate /></Suspense>,
        },
        {
          path: 'postulaciones',
          element: <Suspense fallback={<div>cargando postulaciones...</div>}><Applications /></Suspense>
        },
        {
          path: 'vacantes-guardadas',
          element: <Suspense fallback={<div>cargando postulaciones...</div>}><div>vacantes-guardadas</div></Suspense>
        }
      ]
    },
    {
      path: '/reclutador/iniciar-sesion',
      element: <Suspense fallback={<div>cargando formulario...</div>}><FormLoginCompany /></Suspense>
    },
    {
      path: '/reclutador/crear-cuenta',
      element: <Suspense fallback={<div>cargando formulario...</div>}><CreateAccountCompany /></Suspense>
    },
    {
      path: '/reclutador',
      element: <PrivateRoute typeUser={TypeUser.RECRUITER} />,
      children: [
        {
          path: 'vacantes',
          element: <Suspense fallback={<div>cargando formulario...</div>}><RecruiterJobs /></Suspense>
        },
        {
          path: 'nueva-vacante',
          element: <Suspense fallback={<div>cargando formulario...</div>}><CreateJob /></Suspense>
        },
        {
          path: 'candidatos',
          element: <Suspense fallback={<div>cargando formulario...</div>}><div>candidatos</div></Suspense>
        }
      ]
    },
    {
      path: '/job/:title',
      element: <Suspense fallback={<div>cargando informacion de la vacante...</div>}><DetailsJob /></Suspense>
    }
  ]
)