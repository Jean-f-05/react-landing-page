import SectionContainer from '.';

export default {
  title: 'SectionContainer',
  component: SectionContainer,
  args: {
    children: (
      <div>
        <h1>SectionContainer</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quis
          cupiditate necessitatibus iure quam accusamus fuga quibusdam quidem,
          earum explicabo. Earum facere accusamus, quas quis illum ea enim nihil
          sint!
        </p>
      </div>
    ),
  },
  argTypes: {
    children: { type: '' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <SectionContainer {...args}></SectionContainer>
    </div>
  );
};
