import React from 'react';
import { BannerSection } from '../BannerSection';
import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';

import {
    SectionContainer,

    CardContainer,
    Card,
    CardTitle,
    CardBody,

    Titulo,
    BlueBar,
   } from './InfoSectionElements';
    import { ReactComponent as SnappyIcon } from "./images/3.svg";
    import { ReactComponent as PricesIcon } from "./images/3.svg";
    import { ReactComponent as PeopleIcon } from "./images/3.svg";
    
   
export const InfoSectionTeste = ({sectionId,background}) => {
    return (
    <SectionBackground background={background} sectionId={sectionId}>
      <SectionContainer>
          <Titulo>
          <Heading  colorDark={!background}>Principais Projetos</Heading>
          <BlueBar/>
          </Titulo>
        
        <CardContainer>
          <Card>
      
            <SnappyIcon />
          
            <CardTitle>Capelania Escolar</CardTitle>
            <CardBody>
              Our application process can be completed in minutes, not hours.
              Don't get stuck filling in tedious forms.
            </CardBody>
          </Card>
          <Card>
            <PricesIcon />
            <CardTitle>Estudantes em Ação</CardTitle>
            <CardBody>
              We don't want you worrying about high monthly costs. Our prices
              may be low, but we still offer the best coverage possible.
            </CardBody>
          </Card>
          <Card>
            <PeopleIcon />
            <CardTitle>Escola da Vida</CardTitle>
            <CardBody>
              Our plans aren't full of conditions and clauses to prevent
              payouts. We make sure you're covered when you need it.
            </CardBody>
          </Card>
        </CardContainer>
      </SectionContainer>
      <BannerSection />
    </SectionBackground>
      

    
    );
};


InfoSectionTeste.propTypes = {

  };