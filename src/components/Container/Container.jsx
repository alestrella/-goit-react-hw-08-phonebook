import PropTypes from 'prop-types';
import Box from 'components/Box';

export const Container = ({ children }) => {
  return (
    <Box
      maxWidth="650px"
      p={5}
      m="0 auto"
      boxShadow="card"
      borderRadius="normal"
      bg="bgDark"
    >
      {children}
    </Box>
  );
};

Container.propsTypes = {
  children: PropTypes.node,
};
