// import { DarkModeProvider } from '@/context/DarkModeContext';
import DarkModeContext from '@/context/DarkModeContext';
import { useState, useContext } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
// import './App.css'
import './tailwind.scss';

import MyButton from './components/Buttons/MyButton';

function App() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  const [count, setCount] = useState(0);

  return (
    <>
      <div className=''>
        <a href='https://vitejs.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>
        Click on the Vite and React logos to learn more
      </p>
      <MyButton onClick={toggleDarkMode}>切換 theme 按鈕</MyButton>

      {/* <div className='mt-4 p-2 bg-slate-600 text-yellow-500 dark:bg-blue-500 dark:text-white font-bold'>
        {darkMode ? '暗色' : '亮色'}
      </div> */}
      <div className='mt-4 p-2 text-tryPrimary bg-trySecondary'>
        測試不加入dark:開頭的也可以切換dark樣式
      </div>
      <div className='mt-4 bg-red-300 p-2 dark:bg-yellow-300 dark:text-yellow-800'>
        另一組測試，切換一般與 dark: 樣式
      </div>
      <MyButton btnStyle='primary-outline' classNames='mt-4 dark:bg-darkMode'>
        MtButton 組件：primary-outline
      </MyButton>
      <MyButton btnStyle='primary' classNames='mt-4'>
        MtButton 組件：primary，邊框是透過 css-module裡的 :root[data-theme="dark"] 設定
      </MyButton>
    </>
  );
}

export default App;
