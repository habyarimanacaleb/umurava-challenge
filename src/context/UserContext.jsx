import { createContext, useContext, useEffect, useState } from "react";

// Create UserContext
export const UserContext = createContext();

// Hook to use UserContext easily
export const useUser = () => useContext(UserContext);

// Provider Component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    // Initialize user from localStorage or undefined
    const storedUser = localStorage.getItem("user");
    let parsedUser = null;
    try {
      parsedUser = storedUser ? JSON.parse(storedUser) : null;
    } catch (error) {
      console.error("Error parsing stored user data:", error);
      localStorage.removeItem("user"); // Remove corrupt data to prevent further crashes
    }
    return parsedUser;
  });
  const [loading, setLoading] = useState(true); // Track loading state

  useEffect(() => {
    setTimeout(() => {
      setLoading(false); // Mark loading as complete
    }, 1000);
  }, []);

  // Store the user in localStorage whenever it changes
  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    }
  }, [user]);

  // Show loading screen while checking authentication
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
