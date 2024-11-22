import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../BackButton.css";

function BackButton() {
  const navigate = useNavigate();
  const location = useLocation();

  if (location.pathname === "/") {
    return null; // Não exibe o botão na página Home
  }

  return (
    <button className="back-button" onClick={() => navigate("/")}>
      Voltar para Home
    </button>
  );
}

export default BackButton;
