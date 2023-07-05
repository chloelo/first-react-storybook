import DarkModeContext, {
  type DarkModeContextType,
} from '@/context/DarkModeContext';
import { useContext } from 'react';

import styles from './ButtonsStyle.module.scss';

type ButtonProps = {
  url?: string;
  isFileDownload?: boolean;
  btnStyle?:
    | 'primary'
    | 'danger'
    | 'light'
    | 'primary-outline'
    | 'light-outline'
    | 'close';
  classNames?: string;
  btnType?: string;
  onClick?: () => void;
};

function SCButton({
  children,
  btnStyle = 'primary',
  classNames,
  onClick,
  url,
  isFileDownload,
}: React.PropsWithChildren<ButtonProps>): JSX.Element {
  const { darkMode } = useContext(DarkModeContext) as DarkModeContextType;
  const buttonTypes = [
    'primary',
    'danger',
    'light',
    'primary-outline',
    'light-outline',
    'close',
  ];
  const targetType = buttonTypes.find((el) => el === btnStyle) ?? 'primary';

  if (url) {
    if (isFileDownload) {
      return (
        <a
          href={url}
          download
          className={`${styles.btnBase} ${
            styles[`btn-${targetType}`]
          } ${classNames}`}
          rel='noreferrer'
        >
          {children}
        </a>
      );
    }

    return (
      <a
        href={url}
        target='_blank'
        className={`${styles.btnBase} ${
          styles[`btn-${targetType}`]
        } ${classNames}`}
        rel='noreferrer'
      >
        {children}
      </a>
    );
  }
  if (btnStyle === 'close') {
    return (
      <button
        type='button'
        className={`${styles[`btn-${targetType}`]} ${classNames} ${
          darkMode ? styles.dark : ''
        }`}
        onClick={onClick}
      >
        <svg
          className='h-8 w-8'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <line x1='18' y1='6' x2='6' y2='18' />{' '}
          <line x1='6' y1='6' x2='18' y2='18' />
        </svg>
      </button>
    );
  }
  return (
    <button
      type='button'
      className={`${styles.btnBase} ${
        styles[`btn-${targetType}`]
      } ${classNames} ${darkMode ? styles.dark : ''}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

SCButton.defaultProps = {
  onClick: undefined,
};

export default SCButton;
