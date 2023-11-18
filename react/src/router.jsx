import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "./views/AuthLayout";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";

const router = createBrowserRouter([
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
