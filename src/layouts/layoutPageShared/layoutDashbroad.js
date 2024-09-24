import React from "react";
import {Outlet} from "react-router-dom";
import Footer from "../footer";

const LayoutDashboard = () => {
   console.log("LayoutDashboard");

   return (
      <>
         {/* Đây là  Component Header */}
         <h2>HEADER</h2>
         <Outlet /> {/* Đây là nơi hiển thị các component con của layout Dashboard */}
        
         {/* Đây là  Component Footer */}
         <Footer/>
      </>
   );
};

export default LayoutDashboard;
