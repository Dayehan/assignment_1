import React, {useState} from "react";
import PropTypes from "prop-types";
function StartGame(props) {
  const {playGame, maximumRound, setMaximumRound} = props;
  const [name, setName] = useState({
    firstName: "",
  });
  const handleChange = (e) => {
    const newMaximumRound = e.target.value;
    //Validates that the user input a round within 1-20
    if (newMaximumRound >= 1 && newMaximumRound <= 20){
          setMaximumRound(newMaximumRound)
        }  
  };
  return (
    <div className="container" id="play">
      <label>
        First name:
        <input
          value={name.firstName}
          onChange={(e) => {
    
              setName({name, firstName: e.target.value});
            }
          }
        />
      </label>
      <br></br>
      <p>
        Hi, this is {`${name.firstName}'s`} math game, choose your parameters
        and get to calculating!
      </p>
      <label>
        Enter the number of rounds:
        <input
          placeholder="numbers only?"
          type="number"
          min="1"
          max="20"
          onChange={handleChange}
          value={maximumRound}
          autoFocus
        />
      </label>
      <br></br>
      <p>Are you ready to play?</p>
      <button id="start-button" onClick={playGame}>
        PLAY!
      </button>
    </div>
  );
}
StartGame.propTypes = {
  playGame: PropTypes.func.isRequired,
  maximumRound: PropTypes.number,
  setMaximumRound: PropTypes.number,
};
StartGame.defaultProps = {
  maximumRound: PropTypes.number,
  setMaximumRound: PropTypes.number,
};
export default StartGame;
