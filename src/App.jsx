import React from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/home";
import OrderPage from "./pages/OrderPage";



const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "order",
          element: <OrderPage />,
        },
      ],
    },
  ]);

  // Use RouterProvider to render the router
  return <RouterProvider router={router} />;
};

export default App;
