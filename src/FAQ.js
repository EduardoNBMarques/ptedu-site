import React from "react";
import { useTranslation } from 'react-i18next';
import "./App.css";

export default function FAQ() {
  const { t } = useTranslation();
  return (
    <div className="faq-bg">
      <h1 className="faq-title">FAQS</h1>
      <div className="faq-list">
        <div className="faq-item">
          <div className="faq-number">01</div>
          <div className="faq-content">
            <h3>{t('faq1_q')}</h3>
            <p>{t('faq1_a')}</p>
          </div>
        </div>
        <div className="faq-item">
          <div className="faq-number">02</div>
          <div className="faq-content">
            <h3>{t('faq2_q')}</h3>
            <p>{t('faq2_a')}</p>
          </div>
        </div>
        <div className="faq-item">
          <div className="faq-number">03</div>
          <div className="faq-content">
            <h3>{t('faq3_q')}</h3>
            <p>{t('faq3_a')}</p>
          </div>
        </div>
        <div className="faq-item">
          <div className="faq-number">04</div>
          <div className="faq-content">
            <h3>{t('faq4_q')}</h3>
            <p>{t('faq4_a')}</p>
          </div>
        </div>
        <div className="faq-item">
          <div className="faq-number">05</div>
          <div className="faq-content">
            <h3>{t('faq5_q')}</h3>
            <p>{t('faq5_a')}</p>
          </div>
        </div>
        <div className="faq-item">
          <div className="faq-number">06</div>
          <div className="faq-content">
            <h3>{t('faq6_q')}</h3>
            <p>{t('faq6_a')}</p>
          </div>
        </div>
        <div className="faq-item">
          <div className="faq-number">07</div>
          <div className="faq-content">
            <h3>{t('faq7_q')}</h3>
            <p>{t('faq7_a')}</p>
          </div>
        </div>
        <div className="faq-item">
          <div className="faq-number">08</div>
          <div className="faq-content">
            <h3>{t('faq8_q')}</h3>
            <p>{t('faq8_a')}</p>
          </div>
        </div>
      </div>
      <div className="faq-question-mark">?</div>
    </div>
  );
}
