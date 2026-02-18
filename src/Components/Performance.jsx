import { useNavigate } from "react-router-dom";

const newImageUrl =
  "https://i.pinimg.com/736x/b9/47/71/b94771631f98600c836a7702192390ce.jpg";

const Performance = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-[#f7f3ea] py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left Side: Image */}
        <div className="flex justify-center items-center">
          <img
            src={newImageUrl}
            alt="Performance Visual"
            className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Right Side: Content */}
        <div className="space-y-6 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold text-gray-900 leading-tight">
            For Strong Torque & <br /> Better Performance
          </h2>

          <p className="text-gray-700 text-lg sm:text-lg md:text-lg leading-relaxed max-w-lg mx-auto md:mx-0 text-justify">
            Fuelant carbon remover cleans the carbon deposits accumulated inside your engine, improving fuel efficiency, enhancing engine power, and boosting overall performance. By removing these harmful deposits, it ensures smoother operation, reduces wear and tear, and helps maintain optimal engine efficiency, giving your vehicle better reliability and longer life.
          </p>

          <button
            onClick={() => navigate("/benefits")}
            className="bg-[#cd3d33] hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full transition-all flex items-center justify-center gap-2 uppercase tracking-wide shadow-md mx-auto md:mx-0"
          >
            Learn More <span className="text-xl">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Performance;
