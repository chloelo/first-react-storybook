import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '@/pages/ErrorPage';
import TryDarkModePage from '@/pages/TryDarkModePage';
import RootLayout from '@/layout/RootLayout';
import ChartPage from '@/pages/ChartPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <TryDarkModePage />,
      },
      {
        path: 'charts',
        element: <ChartPage />,
      },
    ],
  },
]);

export default router;
