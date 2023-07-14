import type { StoryObj, Meta } from '@storybook/react';

import { Bars3Icon } from '@heroicons/react/24/outline';
import React from 'react';

import IconButton from './IconButton';

const meta: Meta<typeof IconButton> = {
    title: 'Shared/IconButton',
    component: IconButton,
    tags: ['autodocs'],
    argTypes: {

    },
};

export default meta;
type Story = StoryObj<typeof IconButton>;

export const Primary: Story = {
    args: {
        children: <Bars3Icon height={40} width={40} />,
        className: '',
    },
};
