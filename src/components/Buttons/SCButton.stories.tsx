import type { Meta, StoryObj } from '@storybook/react';

import SCButton from './SCButton';
const meta: Meta<typeof SCButton> = {
  title: 'Example/SCButton', // 資料夾分類放在 title
  component: SCButton,
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
export const WithCustomChildren: Story = {
  args: {
    btnStyle: 'primary',
    children: (
      <div>
        <h2 className='dark:border-b border-b-yellow-500'>Custom Heading</h2>
        <p>Custom child content goes here.</p>
      </div>
    ),
  },
};