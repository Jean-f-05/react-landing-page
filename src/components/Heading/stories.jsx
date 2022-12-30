import Heading from '.';

export default {
  title: 'Header',
  component: Heading,
  args: {
    children: 'COLOR IS DARK',
    light: false,
  },
  argTypes: {
    children: { type: 'string' },
    light: { type: 'boolean' },
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

export const Light = (args) => <Heading {...args} />;
export const Dark = (args) => <Heading {...args} />;

Light.parameters = {
  backgrounds: {
    default: 'light',
  },
};

Dark.args = {
  children: 'COLOR IS LIGHT',
  colorDark: false,
};
