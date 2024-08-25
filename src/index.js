import React from "react";
import ReactDOM from "react-dom/client";
import "../src/styles/common/index.scss";
import {RouterProvider} from "react-router-dom";
import routes from "../src/routes";
// import App from "./App";
// import {store} from "./redux/store";
// import {Provider} from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("__next"));
root.render(
   <React.StrictMode>
      <RouterProvider router={routes} />
   </React.StrictMode>
);
