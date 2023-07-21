import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '@/pages/ErrorPage';
import TryDarkModePage from '@/pages/TryDarkModePage';
import RootLayout from '@/layout/RootLayout';
import ChartPage from '@/pages/ChartPage';
import FirstApolloPage from "@/pages/FirstApolloPage";
// import ChartClassPage from '@/pages/ChartClassPage';

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
        path: 'charts-demo',
        element: <ChartPage />,
      },
      {
        path: 'apollo-try',
        element: <FirstApolloPage />,
      },
      // {
      //   path: 'charts-class',
      //   element: <ChartClassPage />,
      // },
    ],
  },
]);

export default router;
