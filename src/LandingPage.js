import React from "react";
import "./App.css";

export default function LandingPage() {
  return (
    <div className="lp-bg">
      <div className="lp-banner">LISTA DE ESPERA RE-ABERTA</div>
      <main className="lp-main">
        <section className="lp-content">
          <div className="lp-logo">EM</div>
          <h1 className="lp-title">
            MUDA O CORPO, RECONQUISTA A CONFIANÇA E MELHORA A TUA SAÚDE,<br />
            <span className="lp-highlight">COMENDO O QUE GOSTAS TODO O SANTO DIA.</span>
          </h1>
          <p className="lp-desc">
            Conhece <b>(sem compromisso)</b> o nosso programa de transformação corporal e a nossa metodologia <span className="lp-simple">simples, realista e verdadeira</span>.
          </p>
          <form className="lp-form">
            <input type="text" placeholder="O teu nome completo" />
            <input type="email" placeholder="O teu email (que usas mais!)" />
            <input type="text" placeholder="🇵🇹 O teu número WhatsApp" />
            <button type="submit">Quero mudar o corpo</button>
          </form>
          <div className="lp-badges">
            <div className="lp-badge">5.0 ★★★★★</div>
            <div className="lp-badge-group">
              <span className="lp-badge-circle"></span>
              <span className="lp-badge-circle"></span>
              <span className="lp-badge-circle"></span>
              <span className="lp-badge-circle"></span>
              <span className="lp-badge-circle"></span>
            </div>
          </div>
        </section>
        <section className="lp-side"></section>
      </main>
    </div>
  );
}
