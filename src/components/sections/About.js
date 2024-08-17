import React from "react";
import styled from "@emotion/styled";
import theme from "../../styles/theme";
import Image from "./myimg.jpeg";

export default function About() {
  return (
    <Section>
      <Container>
        <TextFlex>
          <AboutHeader>
            <AboutHeading id="about">About Me</AboutHeading>
          </AboutHeader>
          <Paragraph>
            {/* <TypingEffect>Hi! I'm Ketan Goyal.</TypingEffect> */}
            <FadeInEffect>
              I'm a Software Developer with expertise in creating high-performance applications that enhance user
experience and business outcomes. Adept at collaborating within teams to innovate and drive
strategic goals. Focused on developing software that enhances user experience, optimizes
processes, and contributes to business success.
            </FadeInEffect>
            <ZigZagText>
              Whether it's a simple brochure website, an e-commerce platform, or a complex web application, I have the skills and expertise to bring your vision to life. I am always striving to improve my skills and stay up-to-date with the latest advancements in web development to deliver the best possible results for my clients.
            </ZigZagText>
            <p> Here are some technologies I've been working with recently:</p>
            <SkillList>
              <SkillItem>Javascript</SkillItem>
              <SkillItem>PHP</SkillItem>
              <SkillItem>ReactJs</SkillItem>
              <SkillItem>MySql</SkillItem>
            </SkillList>
          </Paragraph>
        </TextFlex>
        <ImgFlex>
          <AboutImg src={Image} alt="Profile" />
        </ImgFlex>
      </Container>
    </Section>
  );
}

const Section = styled.section`
  background-color: ${theme.colors.navy};
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  flex-wrap: wrap;
  max-width: 1200px;
  width: 100%;
  padding: 3em;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const AboutHeader = styled.div`
  margin-bottom: 1.5em;
`;

const AboutHeading = styled.h3`
  font-family: "Calibre";
  font-size: 36px;
  font-weight: 600;
  color: ${theme.colors.vLightSlate};
  margin-bottom: 0.5em;

  ::before {
    counter-increment: section 1;
    content: "0" counter(section) ".";
    margin-right: 10px;
    font-family: "SF Mono";
    font-weight: normal;
    font-size: 20px;
    color: rgb(100, 255, 218);
  }

  ::after {
    content: "";
    display: block;
    height: 2px;
    width: 50px;
    background-color: ${theme.colors.green};
    margin-top: 8px;
  }
`;

const TextFlex = styled.div`
  flex: 1;
  max-width: 600px;
  padding-right: 2em;
  font-family: "Calibre";
  font-weight: 400;
  color: ${theme.colors.slate};
  font-size: 18px;
  line-height: 1.6;

  @media (max-width: 768px) {
    padding-right: 0;
  }
`;

const Paragraph = styled.div`
  margin-top: 1em;
`;

const TypingEffect = styled.div`
  font-family: "SF Mono";
  font-size: 24px;
  color: ${theme.colors.green};
  white-space: nowrap;
  overflow: hidden;
  border-right: 4px solid ${theme.colors.green};
  animation: typing 2.5s steps(40, end), blink-caret 0.75s step-end infinite;

  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }

  @keyframes blink-caret {
    from,
    to {
      border-color: transparent;
    }
    50% {
      border-color: ${theme.colors.green};
    }
  }
`;

const FadeInEffect = styled.p`
  
  animation: fadeIn 2s forwards 3.5s;
  font-size: 20px;
  margin-top: 1.5em;

  
`;

const ZigZagText = styled.p`
  font-size: 18px;
  margin-top: 1.5em;
  line-height: 1.8;

  
`;

const SkillList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(140px, 200px));
  margin-top: 2em;
`;

const SkillItem = styled.li`
  list-style: none;
  font-size: 18px;
  margin-bottom: 0.5em;
  ::before {
    content: "▹";
    padding-right: 10px;
    font-size: 14px;
    color: ${theme.colors.green};
  }
`;

const ImgFlex = styled.div`
  flex: 1;
  max-width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 2em;

  @media (max-width: 768px) {
    padding-left: 0;
    margin-top: 2em;
  }
`;

const AboutImg = styled.img`
  width: 100%;
  margin-top: 130px;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 10px 30px -15px ${theme.colors.navyShadow};
  @media (max-width: 768px) {
    margin-top: 0;
  }
`;
