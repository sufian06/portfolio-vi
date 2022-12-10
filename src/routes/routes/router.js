import { createBrowserRouter } from "react-router-dom";
import Home from "../../pages/Home/Home/Home";
import Layout from "../../pages/Layout/Layout";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      }
    ]
  }
]);

export default router;