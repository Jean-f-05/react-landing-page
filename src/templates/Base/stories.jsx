import Base from '.';
import mock from './mock';
import { mockBase } from './mock';

export default {
  title: 'Templates/Base',
  component: Base,
  args: mockBase,
};

export const Template = (args) => {
  return (
    <div>
      <Base {...args}></Base>
    </div>
  );
};
