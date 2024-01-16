import { createBrowserRouter } from "react-router-dom";
import MainScreen from "../pages/MainScreen";

//Add your relevant routes here.
const routes = createBrowserRouter([
    {
        path: "/chat",
        element: <MainScreen />
    }
]);

export default routes;