import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/main/Home";

const routes = createBrowserRouter([
    {
        path:"/",
        element:<Home/>
    }
])

export default routes