import { Meta, StoryObj } from '@storybook/react';
import { Button, IButton } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Entrar',
  },
  argTypes: {}
} as Meta<IButton>

export const Default = {
  args: {}
} as StoryObj<IButton>
