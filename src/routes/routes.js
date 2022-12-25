import { createBrowserRouter } from "react-router-dom";
import AddTravel from "../components/Dashboard/AddTravel";
import Dashboard from "../components/Dashboard/Dashboard";
import ProductList from "../components/Dashboard/ProductList";
import TravelUpdate from "../components/Dashboard/TravelUpdate";
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
        element: <AddTravel />,
      },
      {
        path: "addproduct",
        element: <AddTravel />,
      },
      {
        path: "productlist",
        element: <ProductList />,
      },
      {
        path: "product-update/:listTravelId",
        element: <TravelUpdate />,
      },
    ],
  },
]);

export default routes;
