import styled, { css } from 'styled-components';

export const InfoSectionContainer = styled.section`
  ${({ theme }) => css`
    padding: 0 1.5rem 5rem;
    background-color: ${theme.colors.primaryColor};
    @media screen and (min-width: 1024px) {
        padding: 0 2.5rem 5rem;
    }

`}
`;

export const InfoSectionWrapper = styled.div`
    max-width: 1100px;
    margin: auto;
    text-align: center;
`;

export const InfoHeading = styled.h2`
    margin-bottom: 1rem;
    font-size: 1.75rem;
    line-height: 3rem;
    color: black;

    @media screen and (min-width: 1024px) {
        margin-bottom: 1.125rem;
        font-size: 2.5rem;
        line-height: 3rem;
    }
`;

export const InfoCopy = styled.p`
 ${({ theme }) => css`
    margin-bottom: 5.75rem;
    font-size: 1.5rem;
    line-height: 1.75rem;
    color: ${theme.colors.primaryColor};
    @media ${theme.media.lteMedium} {
        max-width: 34rem;
        margin: 0 auto 6.25rem;
        font-size: 1.125rem;
        line-height: 2rem;
    }
    `}
`;

export const InfoCardsContainer = styled.div`
 ${({ theme }) => css`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 5.75rem;
    &::before {
        content: '';
        position: absolute;
        width: 0.5rem;
        height: 100%;
        left: 50%;
        border-radius: 2000px;
        transform: translateX(-50%);
        background-color: ${theme.colors.secondaryColor};
        
    }

    @media screen and (min-width: 1024px) {
        flex-direction: row;
        gap: 1.75rem;
        height: 22.25rem;

        &::before {
            width: 100%;
            height: 0.5rem;
            left: unset;
            top: 40%;
            transform: translate(0);
        }
    }
    `}
`;

export const InfoCardWrap = styled.div`
 ${({ theme }) => css`
    position: relative;
    padding: 4.75rem 2rem 2.5rem;
    background-color:${theme.colors.mediumGray};
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    border: 1px solid #ccc;
    @media screen and (min-width: 1024px) {
        height: max-content;
        text-align: left;

        &:nth-of-type(2) {
            top: 44px;
        }

        &:nth-of-type(3) {
            top: 88px;
        }
    };
    `}

`;

export const InfoIconWrap = styled.div`
 ${({ theme }) => css`
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 5.5rem;
    width: 5.5rem;
    border-radius: 50%;
    background-color: ${theme.colors.secondaryColor};

    @media screen and (min-width: 1024px) {
        left: 2rem;
        transform: translateY(-50%);
    };
    `}
`;

export const InfoIcon = styled.img`

`;

export const InfoCardHeading = styled.h3`
    margin-bottom: 0.75rem;
    font-size: 1.5rem;
    line-height: 2rem;
    color: var(--text-dark);
`;

export const InfoCardCopy = styled.p`
    font-size: 1.2rem;
    line-height: 1.625rem;
`;