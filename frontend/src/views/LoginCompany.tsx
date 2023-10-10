import { Outlet } from 'react-router-dom'
import { LayoutFormView } from '../layouts/LayoutFormView'

const LoginCompany = () => {
  return (
    <LayoutFormView>
      <Outlet />
    </LayoutFormView>
  )
}

export default LoginCompany