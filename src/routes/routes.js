import { createBrowserRouter } from "react-router-dom";
import AddContent from "../components/Dashboard/AddContent";
import Dashboard from "../components/Dashboard/Dashboard";
import ContentList from "../components/Dashboard/ContentList";
import Home from "../pages/main/Home";
import ContentUpdate from "../components/Dashboard/ContentUpdate";
import ContentDetails from "../pages/main/ContentDetails";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "contents/:content_id",
    element: <ContentDetails />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard",
        element: <AddContent />,
      },
      {
        path: "add-content",
        element: <AddContent />,
      },
      {
        path: "contents",
        element: <ContentList />,
      },
      {
        path: "contents/:contentId",
        element: <ContentUpdate />,
      },
    ],
  },
]);

export default routes;
