import React, {useState} from "react";

import StartGame from "./component/StartGame";
import SolveQuestion from "./component/SolveQuestion";
import GameEnd from "./component/GameEnd";
import {performOperation} from "./component/constant";
function App() {
  const [firstNumber, setFirstNumber] = useState(null);
  const [secondNumber, setSecondNumber] = useState(null);
  const [answer, setAnswer] = useState(null);
  const [operatorSign, setOperatorSign] = useState(null);
  const [maximumRound, setMaximumRound] = useState('');
  const [time] = useState(Date.now());
  const [gameLevel, setGameLevel] = useState(1);
  const [gameState, setGameState] = useState("START_GAME");

  const generateNumber = () => {
    const firstNum = Math.floor(Math.random() * 20);
    const secondNum = Math.floor(Math.random() * 20);
    // const result = firstNum + secondNum;
    const resultAndsign = performOperation(firstNum, secondNum);
    // console.log('resultAndsign',resultAndsign);
    if (resultAndsign.result) {
      setFirstNumber(firstNum);
      setOperatorSign(resultAndsign.sign);
      setSecondNumber(secondNum);
      setAnswer(resultAndsign.result);
    }

  };

  const start = () => {
    generateNumber();
    setGameState("SOLVE_QUESTION");
  };

  const validateAnswer = (userAnswer) => {
    // console.log({userAnswer,answer});
    if (userAnswer.toString().length == answer.toString().length && gameLevel < maximumRound) {
      start();
      setGameLevel(gameLevel + 1);
    } else if (userAnswer.toString().length == answer.toString().length && gameLevel >= maximumRound) {
      end();
    }
  };

  const end = () => {
    setGameState("GAME_OVER");

  };

  switch (gameState) {
    case "START_GAME":
      return <StartGame
        playGame={start}
        maximumRound={maximumRound}
        setMaximumRound={setMaximumRound}
      />;
    case "SOLVE_QUESTION":
      return (
        <SolveQuestion
          firstNumber={firstNumber}
          secondNumber={secondNumber}
          gameLevel={gameLevel}
          validateAnswer={validateAnswer}
          operatorSign={operatorSign}
        />
      );
    case "GAME_OVER":
      return <GameEnd restart={start} time={time} />;
  }
}

export default App;
