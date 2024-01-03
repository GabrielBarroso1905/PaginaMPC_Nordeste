import { Home2 } from '.';

import mock from './mock';

export default {
  title: 'Homes/Home2',
  component: Home2,
  args: mock,
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <Home2 {...args} />
    </div>
  );
};
