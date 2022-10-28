import React from 'react'
import { useFetch } from 'hooks'
import CardJobPreviewRecruiter from 'components/Card/CardJobPreviewRecruiter'
import LayoutAdmin from 'Layout/LayoutAdmin'
import { Content } from '../styled-components/ListVacantsAdmin'

const { REACT_APP_URL_MANAGER_VALIDATE_VACANT } = process.env

const ListVacantsAdmin = () => {
  const { data, error, loading } = useFetch(REACT_APP_URL_MANAGER_VALIDATE_VACANT)

  if (!data) return null

  return (
    <LayoutAdmin>
      <div style={{ width: "100%", textAlign: "center" }}>
        <h2>Vacantes por validar</h2>
      </div>
      {/* TODO: Hacer la grid */}
      <Content>
        {
          loading && <h1>cargando....</h1>
        }
        {
          data.map(el => (
            <CardJobPreviewRecruiter info={el}/>
          ))
        }
      </Content>
    </LayoutAdmin>
  )
}

export default ListVacantsAdmin