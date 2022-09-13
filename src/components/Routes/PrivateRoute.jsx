import { useAuth } from 'hooks';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ redirectTo = '/', component: Component }) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};

export default PrivateRoute;
