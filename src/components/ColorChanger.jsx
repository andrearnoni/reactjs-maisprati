import React, { useState, useEffect } from "react";

function ColorChanger() {
  const [color, setColor] = useState("#ffffff");

  const changeColor = () => {
    const newColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    setColor(newColor);
  };

  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]);

  return (
    <div>
      <h2>Alteração de Cor de Fundo</h2>
      <button onClick={changeColor}>Mudar Cor de Fundo</button>
    </div>
  );
}

export default ColorChanger;
