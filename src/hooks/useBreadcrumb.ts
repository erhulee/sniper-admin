import { useLocation } from "react-router-dom"
const path2breadcrumb:any = {
    "dashboard":"控制台",
    "performance":"性能分析",
    "error":"错误收集",
    "user":"埋点数据"
}
function useBreadcrumb(){
    const location = useLocation();
    const pathname = location.pathname;
    return pathname.split("/").filter(i=>i!="").map(i=>path2breadcrumb[i])
}

export default useBreadcrumb