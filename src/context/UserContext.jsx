import React, { createContext, useContext, useState, useEffect } from "react";
// Create the UserContext
export const UserContext = createContext();
// Create the useUser hook
export const useUser = () => {
  return useContext(UserContext);
};
// Create a provider component to wrap your app
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Store the user data
  const [loading, setLoading] = useState(true); // Handle loading state (e.g., fetching user info)
  const [error, setError] = useState(null); // Error state for user-related issues
  // Fetch the user information (e.g., from an API or localStorage)
  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      try {
        // Example: Fetch user data from localStorage or an API
        const userData = JSON.parse(localStorage.getItem("user"));
        // Simulate API call or other logic to check if user is authenticated
        if (userData) {
          setUser(userData);
        } else {
          setUser(null);
        }
      } catch (error) {
        setError(
          error.message || "An error occurred while fetching user data."
        );
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, [user]);
  // Function to log in the user (you can replace this with API logic)
  const loginUser = (userData) => {
    localStorage.setItem("user", JSON.stringify(userData)); // Save user to localStorage or any other storage
    setUser(userData); // Update the user state
  };
  // Function to log out the user
  const logoutUser = () => {
    localStorage.removeItem("user"); // Remove user data from storage
    setUser(null); // Reset the user state
  };
  return (
    <UserContext.Provider
      value={{ user, loading, error, loginUser, logoutUser }}
    >
      {children}
    </UserContext.Provider>
  );
};
