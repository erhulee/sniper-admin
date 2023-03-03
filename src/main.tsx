import React from 'react'
import ReactDOM from 'react-dom/client'
import 'antd/dist/reset.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ConfigProvider, theme } from 'antd'

import loadable from '@loadable/component';
import Login from './pages/login'
import DashBoard from './pages/dash-board'

// import Performance from './pages/performance'
// const Performance = React.lazy(() => import('./pages/performance'));
// import Errors from './pages/errors'
// import JsErrorPanel from './pages/errors/error-detail-pages/js-error-panel'
// import UserBehavior from './pages/user-behavior'

// import Alarm from './pages/alarm'
// import Trace from './pages/trace'
const Performance = loadable(() => import('./pages/performance'));
const Errors = loadable(() => import('./pages/errors'));
const JsErrorPanel = loadable(() => import('./pages/errors/error-detail-pages/js-error-panel'));

const UserBehavior = loadable(() => import('./pages/user-behavior'));
const Alarm = loadable(() => import('./pages/alarm'));
const Trace = loadable(() => import('./pages/trace'));
import 'tailwindcss/tailwind.css'
import './index.scss'

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
        path: 'trace',
        element: <Trace></Trace>
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
