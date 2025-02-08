import { Navbar } from "./NavBar";
import Hero from "./home/Hero";
import Stats from "./home/Stats";
import SkillsLayout from "./home/SkillsLayout";

import Challenges from "./home/Challenges";
import Skills from "./home/Skills";
import Testimonials from "./home/Testimonials";
import Start from "./home/Start";
import Career from "./home/Career";
import Footer from "./home/Footer";


export const Homepage = () => {
  return (
    <div>
    <Navbar />
      <Hero />
      <Stats />
      <SkillsLayout />
      <Challenges />
      <Skills />
      <Testimonials />
      <Start />
      <Career />
      <Footer />
      
     
    </div>
  );
};
