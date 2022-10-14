import { Meta, StoryObj } from '@storybook/react';
import { TextInput, IInputRoot } from './Input';
import { Envelope, LockSimple } from 'phosphor-react';

export default {
  title: 'Components/Input',
  component: TextInput.root,
  args: {
    children: [
      <TextInput.icon>
        <Envelope />
      </TextInput.icon>,
      <TextInput.input type="email" placeholder='Digite Seu Email'/>,
    ],
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      }
    }
  }
} as Meta<IInputRoot>;

export const Default = {
  args: {
    children: [
      <TextInput.icon>
        <Envelope />
      </TextInput.icon>,
      <TextInput.input type="email" placeholder='Digite Seu Email'/>,
    ],
  },
} as StoryObj<IInputRoot>;

export const Password = {
  args: {
    children: [
      <TextInput.icon>
        <LockSimple />
      </TextInput.icon>,
      <TextInput.input type="password" placeholder='Digite Sua Senha'/>,
    ],
  },
} as StoryObj<IInputRoot>;

export const WithoutIcon = {
  args: {
    children: <TextInput.input type="password" placeholder='Digite Sua Senha'/>
  },
} as StoryObj<IInputRoot>;
