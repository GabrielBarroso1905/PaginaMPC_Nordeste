import P from 'prop-types';
import { Heading } from '../Heading';
import { SectionBackground } from '../SectionBackground';
import { TextComponent } from '../TextComponent';
import * as Styled from './styles';
import mock from './mock';
export const GridContent = ({
  background = false,
  sectionId = '',
}) => {
  return (
    <SectionBackground background={background} color = {"#3aa8ee"} sectionId={sectionId}>
      <Styled.Container>
        <Heading size='big' uppercase colorDark={!background} as="h2">
          {mock.title}
        </Heading>
      
      <Styled.Container2>

        <Styled.ImageContainer>
     <Styled.Image src={mock.image}/>
     </Styled.ImageContainer>
     
     <Styled.ImageContainer>
     <Styled.Image src={mock.image2}/>
     </Styled.ImageContainer>
     
     <Styled.ImageContainer>
     <Styled.Image src={mock.image3}/>
     </Styled.ImageContainer>
      </Styled.Container2>

       <Styled.Html>
          <TextComponent>{mock.html}</TextComponent>
        </Styled.Html>

      

       
      </Styled.Container> 
    </SectionBackground>
  );
};

GridContent.propTypes = {
  title: P.string.isRequired,
  html: P.string.isRequired,
  background: P.bool,
  sectionId: P.string,
};
