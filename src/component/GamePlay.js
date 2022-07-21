import React from 'react';
function GamePlay() {
  // const {count, rounds, setCount, setGameState, memory, setMemory} = props;
  
  //   const [firstNum, setFirstNum] = useState(null);
  //   const [secondNum, setSecondNum] = useState(null);
  //   const time = Date.now();
  //   useEffect(() => generateExpression(), []);
    
  //   const generateExpression = () => {
       
  //       setFirstNum(Math.floor(Math.random() * 20));
  //       setSecondNum(Math.floor(Math.random() * 20));
  //   }; 
    const firstNumber = Math.floor(Math.random() * 20);
    const secondNumber = Math.floor(Math.random() * 20);
    let sign;

    const result = () => {
        const choice = Math.floor(Math.random() * 3);
        if (choice == 0) {
            sign = '+';
            return firstNumber + secondNumber;
        } else if (choice == 1) {
            sign = '*';
            return firstNumber * secondNumber;
        } else {
          sign = '-';
          return firstNumber - secondNumber;
        }
    };
const answer = result();
const handleInputChange=(e) => {
  if (answer.toString().length == e.target.value.toString().length && props.count < props.round) {
      e.target.value = "";
      props.changeCount(props.count + 1);
  } else if (answer.toString().length == e.target.value.toString().length && props.count == props.round) {
       props.changeMethod(3);
  }

};
  return (
    <div className='box' >

       <p className='circle'>{firstNumber}</p> <p>{sign}</p> <p className='circle'>{secondNumber}</p> <p>=</p>
        <input onChange={handleInputChange} autoFocus/>

    </div>
  );
}

export default GamePlay;
