import { createContext, useContext, useEffect, useState } from "react";

// Create UserContext
export const UserContext = createContext();

// Hook to use UserContext easily
export const useUser = () => {
  return useContext(UserContext);
};

// Provider Component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Initialize as null to check loading state

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Store the user in localStorage whenever it changes
  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    }
  }, [user]);

  // Return loading state or actual children when user data is available
  if (user === null) {
    return <div>Loading...</div>; // Or a loading spinner
  }

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
