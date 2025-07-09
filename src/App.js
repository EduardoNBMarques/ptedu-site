import React from "react";
import { db } from "./firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function App() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const nome = e.target.nome.value;
    const email = e.target.email.value;

    try {
      await addDoc(collection(db, "subscricoes"), {
        nome,
        email,
        criadoEm: serverTimestamp()
      });
      alert("Subscreveste com sucesso!");
      e.target.reset();
    } catch (err) {
      console.error("Erro:", err);
      alert("Erro ao subscrever.");
    }
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "500px", margin: "auto" }}>
      <h1>Bem-vindo ao meu site 👋</h1>
      <p>Subscreve para receberes novidades!</p>

      <form onSubmit={handleSubmit}>
        <input type="text" name="nome" placeholder="O teu nome" required /><br /><br />
        <input type="email" name="email" placeholder="O teu email" required /><br /><br />
        <button type="submit">Subscrever</button>
      </form>
    </div>
  );
}

