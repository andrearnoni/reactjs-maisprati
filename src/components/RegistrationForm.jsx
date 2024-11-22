import React, { useState } from "react";

function RegistrationForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && password) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div>
        <h2>Boas-vindas</h2>
        <p>
          Bem-vindo, {name}! Seu registro com o e-mail {email} foi concluído.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Formulário de Registro</h2>
      <div>
        <label>Nome:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>E-mail:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Senha:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">Registrar</button>
    </form>
  );
}

export default RegistrationForm;
