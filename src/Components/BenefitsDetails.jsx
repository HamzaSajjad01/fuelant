// src/Components/BenefitsDetails.jsx
import { FaBolt, FaGasPump, FaBroom, FaVolumeUp, FaTachometerAlt, FaFire } from "react-icons/fa";

const detailedBenefits = [
  {
    title: "Boosts Engine Performance",
    icon: <FaBolt className="text-5xl text-yellow-500 mb-4" />,
    description:
      "Fuelant cleans the internal components of your engine, reducing friction and restoring optimal power output for smoother acceleration and enhanced overall performance.",
  },
  {
    title: "Improves Mileage & Fuel Economy",
    icon: <FaGasPump className="text-5xl text-green-500 mb-4" />,
    description:
      "By removing carbon deposits and improving fuel combustion, Fuelant helps your engine use fuel more efficiently, resulting in noticeable improvements in mileage.",
  },
  {
    title: "Cleans Carbon Deposits",
    icon: <FaBroom className="text-5xl text-blue-500 mb-4" />,
    description:
      "Fuelant targets carbon buildup in valves, injectors, and combustion chambers, ensuring a cleaner engine and preventing performance loss caused by deposits.",
  },
  {
    title: "Reduces Engine Knocking",
    icon: <FaVolumeUp className="text-5xl text-red-500 mb-4" />,
    description:
      "By cleaning the combustion chambers, Fuelant minimizes knocking and pinging noises, allowing your engine to run smoothly and safely at higher compression.",
  },
  {
    title: "Restores Lost Torque & Power",
    icon: <FaTachometerAlt className="text-5xl text-purple-500 mb-4" />,
    description:
      "Fuelant restores engine efficiency by clearing blockages and deposits, giving back the lost torque and power that can degrade over time.",
  },
  {
    title: "Works in Gasoline & Diesel Engines",
    icon: <FaFire className="text-5xl text-orange-500 mb-4" />,
    description:
      "Safe for all types of engines, Fuelant provides superior cleaning and performance benefits for both gasoline and diesel-powered vehicles.",
  },
];

const BenefitsDetails = () => {
  return (
    <section className="bg-[#f7f3ea] py-16 px-6">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-16">
        Detailed Benefits of Fuelant
      </h2>

      <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {detailedBenefits.map((benefit) => (
          <div
            key={benefit.title}
            className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center"
          >
            {benefit.icon}
            <h3 className="text-xl md:text-2xl font-semibold mb-4">{benefit.title}</h3>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BenefitsDetails;
