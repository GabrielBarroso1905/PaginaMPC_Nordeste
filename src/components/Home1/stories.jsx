import { Home1 } from '.';

import mock from './mock';

export default {
  title: 'Homes/Home1',
  component: Home1,
  args: mock,
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <Home1 {...args} />
    </div>
  );
};
