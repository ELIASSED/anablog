

import React from 'react';
import styled from 'styled-components';

const AboutSection = styled.section`

  padding: 100px 20px;
  text-align: center;

  font-family: 'Helvetica Neue', Arial, sans-serif;
`;

const ContentContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
`;

const Heading = styled.h1`
  font-size: 48px;
  font-weight: 700;
  letter-spacing: 1px;
  margin-bottom: 20px;
  text-transform: uppercase;
`;

const Subheading = styled.h2`
  font-size: 22px;
  font-weight: 400;
  margin-bottom: 40px;
  font-style: italic;
`;

const Text = styled.p`
  font-size: 20px;
  line-height: 1.8;
  text-align: justify;
  margin-bottom: 30px;
`;

const Highlight = styled.span`
  color: #c4acb0;
  font-weight: bold;
`;

const FooterNote = styled.p`
  font-size: 18px;
  font-weight: 600;
  color: #999;
  margin-top: 50px;
  text-transform: uppercase;
`;

const AboutPage: React.FC = () => {
  return (
    <div>

      <AboutSection>
        <ContentContainer>
          <Heading>About IDealer</Heading>
          <Subheading>
            Creativity meets strategy. Innovation defines us.
          </Subheading>
          <Text>
            Welcome to <Highlight>IDealer</Highlight>, a creative production studio that represents a dynamic and diverse 
            group of image makers, each excelling in a range of creative disciplines.  
          </Text>
          <Text>
            We proudly offer a <Highlight>full spectrum of production services</Highlight>, catering to both large-scale 
            editorial and commercial photo shoots, as well as film and digital content creation. With a specialized 
            focus on client services, we ensure that every aspect of your project is meticulously handled, from inception 
            to execution.
          </Text>
          <Text>
            Our expertise extends beyond the camera lens. We excel in <Highlight>location and model scouting</Highlight>, 
            finding the perfect backdrop to complement your brand and story.  
          </Text>
          <Text>
            The <Highlight>IDealer</Highlight> team crafts captivating narratives for your brand, ensuring a 
            <Highlight>lasting impression</Highlight>.  
          </Text>
          <FooterNote>Seal the Ideal</FooterNote>
        </ContentContainer>
      </AboutSection>
    </div>
  );
};

export default AboutPage;
