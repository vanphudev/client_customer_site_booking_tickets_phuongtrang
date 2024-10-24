import React from "react";
import {Outlet} from "react-router-dom";
import Footer from "../footer";

const LayoutInvoice = () => {
   return (
      <div>
         {/* Đây là  Component Header */}
         <Outlet /> {/* Đây là nơi hiển thị các component con của layout Dashboard */}
         {/* Đây là  Component Footer */}
         <Footer/>
      </div>
   );
};

export default LayoutInvoice;
