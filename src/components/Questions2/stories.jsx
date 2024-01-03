import { Questions2 } from '.';

export default {
  title: 'Text/Questions2',
  component: Questions2,
};

export const Template = (args) => {
  return (
    <div>
      <Questions2 {...args} background= {false} sectionId= {'seu-id-aqui'} />
    </div>
  );
};
