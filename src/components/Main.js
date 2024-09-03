import React, { useState } from 'react';
import styled from 'styled-components';
import Carousel from './Carousel';
import PollStep from './PollStep';
import Summary from './Summary';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

const stepsConfig = [
    {
        title: 'How was your week overall?',
        options: [
            { icon: '👍', label: 'Good' },
            { icon: '🤔', label: 'Neutral' },
            { icon: '👎', label: 'Bad' },
        ],
    },
    {
        title: 'What was your energy level this week?',
        options: [
            { icon: '⚡️', label: 'High' },
            { icon: '🌤️', label: 'Moderate' },
            { icon: '🛌', label: 'Low' },
        ],
    },
    {
        title: 'How was your productivity?',
        options: [
            { icon: '💪', label: 'High' },
            { icon: '🙂', label: 'Moderate' },
            { icon: '😴', label: 'Low' },
        ],
    },
];

const Main = () => {
    const [answers, setAnswers] = useState([]);
    const [currentStep, setCurrentStep] = useState(0);

    const handleOptionSelect = (label, stepIndex) => {
        const newAnswers = [...answers];
        newAnswers[stepIndex] = {
            question: stepsConfig[stepIndex].title,
            selectedOption: label,
        };
        setAnswers(newAnswers);

        if (stepIndex < stepsConfig.length - 1) {
            setCurrentStep(stepIndex + 1);
        } else {
            setCurrentStep(stepsConfig.length);
        }
    };

    return (
        <MainContainer>
            <Carousel currentStep={currentStep}>
                {stepsConfig.map((step, index) => (
                    <PollStep
                        key={index}
                        title={step.title}
                        options={step.options}
                        onSelect={(label) => handleOptionSelect(label, index)}
                    />
                ))}
                {currentStep === stepsConfig.length && <Summary answers={answers} />}
            </Carousel>
        </MainContainer>
    );
};

export default Main;
