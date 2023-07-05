import Header from '@/layout/Header';
import { Outlet } from 'react-router-dom';

export default function RootLayout() {
  return (
    <>
      <Header />
      <main className='mt-14'>
        <Outlet />
      </main>
    </>
  );
}