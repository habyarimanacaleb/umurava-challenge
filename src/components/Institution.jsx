import { Navbar } from "./Navbar";
import Project from "./institution/Project";
import Offerings from "./institution/Offerings";
import Companies from "./institution/Companies";
import Integration from "./institution/Integration";
import CallToAction from "./institution/CallToAction";
import Footer from "./home/Footer";

export const Institution = () => {
  return (
    <div>
      <Navbar />
      <Project />
      <Offerings />
      <Companies />
      <Integration />
      <CallToAction />
      <Footer />
    </div>
  );
};
