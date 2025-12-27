import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "../pages/home/Home";
import Products from "../pages/products/Products";
import { Layout } from "../components/Layout";
import { Services } from "../pages/services/Services";
import MontexProductPage from "../pages/monetX/MontexProductPage";
import SupportxProductPage from "../pages/supportX/SupportxProductPage";
import AboutUs from "../pages/aboutUs/AboutUs";
import ContactUs from "../pages/contact";

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

    {
      path: "/about",
      element: <Layout><AboutUs /></Layout>,
    },
    {
      path: "/contact-us",
      element: <Layout><ContactUs /></Layout>,
    },
  ]);

  return <RouterProvider router={routes} />;
};

export default RoutesIndex;
