import React from 'react';
import { AboutUs } from '.'; // Substitua pelo caminho correto para o componente AboutUs


export default {
  title: 'Text/AboutUs', // Nome do componente
  component: AboutUs, // O componente que será utilizado nos stories
};

export const Template = () => <AboutUs background={false} />;
