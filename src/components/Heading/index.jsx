import P from 'prop-types';
import * as Styled from './styles';
/**
 * @param {Object} props - As props do componente.
 * @param {React.ReactNode} props.children - O conteúdo do componente.
 * @param {boolean} [props.colorDark=true] - Define a cor do texto como escuro.
 * @param {string} [props.as='h1'] - A tag HTML para renderizar (uma das 'h1', 'h2', 'h3', 'h4', 'h5', 'h6').
 * @param {string} [props.size='huge'] - O tamanho do componente (uma das 'small', 'medium', 'big', 'huge').
 * @param {boolean} [props.uppercase=false] - Define o texto em maiúsculas.
 * @param {string} [props.color=''] - A cor personalizada do texto.
 */
export const Heading = ({
  children,
  colorDark = true,
  as = 'h1',
  size = 'huge',
  uppercase = false,
  color = '',
}) => {
  return (
    <Styled.Title
      colorDark={colorDark}
      as={as}
      size={size}
      uppercase={uppercase}
      color={color}
    >
      {children}
    </Styled.Title>
  );
};

Heading.propTypes = {
  color: P.string,
  children: P.node.isRequired,
  colorDark: P.bool,
  as: P.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  size: P.oneOf(['small', 'medium', 'big', 'huge']),
  uppercase: P.bool,
};
