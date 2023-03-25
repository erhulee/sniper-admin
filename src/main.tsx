import React from 'react'
import ReactDOM from 'react-dom/client'
import 'antd/dist/reset.css'
import { ConfigProvider } from 'antd'
import 'tailwindcss/tailwind.css'
import './index.scss'

import initAxios from './api/http'

initAxios()
import { QueryClient, QueryClientProvider } from 'react-query'
const queryClient = new QueryClient()
import { ReactQueryDevtools } from 'react-query/devtools'
import App from './app'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // 提供client
  <QueryClientProvider client={queryClient}>
    {/* 添加devtools */}
    {process.env.NODE_ENV === 'development' ? (
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    ) : (
      ''
    )}
    <React.StrictMode>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#673281',
            colorFillContent: '#252226'
          }
        }}
      >
        <App></App>
      </ConfigProvider>
    </React.StrictMode>
  </QueryClientProvider>
)
