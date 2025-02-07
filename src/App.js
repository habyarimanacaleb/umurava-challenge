import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
//home page
import { Navbar } from "./components/Navbar";
import { Homepage } from "./components/Homepage";
import { Challenge } from "./components/Challenges";
import { AboutUs } from "./components/AboutUs";
import { Institution } from "./components/Institution";
import { Join } from "./components/Join";
import { Contact } from "./components/Contact";
//
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
import HomeButton from "./asset/404";
import Footer from "./components/home/Footer";
function App() {
  return (
    <Router>
      <MainContent />
    </Router>
  );
}
function MainContent() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");
  return (
    <>
      {!isAdminRoute && <Navbar />}
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
        {/* Talent dashboard routes */}
        <Route path="/talent" element={<TalentHomePage />} />
        <Route path="/talent-challenge" element={<TalentChallenge />} />
        <Route path="/talent-community" element={<TalentCommunity />} />
        <Route
          path="/talent-challenge-detail"
          element={<TalentChallengeDetail />}
        />
        {/* Main Routes */}
        <Route path="/" element={<Homepage />} />
        <Route path="/Hackatons" element={<Challenge />} />
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
      {!isAdminRoute && <Footer />}
    </>
  );
}
export default App;
