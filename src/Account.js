import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword } from "firebase/auth";
import { useTranslation } from 'react-i18next';
import "./App.css";
import "./firebase";

export default function Account() {
  const { t } = useTranslation();
  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [user, setUser] = useState(null);

  const auth = getAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    if (isRegister) {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        await sendEmailVerification(userCredential.user);
        setMessage("Conta criada! Verifica o teu email para confirmar o registo.");
        setUser(userCredential.user);
      } catch (err) {
        setMessage(err.message);
      }
    } else {
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        setUser(userCredential.user);
        setMessage("");
      } catch (err) {
        setMessage("Email ou password inválidos.");
      }
    }
  };

  if (user && user.emailVerified) {
    return (
      <div className="account-area">
        <h2>{t('account_area')}</h2>
        <div className="account-tabs">
          <button className="account-tab">{t('training')}</button>
          <button className="account-tab">{t('nutrition')}</button>
          <button className="account-tab">{t('your_progress')}</button>
        </div>
        <div className="account-content">
          <p>{t('welcome')}, {user.email}!</p>
          <p>{t('choose_area')}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="account-bg">
      <div className="account-box">
        <h2>{isRegister ? t('create_account') : t('login_account')}</h2>
        <form onSubmit={handleSubmit} className="account-form">
          <input type="email" placeholder={t('email')} value={email} onChange={e => setEmail(e.target.value)} required />
          <input type="password" placeholder={t('password')} value={password} onChange={e => setPassword(e.target.value)} required />
          <button type="submit">{isRegister ? t('create_account') : t('login')}</button>
        </form>
        <button className="account-switch" onClick={() => setIsRegister(r => !r)}>
          {isRegister ? t('already_have_account') : t('dont_have_account')}
        </button>
        {message && <div className="account-message">{message}</div>}
      </div>
    </div>
  );
}
