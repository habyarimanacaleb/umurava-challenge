import { Navigate } from "react-router-dom";
import { useUser } from "../../context/UserContext";

export const ProtectedRoute = ({ allowedRoles, children }) => {
  const { user } = useUser();
  if (!user || !allowedRoles.includes(user.role)) {
    return <Navigate to="/" />;
  }

  return children;
};
