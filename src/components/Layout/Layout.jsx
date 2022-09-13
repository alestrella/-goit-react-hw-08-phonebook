import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';
import Box from 'features/Box';
import AppBar from 'components/AppBar/AppBar';
import GlobalStyles from 'features/GlobalStyles';
import { Suspense } from 'react';
import { Loader } from 'features/Loader/Loader';

const Layout = () => {
  return (
    <>
      <AppBar />
      <Box fontFamily="body" height="100vh" as="main">
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
        <GlobalStyles />
        <Toaster
          toastOptions={{
            style: {
              border: '1px solid #00DAC5',
              borderRadius: '10px',
              background: '#121212',
              padding: '16px',
              color: '#00DAC5',
            },
          }}
        />
      </Box>
    </>
  );
};

export default Layout;
