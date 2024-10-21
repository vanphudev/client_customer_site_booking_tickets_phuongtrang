import React from "react";
import ReactDOM from "react-dom/client";
import "../src/styles/common/index.scss";
import App from "./App";
import {ConfigProvider} from "antd";
import config from "./configs/theme";
// import {RouterProvider} from "react-router-dom";
// import routes from "../src/routes";
import "./styles/style.scss";
// import App from "./App";
// import {store} from "./redux/store";
// import {Provider} from "react-redux";
const root = ReactDOM.createRoot(document.getElementById("__next"));
root.render(
   <React.StrictMode>
      <ConfigProvider theme={config}>
         <App />
      </ConfigProvider>
   </React.StrictMode>
);
