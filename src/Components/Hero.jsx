import { useNavigate } from "react-router-dom";
import roads from "../assets/roads.jpg";
import fuelantLogo from "../assets/fuelant-logo.png";

const Hero = () => {
  const navigate = useNavigate(); // initialize navigate function

  return (
    <div
      className="bg-cover bg-center text-white h-screen relative"
      style={{ backgroundImage: `url(${roads})` }}
    >
      {/* Overlay for contrast */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-1 lg:grid-cols-1 items-center px-6 py-20 gap-10">

        {/* TEXT CONTENT */}
        <div className="text-left max-w-3xl ">

          {/* Logo */}
          <img
            src={fuelantLogo}
            alt="Fuelant"
            className="w-60 md:w-72 lg:w-80 mb-6 drop-shadow-xl"
          />

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight text-gray-100">
            CARBON REMOVER
          </h1>

          {/* Sub Heading */}
          <h2 className="text-yellow-400 text-3xl md:text-5xl font-black mb-8 leading-tight">
            BENEFITS OF FUELANT
          </h2>

          {/* Bullet Points */}
          <ul className="space-y-4 mb-8 text-lg md:text-xl">
            <li className="flex items-center gap-3 font-semibold">
              <span className="text-red-500 text-2xl">✔</span>
              Save Money & Fuel up to 30%
            </li>
            <li className="flex items-center gap-3 font-semibold">
              <span className="text-red-500 text-2xl">✔</span>
              Safe for All Engines
            </li>
            <li className="flex items-center gap-3 font-semibold">
              <span className="text-red-500 text-2xl">✔</span>
              Improves Engine Performance
            </li>
          </ul>

          {/* Call to Action */}
          <button
            onClick={() => navigate("/benefits")} // navigate to BenefitsPage
            className="bg-red-600 hover:bg-red-700 transition px-8 py-3 rounded-full font-bold tracking-wide shadow-lg text-lg md:text-xl"
          >
            Learn More →
          </button>
        </div>

      </div>
    </div>
  );
};

export default Hero;
