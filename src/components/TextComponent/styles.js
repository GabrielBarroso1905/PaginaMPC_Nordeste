import styled, { css } from 'styled-components';
export const Container = styled.div`
 ${({ theme, size }) => css`
    font-size: ${
      
        size === 'small'
      ? theme.font.sizes.small
      : size === 'medium'
      ? theme.font.sizes.medium
      : size === 'large'
      ? theme.font.sizes.large
      : size === 'huge'
      ? theme.font.sizes.huge
      : size === 'xsmall'
      ? theme.font.sizes.xsmall
      : theme.font.sizes.medium};
  `}
`;
