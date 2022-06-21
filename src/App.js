import React , {useState} from 'react';
import GamePlay from './component/GamePlay';
import StartScreen from './component/StartScreen';


const App = () => {
  const [begin , setBegin] = useState(<StartScreen/>)
  return (
    <div>
          {begin}
          <button id='dissappear' onClick={() => {setBegin( <GamePlay/>); document.getElementById('dissappear').style.display = 'none'}}>start</button>
    </div>
  )
}

export default App;

