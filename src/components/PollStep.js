import React from 'react';
import styled from 'styled-components';
import Option from './Option';

const PollStepContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;

const TitleContainer = styled.div`
  width: 50%;
  background-color: #6a1b9a;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  height: 100%;
`;

const OptionsContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  height: 100%;
`;

const PollStep = ({ title, options, onSelect }) => {

    return (
        <PollStepContainer>
            <TitleContainer>{title}</TitleContainer>
            <OptionsContainer>
                {options.map((option) => (
                    <Option key={option.label} icon={option.icon} label={option.label} onSelect={onSelect} />
                ))}
            </OptionsContainer>
        </PollStepContainer>
    );
};

export default PollStep;
