import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './views/Home'
import JobOverview from './views/JobOverview'
import NewAccountCandidate from './views/NewAccountCandidate'
import Business from './views/Business'
import Releases from './views/Releases'
import PostNewJob from './views/PostNewJob'
import LoginCandidate from './views/LoginCandidate'
import FormCreateNewAccountCandidate from './components/Form/FormCreateNewAccountCandidate'

const Root = () => {
  return (
    <Routes>
      <Route index="/" element={<Home />}>
      </Route>
      <Route path="/vacante">
        <Route path=":t200_id_vacant" element={<JobOverview />} />
      </Route>

      <Route path='/empresas' element={<Business />} />
      <Route path='/comunicados' element={<Releases />} />

      <Route path='/cuenta-nueva' element={<NewAccountCandidate />} />
      
      <Route path='/iniciar-sesion' element={<LoginCandidate />} />

      <Route path='nueva-vacante' element={<PostNewJob />} />



      {/* <Route path="empresas" element={<Company />}>
        <Route path=":t301_id_company" element={<ModalBusiness />} />
      </Route>
      
      <Route path="comunicados" element={<PageReleases />}>
        <Route path=":t202_id_announcement" element={<ModalRelease />} />
      </Route> */}

      {/* <Route path="/login-alumno" element={<LoginStudent />} />
      <Route path="/login-reclutador" element={<LoginCompany />} />
      <Route path="/registro-reclutador" element={<RegisterCompany />} />
        <Route path="/pre-registro" element={<SuccesCompany />} /> */}

    </Routes>
  )
}

export default Root