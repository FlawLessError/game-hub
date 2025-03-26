import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../HomePage";

import GameDetailsPage from "../GameDetailsPage";
import Layout from "../Layout";
import ErrorPage from "../ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/games/:gameId",
        element: <GameDetailsPage />,
      },
    ],
  },
]);

const RouterContextProvider = () => {
  return <RouterProvider router={router} />;
};

export default RouterContextProvider;
