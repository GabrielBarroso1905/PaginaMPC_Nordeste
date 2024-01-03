import styled, { css } from 'styled-components';
import { Title } from '../Heading/styles';
import { Heading } from '../Heading';
export const Container = styled.div`
  ${({ theme }) => css`
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


export const IntroOverlay = styled.div`
  background: rgba(0, 0, 0, 0.2);
`;

export const IntroHeading = styled.h1`
  font-family: "Raleway", sans-serif;
  color: #ffdfc3;
  font-size: 82px;
  font-weight: 700;
  text-transform: uppercase;
  margin-top: 0;
  margin-bottom: 10px;

  span {
    font-weight: 800;
    color: #5ca9fb;
  }

  /* Adicione esta parte para controlar a quebra de linha */
  white-space: normal;
  text-align: center;
`;

export const text = styled.h1`
    position: relative;
    margin-top: 10px;
    margin-bottom: 15px;
    padding-bottom: 15px;
  
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
  width: 50px; /* Largura da barra */
  height: 4px; /* Altura da barra */
  background: linear-gradient(to right, #ffb763  0%, #ebbd3e 100%);
  margin-top: 3px; /* Espaçamento entre a barra e o texto */
`;

export const IntroParagraph = styled.p`
  color: #fff;
  font-size: 22px;
  font-weight: 300;
  line-height: 30px;
  margin: 0 auto;
  margin-bottom: 60px;
`;

export const div = styled.div`
background-color: #f6f6f6;
`;



export const Btn = styled.button`
 ${({ theme,colorDark }) => css`
  /* Estilos de fundo e cor do texto */
  background: linear-gradient(to right, #ffb763  0%, #ebbd3e 100%);
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
    background: linear-gradient(to right, #ebbd3e 0%, #ffb763 100%);
    color: ${theme.colors.white};
 
    cursor: pointer;
  }
 `}
`;
export const IntroTextContainer = styled.div`
  padding-top: 350px;
  padding-bottom: 200px;
  text-align: center;

  
  
`;
export const IntroTextContainer2 = styled.div`
    padding-top: 1px;
     text-align: center;
     max-width: 120rem;
    margin: 0 auto;
    width: 100%;

`;









export const TestimonialContainer = styled.div`
  ${({ theme }) => css`

    counter-reset: testimonial-counter;
    display: flex;
    gap: ${theme.spacings.large};
    overflow: hidden;
    width: 100%;
    @media ${theme.media.lteMedium} {
      grid-template-columns: 3fr 3fr;
      display: grid;
    }
  `}
`;

export const Testimonial = styled.div`
  ${({ theme,colorDark }) => css`
  display: grid;

  align-items: center;
  position: relative;
  padding: 2px;

    .testimonial-image {
      float: left;
     

      img {
        border-radius: 50%;
      }
    }

    .testimonial-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;

      p {
        margin-bottom: 0;
        font-size: 20px;
      }

      .testimonial-meta {
        margin-top: 15px;
        font-size: 22px;
        font-weight: 600;
     
      }
    }

    ${Heading} {
      position: relative;
      left: 4rem;
    }

    ${Heading}::before {
      counter-increment: testimonial-counter;
      content: counter(testimonial-counter);
      position: absolute;
      font-size: 7rem;
      top: -3rem;
      left: -5rem;
      transform: rotate(5deg);
    }

    /* Reorganiza a estrutura para tela pequena */
    @media ${theme.media.lteMedium} {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;

      .testimonial-image {
        margin-bottom: 15px;
      }

      ${Heading} {
        left: 0;
        margin-bottom: ${theme.spacings.small};
      }
    }
  `}
`;

export const IcoInsta = styled.div`
  ${({ theme,colorDark}) => css`
    color: ${theme.colors.white} ;
    color: ${colorDark ?  theme.colors.primaryColor : theme.colors.white} ;
    margin: auto;
    font-size: 2rem;
  `}
`;


export const ServiceCardIcon = styled.div`
  ${({ theme}) => css`
    display: flex;
    justify-content: center;
    width: 100px;
    height: 100px;
    margin: 12px auto;
    margin-bottom: 24px;
    border-radius: 50%;
    background: linear-gradient(to right, #ffb763  0%, #ebbd3e 100%);
    border-radius: 50%;

    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.05);
    transition: 0.1s all ease-in;
  `}
`;

