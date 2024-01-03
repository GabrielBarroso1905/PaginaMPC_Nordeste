import styled, { css } from 'styled-components';
import { Title } from '../Heading/styles';

export const Container = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 3fr 2fr;
    align-items: center;
    gap: ${theme.spacings.xsmall};
    /* max-width: 900px; */
    @media ${theme.media.lteMedium} {
      grid-template-columns: 1fr;
      text-align: center;
      
    }

    ${Title} {
      margin-bottom: ${theme.spacings.xlarge};
      
    }
  `}
`;



export const TextContainer = styled.div`
  ${({ theme }) => css`
    @media ${theme.media.lteMedium} {
      margin-bottom: ${theme.spacings.large};
    }
  `}
`;

export const ImageContainer = styled.div`
  ${({ theme }) => css``}
    width: 100%;
     align-items: center;
`;

export const Image = styled.img`
  ${({ theme }) => css`
    width: 100%;
    border-radius: 100px;
   
  `}
`;
export const Fundo = styled.img`
  ${({ theme }) => css`
  position: absolute;
  top: 0;
  left: 0;
  width: 90%; /* Defina o tamanho desejado para o fundo */
  height: 90%; /* Defina o tamanho desejado para o fundo */
  z-index: -1; /* Coloca o fundo atrás do restante do conteúdo */
  `}
`;
export const Btn = styled.button`
 ${({ theme,colorDark }) => css`
  /* Estilos de fundo e cor do texto */
  background-color: ${colorDark ? theme.colors.white : theme.colors.primaryColor};
  color: ${colorDark ?  theme.colors.primaryColor : theme.colors.white };
 
  /* Margem e padding */
  margin: 10px 0;
  padding: 18px 28px;

  /* Borda e raio do botão */
  border: none;
  border-radius: 50px;
  font-weight: bold;
  font-size: medium;
  /* Efeito de transição suave */
  transition: background-color 0.3s ease;

  /* Estilo do texto em hover */
  &:hover {
    background-color: ${theme.colors.secondaryColor};
    color: ${theme.colors.white};
 
    cursor: pointer;
  }
 `}
`;
