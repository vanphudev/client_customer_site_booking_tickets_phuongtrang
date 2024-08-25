import React from "react";
import LayoutDashboard from "../../layouts/layoutPageShared/layoutDashbroad";
import Home from "../../pages/home";

const PrivateRoutes = [
   {
      path: process.env.REACT_APP_PAGE_PATH_HOME_FIRST,
      element: <LayoutDashboard />,
      children: [
         {
            index: true,
            element: <Home />,
         },
         {
            path: process.env.REACT_APP_PAGE_PATH_HOME_SECOND,
            element: <Home />,
         },
         {path: process.env.REACT_APP_PAGE_PATH_HOME_INDEX, element: <Home />},
      ],
   },
];

export default PrivateRoutes;
