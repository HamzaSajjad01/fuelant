import React from "react";

const HowToUse = () => {
  const steps = [
    {
      title: "Shake the Bottle Thoroughly",
      description:
        "Before adding the product to your fuel tank, ensure that the bottle is shaken well. This allows the advanced cleaning agents and active ingredients to mix properly, ensuring maximum effectiveness. Proper mixing guarantees that every drop delivers optimal engine-cleaning performance."
    },
    {
      title: "Add to Your Fuel Tank",
      description:
        "Pour the recommended quantity directly into your fuel tank before refueling. This ensures that the solution blends evenly with the fuel, allowing it to circulate efficiently throughout the engine system for deep carbon cleaning."
    },
    {
      title: "Drive Normally (200–300 KM)",
      description:
        "Operate your vehicle as usual for the next 200 to 300 kilometers. During this time, the formula actively works to dissolve carbon buildup, clean injectors, and improve combustion efficiency without requiring any special driving conditions."
    },
    {
      title: "Repeat Every 3–4 Months",
      description:
        "For long-term engine protection and peak performance, repeat the process every three to four months. Regular maintenance prevents heavy carbon deposits, enhances fuel economy, and extends the overall lifespan of your engine."
    }
  ];

  return (
    <section className="bg-gradient-to-b from-[#f7f3ea] to-white py-24 px-4 sm:px-6 lg:px-12">
      <div className="max-w-5xl mx-auto space-y-16">

        {/* Main Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent leading-tight">
          How to Use Fuelant Carbon Remover
        </h2>

        <p className="text-gray-700 text-base sm:text-lg md:text-lg leading-relaxed text-center max-w-3xl mx-auto">
          Using Fuelant Carbon Remover is simple, safe, and highly effective. Our advanced formula works seamlessly with your engine system, breaking down stubborn carbon deposits while improving combustion efficiency. Follow the step-by-step guide below for maximum performance and long-lasting engine health.
        </p>

        {/* Steps */}
        <div className="space-y-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 border border-gray-100"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                
                {/* Number Badge */}
                <div className="bg-red-600 text-white w-12 h-12 flex items-center justify-center rounded-full font-bold text-lg sm:text-xl flex-shrink-0">
                  {index + 1}
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-700 text-base sm:text-lg md:text-lg leading-relaxed">
                    {step.description}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>

        <p className="text-gray-700 text-base sm:text-lg md:text-lg leading-relaxed text-center max-w-3xl mx-auto">
          With consistent use, you will notice improvements in fuel efficiency, smoother acceleration, reduced engine noise, and restored power output. Fuelant not only cleans but protects your engine, ensuring reliability and performance for the long run.
        </p>

      </div>
    </section>
  );
};

export default HowToUse;
