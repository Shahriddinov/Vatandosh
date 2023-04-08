import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import store from "./reduxToolkit/store";

import Routes from "./routes";

import "swiper/swiper.min.css";
import "swiper/swiper-bundle.css";
import "./assets/style/global.scss";
import "./assets/style/Footer.scss";
import "./assets/style/Header.scss";
import "animate.css/animate.min.css";
import GrayContextProvider from "./context/GrayContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Suspense fallback="">
      <GrayContextProvider>
        <Provider store={store}>
          <Routes />
        </Provider>
      </GrayContextProvider>
    </Suspense>
  </React.StrictMode>
);
