// components/ProtectedRoute.jsx
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ allowedRoles = [], currentRole, redirectTo = "/" , children }) => {
  if (!allowedRoles.includes(currentRole)) {
    return <Navigate to={redirectTo} replace />;
  }

  return children;
};

export default ProtectedRoute;
