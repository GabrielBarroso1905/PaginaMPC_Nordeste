import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.xsmall};
    text-align: center;
  `}
`;

export const TestimonialContainer = styled.div`
  ${({ theme }) => css`
    counter-reset: testimonial-counter;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 2fr));
    gap: ${theme.spacings.large};
    overflow: hidden;
    width: 100%;

    @media ${theme.media.lteMedium} {
      grid-template-columns: 1fr;
    
      
    }
  `}
`;
export const TestimonialImage = styled.div`
  ${({ theme }) => css`
      float: left;
      margin-right: 15px;
      border-radius: 50%;
      border-style: solid;
      color: ${theme.colors.primaryColor};
      box-shadow: 1px 5px 10px  rgba(0, 0, 0, 0.5);
  `}
`;
//testimonial-content
export const Image = styled.img`
  ${({ theme }) => css`
  display: block;
        width: 70px;
        height: 70px;
        border-radius: 50%;
  `}
`;
export const TestimonialContent = styled.div`
  ${({ theme }) => css`
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
  `}
`;

export const P = styled.p`
  ${({ theme }) => css`
         margin-bottom: 0;
        font-size: 20px;
        font-style: italic;
  `}
`;
export const TestimonialMeta = styled.div`
  ${({ theme }) => css`
  margin-top: 15px;
        font-size: 22px;
        font-weight: 600;
  `}
`;

export const Testimonial = styled.div`
  ${({ theme }) => css`
    position: relative;
    padding: 2px;
 
    @media ${theme.media.lteMedium} {     
     display: flex;
     flex-direction: column;
     align-items: center;
     text-align: center;

   }
    }
  `}
`;
