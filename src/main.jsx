import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "react-hot-toast";


import App from "./App";

import "./index.css";
import "aos/dist/aos.css";
import "swiper/css";
import "react-photo-view/dist/react-photo-view.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
        <Toaster
          position="top-right"
          reverseOrder={false}
          toastOptions={{
            duration: 3500,
          }}
        />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);
