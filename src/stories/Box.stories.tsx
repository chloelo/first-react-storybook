import type { Meta, StoryObj } from '@storybook/react';
import Box from './Box';

const meta = {
  title: 'Example/Box', // 資料夾分類放在 title
  component: Box,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
    size: {
      control: {
        type: 'select',
      },
    },
  },
} satisfies Meta<typeof Box>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LargeBox: Story = {
  args: {
    label: 'Box Large',
    backgroundColor: 'red',
    size: 'large',
  },
};
export const MediumBox: Story = {
  args: {
    label: 'Box medium',
    backgroundColor: 'green',
    size: 'medium',
  },
};
export const SmallBox: Story = {
  args: {
    label: 'Box small',
    backgroundColor: 'purple',
    size: 'small',
  },
};
