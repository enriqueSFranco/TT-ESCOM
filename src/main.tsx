import React from 'react'
import { createRoot } from "react-dom/client"
import { RouterProvider } from "react-router-dom"
import { Provider } from 'react-redux'
import { router } from './Root'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import store from './stores'
import './index.css'

const $app = document.getElementById('app') as HTMLElement
const root = createRoot($app)

const queryClient = new QueryClient()

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
)

