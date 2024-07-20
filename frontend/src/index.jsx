import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";
import { Toaster } from "sonner";

import reportWebVitals from "./reportWebVitals";
import App from "./App";

// Styles
import "./assets/css/styles.css";
import "./assets/css/tailwind.css";

// Internationalization config
import "./config/languages.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HashRouter>
    <React.StrictMode>
      <NextUIProvider>
        <Toaster />
        <App />
      </NextUIProvider>
    </React.StrictMode>
  </HashRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
