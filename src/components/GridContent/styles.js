import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    text-align: center;
    /* max-width: 58rem; */
    margin: 0 auto;
  `}
`;

export const Container2 = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 2fr  3fr 2fr;
    align-items: center;
  `}
`;

export const Html = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacings.xhuge} 0;
  `}
`;
export const ImageContainer = styled.div`
  ${({ theme }) => css`
    text-align: center;
    
    /* Ajuste para manter a imagem grande e movê-la para cima em telas menores */
    @media (max-width: ${theme.media.lteMedium}) {
      align-self: flex-start;
    }
  `}
`;

export const Image = styled.img`
  ${({ theme }) => css`
    max-width: 60%;
    max-height: 50%;
    border-radius: 5%;
  `}
`;