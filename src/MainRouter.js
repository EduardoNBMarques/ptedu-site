import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import App from "./App";
import About from "./About";
import Programs from "./Programs";

export default function MainRouter() {
  return (
    <Router>
      <nav style={{ background: "#fff", padding: "0.5rem 2rem", boxShadow: "0 2px 8px rgba(0,0,0,0.04)", display: "flex", gap: "2rem" }}>
        <Link to="/" style={{ textDecoration: "none", color: "#222", fontWeight: 700 }}>Início</Link>
        <Link to="/programas" style={{ textDecoration: "none", color: "#222" }}>Programas</Link>
        <Link to="/sobre" style={{ textDecoration: "none", color: "#222" }}>Sobre</Link>
      </nav>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/programas" element={<Programs />} />
        <Route path="/sobre" element={<About />} />
      </Routes>
    </Router>
  );
}
