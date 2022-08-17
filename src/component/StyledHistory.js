import styled from "styled-components";


export const StyledHistory = styled.div`
  margin: 1.0rem 1.0rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height:0.5px;
  padding: 1.0rem;
  border-radius: 0.8rem;
  // color: ${(props) => props.fast ? "green" : "orange"};
  color: ${(props) => {
    // props.isAnswerCorrect ? "green" : "red"
  if (!props.isAnswerCorrect) {
    return "red";
  } 
  if (props.fast) {
    return "green";
  }
  return "orange";
  }
};
  background-color: rgb(180, 110, 115);

`;