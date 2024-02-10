import { Outlet, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import RegisterPage from "./pages/RegisterPage";
import StarterPage from "./pages/StarterPage";
import LoginPage from "./pages/LoginPage";
import UserPage from "./pages/UserPage";
import AdminPage from "./pages/AdminPage";
import { UserProvider } from "./services/AuthService";


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <UserProvider>
        <Outlet />
      </UserProvider>
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
      },
      {
        path: "/login",
        element: <LoginPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/books",
        element: <UserPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/kids",
        element: <AdminPage />,
        errorElement: <ErrorPage />,
      }
    ],
  },
]);

export default router;
