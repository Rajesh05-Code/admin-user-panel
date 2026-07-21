import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from "./Pages/Auth/LoginForm/Login";
import { RegistrationForm } from "./Pages/Auth/RegistrationForm/Registration";
import { ToastContainer } from "react-toastify";
import { Dashboard } from "./Pages/DashboardPage/Dashboard";
import { Navigate } from "react-router-dom";
import { ProtectedRoute, PublicRoute } from "./Route";
import { Layout } from "./Pages/LayoutPage/Layout";
import { SettingPage } from "./Pages/SettingPage/SettingPage";
import { Forgot } from "./Pages/Auth/ForgotPage/Forgot";
import { OtpVerification } from "./Pages/Auth/OTP Verification Page/OtpVerification";
import { Reset } from "./Pages/Auth/ResetPage/Reset";
import { TodoList } from "./Pages/TodoList/TodoList";
import Timer from "./Pages/Timer/Timer";
import { Axios } from "./Pages/Axios/Axios";

export const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: (
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          ),
        },
        {
          path: "/todolist",
          element: (
            <ProtectedRoute>
              <TodoList/>
            </ProtectedRoute>
          ),
        },
         {
          path: "/timer",
          element: (
            <ProtectedRoute>
              <Timer />
            </ProtectedRoute>
          ),
        },

          {
          path: "/axios",
          element: (
            <ProtectedRoute>
              < Axios/>
            </ProtectedRoute>
          ),
        },
        {
          path: "/setting",
          element: (
            <ProtectedRoute>
              <SettingPage />
            </ProtectedRoute>
          ),
        },
      ],
    },

    {
      path: "/login",
      element: (
        <PublicRoute>
          <Login />
        </PublicRoute>
      ),
    },
    {
      path: "/register",
      element: (
        <PublicRoute>
          <RegistrationForm />
        </PublicRoute>
      ),
    },

    {
      path: "/forgot",
      element: (
        <PublicRoute>
          <Forgot />
        </PublicRoute>
      ),
    },

    {
      path: "/OtpVerification",
      element: (
        <PublicRoute>
          <OtpVerification />
        </PublicRoute>
      ),
    },

    {
      path: "/reset",
      element: (
        <PublicRoute>
          <Reset />
        </PublicRoute>
      ),
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
};
