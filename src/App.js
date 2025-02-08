// UserContext.js (Create this file in the context folder)
import { useContext } from "react";
// App.js (Updated to use UserContext)
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//
import EditChallengeHackathons from "./pages/admin-pages/EditChallengeHackathons";
import AdminHomePages from "./pages/admin-pages/AdminHomePages";
import AdminChallenge from "./pages/admin-pages/AdminChallenges";
import AdminChallengeDetail from "./pages/admin-pages/AdminChallengeDetail";
import { UserProvider } from "./context/UserContext";
import { UserContext } from "./context/UserContext";

import { ProtectedRoute } from "./components/dashboard-components/ProtectedRoutes";

// Admin Pages
import CreateNewChallenge from "./components/dashboard-components/CreateNewChallenge";

// Talent Pages
import TalentHomePage from "./pages/talent-pages/TalentHomePages";
import TalentChallenge from "./pages/talent-pages/TalentChallenges";
import TalentChallengeDetail from "./pages/talent-pages/TalentChallengeDetail";
import TalentCommunity from "./pages/talent-pages/TalentCommunity";

// Public Pages
import { Homepage } from "./components/Homepage";
import { Challenge } from "./components/Challenges";
import { AboutUs } from "./components/AboutUs";
import { Institution } from "./components/Institution";
import { Join } from "./components/Join";
import { Contact } from "./components/Contact";
import HomeButton from "./asset/404";

// Create the useUser hook
export const useUser = () => {
  return useContext(UserContext);
};
function App() {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const userRole = currentUser?.role || "guest"; // Default to "guest"

  return (
    <UserProvider value={{ userRole }}>
      <Router>
        <MainContent userRole={userRole} />
      </Router>
    </UserProvider>
  );
}

function MainContent() {
  // const location = useLocation();
  // const isAdminRoute = location.pathname.startsWith("/admin");
  // const isTalentRoute = location.pathname.startsWith("/talent");
  // const shouldHideLayout = isAdminRoute || isTalentRoute;

  return (
    <>
      <Routes>
        {/* Admin Routes (Protected) */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <AdminHomePages />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin-challenge"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <AdminChallenge />
            </ProtectedRoute>
          }
        />
        <Route
          path="/challenge/:id"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <AdminChallengeDetail />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin-create-challenge"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <CreateNewChallenge />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin-edit-challenge"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <EditChallengeHackathons />
            </ProtectedRoute>
          }
        />

        {/* Talent Routes (Protected) */}
        <Route
          path="/talent"
          element={
            <ProtectedRoute allowedRoles={["talent"]}>
              <TalentHomePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/talent-challenge"
          element={
            <ProtectedRoute allowedRoles={["talent"]}>
              <TalentChallenge />
            </ProtectedRoute>
          }
        />
        <Route
          path="/talent-community"
          element={
            <ProtectedRoute allowedRoles={["talent"]}>
              <TalentCommunity />
            </ProtectedRoute>
          }
        />
        <Route
          path="/talent-challenge-detail"
          element={
            <ProtectedRoute allowedRoles={["talent"]}>
              <TalentChallengeDetail />
            </ProtectedRoute>
          }
        />

        {/* Public Routes */}
        <Route path="/" element={<Homepage />} />
        <Route path="/Hackathons" element={<Challenge />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/institution" element={<Institution />} />
        <Route path="/join" element={<Join />} />
        <Route path="/contact" element={<Contact />} />

        {/* 404 Page */}
        <Route
          path="*"
          element={
            <div className="bg-gray-100 h-[100vh] flex flex-col p-42 items-center">
              <h1 className="text-center text-3xl font-bold">
                404 - Page Not Found. Return To Home Page.
              </h1>
              <HomeButton />
            </div>
          }
        />
      </Routes>
    </>
  );
}

export default App;
