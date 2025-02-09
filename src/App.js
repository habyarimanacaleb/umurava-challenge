import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserProvider, useUser } from "./context/UserContext";
import { ProtectedRoute } from "./components/dashboard-components/ProtectedRoutes";

// Admin Pages
import AdminHomePages from "./pages/admin-pages/AdminHomePages";
import AdminChallenge from "./pages/admin-pages/AdminChallenges";
import AdminChallengeDetail from "./pages/admin-pages/AdminChallengeDetail";
import CreateNewChallenge from "./components/dashboard-components/CreateNewChallenge";
import EditChallengeHackathons from "./pages/admin-pages/EditChallengeHackathons";

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

function App() {
  return (
    <UserProvider>
      <Router>
        <MainContent />
      </Router>
    </UserProvider>
  );
}

function MainContent() {
  const { user } = useUser(); // Accessing user context here

  if (!user) {
    return <div>Loading...</div>; // Wait for the user context to load
  }

  const isAdmin = user.role === "admin";
  const isTalent = user.role === "talent";

  return (
    <Routes>
      {/* Admin Routes */}
      {isAdmin && (
        <>
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
        </>
      )}

      {/* Talent Routes */}
      {isTalent && (
        <>
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
        </>
      )}

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
  );
}

export default App;
