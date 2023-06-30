import React from 'react';

type BoxProps = {
  backgroundColor: string;
  label: string;
  size?: 'small' | 'medium' | 'large';
};
export default function Box({
  backgroundColor,
  label,
  size = 'medium',
  ...props
}: BoxProps): JSX.Element {
  console.log(size);
  const style = {
    width: '400px',
    height: '400px',
    backgroundColor,
  };
  return (
    <div style={style} {...props}>
      {label}
    </div>
  );
}
