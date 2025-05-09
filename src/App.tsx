import "./global.css";
import { RouterProvider } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { router } from "./Routes";

export function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | pizza.shop" />
      <RouterProvider router={router} />
    </HelmetProvider>
  );
}
