import React, {useState} from "react";

import StartGame from "./component/StartGame";
import SolveQuestion from "./component/SolveQuestion";
import GameEnd from "./component/GameEnd";

function App() {
 const [firstNumber , setFirstNumber] = useState(null);
 const [secondNumber , setSecondNumber] = useState(null);
 const [answer , setAnswer] = useState(null);
 const [time , setTime] = useState(Date.now());
 const [gameLevel , setGameLevel] = useState(1);
 const [gameState , setGameState] = useState("START_GAME");
 
 const generateNumber =() => {
   setFirstNumber(Math.floor(Math.random() * 10));
  setSecondNumber(Math.floor(Math.random() * 10));
  setAnswer(this.firstNumber + this.secondNumber);
 
}

const start = () => {
generateNumber();
  setGameState("SOLVE_QUESTION");
}

validateAnswer(userAnswer){
  if (userAnswer == this.answer && this.gameLevel < 3) {
     generateNumber();
      setGameState("SOLVE_QUESTION");
      setGameLevel(gameLevel++);
     
  } else if (answer == this.answer && this.gameLevel >= 3) {
    this.end();
}

}

  switch (gameState) {
    case "START_GAME": 
     return <StartGame />;
    case "SOLVE_QUESTION":
        return <SolveQuestion firstNumber={firstNumber} secondNumber={secondNumber} answer={answer} />;
    case "GAME_OVER":
        return <GameEnd time={time}/>;
}
  
    
  }
  

export default App;
