import { useLocation } from 'react-router-dom'
const path2breadcrumb: any = {
  dashboard: '控制台',
  performance: '性能分析',
  error: '错误分析',
  collection: "错误收集",
  sourcemap: "sourcemap",
  user: '埋点数据',
  js: '运行时错误',
  http: 'HTTP错误',
  alarm: '告警设置',
  trace: "埋点管理",
  behavior: "用户行为"
}
function useBreadcrumb() {
  const location = useLocation()
  const pathname = location.pathname
  console.log(
    'p:',
    pathname.split('/').filter((i) => i != '')
  )
  return pathname
    .split('/')
    .filter((i) => i != '')
    .map((i) => path2breadcrumb[i])
}

export default useBreadcrumb
