import { Navigate } from 'react-router-dom';
import { isAuth } from '../auth/login';

export function PrivateRoute({ children }) {
  const auth = isAuth();
  return auth ? children : <Navigate to="/login" />;
}

