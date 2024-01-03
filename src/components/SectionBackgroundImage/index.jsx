import P from 'prop-types';
import { SectionContainer } from '../SectionContainer';
import * as Styled from './styles';

export const SectionBackgroundImage = ({
  children,
  background = false,
  sectionId = '',
}) => {
  return (
    <Styled.Container background={background} id={sectionId}>
      <SectionContainer>{children}</SectionContainer>
    </Styled.Container>
  );
};

SectionBackgroundImage.propTypes = {
  children: P.node.isRequired,
  background: P.bool,
  sectionId: P.string,
};
