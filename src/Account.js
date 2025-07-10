import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword } from "firebase/auth";
import "./App.css";
import "./firebase";

export default function Account() {
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
        <h2>Área Pessoal</h2>
        <div className="account-tabs">
          <button className="account-tab">Treino</button>
          <button className="account-tab">Nutrição</button>
          <button className="account-tab">A tua evolução</button>
        </div>
        <div className="account-content">
          <p>Bem-vindo, {user.email}!</p>
          <p>Escolhe uma área acima para veres o teu conteúdo.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="account-bg">
      <div className="account-box">
        <h2>{isRegister ? "Criar Conta" : "Entrar na Área Pessoal"}</h2>
        <form onSubmit={handleSubmit} className="account-form">
          <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
          <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
          <button type="submit">{isRegister ? "Criar Conta" : "Entrar"}</button>
        </form>
        <button className="account-switch" onClick={() => setIsRegister(r => !r)}>
          {isRegister ? "Já tens conta? Entrar" : "Ainda não tens conta? Regista-te"}
        </button>
        {message && <div className="account-message">{message}</div>}
      </div>
    </div>
  );
}
