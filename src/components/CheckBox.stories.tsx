import { Meta, StoryObj } from '@storybook/react';
import { CheckBox, ICheckBox } from './CheckBox';
import { Text } from './Text';

export default {
  title: 'Components/CheckBox',
  component: CheckBox,
  decorators: [
    (Story: any) => {
      return (
        <div className="flex items-center gap-[10px]">
          {Story()}
          <Text size="sm">
            Lembre-me de min por 30 dias!
          </Text>
        </div>
      );
    },
  ],
} as Meta<ICheckBox>;

export const Default = {} as StoryObj<ICheckBox>;
