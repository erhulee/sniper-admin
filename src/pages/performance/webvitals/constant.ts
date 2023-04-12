export const tooltipsMap: Record<string, { name: string, detail: string }> = {
    TTFB: {
        name: "首字节时间",
        detail: "浏览器开始收到服务器响应数据的时间(后台处理时间+重定向时间)"
    },
    LCP: {
        name: "最大内容绘制",
        detail: "为了提供良好的用户体验，LCP 应在页面首次开始加载后的2.5 秒内发生。"
    },
    FID: {
        name: "首次输入延迟",
        detail: "测量交互性。为了提供良好的用户体验，页面的 FID 应为100 毫秒或更短。",
    },
    CLS: {
        name: "累积布局偏移",
        detail: "，测量视觉稳定性。为了提供良好的用户体验，页面的 CLS 应保持在 0.1. 或更少。"
    },
    FCP: {
        name: "首内容渲染",
        detail: "表示渲染出第一个内容，这里的“内容”可以是文本、图片、canvas。"
    }
};