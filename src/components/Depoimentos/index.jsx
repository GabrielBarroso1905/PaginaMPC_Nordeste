
import P from 'prop-types';
import * as Styled from './styles';
import { SectionBackground } from '../SectionBackground';
import { SectionContainer } from '../SectionContainer';
import { Heading } from '../Heading';
import testimonialsData from './mock';  
export const Depoimentos = ({background,sectionId }) => {


  return (
    <SectionBackground background={background} sectionId={sectionId} >

    <Styled.Container>
    <Heading colorDark={!background} size="huge" as="h2">
          O que dizem sobre nós
        </Heading>
        
      <SectionContainer>
        <Styled.TestimonialContainer>
          {testimonialsData.map((testimonial, index) => (
            <Styled.Testimonial key={index}>
              
              <Styled.TestimonialImage>
                <Styled.Image src={testimonial.img} alt="" />
              </Styled.TestimonialImage>
    
              <Styled.TestimonialContent >
                <Styled.P>"{testimonial.text}"</Styled.P>
                <Styled.TestimonialMeta> - {testimonial.name} </Styled.TestimonialMeta>
              </Styled.TestimonialContent>
            
            </Styled.Testimonial>
          ))}
        </Styled.TestimonialContainer>

      </SectionContainer>
    </Styled.Container>
</SectionBackground>
  );
};

Depoimentos.propTypes = {
  background: P.bool.isRequired,
  sectionId: P.string,
};
