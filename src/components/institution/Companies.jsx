import Tori from "../../assets/logos/Tori.webp";
import GDGKigali from "../../assets/logos/gdg.png";
import EducationCollaborative from "../../assets/logos/collaborative.jpeg";
import Kepler from "../../assets/logos/Kepler.jpeg";
import Hiil from "../../assets/logos/hiil.png";
import CIBA from "../../assets/Official Logo 1.png";
import ARED from "../../assets/logos/ared.png";
import IGIHE from "../../assets/logos/igihe.jpg";
import Viamo from "../../assets/logos/viamo.jpeg";
import Laterite from "../../assets/logos/laterite.png";
import SokoFhd from "../../assets/Official Logo 1.png";

const Companies = () => {
  return (
    <div className="py-10 bg-white">
      {/* Heading */}
      <div className="text-center">
        <h2 className="text-xl md:text-xl font-bold text-gray-800">
          Join a few Educational Institutions using <br /> Skills Challenges by
          Umurava
        </h2>
      </div>

      {/* Logo Grid */}
      <div className="mt-8 flex flex-wrap justify-center gap-6 px-6 md:px-10">
        {/* Row 1 */}
        <div className="flex flex-wrap justify-center gap-6 w-full md:w-auto">
          <img src={Tori} alt="Tori" className="h-8 md:h-8 object-contain" />
          <img
            src={GDGKigali}
            alt="GDG Kigali"
            className="h-8 md:h-10 object-contain"
          />
          <img
            src={EducationCollaborative}
            alt="Education Collaborative"
            className="h-8 md:h-10 object-contain"
          />
          <img
            src={Kepler}
            alt="Kepler"
            className="h-8 md:h-10 object-contain"
          />
        </div>

        {/* Row 2 */}
        <div className="flex flex-wrap justify-center gap-6 w-full md:w-auto">
          <img src={Hiil} alt="Hiil" className="h-8 md:h-10 object-contain" />
          <img src={CIBA} alt="CIBA" className="h-8 md:h-10 object-contain" />
          <img src={ARED} alt="ARED" className="h-8 md:h-10 object-contain" />
          <img src={IGIHE} alt="IGIHE" className="h-8 md:h-10 object-contain" />
        </div>

        {/* Row 3 */}
        <div className="flex flex-wrap justify-center gap-6 w-full md:w-auto">
          <img src={Viamo} alt="Viamo" className="h-8 md:h-10 object-contain" />
          <img
            src={Kepler}
            alt="Kepler"
            className="h-8 md:h-10 object-contain"
          />
          <img
            src={Laterite}
            alt="Laterite"
            className="h-8 md:h-10 object-contain"
          />
          <img
            src={SokoFhd}
            alt="SokoFhd"
            className="h-8 md:h-10 object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Companies;
