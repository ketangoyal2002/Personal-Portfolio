import React, { Component } from "react";
import styled from "@emotion/styled";
import theme from "../../styles/theme";
import Button from "../Buttons/Button";
import Emoji from "../Icons/Emoji";

// Background gradient with added styling
const Div = styled.section`
  background: linear-gradient(to right, ${theme.colors.navy}, ${theme.colors.darkNavy});
  color: ${theme.colors.white};
  padding: 4em 1em; /* Ensures it takes up full viewport height */
  width: 100%; /* Ensures it takes up full viewport width */
  display: flex;
  align-items: center; /* Centers content vertically */
  justify-content: center; /* Centers content horizontally */
  overflow: hidden; /* Keeps content contained */

  @media (max-width: 768px) {
    /* Adjust padding-top for mobile view */
    padding-bottom: 2em; /* Adjust padding-bottom if needed */
  }
`;



// Flexbox layout with transitions
const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 1px dotted white;
  max-width: 800px;
  width: 100%;
  text-align: left;
  opacity: 0;
  padding: 2em;
  transform: translateY(20px);
  animation: fadeInUp 1s forwards 0.5s;

  @media (min-width: 768px) {
    
  }
`;

// Typing effect for the headings
const typingEffect = `
  @keyframes typing {
    from { width: 0; }
    to { width: 100%; }
  }

  @keyframes blink {
    50% { border-color: transparent; }
  }
`;

const Heading1 = styled.h1`
  color: ${theme.colors.green};
  font-family: "SF Mono", monospace;
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 0.5em;
  ${typingEffect}
  border-right: 2px solid ${theme.colors.green};
  white-space: nowrap;
  overflow: hidden;
  animation: typing 2s steps(30, end) forwards, blink 0.75s step-end infinite;
  
  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

const Heading2 = styled.h2`
  color: ${theme.colors.vLightSlate};
  font-family: "Calibre", sans-serif;
  font-weight: 700;
  font-size: 2.5rem;
  margin-bottom: 0.5em;
  line-height: 1.2;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 1s forwards 1s;

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

const Heading3 = styled.h3`
  color: ${theme.colors.lightSlate};
  font-family: "Calibre", sans-serif;
  font-weight: 600;
  font-size: 2rem;
  margin: 0.5em 0;
  line-height: 1.3;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 1s forwards 1.5s;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroP = styled.p`
  color: ${theme.colors.slate};
  font-family: "Calibre", sans-serif;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.6;
  margin-top: 1em;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 1s forwards 2s;

  width: 100%;
  max-width: 600px;

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`;

// Keyframe animations
const fadeInUp = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const StyledButton = styled(Button)`
  margin-top: 2em;
  background-color: ${theme.colors.green};
  color: ${theme.colors.white};
  border: none;
  padding: 0.8em 1.5em;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: ${theme.colors.darkGreen};
    transform: scale(1.05);
  }
`;

export default class Hero extends Component {
  render() {
    return (
      <Div id="home">
        <HeroContent>
          <Heading1>Hi, my name is</Heading1>
          <Heading2>
            Ketan Goyal <Emoji symbol="👋" label="sheep" />
          </Heading2>
          <Heading3>Your friendly Software Developer.</Heading3>
          <HeroP>
            Software Developer with expertise in creating high-performance applications that enhance user experience and business outcomes. Adept at collaborating within teams to innovate and drive strategic goals. Focused on developing software that enhances user experience, optimizes processes, and contributes to business success.
          </HeroP>
          {/* Optional Button */}
          <StyledButton>Contact Me</StyledButton>
        </HeroContent>
        <style>
          {fadeInUp}
        </style>
      </Div>
    );
  }
}
