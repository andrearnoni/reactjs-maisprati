import React, { useState, useEffect } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const reset = () => {
    setSeconds(0);
    setIsActive(false);
  };

  return (
    <div>
      <h2>Temporizador</h2>
      <div>{seconds}s</div>
      <button onClick={() => setIsActive(!isActive)}>
        {isActive ? "Pausar" : "Iniciar"}
      </button>
      <button onClick={reset}>Reiniciar</button>
    </div>
  );
}

export default Timer;
