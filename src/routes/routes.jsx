import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "../pages/home/Home";
import { Layout } from "../components/Layout";
// import { About } from "../pages/about/About";

const RoutesIndex = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <Layout>
          <Home />
        </Layout>
      ),
    },
    // {
    //   path: "/about",
    //   element: <About />,
    // },
  ]);

  return <RouterProvider router={routes} />;
};

export default RoutesIndex;
