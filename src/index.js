// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter } from "react-router-dom";
import { SearchProvider } from "./components/Navbar/SearchContext"; 
import "@fortawesome/fontawesome-free/css/all.min.css";
import { CartProvider } from "./components/Cartpage/Cartcontext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <SearchProvider>
        <CartProvider>
          {" "}
          {/* ✅ Wrap here */}
          <App />
        </CartProvider>
      </SearchProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
