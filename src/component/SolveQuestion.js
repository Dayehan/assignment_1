/* eslint-disable object-curly-spacing */
import React, { useEffect, useState } from 'react';
import PropTypes from "prop-types";
import RoundHistory from './RoundHistory';
import SkipButton from './SkipButton';
function SolveQuestion(props) {
    const {
      firstNumber,
      secondNumber,
      validateAnswer,
      gameLevel,
      operatorSign,
      expressionCollection,
      
    } = props;
  const [userAnswer, setUserAnswer] = useState('');

    useEffect(() => {
        // using setTimeout to delay the answer before going to the next round ;
        const timer = setTimeout(() => {
            validateAnswer(userAnswer);
        }, 500);
        return () => clearTimeout(timer);
    }, [userAnswer]);
    useEffect(() => {
        setUserAnswer('');
    }, [gameLevel]);

    const changeInputValue = (e) => {
        setUserAnswer(e.target.value);
    };
    return (
      <div
        id="question-container"
        // className="box"
      >
        <div className="fixedQuestion">
          Are you sure you are a Fabulous Mathematician?
        </div>
        <RoundHistory expressionCollection={expressionCollection} />
        <div className="insertValue">
          <p id="firstNum" className="circle">
            {firstNumber}
          </p>
          <p>{operatorSign}</p>
          <p id="secondNum" className="circle">
            {secondNumber}
          </p>
          <p>
            <span>=</span>
          </p>
        </div>
        <input
          className="answer"
          value={userAnswer}
          onChange={changeInputValue}
          autoFocus
        />{" "}
        <SkipButton />
      </div>
    );
}

export default SolveQuestion;

SolveQuestion.propTypes = {
    firstNumber: PropTypes.number.isRequired,
    secondNumber: PropTypes.number.isRequired,
    validateAnswer: PropTypes.func.isRequired,
    gameLevel: PropTypes.number.isRequired,
    operatorSign: PropTypes.string.isRequired,
    expressionCollection: PropTypes.array.isRequired,
    
};