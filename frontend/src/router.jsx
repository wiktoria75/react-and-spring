import { Outlet, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import RegisterPage from "./pages/RegisterPage";
import StarterPage from "./pages/StarterPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Outlet />
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <StarterPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
        errorElement: <ErrorPage />,
      }
    ],
  },
]);

export default router;
