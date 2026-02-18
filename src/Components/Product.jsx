import { useNavigate } from "react-router-dom";
import product from "../assets/product.png"; // Ensure the file exists

const Product = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-[#f7f3ea] py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE: Text Content */}
        <div className="space-y-6 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold text-gray-900 leading-tight">
            Fuelant Carbon Remover & <br /> Fuel Saver
          </h2>

          <p className="text-gray-700 text-lg sm:text-lg md:text-lg leading-relaxed max-w-lg mx-auto md:mx-0 text-justify">
            Fuelant is engineered to be more than just a fuel additive; it is a vital maintenance tool for the modern driver. By targeting the root causes of engine inefficiency—specifically the stubborn carbon deposits that accumulate over time—Fuelant restores the internal health of your vehicle. This professional-grade formula ensures that every combustion cycle is as efficient as possible, directly translating to smoother operation, reduced engine noise, and a significant boost in throttle response. Whether you are managing a fleet of heavy-duty trucks or maintaining a personal sedan, Fuelant provides the protection and performance enhancement necessary to keep you on the road longer and for less cost.
          </p>

          {/* Learn More Button */}
          <button
            onClick={() => navigate("/benefits")}
            className="bg-[#cd3d33] hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full transition-all flex items-center justify-center gap-2 uppercase tracking-wide shadow-md mx-auto md:mx-0"
          >
            Learn More <span className="text-xl">→</span>
          </button>
        </div>

        {/* RIGHT SIDE: Product Image */}
        <div className="flex justify-center items-center mt-8 md:mt-0">
          <img
            src={product}
            alt="Fuelant Carbon Remover"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
          />
        </div>

      </div>
    </section>
  );
};

export default Product;
