import React from "react";
import ReactDOM from "react-dom/client";
import "antd/dist/reset.css";
import "tailwindcss/tailwind.css";
import "./index.scss";

import { ConfigProvider } from "antd";
import initAxios from "./api/http";

initAxios();
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});
import { ReactQueryDevtools } from "react-query/devtools";
import App from "./app";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
    {process.env.NODE_ENV === "development" ? (
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    ) : (
      ""
    )}
    <React.StrictMode>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#5455B8",
            colorFillContent: "#252226",
            colorLink: "#3b3c81",
            colorLinkHover: "#B759E6",
          },
        }}
      >
        <App></App>
      </ConfigProvider>
    </React.StrictMode>
  </QueryClientProvider>
);
