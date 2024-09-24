import React from "react";
import {Outlet} from "react-router-dom";
import HeaderInvoice from "../HeaderComponent/HeaderInvoice";

const LayoutInvoice = () => {
   return (
      <div>
         {/* Đây là  Component Header */}
         <HeaderInvoice/>
         <Outlet /> {/* Đây là nơi hiển thị các component con của layout Dashboard */}
         {/* Đây là  Component Footer */}
      </div>
   );
};

export default LayoutInvoice;
