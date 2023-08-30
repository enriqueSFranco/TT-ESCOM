import React from 'react'
import 'babel-polyfill'
import { createRoot } from "react-dom/client"
import { RouterProvider } from "react-router-dom"
import { router } from './Root'
import { Provider } from 'react-redux'
import store from './stores'
import './index.css'

const $app = document.getElementById('app') as HTMLElement
const root = createRoot($app)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
)

