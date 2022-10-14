import { Meta, StoryObj } from '@storybook/react';
import { Text, IText } from './Text';

export default {
  title: 'Components/Text',
  component: Text,
  args: {
    children: 'lorem ipsum',
    size: 'md',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<IText>;

export const Default = {
  args: {
    size: 'md',
  },
} as StoryObj<IText>;

export const Small = {
  args: {
    size: 'sm',
  },
} as StoryObj<IText>;

export const Large = {
  args: {
    size: 'lg',
  },
} as StoryObj<IText>;

export const CustomComponets = {
  args: {
    asChild: true,
    children: <p>lorem ipsum</p>,
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
    asChild: {
      table: {
        disable: true,
      },
    },
  },
} as StoryObj<IText>;
