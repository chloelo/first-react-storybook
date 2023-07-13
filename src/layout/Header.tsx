import DarkModeContext from '@/context/DarkModeContext';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import MyButton from '@/components/Buttons/SCButton';
import styles from './Header.module.scss';

const Header = () => {
  const { toggleDarkMode } = useContext(DarkModeContext);
  return (
    <nav
      className={`border-b border-b-slate-300 fixed left-0 right-0 top-0 z-10 bg-slate-200 dark:bg-slate-800 dark:border-b-slate-600 p-2 ${styles.headerWrap}`}
    >
      <ul className='flex gap-2 items-center'>
        <li>
          <NavLink
            className={({ isActive, isPending }) =>
              isActive ? `${styles.active}`: isPending ? 'pending' : ''
            }
            to={`/`}
          >
            首頁
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive, isPending }) =>
              isActive ? `${styles.active}` : isPending ? 'pending' : ''
            }
            to={`charts`}
          >
            amcharts basic charts demo
          </NavLink>
        </li>
        <li className='ml-auto'>
          <MyButton onClick={toggleDarkMode} classNames=''>
            切換 theme 按鈕
          </MyButton>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
