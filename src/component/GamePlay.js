import React from 'react';

function GamePlay(props) {
    const firstNumber = Math.floor(Math.random() * 10);
    const secondNumber = Math.floor(Math.random() * 10);
    let answer;
  return (
    <div>

        <p><span>{firstNumber}</span>+<span>{secondNumber}</span> = {answer}</p>
       
    </div>
  )
}

export default GamePlay;
