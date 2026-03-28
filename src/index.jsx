import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { HeroUIProvider } from "@heroui/react";
import { Toaster } from "sonner";

import App from "./App";

// Styles
import "./assets/css/tailwind.css";

// Internationalization config
import "./config/languages.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HashRouter>
    <React.StrictMode>
      <HeroUIProvider>
        <Toaster />
        <App />
      </HeroUIProvider>
    </React.StrictMode>
  </HashRouter>
);
