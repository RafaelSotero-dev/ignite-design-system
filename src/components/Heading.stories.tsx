import { Meta, StoryObj } from '@storybook/react';
import { Heading, IHeading } from './Heading';

export default {
  title: 'Components/Heading',
  component: Heading,
  args: {
    children: 'loren ipsum',
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
} as Meta<IHeading>;

export const Default = {
  args: {
    size: 'md',
  },
} as StoryObj<IHeading>;

export const Small = {
  args: {
    size: 'sm',
  },
} as StoryObj<IHeading>;

export const Large = {
  args: {
    size: 'lg',
  },
} as StoryObj<IHeading>;

export const CustomComponets = {
  args: {
    asChild: true,
    children: <h1>Heading com H1</h1>,
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
} as StoryObj<IHeading>;
