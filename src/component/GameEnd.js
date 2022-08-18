import React from "react";
import PropTypes from "prop-types";
import RoundHistory from "./RoundHistory";

function GameEnd(props) {
  const {
    restartGame,
    time,
    expressionCollection,
// begin
  } = props;
 
  return (
    <div className="container">
      <RoundHistory expressionCollection={expressionCollection} />
      <p id="won">Congratulations you are a fabulous Mathematician!!! </p>
      <br></br>
      <p>GAME OVER! You spent {Date.now() - time} milliseconds playing</p>
      <button id="start-button" onClick={restartGame}>
        REPLAY?
      </button>
    </div>
  );
}
GameEnd.propTypes = {
  time: PropTypes.number.isRequired,
  restartGame: PropTypes.func.isRequired,
  expressionCollection: PropTypes.array,
  
};
export default GameEnd;
