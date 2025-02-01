import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EditChallengeHackathons from "./pages/admin-pages/EditChallengeHackathons";
import AdminHomePages from "./pages/admin-pages/AdminHomePages";
import AdminChallenge from "./pages/admin-pages/AdminChallenges";
import AdminChallengeDetail from "./pages/admin-pages/AdminChallengeDetail";
import AdminCommunity from "./pages/admin-pages/AdminCommunity";
import CreateNewChallenge from "./components/dashboard-components/CreateNewChallenge";
// talent pages
import TalentHomePage from "./pages/talent-pages/TalentHomePages";
import TalentChallenge from "./pages/talent-pages/TalentChallenges";
import TalentCommunity from "./pages/talent-pages/TalentCommunity";
import TalentChallengeDetail from "./pages/talent-pages/TalentChallengeDetail";
import HomeButton from "./assets/404";
//
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin" element={<AdminHomePages />} />
        <Route path="/admin-challenge" element={<AdminChallenge />} />
        <Route path="/admin-community" element={<AdminCommunity />} />
        <Route
          path="/admin-create-challenge"
          element={<CreateNewChallenge />}
        />
        <Route
          path="/admin-challenge-detail"
          element={<AdminChallengeDetail />}
        />
        <Route
          path="/admin-edit-challenge"
          element={<EditChallengeHackathons />}
        />
        {/* //// talent dashboard routes*/}
        <Route path="/talent" element={<TalentHomePage />} />
        <Route path="/talent-challenge" element={<TalentChallenge />} />
        <Route path="/talent-community" element={<TalentCommunity />} />
        <Route
          path="/talent-challenge-detail"
          element={<TalentChallengeDetail />}
        />
        <Route
          path="*"
          element={
            <div className="bg-gray-100 h-[100vh] flex flex-col p-40 items-center">
              <h1 className="text-center text-3xl  font-bold">
                404 - Page Not Found Return To Home Page .
              </h1>
              <HomeButton />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
