import P from 'prop-types';
import * as Styled from './styles';
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';
import { SectionBackgroundImage } from '../SectionBackgroundImage';


export const Home2 = ({background = false,sectionId}) => {
  return (
    
        <div id={sectionId}>
        <SectionBackgroundImage>        
          <Styled.IntroTextContainer>
          <Heading size="huge" color='#FFEA00'>
          MPC São Luis
           </Heading>   
                <Heading size="medium" color='white'>
                Ao compasso dos Tempos, mais Ancorada na Rocha
                </Heading>   
          </Styled.IntroTextContainer>
        </SectionBackgroundImage>

 

        </div>
       
 
  );
};

Home2.propTypes = {
  background: P.bool,
  sectionId: P.string,
};
