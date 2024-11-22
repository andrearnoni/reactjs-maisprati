import React, { useState } from "react";

const questions = [
  {
    question: "Qual é a capital da França?",
    options: ["Paris", "Londres", "Berlim", "Madri"],
    answer: "Paris",
  },
  {
    question: "Qual é o maior planeta do sistema solar?",
    options: ["Marte", "Júpiter", "Saturno", "Vênus"],
    answer: "Júpiter",
  },
  {
    question: 'Quem escreveu "Dom Quixote"?',
    options: [
      "Miguel de Cervantes",
      "William Shakespeare",
      "J.K. Rowling",
      "Jane Austen",
    ],
    answer: "Miguel de Cervantes",
  },
  // Adicione mais perguntas conforme necessário
];

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleOptionClick = (option) => {
    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[currentQuestion] = option;
    setSelectedOptions(newSelectedOptions);

    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedOptions([]);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div>
      <h2>Quiz Interativo</h2>
      {showScore ? (
        <div>
          <p>
            Sua pontuação: {score} de {questions.length}
          </p>
          <button onClick={handleRestart}>Reiniciar</button>
        </div>
      ) : (
        <div>
          <p>{questions[currentQuestion].question}</p>
          <div>
            {questions[currentQuestion].options.map((option) => (
              <button key={option} onClick={() => handleOptionClick(option)}>
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Quiz;
