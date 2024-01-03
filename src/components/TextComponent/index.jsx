import P from 'prop-types';
import * as Styled from './styles';

export const TextComponent = ({ children,  size = 'medium', }) => {
  return <Styled.Container dangerouslySetInnerHTML={{ __html: children }}  size={size} />;
};

TextComponent.propTypes = {
  children: P.node.isRequired,
  size: P.oneOf(['xsmall','small', 'medium', 'large', 'huge']),
};
