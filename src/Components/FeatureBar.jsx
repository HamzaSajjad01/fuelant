import { FaMoneyBillWave, FaGasPump, FaCar, FaLeaf } from "react-icons/fa";

const features = [
  {
    line1: "SAVE",
    line2: "MONEY",
    icon: <FaMoneyBillWave className="text-3xl sm:text-4xl text-green-600" />,
    border: "border-green-500",
    color1: "text-green-600",
  },
  {
    line1: "SAVE",
    line2: "FUEL UP TO 30%",
    icon: <FaGasPump className="text-3xl sm:text-4xl text-orange-500" />,
    border: "border-orange-500",
    color1: "text-orange-500",
  },
  {
    line1: "BOOSTS",
    line2: "ENGINE POWER",
    icon: <FaCar className="text-3xl sm:text-4xl text-blue-600" />,
    border: "border-blue-500",
    color1: "text-blue-600",
  },
  {
    line1: "CARBON",
    line2: "CLEANING",
    icon: <FaLeaf className="text-3xl sm:text-4xl text-emerald-600" />,
    border: "border-emerald-500",
    color1: "text-emerald-600",
  },
];

const FeatureBar = () => {
  return (
    <section className="bg-[#eae6dc] py-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-6">
        {features.map((item, index) => (
          <div
            key={index}
            className={`bg-white p-5 rounded-xl shadow-sm flex items-center gap-4 border-l-4 ${item.border} hover:shadow-lg transition`}
          >
            {/* Icon */}
            <div className="flex-shrink-0">{item.icon}</div>

            {/* Text */}
            <div className="leading-tight font-bold text-center sm:text-left">
              <p className={`text-lg sm:text-xl ${item.color1}`}>{item.line1}</p>
              <p className="text-lg sm:text-xl text-gray-900">{item.line2}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureBar;
