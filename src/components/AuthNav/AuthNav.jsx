import Box from 'features/Box';
import { Link } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <Box as="nav">
      <Box display="flex" as="ul">
        <Box mr={4} as="li">
          <Link to="/login">Sign In</Link>
        </Box>
        <Box as="li">
          <Link to="/register">Sign Up</Link>
        </Box>
      </Box>
    </Box>
  );
};
