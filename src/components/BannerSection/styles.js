import {styled,css} from "styled-components";
// import { Button } from "../../styles/Button";
// import { device } from "../../styles/Breakpoints";


export const BannerWrapper = styled.section`
  ${({ theme }) => css`
  margin-top: 8rem;
    @media ${theme.media.lteMedium} {
    margin-top: 1rem;
    }

  `}
`;
export const BannerContainer = styled.div`
  ${({ theme }) => css`
  background: linear-gradient(to right, ${theme.colors.secondaryColor} 10%, ${theme.colors.secondaryGradienteColor} 100%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0rem;
  margin: auto;
  /* max-width: 1440px; */
  position: relative;
  /* height: 25.2rem; */
  @media ${theme.media.lteMedium} {
    flex-direction: column;
    text-align: center;
    padding: 4rem 2rem;
  }
  `}
`;

export const BannerTitle = styled.h3`
  ${({ theme }) => css`
  font-family: "DM Serif Display", serif;
  font-size: clamp(5rem, 4vw, 8.1rem);
  color: ${theme.colors.white};
  font-weight: 400;
  max-width: 50%;
  line-height: 1;
  margin-left: 4rem;

  @media ${theme.media.lteMedium} {
    max-width: 100%;
    text-align: center;
    padding-bottom: 2rem;
    margin: 0;
  }
  `}
`;

export const Btn = styled.button`
 ${({ theme,colorDark }) => css`
 
  /* Estilos de fundo e cor do texto */
  background-color: ${theme.colors.secondaryColor};
  color: ${colorDark ?  theme.colors.primaryColor : theme.colors.white };
  z-index: 4;
  /* Margem e padding */
  
  margin: 10px 0;
  padding: 18px 28px;
  margin-right: 5rem;
  border: 2px solid #fafafa;
  font-weight: bold;
  font-size: medium;

  &:hover {
    background-color: white;
    color: black;
    cursor: pointer;
   
  }
  @media ${theme.media.lteMedium} {
      margin-right: 0rem;
  }
 `}
`;


