import React from 'react'
import ReactDOM from 'react-dom/client'
import 'antd/dist/reset.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './pages/login'
import { ConfigProvider, theme } from 'antd'
import DashBoard from './pages/dash-board'
import Performance from './pages/performance'
import 'tailwindcss/tailwind.css'
import './index.scss'
import Errors from './pages/errors'
import JsErrorPanel from './pages/errors/error-detail-pages/js-error-panel'
import UserBehavior from './pages/user-behavior'
import Alarm from './pages/alarm'
import initAxios from './api/http'
initAxios()

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login></Login>
  },
  {
    path: '/dashboard',
    element: <DashBoard></DashBoard>,

    children: [
      {
        path: 'performance',
        element: <Performance></Performance>
      },
      {
        path: 'error',
        element: <Errors></Errors>
      },
      {
        path: 'error/js/:id',
        element: <JsErrorPanel></JsErrorPanel>
      },
      {
        path: 'behavior',
        element: <UserBehavior></UserBehavior>
      },
      {
        path: 'alarm',
        element: <Alarm></Alarm>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#673281',
          colorFillContent: '#252226'
        }
      }}
    >
      <RouterProvider router={router} />
    </ConfigProvider>
  </React.StrictMode>
)
