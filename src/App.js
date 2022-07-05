import React , {useState} from 'react';
import  GameOver  from './component/GameOver';
import GamePlay from './component/GamePlay';
import StartScreen from './component/StartScreen';


function App(props) {
    const [round, setRound] = useState(1);
   
    const [method, setMethod] = useState(1);

    const [time, setTime]=useState(Date.now());

    const [count,setCount]=useState(1);

    const changeMethod = (newMethod) => {
        setMethod(newMethod);
    };

    const changeRounds = (newRounds) => {
        setRound(newRounds);
    };
    const changeCount=(newCount) => {
        setCount(newCount);
    };
    
    const reset= () => {
        if ( props.count == props.round) {
           
            changeMethod(1);
            changeCount(1)
          
          setTime(Date.now());
        }
        // changeRounds(round);
        // changeMode(2);
        // changeCount(1);
     
    }
    


    switch (method) {
        case 1:
            return <StartScreen changeMethod={changeMethod} changeRounds={changeRounds} round={round} />;
        case 2:
            return <GamePlay  changeRounds={changeRounds}  round={round} count={count} changeCount={changeCount}  changeMethod={changeMethod}/>;
        case 3:
            return <GameOver time={time}  reset={reset} count={count}  />


    }
}

export default App;

