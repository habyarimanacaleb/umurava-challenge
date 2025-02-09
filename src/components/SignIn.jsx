import { useState } from "react";
import jwtDecode from "jwt-decode"; // Import jwtDecode

export const SignIn = ({ onSwitchToCreate }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://umurava-challenge-bn.onrender.com/api/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();
      console.log("API Response:", data); // Debugging

      if (response.ok) {
        const { token } = data;

        if (token) {
          // ✅ Decode JWT token to extract user details
          const decodedUser = jwtDecode(token);
          console.log("Decoded User:", decodedUser); // Debugging

          // ✅ Store token & decoded user info in localStorage
          localStorage.setItem("token", token);
          localStorage.setItem(
            "user",
            JSON.stringify({
              userId: decodedUser.userId,
              email: decodedUser.email,
              role: decodedUser.role || "Guest",
            })
          );

          alert("Login successful!");
        } else {
          alert("Login successful, but token is missing.");
        }
      } else {
        alert(data.message || "Login failed");
      }
    } catch (error) {
      alert("An error occurred");
      console.error("Login error:", error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 mt-10">
      <div className="w-full max-w-sm bg-white rounded-2xl shadow-lg p-6">
        <div className="flex justify-between border-b border-gray-200 pb-3">
          <button className="w-1/2 text-center font-semibold pb-2 border-b-2 border-blue-500 text-blue-500">
            Sign In
          </button>
          <button
            className="w-1/2 text-center font-semibold pb-2 text-gray-400"
            onClick={onSwitchToCreate}
          >
            Create Account
          </button>
        </div>

        <form className="mt-4" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your Email"
              className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm text-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your Password"
                className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm text-sm focus:ring-blue-500 focus:border-blue-500"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-2 flex items-center px-2 mt-1 text-gray-400"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};
