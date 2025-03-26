import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../HomePage";

import GameDetailsPage from "../GameDetailsPage";
import Layout from "../Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
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
