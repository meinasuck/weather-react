import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Weather from "./Weather";
import reportWebVitals from "./reportWebVitals";
import Footer from "./Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <Weather />
    <Footer />
  </React.StrictMode>
);

reportWebVitals();
