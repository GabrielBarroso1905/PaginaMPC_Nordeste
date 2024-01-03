import { Questions } from '.';

export default {
  title: 'Text/Questions',
  component: Questions,
};

export const Template = (args) => {
  return (
    <div>
      <Questions {...args} background= {false} sectionId= {'seu-id-aqui'} />
    </div>
  );
};
