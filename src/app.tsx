import Login from "./pages/login";
import DashBoard from "./pages/dash-board";
import Performance from "./pages/performance";
import Errors from "./pages/errors";
import JsErrorPanel from "./pages/errors/error-detail-pages/js-error-panel";
import UserBehavior from "./pages/user-behavior";
import Alarm from "./pages/alarm";
import TracePage from "./pages/trace";
import SourceMap from "./pages/errors/sourcemap";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
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
          element: <Performance></Performance>,
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

  return <RouterProvider router={router} />;
}

export default App;
