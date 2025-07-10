import React from "react";
import { useTranslation } from 'react-i18next';
import "./App.css";

export default function Contact() {
  const { t } = useTranslation();
  return (
    <div className="contact-bg">
      <h1 className="contact-title">{t('contact_title')}</h1>
      <div className="contact-content">
        <p>{t('contact_desc')}</p>
        <ul className="contact-list">
          <li><b>Email:</b> <a href="mailto:ptedumarques@gmail.com">ptedumarques@gmail.com</a></li>
          <li><b>WhatsApp:</b> <a href="https://wa.me/351912345678" target="_blank" rel="noopener noreferrer">+351 912 345 678</a></li>
        </ul>
      </div>
    </div>
  );
}
