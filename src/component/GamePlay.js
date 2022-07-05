import React from 'react';

function GamePlay(props) {
    const firstNumber = Math.floor(Math.random() * 10);
    const secondNumber = Math.floor(Math.random() * 10);
    let sign;
    const result = () => {
        const choice = Math.floor(Math.random() * 2);
        if (choice == 0) {
            sign = '+';
            return firstNumber + secondNumber;
        } else {
            sign = '*';
            return firstNumber * secondNumber;
        }
    };
const answer = result();
const handleInputChange=(e) => {
  if (answer == e.target.value && props.count < props.round) {
      e.target.value = "";
      props.changeCount(props.count + 1);
  }
 else if (answer == e.target.value && props.count == props.round) {
       props.changeMethod(3);
  }
};
  return (
    <div className='box' >

       <p className='circle'>{firstNumber}</p> <p>{sign}</p> <p className='circle'>{secondNumber}</p> <p>=</p>
        <input onChange={handleInputChange} autoFocus/>

    </div>
  )
}

export default GamePlay;
