import React from 'react';
import styled from 'styled-components';

const SummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  animation: revealLeft 0.5s ease-in-out;

  @keyframes revealLeft {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }
  }
`;

const SummaryItem = styled.div`
  margin: 1rem 0;
  font-size: 1.2rem;
`;

const Summary = ({ answers }) => {
  return (
    <SummaryContainer>
      <h2>Summary of Answers</h2>
      {answers.map((answer, index) => (
        <SummaryItem key={index}>
          {answer.question}: {answer.selectedOption}
        </SummaryItem>
      ))}
    </SummaryContainer>
  );
};

export default Summary;
