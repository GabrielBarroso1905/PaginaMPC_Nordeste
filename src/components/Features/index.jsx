import P from 'prop-types';
import * as Styled from './styles';
import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
import { BannerSection } from '../BannerSection';

const testimonialsData = [
  {
    name: 'John Doe',
    icon: 'fa fa-whatsapp fa-2x',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget lacus vel odio viverra fringilla.',
  },
  {
    name: 'John Doe',
    icon: 'fa fa-whatsapp fa-2x',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget lacus vel odio viverra fringilla.',
  },
  {
    name: 'John Doe',
    icon: 'fa fa-whatsapp fa-2x',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget lacus vel odio viverra fringilla.',
  },
  {
    name: 'John Doe',
    icon: 'fa fa-whatsapp fa-2x',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget lacus vel odio viverra fringilla.',
  },

]

export const Features = ({background = false,sectionId}) => {
  return (
        <div id={sectionId}>
        <Styled.div>
          <Styled.IntroTextContainer2>
          <Styled.Titulo>
          <h2>Features</h2>
          <Styled.BlueBar/>
          </Styled.Titulo>
          <Styled.TestimonialContainer>
          {testimonialsData.map((testimonial, index) => (
            <Styled.Testimonial key={index}>
              <div className="testimonial-image">

              <Styled.ServiceCardIcon colorDark={!background}>
                <Styled.IcoInsta colorDark={background}>
                <i className= {`${testimonial.icon}`}/>
                </Styled.IcoInsta>
              </Styled.ServiceCardIcon>
              </div>
              <div className="testimonial-content">
              
              <div colorDark={background} className="testimonial-meta">{testimonial.name}</div>
                <p>"{testimonial.text}"</p>
              
              </div>
            </Styled.Testimonial>
          ))}
        </Styled.TestimonialContainer>
       
        </Styled.IntroTextContainer2>
        </Styled.div>


        </div>
       
 
  );
};

Features.propTypes = {
  background: P.bool,
  sectionId: P.string,
};
