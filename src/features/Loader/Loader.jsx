import Box from 'features/Box';
import { InfinitySpin } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <Box display="flex" justifyContent="center" pt={10}>
      <InfinitySpin width="150" color="#BB86FC" />
    </Box>
  );
};
