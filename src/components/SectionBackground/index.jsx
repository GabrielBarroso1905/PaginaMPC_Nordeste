import P from 'prop-types';
import { SectionContainer } from '../SectionContainer';
import * as Styled from './styles';

export const SectionBackground = ({
  children,
  background = false,
  sectionId = '',
  color = '',
}) => {
  return (
    <Styled.Container background={background} id={sectionId}  color = {color}>
      <SectionContainer>{children}</SectionContainer>
    </Styled.Container>
  );
};

SectionBackground.propTypes = {
  color: P.string,
  children: P.node.isRequired,
  background: P.bool,
  sectionId: P.string,
};
