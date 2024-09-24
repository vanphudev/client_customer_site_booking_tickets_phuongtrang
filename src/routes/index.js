import {createBrowserRouter} from "react-router-dom";

import BookingTicketManager from "../pages/tracuuve/tra-cuu-ve";
import Schedule from "../pages/lichtrinh/lich-trinh";
import LayoutDashboard from "../layouts/layoutPageShared/layoutDashbroad";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <LayoutDashboard/>, 
        isShowHeader: true
    },
    {
        path: '/tra-cuu-ve',
        element: <BookingTicketManager />, 
        isShowHeader: true
    },
    {
        path: '/lich-trinh',
        element: <Schedule />, 
        isShowHeader: true
    }

    
]);

export default routes;
