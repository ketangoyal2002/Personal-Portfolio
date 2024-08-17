import React, { Component } from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";  
import theme from "../../styles/theme";

// Fade-in animation for the content
const fadeIn = keyframes`
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const Section = styled.section`
  background-color: ${theme.colors.navy};
  width: 100%;  /* Full width */
  
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2em;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 2em 1em;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  animation: ${fadeIn} 1.5s ease-out;
  text-align: center;
  max-width: 600px;
  width: 100%;
`;

const ContactHeading = styled.h3`
  color: ${theme.colors.green};
  font-family: "SF Mono";
  font-size: clamp(0.8rem, 1vw + 1rem, 1.5rem);
  font-weight: 400;
  margin-bottom: 0.5em;
  animation: ${fadeIn} 2s ease-in-out;
`;

const SubHead = styled.h4`
  color: ${theme.colors.vLightSlate};
  font-family: "Calibre";
  font-weight: 600;
  line-height: 1.1;
  font-size: clamp(2rem, 4vw, 4rem);
  margin-bottom: 0.5em;
  animation: ${fadeIn} 2.5s ease-in-out;
`;

const Paragraph = styled.p`
  color: ${theme.colors.slate};
  font-family: "Calibre";
  font-weight: 400;
  font-size: ${theme.fontSizes.lg};
  line-height: 1.5;
  max-width: 600px;
  width: 100%;
  margin-bottom: 2em;
  animation: ${fadeIn} 3s ease-in-out;

  @media (max-width: 768px) {
    font-size: ${theme.fontSizes.md};
    padding: 0 1em;
  }
`;

/* Form styling */
const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  animation: ${fadeIn} 3.5s ease-in-out;
`;

const Input = styled.input`
  padding: 1rem;
  margin-bottom: 1.5em;
  border-radius: 5px;
  border: 1px solid ${theme.colors.slate};
  font-size: ${theme.fontSizes.md};
  font-family: "Calibre";
  background-color: ${theme.colors.lightNavy};
  color: ${theme.colors.lightestSlate};

  &:focus {
    border-color: ${theme.colors.green};
    outline: none;
  }
`;

const TextArea = styled.textarea`
  padding: 1rem;
  margin-bottom: 1.5em;
  border-radius: 5px;
  border: 1px solid ${theme.colors.slate};
  font-size: ${theme.fontSizes.md};
  font-family: "Calibre";
  background-color: ${theme.colors.lightNavy};
  color: ${theme.colors.lightestSlate};
  height: 150px;

  &:focus {
    border-color: ${theme.colors.green};
    outline: none;
  }
`;

const SubmitButton = styled.button`
  color: ${theme.colors.green};
  background-color: transparent;
  font-family: "SF Mono";
  font-size: ${theme.fontSizes.sm};
  font-weight: 400;
  border: 1px solid ${theme.colors.green};
  border-radius: 3px;
  padding: 1.25rem 1.75rem;
  line-height: 1;
  outline: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: ${theme.colors.green};
    color: ${theme.colors.navy};
    transform: scale(1.05);
  }
`;

export default class Contact extends Component {
  handleSubmit = (event) => {
    event.preventDefault();

    const name = event.target.elements.name.value;
    const email = event.target.elements.email.value;
    const message = event.target.elements.message.value;

    const mailtoLink = `mailto:goyalketan2002@gmail.com?subject=Message from ${name}&body=${message}%0D%0A%0D%0AFrom,%0D%0A${name}%0D%0A${email}`;
    
    window.location.href = mailtoLink;
  };

  render() {
    return (
      <Section id="contact">
        <FlexContainer>
          {/* <ContactHeading>What's Next?</ContactHeading> */}
          <SubHead>Get in touch</SubHead>
          <Paragraph>
            Feel free to reach out to me at any time. My inbox is always open,
            and I'm eager to hear from you. If you have a question or simply
            want to say hello, I'll do my best to respond promptly.
          </Paragraph>
          <Form onSubmit={this.handleSubmit}>
            <Input type="text" name="name" placeholder="Your Name" required />
            <Input type="email" name="email" placeholder="Your Email" required />
            <TextArea name="message" placeholder="Your Message" required />
            <SubmitButton type="submit">Send Message</SubmitButton>
          </Form>
        </FlexContainer>
      </Section>
    );
  }
}
