import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(
    (user = {
      id: 1,
      role: "admin",
    })
  );
  localStorage.setItem("user", JSON.stringify(user));
  useEffect(() => {
    // Store user in local storage or state management
    const logedUser = localStorage.getItem("user");
    setUser(logedUser);
    if (user.role === "admin") {
      navigate("/admin");
    } else {
      navigate("/talent");
    }
  });
  return (
    <div>
      <h2>Login Page</h2>
      <button>Login</button>
    </div>
  );
};
