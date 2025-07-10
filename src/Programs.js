import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

export default function Programs() {
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
        </nav>
      </header>
      <div className="programs-bg">
        <h2 className="programs-title">Pacotes Online <span className="programs-sub">(valor mensal)</span></h2>
        <div className="programs-table">
          <div className="programs-header">
            <div className="programs-col programs-col1">Pacote</div>
            <div className="programs-col programs-col2">Serviços Incluídos</div>
            <div className="programs-col programs-col3">Preço</div>
          </div>
          <div className="programs-row">
            <div className="programs-col programs-col1">First Steps</div>
            <div className="programs-col programs-col2">
              <ul>
                <li>1 sessão por semana</li>
                <li>Plano personalizado de Treino (para fazeres onde quiseres, ex: casa, ginásio, outdoor)</li>
                <li>Reeducação alimentar</li>
                <li>Follow-up por WhatsApp (dúvidas, dificuldades, motivação extra, apoio permanente)</li>
              </ul>
            </div>
            <div className="programs-col programs-col3">
              <a href="https://buy.stripe.com/fZe6rl0Fxchw55S149" className="programs-price-btn" target="_blank" rel="noopener noreferrer">
                <span className="programs-price">107€/mês</span>
              </a>
            </div>
          </div>
          <div className="programs-row">
            <div className="programs-col programs-col1">Fit Evolution</div>
            <div className="programs-col programs-col2">
              <ul>
                <li>2 sessões de 30 min por mês</li>
                <li>Plano personalizado de Treino (para fazeres onde quiseres, ex: casa, ginásio, outdoor)</li>
                <li>Reeducação alimentar</li>
                <li>Follow-up por WhatsApp (dúvidas, dificuldades, motivação extra, apoio permanente)</li>
              </ul>
            </div>
            <div className="programs-col programs-col3">
              <a href="https://buy.stripe.com/9AQ2b52NF4P4eGsfZ1" className="programs-price-btn" target="_blank" rel="noopener noreferrer">
                <span className="programs-price">62€/mês</span>
              </a>
            </div>
          </div>
          <div className="programs-row">
            <div className="programs-col programs-col1">Fit Independence</div>
            <div className="programs-col programs-col2">
              <ul>
                <li>1 sessão de 30 min por mês</li>
                <li>Plano personalizado de Treino (para fazeres onde quiseres, ex: casa, ginásio, outdoor)</li>
                <li>Reeducação alimentar</li>
                <li>Follow-up por WhatsApp (dúvidas, dificuldades, motivação extra, apoio permanente)</li>
              </ul>
            </div>
            <div className="programs-col programs-col3">
              <a href="https://buy.stripe.com/9AQ8ztfArgxM7e03cc" className="programs-price-btn" target="_blank" rel="noopener noreferrer">
                <span className="programs-price">42€/mês</span>
              </a>
            </div>
          </div>
          <div className="programs-row">
            <div className="programs-col programs-col1">Fit Essencial</div>
            <div className="programs-col programs-col2">
              <ul>
                <li>Plano personalizado de Treino (para fazeres onde quiseres, ex: casa, ginásio, outdoor)</li>
                <li>Reeducação alimentar</li>
                <li>Follow-up por WhatsApp (dúvidas, dificuldades, motivação extra, apoio permanente)</li>
              </ul>
            </div>
            <div className="programs-col programs-col3">
              <a href="https://buy.stripe.com/bIYdTN3RJchweGs001" className="programs-price-btn" target="_blank" rel="noopener noreferrer">
                <span className="programs-price">32€/mês</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
