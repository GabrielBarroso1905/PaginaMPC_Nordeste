import { Footer } from '.';

export default {
  title: 'Ferramentas/Footer',
  component: Footer,
  args: {
    footerHtml: `<p><a href="#">©Gabriel Barroso 2023</a></p>`,
  },
};

export const Template = (args) => {
  return (
    <div>
      <Footer {...args} />
    </div>
  );
};
