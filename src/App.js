import React, {useState, useReducer} from "react";

import StartGame from "./component/StartGame";
import SolveQuestion from "./component/SolveQuestion";
import GameEnd from "./component/GameEnd";
import {performOperation} from "./component/constant";
import { GAME_STATE } from "./Hooks/utils";
import {
  reducer,
  changeMaximumRound,
  changeGameLevel,
  changeGameState,
  initialState
} from "./Hooks/reducer"

function App() {

  const [state, dispatch] = useReducer(reducer,undefined,initialState); 

  const setMaximumRound = (maximumRound) => dispatch(changeMaximumRound(maximumRound));
  const setGameLevel = (gameLevel) => dispatch(changeGameLevel(gameLevel));
  const setGameState = (gameState) => dispatch(changeGameState(gameState));
   
  const { maximumRound, gameLevel, gameState } = state



  const [firstNumber, setFirstNumber] = useState(null);
  const [secondNumber, setSecondNumber] = useState(null);
  const [answer, setAnswer] = useState(null);
  const [operatorSign, setOperatorSign] = useState(null);
  // const [maximumRound, setMaximumRound] = useState("");
  const [time] = useState(Date.now());
  // const [gameLevel, setGameLevel] = useState(1);
  // const [gameState, setGameState] = useState(GAME_STATE.START_GAME);
  const [expressionCollection, setExpressionCollection] = useState([]);

  const timer = Date.now();
  const second = "MilliSeconds";
  // const time = Date.now();
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
      if (resultAndsign.result % 1 === 0) {
        setAnswer(resultAndsign.result);
      } else {
        setAnswer(parseFloat(resultAndsign.result).toFixed(1));
      }
      // setAnswer(resultAndsign.result);
    }
  };

  // const begin = () => {
  //   setGameState("START_GAME");
  // };

  const start = () => {
    generateNumber();
    setGameState(GAME_STATE.PLAY_GAME);
  };

  const restartGame = () => {
    setExpressionCollection([]);
    setMaximumRound(maximumRound);
    setGameState(GAME_STATE.PLAY_GAME);
  }

  const generateRoundExpression = (userAnswer) => {
    const recentTime = Date.now() - timer;
    const speed = Math.floor(recentTime / 1000) < 3;

    const expression = `${firstNumber} ${operatorSign} ${secondNumber} = ${userAnswer}  (${recentTime} ${second}) `;
    const expressionObj = {
      expression: expression,
      round: gameLevel,
      isAnswerCorrect: userAnswer == answer,
      fast: speed,
    };
    setExpressionCollection([...expressionCollection, expressionObj]);
  };
  // console.log({expressionCollection})
  const validateAnswer = (userAnswer) => {
    // console.log({userAnswer,answer});
    if (userAnswer.toString().length == answer.toString().length) {
      generateRoundExpression(userAnswer);
      if (gameLevel < maximumRound) {
        start();
        setGameLevel(gameLevel + 1);
      } else if (gameLevel >= maximumRound) {
        end();
      }
    }
  };

  const end = () => {
    setGameState(GAME_STATE.GAME_OVER);
  };

  switch (gameState) {
    case GAME_STATE.START_GAME:
      return (
        <StartGame
          playGame={start}
          maximumRound={maximumRound}
          setMaximumRound={setMaximumRound}
        />
      );
    case GAME_STATE.PLAY_GAME:
      return (
        <SolveQuestion
          firstNumber={firstNumber}
          secondNumber={secondNumber}
          gameLevel={gameLevel}
          validateAnswer={validateAnswer}
          operatorSign={operatorSign}
          expressionCollection={expressionCollection}
        />
      );
    case GAME_STATE.GAME_OVER:
      return (
        <GameEnd
          restartGame={restartGame}
          time={time}
          expressionCollection={expressionCollection}
          maximumRound={maximumRound}
          setMaximumRound={setMaximumRound}
        />
      );
  }
}

export default App;
