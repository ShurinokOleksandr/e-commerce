import type { StoryObj, Meta } from '@storybook/react';

import Button from './Button';

const meta: Meta<typeof Button> = {
    title: 'Shared/Button',
    argTypes: {

    },
    tags: ['autodocs'],
    component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        children: 'text',
        className: 'm',
    },
};
