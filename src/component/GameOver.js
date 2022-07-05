export default function GameOver(props) {
    const timeSpent = Date.now() - props.time;
    

    const handleClick=() => {
        // props.changeMode(2);
        props.reset();
        props.changeCount(count + 1);
    };
    return (
        <div className="display">
            <p id="won">Congratulations you are a fabulous Mathematician!!!</p>
                   <br></br>
            <p>You spent {timeSpent} milliseconds playing </p>
            
            <button id="start-button" onClick={handleClick} autoFocus>Play again?</button>
        </div>
    );
}