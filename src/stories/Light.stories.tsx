import type { Meta, StoryObj } from '@storybook/react';
import Light from './Light';

const meta: Meta<typeof Light> = {
  component: Light,
  title: 'Example/Light',
  tags: ['autodocs'], // 自動產生 Docs 文件，在 .storybook 資料夾下的main.ts 可以看到 docs 設定
  argTypes: { // 改變參數顯示的型態，可以是 radio 或是下拉選單 (避免使用者隨便輸入)
    variant: {
      control: {
        type: 'radio', // 或是下拉 -> 'select'
        options: ['green', 'yellow', 'red'],
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {};
export const Yellow: Story = {
  args: {
    variant: 'yellow',
  },
};
export const Red: Story = {
  args: {
    variant: 'red',
  },
};

export const Grouped: Story = {
  render: () => (
    <div className='flex flex-col gap-1'>
      <Light variant='green' />
      <Light variant='yellow' />
      <Light variant='red' />
    </div>
  ),
};
