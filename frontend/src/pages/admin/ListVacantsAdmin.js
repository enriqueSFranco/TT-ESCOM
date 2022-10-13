import React from 'react'
import { useGetAllJobs } from 'hooks'
import CardJobPreviewRecruiter from 'components/Card/CardJobPreviewRecruiter'
import LayoutAdmin from 'Layout/LayoutAdmin'
import { Content } from '../styled-components/ListVacantsAdmin'

const ListVacantsAdmin = () => {
  const { response, loading, loadingNextPage } = useGetAllJobs()

  if (!response) return null

  console.log(response)

  return (
    <LayoutAdmin>
      <div style={{ width: "100%", textAlign: "center" }}>
        <h2>Vacantes</h2>
      </div>
      {/* TODO: Hacer la grid */}
      <Content>
        {
          loading && <h1>cargando....</h1>
        }
        {
          response.map(el => (
            <CardJobPreviewRecruiter info={el}/>
          ))
        }
      </Content>
    </LayoutAdmin>
  )
}

export default ListVacantsAdmin