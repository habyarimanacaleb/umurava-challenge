// ProtectedRoute.js
import { Navigate } from "react-router-dom";
import { useUser } from "../../context/UserContext";

export const ProtectedRoute = ({ allowedRoles, children }) => {
  const { userRole } = useUser();

  if (!allowedRoles.includes(userRole)) {
    return <Navigate to="/" />;
  }

  return children;
};
