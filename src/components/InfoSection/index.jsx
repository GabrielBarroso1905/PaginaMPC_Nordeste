import React from 'react';

import InfoCard from './InfoCard';
import { InfoCardOne, InfoCardTwo, InfoCardThree } from './data';
import { InfoSectionContainer, InfoSectionWrapper, InfoHeading, InfoCopy, InfoCardsContainer } from './InfoSectionElements';
import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';


export const InfoSection = ({sectionId}) => {
    return (
        <div id={sectionId}>
        <SectionBackground>
            <InfoSectionWrapper>
                 <Heading>Advanced Statistics</Heading>
                <InfoCopy>Track how your links are performing across the web with our advanced statistics dashboard.</InfoCopy>
                <InfoCardsContainer>
                    <InfoCard {...InfoCardOne} />
                    <InfoCard { ...InfoCardTwo }/>
                    <InfoCard { ...InfoCardThree }/>
                </InfoCardsContainer>
            </InfoSectionWrapper>
        </SectionBackground>
        </div>
    );
};


InfoSection.propTypes = {

  };