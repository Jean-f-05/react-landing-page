import TextComponent from '.';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
    Provident id facilis porro cupiditate obcaecati rem esse quisquam! 
    Velit harum voluptatum dolorem eius nesciunt veritatis aspernatur exercitationem laborum, ut quae totam?`,
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <TextComponent {...args}></TextComponent>
    </div>
  );
};
