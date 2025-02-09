import { Navbar } from "./NavBar";
import OurStory from "./aboutUs/OurStory";
import Solution from "./aboutUs/Solution";
import SkillsChallenge from "./aboutUs/SkillsChallenge";
import Footer from "./home/Footer";

export const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <OurStory />
      <Solution />
      <SkillsChallenge />
      <Footer />
    </div>
  );
};
