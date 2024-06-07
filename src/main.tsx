import '@scss/index.scss'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import Layout from './layout'
import { routes } from './routes/routes'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Layout>
      <RouterProvider router={routes} />
    </Layout>
  </React.StrictMode>,
)
