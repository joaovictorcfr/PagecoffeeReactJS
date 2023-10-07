import React from "react";
import styles from "./Login.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";


function Login() {
  // Gerencia o estado dos campos de entrada de texto
  // setando o valor digitado no input username iniciado com string vazia
  const [username, setUsername] = useState("");
  // setando o valor digitado no input password iniciado com string vazia
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Adicione lógica para autenticar o usuário aqui
  };

  return (
    <div className={styles.login_container}>
      <h1>Login <span>user</span></h1>
      <div className={styles.login_form}>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Usuário</label>
          <input
            type="text"
            id="username"
            placeholder="Digite o nome do usuário"
            value={username}
            onChange={handleUsernameChange}
            required
          />
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            placeholder="Digite a senha"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          <p>Não possui conta?</p>
          <Link to={"/register"}>Criar conta agora!</Link>
          <br />
          <button type="submit" className={styles.login_btn}>
            <Link to={"/home"}>Entrar</Link>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
