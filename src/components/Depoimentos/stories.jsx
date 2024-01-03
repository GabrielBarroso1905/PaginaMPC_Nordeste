import { Depoimentos } from '.';

export default {
  title: 'Text/Depoimentos',
  component: Depoimentos,
};

export const Template = (args) => {
  return (
      <Depoimentos  background= {false} sectionId={"seu-id-aqui"} />
   
  );
};
