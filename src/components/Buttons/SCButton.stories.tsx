import type { Meta, StoryObj } from '@storybook/react';

import MyButton from './MyButton';
const meta: Meta<typeof MyButton> = {
  title: 'Example/SCButton', // 資料夾分類放在 title
  component: MyButton,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {};
