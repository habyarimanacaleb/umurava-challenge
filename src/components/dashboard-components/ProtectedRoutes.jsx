import { Navigate } from "react-router-dom";
import { useUser } from "../../context/UserContext";

export const ProtectedRoute = ({ allowedRoles, children }) => {
  const { user } = useUser();

  // If user is not defined or doesn't have a valid role, redirect to homepage
  if (!user || !allowedRoles.includes(user.role)) {
    return <Navigate to="/" />;
  }

  return children;
};
