import React from "react";
import LayoutDashboard from "../../layouts/layoutPageShared/layoutDashbroad";
import LayoutInvoice from "../../layouts/layoutPageShared/layoutInvoice";
import Home from "../../pages/home";
import AboutUs from "../../pages/ve-chung-toi";
import Schedule from "../../pages/lich-trinh";
import Invoice from "../../pages/tra-cuu-hoa-don";
import BookingTicketManager from "../../pages/tra-cuu-ve";
import News from "../../pages/tin-tuc";
import BookingTicket from "../../pages/dat-ve";
import Payment from "../../pages/thanh-toan";
// import NotFound from "../../pages/notFound";

const PublicRoutes = [
   {
      path: process.env.REACT_APP_PAGE_PATH_HOME_FIRST,
      element: <LayoutDashboard />,
      children: [
         {
            index: true,
            element: <Home />,
         },
         {
            path: process.env.REACT_APP_PAGE_PATH_HOME_INDEX,
            element: <Home />,
         },
         {
            path: process.env.REACT_APP_PAGE_PATH_HOME_SECOND,
            element: <Home />,
         },
         {
            path: process.env.REACT_APP_PAGE_PATH_ABOUT_US,
            element: <AboutUs />,
         },
         {
            path: process.env.REACT_APP_PAGE_PATH_SCHEDULE,
            element: <Schedule />,
         },
         {
            path: process.env.REACT_APP_PAGE_PATH_INVOICE,
            element: <Invoice />,
         },
         {
            path: process.env.REACT_APP_PAGE_PATH_BOOKING_TICKET_MANAGER,
            element: <BookingTicketManager />,
         },
         {
            path: process.env.REACT_APP_PAGE_PATH_NEWS,
            element: <News />,
         },
         {
            path: process.env.REACT_APP_PAGE_PATH_BOOKING_TICKET,
            element: <BookingTicket />,
         },
         {
            path: process.env.REACT_APP_PAGE_PATH_PAYMENT,
            element: <Payment />,
         },
         // {
         //    path: process.env.REACT_APP_PAGE_PATH_PAYMENT,
         //    element: <NotFound />,
         // },
      ],
   },
   {
      path: process.env.REACT_APP_PAGE_PATH_INVOICE,
      element: <LayoutInvoice />,
      children: [
         {
            index: true,
            element: <Invoice />,
         },
      ],
   },
];

export default PublicRoutes;
