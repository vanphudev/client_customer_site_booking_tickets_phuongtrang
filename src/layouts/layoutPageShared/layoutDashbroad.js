import React from "react";
import {Outlet} from "react-router-dom";
import HeaderComponent from "../HeaderComponent/HeaderComponent";
import { GlobalStyle } from "../HeaderComponent/style";



const LayoutDashboard = () => {
   console.log("LayoutDashboard");

   return (
      <>
      <GlobalStyle/>


         {/* Đây là  Component Header */}
       <h2> <HeaderComponent/></h2>
         <Outlet /> {/* Đây là nơi hiển thị các component con của layout Dashboard */}
         {/* Đây là  Component Footer */}
         <h2>FOOTER</h2>
      </>
   );
};

export default LayoutDashboard;
