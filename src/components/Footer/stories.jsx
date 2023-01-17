import Footer from '.';

export default {
  title: 'Footer',
  component: Footer,
  args: {
    html: '<p><a href="https://github.com/Jean-f-05">Done by John Francis</a></p>',
  },
  argTypes: {
    html: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <Footer {...args}></Footer>
    </div>
  );
};
