import React from "react";
import styled from "styled-components";

const ContactContainer = styled.section`
  background: linear-gradient(180deg, #9c5a5a 50%, #414471 100%);
  max-width: 800px;
  margin: 0 auto;
  padding: 50px 20px;
  background-color: #fff;
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 20px;
  color: #222;
  letter-spacing: 1px;
`;

const Subtitle = styled.p`
  font-size: 18px;
  text-align: center;
  color: #555;
  margin-bottom: 40px;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Input = styled.input`
  font-size: 16px;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  transition: border-color 0.3s, box-shadow 0.3s;

  &:focus {
    border-color: #000;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    outline: none;
  }
`;

const TextArea = styled.textarea`
  font-size: 16px;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  height: 150px;
  transition: border-color 0.3s, box-shadow 0.3s;

  &:focus {
    border-color: #000;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    outline: none;
  }
`;

const SubmitButton = styled.button`
  padding: 15px;
  font-size: 16px;
  font-weight: 600;
  background-color: black;
  color: white;
  text-transform: uppercase;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #333;
  }
`;

const FooterText = styled.p`
  font-size: 14px;
  text-align: center;
  color: #999;
  margin-top: 20px;
`;

const ContactPage: React.FC = () => {
  return (<div> <ContactContainer>
    <Title>Contact Us</Title>
    <Subtitle>
      Have a project in mind? Fill out the form below, and our team will get back to you shortly.
    </Subtitle>
    <ContactForm>
      <Input type="text" placeholder="Full Name" required />
      <Input type="email" placeholder="Email Address" required />
      <Input type="text" placeholder="Company (Optional)" />
      <Input type="text" placeholder="Phone Number (Optional)" />
      <TextArea placeholder="Message" required />
      <SubmitButton type="submit">Send Message</SubmitButton>
    </ContactForm>
    <FooterText>
      By submitting this form, you agree to our <a href="/privacy">Privacy Policy</a>.
    </FooterText>
  </ContactContainer>
  </div>
    
  );
};

export default ContactPage;
