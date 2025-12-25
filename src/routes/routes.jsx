import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "../pages/home/Home";
import Products from "../pages/products/Products";
import { Layout } from "../components/Layout";
import { Services } from "../pages/services/Services";
import MontexProductPage  from "../pages/monetX/MontexProductPage";
import SupportxProductPage from "../pages/supportX/SupportxProductPage";
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
    {
      path: "/services",
      element: (
        <Layout>
          <Services />
        </Layout>
      ),
    },
    {
      path: "/products",
      element: (
        <Layout>
          <Products />
        </Layout>
      ),
    },
    {
      path: "/montex",
      element: (
        <Layout>
          <MontexProductPage />
        </Layout>
      ),
    },    
    {
      path: "/supportx",
      element: (
        <Layout>
          <SupportxProductPage />
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
