import React from 'react';
import {
  BannerTitle,
  Btn,
  BannerContainer,
  BannerWrapper,

  } from './styles';
  import data from './mock'; 
   
export const BannerSection = () => {
    return (

 
      <BannerWrapper>
      <BannerContainer>
        <BannerTitle>{data.title}</BannerTitle>
        <Btn>{data.buttonText}</Btn>
      </BannerContainer>
    </BannerWrapper>
 
    
    );
};


BannerSection.propTypes = {

  };