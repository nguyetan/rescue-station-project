import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

import { selectUserAuthenticated } from './features/user/store/selectors';

const AuthorizedRoute = () => {
  const location = useLocation();

  const userAuth = useSelector(selectUserAuthenticated);

  if (!userAuth) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <Outlet />;
};

export default AuthorizedRoute;
