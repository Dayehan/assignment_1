import React from 'react';
import PropTypes from "prop-types";
function SolveQuestion(props) {
    const {firstNumber,secondNumber,answer} = props;
     
  return (
    <div id="question-container" className="box"> 
                       <div className="fixedQuestion">Are you sure you are a Fabulous Mathematician?</div>    
                           <div className="insertValue"> 
                               <p id="firstNum" className="circle">{firstNumber}</p> 
                               <p>+</p>
                               <p id="secondNum" className="circle">{secondNumber}</p>  
                               <p><span>=</span></p>
                           </div>
                       <input className="answer" value={answer} autoFocus />
                   </div>
               
  );
}

export default SolveQuestion;

SolveQuestion.propTypes = {
    firstNumber: PropTypes.number.isRequired,
    secondNumber: PropTypes.number.isRequired,
    answer: PropTypes.number.isRequired
};