import { Outlet } from "react-router-dom"
import { LayoutFormView } from "../layouts/LayoutFormView"

const Candidate = () => {
  return (
    <LayoutFormView>
      <Outlet />
    </LayoutFormView>
  )
}

export default Candidate
