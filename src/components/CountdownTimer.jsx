import React, { useState, useEffect } from "react";

function CountdownTimer() {
  const [inputSeconds, setInputSeconds] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let interval = null;

    if (isActive && !isPaused) {
      interval = setInterval(() => {
        setSeconds((seconds) => {
          if (seconds > 0) return seconds - 1;
          clearInterval(interval);
          alert("O tempo acabou!");
          setIsActive(false);
          return 0;
        });
      }, 1000);
    } else if (!isActive && seconds !== 0 && !isPaused) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, isPaused, seconds]);

  const startTimer = () => {
    setSeconds(inputSeconds);
    setIsActive(true);
    setIsPaused(false);
  };

  const pauseTimer = () => {
    setIsPaused(!isPaused);
  };

  const resetTimer = () => {
    setSeconds(inputSeconds);
    setIsActive(true);
    setIsPaused(false);
  };

  return (
    <div>
      <h2>Timer com Intervalo e Alerta</h2>
      <div>
        <input
          type="number"
          value={inputSeconds}
          onChange={(e) => setInputSeconds(Number(e.target.value))}
          placeholder="Defina os segundos"
        />
        <button onClick={startTimer}>Iniciar</button>
        <button onClick={pauseTimer}>
          {isPaused ? "Continuar" : "Pausar"}
        </button>
        <button onClick={resetTimer}>Reiniciar</button>
      </div>
      <div>{seconds}s</div>
    </div>
  );
}

export default CountdownTimer;
