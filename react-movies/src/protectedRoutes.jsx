import { useContext } from "react"; 
import { Navigate, Outlet, useLocation } from "react-router";
import { AuthContext } from './contexts/authContext'

const ProtectedRoutes = () => {

  const context = useContext(AuthContext);
  const location = useLocation();

  return context.isAuthenticated === true ? (
    <Outlet /> 
  ) : (
    <Navigate to='/login' replace state={{ from: location }}/>
  );
};

export default ProtectedRoutes;
