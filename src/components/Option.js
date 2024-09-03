import React, { useState } from 'react';
import styled from 'styled-components';

const OptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.1);
  }
`;

const Icon = styled.div`
  font-size: 2rem;
`;

const Label = styled.div`
  margin-top: 0.5rem;
  opacity: ${(props) => (props.show ? 1 : 0)};
  transition: opacity 0.2s;
`;

const Option = ({ icon, label, onSelect }) => {
    const [hover, setHover] = useState(false);

    return (
        <OptionContainer
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onClick={() => onSelect(label)}
        >
            <Icon>{icon}</Icon>
            <Label show={hover}>{label}</Label>
        </OptionContainer>
    );
};

export default Option;
