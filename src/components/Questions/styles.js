import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.xsmall};
    text-align: center;
    /* Adicione o background-color se desejar */
  `}
`;
export const Container2 = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column; /* Altera a direção para empilhar verticalmente */
    align-items: center; /* Centraliza os itens verticalmente */

    @media ${theme.media.lteMedium} {
      /* Não é necessário para este caso */
    }
  `}
`

export const ContainerCards = styled.div`
  ${({ theme }) => css`
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Alinha os itens à esquerda */

  & > *:nth-child(odd) {
    margin-left: 0; /* Remove a margem esquerda dos itens ímpares (alinhados à esquerda) */
    margin-right: auto; /* Cola o item ímpar à esquerda */
  }
  & > * {
    width: 50%; /* Define a largura dos itens para 50% */
    margin-left: auto; /* Cola o item à direita */
    margin-right: 0; /* Remove a margem direita */
  }
  @media ${theme.media.lteMedium} {
    & > *:nth-child(odd) {
    margin-left: ; /* Remove a margem esquerda dos itens ímpares (alinhados à esquerda) */
    margin-right: auto; /* Cola o item ímpar à esquerda */
  }
  & > * {
    width: 80%; /* Define a largura dos itens para 50% */
    margin-left: auto; /* Cola o item à direita */
    margin-right: 0; /* Remove a margem direita */
    margin-top: 10px;
  }
  `}
`;


export const ContainerCards2 = styled.div`
  ${({ theme }) => css`
    
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.small}; /* Adicione espaçamento entre os elementos */
  `}
`;


export const ServiceCards = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column; /* Altera a direção para empilhar verticalmente */
    gap: ${theme.spacings.small}; /* Adicione espaçamento entre os elementos */

    @media ${theme.media.lteMedium} {
      display: inline; /* Altera para exibição em linha */
    }
  `}
`;
export const ServiceCards2 = styled.div`
  ${({ theme }) => css`      
    padding: 5px;
    @media ${theme.media.lteMedium} {
     display: inline;/* Adiciona a propriedade flex-wrap para que os itens sejam distribuídos em uma única coluna quando a tela for pequena */

       padding: 0px;
    }
  `}
`;



export const ServiceCard2 = styled.div`
  ${({ theme,colorDark }) => css`

    padding: 10px 5px 10px 10px;
 
    background-color: ${colorDark ?  theme.colors.white : theme.colors.primaryColor  };
 
    border: none;

    transition: 0.1s all ease-in;
    @media ${theme.media.lteMedium} { 
      display: none;
    }

  `} > * {
    margin: 0px auto;
  }
  
`;

export const ServiceCard3 = styled.div`
  ${({ theme,colorDark }) => css`
    padding: 10px 5px 10px 10px;
    border-radius: 8px;
    background-color: ${colorDark ?  theme.colors.secondaryColor : theme.colors.secondaryColor };
    border: none;
    
    transition: 0.1s all ease-in;
    @media ${theme.media.lteMedium} { 
    }

  `} > * {
    margin: 0px auto;
  }
  
`;
export const ServiceCard = styled.div`
  ${({ theme,colorDark }) => css`
  
    padding: 10px 5px 10px 10px;
    border-radius: 8px;
    background-color: ${colorDark ?  theme.colors.primaryColor : theme.colors.white };
    border: none;
    transition: 0.1s all ease-in;
    @media ${theme.media.lteMedium} { 
      padding: 5px 5px 10px 10px;
    }

  `} > * {
    margin: 0px auto;
  }
  
`;
export const Text = styled.div`
  ${({ theme,colorDark}) => css`
    font-size: ${theme.font.sizes.xsmall};
    font-family: ${ theme.font.family.default};   
    line-height: 25px;
    color: ${colorDark ?  theme.colors.white : theme.colors.primaryColor };
  `}
`;
export const BlueBar = styled.div`
  ${({ theme }) => css`
    width: 50px; /* Largura da BlueBar, ajuste conforme necessário */
    height: 5px; /* Altura da BlueBar, ajuste conforme necessário */
    background: linear-gradient(to right, #E0C783 0%, #FAB700 100%);
    margin-top: ${theme.spacings.xxsmall}; /* Espaçamento entre o texto e a BlueBar, ajuste conforme necessário */
    margin-left: auto;
    margin-right: auto;
    
  `}
`;