import DarkModeContext from '@/context/DarkModeContext';
import { useState, useContext } from 'react';

import MyButton from '@/components/Buttons/SCButton';
import styles from '@/App.module.scss';

const TryDarkModePage = () => {
  const { darkMode } = useContext(DarkModeContext);

  const [count, setCount] = useState(0);
  return (
    <>
      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
  
      <div className='mt-4 p-2 bg-slate-600 text-yellow-500 dark:bg-blue-500 dark:text-white font-bold'>
        {darkMode ? '暗色' : '亮色'}
      </div>
      <div className='mt-4 p-2 text-tryPrimary bg-trySecondary'>
        測試不加入dark:開頭的也可以切換 dark 樣式，寫在 html className 裡
      </div>
      <div className='mt-4 bg-red-300 p-2 dark:bg-yellow-300 dark:text-yellow-800'>
        另一組測試，用 dark: 的方式切換主題色
      </div>
      <MyButton btnStyle='primary-outline' classNames='mt-4 dark:bg-darkMode'>
        MtButton 組件：primary-outline
      </MyButton>
      <MyButton btnStyle='primary' classNames='mt-4'>
        MtButton 組件：primary，邊框是透過 css-module裡的
        :root[data-theme="dark"] 設定
      </MyButton>
      <MyButton btnStyle='danger' classNames='mt-4'>
        MtButton 組件：danger
      </MyButton>
      <div className={`p-2 mt-4 ${styles.tryBtn}`}>
        不加入dark:開頭的也可以切換dark樣式，原生css變數寫在css-module裡，在css-module檔案裡直接使用
        dark: 切換樣式也可以顯示
      </div>
    </>
  );
};

export default TryDarkModePage;
