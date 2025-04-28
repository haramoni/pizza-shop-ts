import { createBrowserRouter } from "react-router-dom";
import { Dashboard } from "./Pages/app/dashboard";
import { SignIn } from "./Pages/auth/sign-in";
import { AppLayout } from "./Pages/_layouts/app";
import { AuthLayout } from "./Pages/_layouts/auth";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [{ path: "/", element: <Dashboard /> }],
  },
  {
    path: "sign-in",
    element: <AuthLayout />,
    children: [{ path: "/sign-in", element: <SignIn /> }],
  },
]);
