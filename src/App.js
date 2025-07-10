import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import "./App.css";

export default function App() {
  const { t, i18n } = useTranslation();
  const [showHelp, setShowHelp] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

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
          <Link to="/programs" className="nav-link">{t('programs')}</Link>
          <div
            className="help-dropdown-wrapper"
            style={{ display: 'inline-block', position: 'relative' }}
            onMouseEnter={() => setShowHelp(true)}
            onMouseLeave={() => setShowHelp(false)}
          >
            <div className="nav-link help-dropdown">
              {t('help')}
              <span style={{ marginLeft: 4 }}>▼</span>
            </div>
            {showHelp && (
              <div className="dropdown-menu" style={{ position: 'absolute', top: '2.2rem', left: 0, background: '#fff', boxShadow: '0 2px 8px rgba(0,0,0,0.12)', borderRadius: 6, zIndex: 10, minWidth: 140 }}>
                <Link to="/faq" className="dropdown-item" style={{ display: 'block', padding: '0.7rem 1.2rem', color: '#222', textDecoration: 'none' }}>{t('faq')}</Link>
                <Link to="/contact" className="dropdown-item" style={{ display: 'block', padding: '0.7rem 1.2rem', color: '#222', textDecoration: 'none' }}>{t('contact')}</Link>
              </div>
            )}
          </div>
          <span className="nav-link">{t('about')}</span>
          <span className="nav-link">{t('cart')}</span>
          <span className="icon">🔍</span>
          <span className="icon">🛒</span>
          <Link to="/landing" className="nav-link">{t('landing')}</Link>
          <Link to="/account" className="icon" title={t('account')} style={{ fontSize: '1.5rem', marginLeft: '0.7rem' }}>&#128100;</Link>
          <button onClick={() => changeLanguage('pt')} className="lang-btn" aria-label="Português" style={{ marginLeft: '1rem', background: 'none', border: 'none', fontSize: '1.3rem', cursor: 'pointer' }}>🇵🇹</button>
          <button onClick={() => changeLanguage('en')} className="lang-btn" aria-label="English" style={{ background: 'none', border: 'none', fontSize: '1.3rem', cursor: 'pointer' }}>🇬🇧</button>
        </nav>
      </header>
      <main>
        <section className="hero-section">
          <div className="hero-content">
            <h1 className="hero-title">SCIENCE-BASED<br />BODYBUILDING</h1>
            <button className="hero-btn">{t('programs')}</button>
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

