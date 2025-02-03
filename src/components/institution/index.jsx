import Project from "./Project";
import Offerings from "./Offerings";
import Companies from "./Companies";
import Integration from "./Integration";
import CallToAction from "./CallToAction";
import Footer from "../home/Footer";

const Institution = () => {
  return (
    <div>
      <Project />
      <Offerings />
      <Companies />
      <Integration />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Institution;
