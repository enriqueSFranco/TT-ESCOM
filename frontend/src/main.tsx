import React from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './Root'
import { Provider } from 'react-redux'
import store from './stores'
import { ThemeProvider } from '../src/context/ThemeContext'
import './index.css'

const $app = document.getElementById('app') as HTMLElement
const root = createRoot($app)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
)

