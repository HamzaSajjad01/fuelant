import { FaTachometerAlt, FaGasPump, FaCarSide, FaBolt, FaCogs, FaOilCan } from "react-icons/fa";

const benefits = [
  { text: "Boosts Engine Performance", icon: <FaTachometerAlt className="text-3xl text-red-500" /> },
  { text: "Improves Mileage & Fuel Economy", icon: <FaGasPump className="text-3xl text-green-500" /> },
  { text: "Cleans Carbon Deposits", icon: <FaCarSide className="text-3xl text-blue-500" /> },
  { text: "Reduces Engine Knocking", icon: <FaBolt className="text-3xl text-yellow-500" /> },
  { text: "Restores Lost Torque & Power", icon: <FaCogs className="text-3xl text-purple-500" /> },
  { text: "Works in Gasoline & Diesel Engines", icon: <FaOilCan className="text-3xl text-orange-500" /> },
];

const Benefits = () => {
  return (
    <section className="bg-white py-14 px-6">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
        Benefits of Fuelant
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {benefits.map((b) => (
          <div
            key={b.text}
            className="flex flex-col sm:flex-row items-center sm:items-start gap-4 bg-[#f7f3ea] p-6 rounded-xl shadow hover:shadow-lg transition duration-300"
          >
            {/* Icon with colored circle background */}
            <div className="flex justify-center items-center w-16 h-16 rounded-full bg-white shadow-md flex-shrink-0">
              {b.icon}
            </div>

            {/* Benefit text */}
            <p className="font-semibold text-gray-800 text-center sm:text-left text-lg">
              {b.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Benefits;
