// ProtectedRoute.js (Example)
import { Navigate } from "react-router-dom";
import { useUser } from "../../App";

export const ProtectedRoute = ({ children, allowedRoles }) => {
  const { userRole } = useUser(); // Use context to get userRole

  // Check if userRole is in allowedRoles
  if (!allowedRoles.includes(userRole)) {
    return <Navigate to="/" />; // Redirect to homepage if not authorized
  }

  return children; // Allow access to protected route
};
