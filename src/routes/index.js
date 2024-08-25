import {createBrowserRouter} from "react-router-dom";
import PublicRoutes from "./publicRoute";
import PrivateRoutes from "./privateRoute";

const routes = createBrowserRouter([...PublicRoutes, ...PrivateRoutes]);

export default routes;
