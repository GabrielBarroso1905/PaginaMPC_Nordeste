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

export const AboutUs = ({sectionId, background }) => { 
 
  return (
    <SectionBackground background={background} sectionId={sectionId}>
    <Styled.Container background={!background} >
     <Styled.ImageContainer>
     <Styled.Image src={data.image}/>
     </Styled.ImageContainer>

    <Styled.About>
             <SectionContainer>
             <Heading size='medium' color={theme.colors.secondaryColor} uppercase as="h2">
            About Us
            </Heading>
          <TextComponent size='small'>{data.paragraph ? data.paragraph : 'loading...'}</TextComponent>
          <Heading size="small" colorDark={!background} uppercase as="h2">Why Choose Us?</Heading>        
                <Styled.List >
                  <ul>
                    {data.Why
                      ? data.Why.map((d, i) => <li key={`${d}-${i}`}> <FontAwesomeIcon icon={faCheck}/><TextComponent size='small'>{d}</TextComponent></li>)
                      : 'loading'}
                  </ul>
                  <ul>
                    {data.Why2
                      ? data.Why2.map((d, i) => <li key={`${d}-${i}`}> <FontAwesomeIcon icon={faCheck}/><TextComponent size='small'>{d}</TextComponent></li>)
                      : 'loading'}
                  </ul>
                  <ul>
                    {data.Why3
                      ? data.Why3.map((d, i) => <li key={`${d}-${i}`}> <FontAwesomeIcon icon={faCheck}/><TextComponent size='small'>{d}</TextComponent></li>)
                      : 'loading'}
                  </ul>
              </Styled.List>      
                      </SectionContainer>
    </Styled.About>
    </Styled.Container>
    </SectionBackground>

  );
};

AboutUs.propTypes = {
  data: P.shape({
    paragraph: P.string,
    Why: P.array,
    Why2: P.array,
  }),
  sectionId: P.string,
};

export default AboutUs;
