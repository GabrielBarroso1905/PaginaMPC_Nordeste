import { Features } from '.';
export default {
  title: 'Homes/Features',
  component: Features,
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <Features {...args} />
    </div>
  );
};
