import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./Pages/Home";
import ScrollToTopButton from "./components/ScrollBtn/ScrollBtn";
import { ThemeProvider } from "./Context/ThemeContext";

export default function App() {
      const router= createBrowserRouter([
        {path:"/",element:<Layout />, children: [{
          path:"/",element:<Home />
        }]},
      ])
  return <>
    <ThemeProvider>
      <RouterProvider router={router} />
       <ScrollToTopButton />
    </ThemeProvider>
  </>
}
