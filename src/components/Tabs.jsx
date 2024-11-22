import React, { useState } from "react";
import "../Tabs.css";

function Tabs() {
  const [activeTab, setActiveTab] = useState("about");

  const renderContent = () => {
    switch (activeTab) {
      case "about":
        return (
          <div>
            <h2>Sobre</h2>
            <p>Conteúdo da aba Sobre.</p>
          </div>
        );
      case "contact":
        return (
          <div>
            <h2>Contato</h2>
            <p>Conteúdo da aba Contato.</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <ul className="tabs">
        <li
          className={`tab ${activeTab === "about" ? "active" : ""}`}
          onClick={() => setActiveTab("about")}
        >
          Sobre
        </li>
        <li
          className={`tab ${activeTab === "contact" ? "active" : ""}`}
          onClick={() => setActiveTab("contact")}
        >
          Contato
        </li>
      </ul>
      <div className="tab-content">{renderContent()}</div>
    </div>
  );
}

export default Tabs;
