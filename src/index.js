import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import LandingPage from "./LandingPage";
import Programs from "./Programs";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/programs" element={<Programs />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
