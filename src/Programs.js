import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import "./App.css";

export default function Programs() {
  const { t } = useTranslation();
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
          <span className="nav-link">{t('about')}</span>
          <span className="nav-link">{t('cart')}</span>
          <span className="icon">🔍</span>
          <span className="icon">🛒</span>
          <Link to="/landing" className="nav-link">{t('landing')}</Link>
        </nav>
      </header>
      <div className="programs-bg">
        <h2 className="programs-title">{t('online_packages')} <span className="programs-sub">({t('monthly_value')})</span></h2>
        <div className="programs-table">
          <div className="programs-header">
            <div className="programs-col programs-col1">{t('package')}</div>
            <div className="programs-col programs-col2">{t('included_services')}</div>
            <div className="programs-col programs-col3">{t('price')}</div>
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
