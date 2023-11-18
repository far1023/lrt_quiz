import { Navigate, createBrowserRouter } from "react-router-dom";

import AuthLayout from "./views/layouts/AuthLayout";
import DLayout from "./views/layouts/DLayout";
import Dashboard from "./views/Dashboard";
import LoginForm from "./components/LoginForm";
import Quiz from "./views/Quiz";
import SignupForm from "./components/SignupForm";

const router = createBrowserRouter([
  {
    path: "/home",
    element: <DLayout />,
    children: [
      {
        path: "",
        element: <Navigate to="dashboard" />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "quizes",
        element: <Quiz />,
      },
    ],
  },
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "/login",
        element: <LoginForm />,
      },
      {
        path: "/signup",
        element: <SignupForm />,
      },
    ],
  },
]);

export default router;
