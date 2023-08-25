import React from 'react'
import { createRoot } from "react-dom/client"
import { RouterProvider } from "react-router-dom"
import { router } from './Root'
import './index.css'

const $app = document.getElementById('app') as HTMLElement
const root = createRoot($app)

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

