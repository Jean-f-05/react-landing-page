/* eslint-disable */
import GridTwoColumns from '.';
import mock from "./mock.js"

export default {
    title: 'GridTwoColumns',
    component: GridTwoColumns,
    args: mock,
    argTypes: {
        children: { type: 'string' },
    },
};

export const Template = (args) => {
    return (
        <div>
            <GridTwoColumns {...args}></GridTwoColumns>
        </div>
    );
};
