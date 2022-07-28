import React from "react";
import PropTypes from "prop-types";
function GameEnd(props) {
  const {restart, time} = props;

  return (
    <div className="container">
      <p id="won">Congratulations you are a fabulous Mathematician!!! </p>
      <br></br>
      <p>GAME OVER! You spent {Date.now() - time} milliseconds playing</p>
      <button id="start-button" onClick={restart}>
        REPLAY?
      </button>
    </div>
  );
}
GameEnd.propTypes = {
  time: PropTypes.number.isRequired,
  restart: PropTypes.func.isRequired,
};
export default GameEnd;
