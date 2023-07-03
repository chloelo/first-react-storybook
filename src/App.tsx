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
      <div>
        <MyButton onClick={toggleDarkMode}>按鈕</MyButton>
      </div>
      <div className='p-2 bg-red-500 dark:bg-blue-500 dark:text-white font-bold'>
        {darkMode ? '暗色' : '亮色'}
      </div>
    </>
  );
}

export default App;
