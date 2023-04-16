import Login from "../pages/login";
import DashBoard from "../pages/dash-board";
import React from "react";

const Errors = React.lazy(() => import("../pages/errors"));
const JsErrorPanel = React.lazy(
  () => import("../pages/errors/error-detail-pages/js-error-panel")
);
const UserBehavior = React.lazy(() => import("../pages/user-behavior"));
const Alarm = React.lazy(() => import("../pages/alarm"));
const TracePage = React.lazy(() => import("../pages/trace"));
const SourceMap = React.lazy(() => import("../pages/errors/sourcemap"));

const WebVitalPerformance = React.lazy(
  () => import("@/pages/performance/webvitals")
);
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login></Login>,
  },
  {
    path: "/dashboard",
    element: <DashBoard></DashBoard>,
    children: [
      {
        path: "performance",
        element: <WebVitalPerformance></WebVitalPerformance>,
      },

      {
        path: "error/collection",
        element: <Errors></Errors>,
      },
      {
        path: "error/js",
        element: <JsErrorPanel></JsErrorPanel>,
      },
      {
        path: "error/sourcemap",
        element: <SourceMap></SourceMap>,
      },
      {
        path: "behavior",
        element: <UserBehavior></UserBehavior>,
      },
      {
        path: "trace",
        element: <TracePage></TracePage>,
      },
      {
        path: "alarm",
        element: <Alarm></Alarm>,
      },
    ],
  },
]);
