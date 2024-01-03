// Componente AboutUs
import React from 'react';
import * as Styled from './styles';
import 'font-awesome/css/font-awesome.min.css';
import P from 'prop-types';
import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
import { SectionContainer } from '../SectionContainer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { theme } from '../../styles/theme';
import { TextComponent } from '../TextComponent';
import data from './mock'; 

export const AboutUs2 = ({sectionId, background }) => { 
 
  return (
    <SectionBackground background={background} sectionId={sectionId}>
       <Styled.title>
       <Heading size='big' color={theme.colors.secondaryColor} uppercase as="h2">
             O que temos feito em São Luis?
            </Heading>
      </Styled.title>
            
     <SectionContainer> 
    <Styled.Container background={!background} >
   
    <Styled.About>
      
     
          <TextComponent size='small'>{data.paragraph ? data.paragraph : 'loading...'}</TextComponent>   
          <TextComponent size='small'>{data.paragraph ? data.paragraph : 'loading...'}</TextComponent>
    
    </Styled.About>
    <Styled.ImageContainer>
     <Styled.Image src={data.image}/>
     </Styled.ImageContainer>

    </Styled.Container>
    </SectionContainer>
    </SectionBackground>

  );
};

AboutUs2.propTypes = {
  data: P.shape({
    paragraph: P.string,
    Why: P.array,
    Why2: P.array,
  }),
  sectionId: P.string,
};

export default AboutUs2;
