
import styled, { css } from 'styled-components';
export const SectionWrapper = styled.section`
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export const SectionContainer = styled.div`
 ${({ theme }) => css` 
 color: ${theme.colors.sec};
  display: flex;
  flex-direction: column;
  max-width: 1440px;
  margin: auto;
  padding: 0rem 10rem;

  @media ${theme.media.lteMedium} {
    padding: 0rem 2rem;
    align-items: center;
    text-align: center;
  } 
`}
`;

export const SectionTitle = styled.h2`
    font-size: 50px;
    font-weight: 700;
    font-family: "DM Serif Display", serif;
`;

export const CardContainer = styled.div`
  ${({ theme }) => css`
  display: flex;
  justify-content: space-between;
  padding-top: 4rem;
  line-height: 2;
  @media ${theme.media.lteMedium} {
    flex-direction: column;
  }
 `}
`;

export const Card = styled.div`
  width: 350px;
  margin-right: 1rem;
  //
  text-align: center;
  //
  @media ${"905px"} {
    margin: 0;
    padding-bottom: 2rem;
  }
`;

export const CardTitle = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.secondaryColor};
    font-size: 30px;
    font-family: "DM Serif Display", serif;
    font-weight: bold;
    padding: rem 0rem;
    `}
`;

export const CardBody = styled.p`
 ${({ theme }) => css`  
color: ${theme.colors.black};
`}

`;
export const Line = styled.div`
 ${({ theme }) => css` 
  border-top: 1px solid ${theme.colors.white};
  width: 160px;
  padding-bottom: 20px;
  `}
 `;

export const Titulo = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;


    h2 {
      font-family: "Raleway", sans-serif;
      font-size: ${theme.font.sizes.xxlarge};
      margin-bottom: ${theme.spacings.small};
    }
  `}
`;
export const BlueBar = styled.div`
  ${({ theme }) => css`
  width: 50px; /* Largura da barra */
  height: 4px; /* Altura da barra */
  background: linear-gradient(to right, ${theme.colors.secondaryColor} 10%, ${theme.colors.secondaryGradienteColor} 100%);
 
  margin-top: 3px; /* Espaçamento entre a barra e o texto */
  `}
 `;
