import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';

import Box from 'components/Box';
import AppBar from 'components/AppBar/AppBar';

const Layout = () => {
  return (
    <>
      <AppBar />
      <Box fontFamily="body" as="main">
        <Outlet />
      </Box>
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
    </>
  );
};

export default Layout;
