# 使用说明

> 目前 npm / vite-plugin 方案还在测试中

# 平台申请 Appid

新用户需要登录平台 [https://sniper-admin.vercel.app](https://sniper-admin.vercel.app/dashboard/performance)， 注册 / 登录后在右上角点击 + 号，申请一个项目 ID（appid）

# SDK 导入

💡 目前平台只支持 post 请求

## 使用 CDN 导入

```jsx
<script src="https://bdul0j-web-site.oss.laf.dev/index.js"></script>
<script>
      var webMonitor = new window.WebMonitor(
         "平台上申请的 appid",
         "post",
         "xhr");
     WebMonitor.start();
 </script>
```

只有 appid 是必须填写的，可以简写 `var webMonitor = new window.WebMonitor("平台上申请的 appid"）`

## 使用 Vite 插件一键导入

> 其核心原理也是使用的 cdn

```bash
yarn add sniper-vite-plugin
```

```bash
import { defineConfig, PluginOption } from 'vite'
import react from '@vitejs/plugin-react'
import SniperPlugin from "sniper-vite-plugin"

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    sourcemap: true
  },
  plugins: [SniperPlugin({
    appid: "appid",
    endpoint: "https://bdul0j.laf.dev/sourceMapUpload",
  }), react()],
})
```

这里的 endpoint 是自动上传 sourceMap 的地址

## 使用 NPM 包

```bash
yarn add sniper-web-monitor
```

```bash
import WebMonitor from "sniper-web-monitor"
const webMonitor = new WebMonitor(
         "平台上申请的 appid",
         "post",
         "xhr");
WebMonitor.start();
```

# 一些在实践的代码规范
