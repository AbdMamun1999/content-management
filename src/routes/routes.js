import { createBrowserRouter } from "react-router-dom";
import AddProduct from "../components/Dashboard/AddProduct";
import Dashboard from "../components/Dashboard/Dashboard";
import ProductList from "../components/Dashboard/ProductList";
import Products from "../components/main/Products";
import Home from "../pages/main/Home";
import TravelDetails from "../pages/main/TravelDetails";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "travel-places/:placeId",
    element: <TravelDetails />,
  },
  ,
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard",
        element: <AddProduct />,
      },
      {
        path: "addproduct",
        element: <AddProduct />,
      },
      {
        path: "productlist",
        element: <ProductList />,
      },
    ],
  },
]);

export default routes;
