import styled, { css } from 'styled-components';
import { Title as HeadingContainer } from '../Heading/styles';
import { Container as TextComponent } from '../TextComponent/styles';

export const Container = styled.div`
  ${({ theme }) => css`
    ${TextComponent} {
      margin-bottom: ${theme.spacings.xhuge};
       
    }
    
  `}
`;
export const Container2 = styled.div`
  ${({ theme }) => css`
    text-align: center;
    background: linear-gradient(to right, #54FA8B 10%, #00FC54 100%);
    border-color: #0F0F0F;
    border-width: 1px;
    border-style:double;
    border-radius: 15px;
      `}
`;

export const Grid = styled.div`
  ${({ theme }) => css`
    padding-top: 20px;
    counter-reset: grid-counter;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: ${theme.spacings.large};
    overflow: hidden;
    width: 100%;

    @media ${theme.media.lteMedium} {
      grid-template-columns: 1fr;
   
    }
  `}
`;

export const GridElement = styled.div`
  ${({ theme }) => css`
    ${HeadingContainer} {
      position: relative;
      left: 5rem;
    }

    ${HeadingContainer}::before {
      counter-increment: grid-counter;
      content: counter(grid-counter);
      position: absolute;
      font-size: 7rem;
      top: -3rem;
      left: -5rem;
      transform: rotate(0deg);
    }
  `}
`;
