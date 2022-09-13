import PropTypes from 'prop-types';
import Box from 'features/Box';

export const Container = ({ children }) => {
  return (
    <Box
      maxWidth="600px"
      p={6}
      m="0 auto"
      mb={5}
      boxShadow="card"
      borderRadius="semiMiddle"
      bg="bgDark"
    >
      {children}
    </Box>
  );
};

Container.propsTypes = {
  children: PropTypes.node,
};
