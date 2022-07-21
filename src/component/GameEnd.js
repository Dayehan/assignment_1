import React from 'react';
import PropTypes from "prop-types";
function GameEnd(props) {
    const {time} = props;
  return (
        <div className="container">
             <p id="won">Congratulations you are a fabulous Mathematician!!! </p>
                        <br></br>
            <p>GAME OVER! You spent {time} milliseconds playing</p>
            <button id="start-button">REPLAY?</button>
        </div>
      
  );
}
 GameEnd.propTypes = {
    time: PropTypes.number.isRequired
 };
export default GameEnd;
