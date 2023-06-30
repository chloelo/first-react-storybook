type Props = {
  /** 這裡增加一些敘述說明 */
  variant?: 'green' | 'yellow' | 'red';
};
const getLightColor = (color: string) => {
  switch (color) {
    case 'yellow': {
      return 'bg-yellow-500';
    }
    case 'red': {
      return 'bg-red-500';
    }
    default: {
      return 'bg-green-500';
    }
  }
};
/** 一些 comment for my light component */
const Light = ({ variant = 'green' }: Props) => {
  const bgStyle = getLightColor(variant);
  return <div className={`rounded-full w-12 h-12 ${bgStyle}`}></div>;
};

export default Light;
