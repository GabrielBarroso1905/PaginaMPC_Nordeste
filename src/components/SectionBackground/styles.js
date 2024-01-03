import styled, { css } from 'styled-components';

const containerBackgroundActivate = (theme,background, color) => css`
  background: ${color !== '' ? color : (background ? theme.colors.primaryColor : theme.colors.white)};
  color: ${theme.colors.white};
  
`;

export const Container = styled.div`
  ${({ theme, background, color }) => css`
    background: ${color !== '' ? color : (background ? theme.colors.primaryColor : theme.colors.white)};
    color: ${theme.colors.primaryColor};
    ${background && containerBackgroundActivate(theme)};
    min-height: 100vh;
    display: flex;
    align-items: center;
   
  `}
`;
