import React from 'react';
import styled from 'styled-components';

const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const SlideContainer = styled.div`
  display: flex;
  flex-direction: column;
  transform: translateY(${(props) => -props.currentStep * 100}%);
  transition: transform 0.5s ease-in-out;
  width: 100%;
  height: 100%;
`;

const Slide = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`;

const Carousel = ({ children, currentStep }) => {
    return (
        <CarouselContainer>
            <SlideContainer currentStep={currentStep}>
                {React.Children.map(children, (child, index) => (
                    <Slide key={index} style={{}}>
                        {child}
                    </Slide>
                ))}
            </SlideContainer>
        </CarouselContainer>
    );
};

export default Carousel;
