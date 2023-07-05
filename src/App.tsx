import '@/main.scss';
import router from './routes/root';

import { RouterProvider } from 'react-router-dom';

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
