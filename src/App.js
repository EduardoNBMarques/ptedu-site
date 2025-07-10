import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

export default function App() {
  return (
    <div className="main-bg">
      <header className="top-bar">
        <div className="logo-area">
          <Link to="/" className="logo-link">
            <span className="logo">EM</span>
            <span className="brand">PT EDU MARQUES</span>
          </Link>
        </div>
        <nav className="nav-area">
          <Link to="/programs" className="nav-link">PROGRAMS</Link>
          <span className="nav-link">ABOUT</span>
          <span className="nav-link">CART</span>
          <span className="icon">🔍</span>
          <span className="icon">🛒</span>
          <Link to="/landing" className="nav-link">LANDING</Link>
          <Link to="/account" className="icon" title="Área Pessoal" style={{fontSize: '1.5rem', marginLeft: '0.7rem'}}>&#128100;</Link>
        </nav>
      </header>
      <main>
        <section className="hero-section">
          <div className="hero-content">
            <h1 className="hero-title">SCIENCE-BASED<br />BODYBUILDING</h1>
            <button className="hero-btn">VIEW PROGRAMS</button>
          </div>
        </section>
        <section className="testimonial-section">
          <blockquote>“Jeff’s training programs have completely changed how I look and feel.”</blockquote>
          <div className="testimonial-info">
            <span className="stars">★★★★★</span>
            <span className="customer">JORDAN R.<br /><span className="verified">Verified Customer</span><br />THE ESSENTIALS PROGRAM</span>
          </div>
        </section>
      </main>
    </div>
  );
}

