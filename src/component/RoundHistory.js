import React from "react";
import PropTypes from "prop-types";
import {StyledHistory} from "./StyledHistory";

function RoundHistory(props) {
  const {expressionCollection} = props;

  return (
    <div>
      {expressionCollection.map((item) => {
        const {expression, isAnswerCorrect, fast} = item;
        return (
          <StyledHistory
            isAnswerCorrect={isAnswerCorrect}
            fast={fast}
            key={expression}
          >
            {expression}
          </StyledHistory>
        );
      })}
    </div>
  );
}
RoundHistory.propTypes = {
  expressionCollection: PropTypes.array.isRequired,
  fast: PropTypes.number,
  isAnswerCorrect: PropTypes.bool,
  answer: PropTypes.number,
};
export default RoundHistory;
