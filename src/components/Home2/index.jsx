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
          <Heading size="huge">
          Como criar uma rotina de cuidados com a pele do rosto
           </Heading>   
                <TextComponent>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sed commodo nibh ante facilisis bibendum."</TextComponent>
                <Styled.Btn colorDark={background} >
                  Learn More
                 </Styled.Btn>
          </Styled.IntroTextContainer>
        </SectionBackgroundImage>

 

        </div>
       
 
  );
};

Home2.propTypes = {
  background: P.bool,
  sectionId: P.string,
};
