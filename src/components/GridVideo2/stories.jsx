import { GridVideo2 } from '.';

export default {
  title: 'Midia/GridVideo2',
  component: GridVideo2,
  args: {
    title: 'Título customizado', // Defina os valores desejados para title e description
    title2: 'Título 2 customizado', // Defina os valores desejados para title e description
    description: 'Descrição customizada', // Defina os valores desejados para title e description
  
  },
};

export const Template = (args) => {
  return (
    <div>
      <GridVideo2 {...args} background= {false}  sectionId= {'seu-id-aqui'} />
    </div>
  );
};
