import React from "react";
import { Link } from "react-router-dom";
import "../Home.css";

function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">Home</h1>
      <nav className="home-nav">
        <ul className="home-list">
          <li className="home-list-item">
            <Link to="/counter" className="home-link">
              Contador Simples
            </Link>
          </li>
          <li className="home-list-item">
            <Link to="/color-changer" className="home-link">
              Alteração de Cor de Fundo
            </Link>
          </li>
          <li className="home-list-item">
            <Link to="/to-do-list" className="home-link">
              Lista de Tarefas
            </Link>
          </li>
          <li className="home-list-item">
            <Link to="/timer" className="home-link">
              Temporizador
            </Link>
          </li>
          <li className="home-list-item">
            <Link to="/filter-list" className="home-link">
              Filtro de Lista
            </Link>
          </li>
          <li className="home-list-item">
            <Link to="/registration-form" className="home-link">
              Formulário de Registro
            </Link>
          </li>
          <li className="home-list-item">
            <Link to="/posts" className="home-link">
              Lista de Posts
            </Link>
          </li>
          <li className="home-list-item">
            <Link to="/image-gallery" className="home-link">
              Galeria de Imagens
            </Link>
          </li>
          <li className="home-list-item">
            <Link to="/countdown-timer" className="home-link">
              Timer com Intervalo e Alerta
            </Link>
          </li>
          <li className="home-list-item">
            <Link to="/quiz" className="home-link">
              Quiz Interativo
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;
