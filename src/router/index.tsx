import Login from "../pages/login";
import DashBoard from "../pages/dash-board";
import Errors from "../pages/errors";
import JsErrorPanel from "../pages/errors/error-detail-pages/js-error-panel";
import UserBehavior from "../pages/user-behavior";
import Alarm from "../pages/alarm";
import TracePage from "../pages/trace";
import SourceMap from "../pages/errors/sourcemap";
import { createBrowserRouter } from "react-router-dom";
import { WebVitalPerformance } from "../pages/performance";

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
