import { useAuth } from 'hooks';
import { Navigate } from 'react-router-dom';

const PublicRoute = ({
  restricted = false,
  redirectTo = '/',
  component: Component,
}) => {
  const { isLoggedIn } = useAuth();
  const shouldRedirect = isLoggedIn && restricted;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};

export default PublicRoute;
