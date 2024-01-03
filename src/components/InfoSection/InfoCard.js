import React from 'react';
import { InfoCardWrap, InfoIcon, InfoIconWrap, InfoCardHeading, InfoCardCopy } from './InfoSectionElements';

const InfoCard = ({ ico, heading, copy }) => {
    return (
        <InfoCardWrap>
            <InfoIconWrap>
                 <i className={ico}></i>
            </InfoIconWrap>
            <InfoCardHeading>
                {heading}
            </InfoCardHeading>
            <InfoCardCopy>
                {copy}
            </InfoCardCopy>
        </InfoCardWrap>
    );
};

export default InfoCard;
