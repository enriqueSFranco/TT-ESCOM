import React from 'react'
import { Outlet } from 'react-router-dom'
import LayoutAdmin from 'Layout/LayoutAdmin'

const Index = () => {
  return (
    <LayoutAdmin>
      <Outlet />
    </LayoutAdmin>
  )
}

export default Index