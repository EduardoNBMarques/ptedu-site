import React from "react";
import "./App.css";
import { useTranslation } from 'react-i18next';

export default function LandingPage() {
  const { t } = useTranslation();
  return (
    <div className="lp-bg">
      <div className="lp-banner">{t('waitlist_open')}</div>
      <main className="lp-main">
        <section className="lp-content">
          <div className="lp-logo">EM</div>
          <h1 className="lp-title">
            {t('main_title')}<br />
            <span className="lp-highlight">{t('main_subtitle')}</span>
          </h1>
          <p className="lp-desc">
            {t('main_desc')}
          </p>
          <form className="lp-form">
            <input type="text" placeholder={t('your_full_name')} />
            <input type="email" placeholder={t('your_email')} />
            <input type="text" placeholder={t('your_whatsapp')} />
            <button type="submit">{t('change_body')}</button>
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
