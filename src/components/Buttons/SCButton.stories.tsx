import type { Meta, StoryObj } from '@storybook/react';

import MyButton from './MyButton';
const meta: Meta<typeof MyButton> = {
  title: 'Example/SCButton', // 資料夾分類放在 title
  component: MyButton,
  tags: ['autodocs'],
  argTypes: {
    btnStyle: {
      control: {
        type: 'select',
        options: [
          'primary',
          'danger',
          'light',
          'primary-outline',
          'light-outline',
          'close',
        ],
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// export const Base: Story = {
// };
export const Primary: Story = {
  args: {
    btnStyle: 'primary',
    children: 'Primary Btn',
  },
};
export const Danger: Story = {
  args: {
    btnStyle: 'danger',
    children: 'Danger Btn',
  },
};
export const Light: Story = {
  args: {
    btnStyle: 'light',
    children: 'Light Btn',
  },
};
export const PrimaryOutline: Story = {
  args: {
    btnStyle: 'primary-outline',
    children: 'Primary Outline Btn',
  },
};
export const Close: Story = {
  args: {
    btnStyle: 'close',
  },
};
