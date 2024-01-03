import React from 'react';
import P from 'prop-types';
import * as Styled from './styles';
import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';

// Importe os dados do mock
import mockData from './mock'; // Substitua pelo caminho real do seu arquivo mock

export const Questions = ({ background, sectionId }) => {
  const serviceTitle =  mockData.title;

  return (
    <SectionBackground background={background} sectionId={sectionId}>
      <Styled.Container>
        <Heading colorDark={!background} size="huge" as="h2">
          {serviceTitle}
        <Styled.BlueBar/>
        </Heading>
      </Styled.Container>

      <Styled.ContainerCards>
        {mockData.perguntas.map((pergunta, index) => (
          <React.Fragment key={index}>
            <Styled.ServiceCards>
              <Styled.ServiceCard colorDark={!background}>
                <Styled.Text colorDark={!background}>{pergunta}</Styled.Text>
              </Styled.ServiceCard>
            </Styled.ServiceCards>

            <Styled.ServiceCards2>
              <Styled.ServiceCard3 colorDark={!background}>
             
                <Styled.Text colorDark={!background}>{mockData.respostas[index]}</Styled.Text>
              </Styled.ServiceCard3>
            </Styled.ServiceCards2>
          </React.Fragment>
        ))}
      </Styled.ContainerCards>
    </SectionBackground>
  );
};

Questions.propTypes = {
  background: P.bool.isRequired,
  sectionId: P.string,
  title: P.string,
};
