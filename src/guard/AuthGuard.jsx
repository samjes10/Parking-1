import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
const PrivateValidationFragment = <Outlet />;
const PublicValidationFragment = <Navigate replace to='/customer-page' />;
export const AuthGuar = () => {
  const user = useSelector((store) => store.user);
  return user.email? (user.rol === "administrador"?(PrivateValidationFragment):(PublicValidationFragment) ):(<Navigate replace to='/login' />)
};
export default AuthGuar;