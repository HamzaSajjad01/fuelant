const BenefitsPage = () => {
  const benefits = [
    {
      title: "Boosts Energy Levels",
      description:
        "Our advanced Canadian formula is specially designed to naturally enhance your body's stamina and daily energy production. By supporting cellular function and improving nutrient absorption, it helps reduce fatigue and keeps you feeling refreshed throughout the day. Whether you're managing a busy work schedule or maintaining an active lifestyle, this product ensures consistent vitality without crashes or artificial stimulants. Experience sustained energy, sharper focus, and improved productivity from morning to night."
    },
    {
      title: "Improves Performance",
      description:
        "Crafted with scientifically researched ingredients, this supplement supports enhanced physical strength, endurance, and overall performance. It helps optimize oxygen flow and muscle efficiency, allowing you to perform at your peak during workouts and daily activities. With consistent use, users report improved recovery time, better stamina, and noticeable gains in physical capability. It's an ideal solution for individuals looking to maximize both mental and physical performance naturally."
    },
    {
      title: "Supports Overall Health",
      description:
        "Beyond performance and energy, our formula provides comprehensive health support. Enriched with essential vitamins, minerals, and antioxidants, it strengthens your immune system and promotes long-term wellness. Regular use contributes to better metabolic balance, cardiovascular support, and improved general well-being. This makes it not just a supplement—but a complete lifestyle enhancement solution."
    },
    {
      title: "Safe & Natural Ingredients",
      description:
        "Made with premium-quality Canadian ingredients, our product prioritizes safety and purity. Every batch undergoes strict quality testing to ensure effectiveness and reliability. Free from harmful chemicals and artificial additives, it provides a clean and natural way to support your body’s needs. You can confidently incorporate it into your daily routine knowing it meets high standards of excellence and safety."
    }
  ];

  return (
    <section className="bg-gradient-to-b from-green-50 to-white min-h-screen py-16 px-4 sm:px-6 lg:px-20">
      <div className="max-w-4xl mx-auto">

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl font-extrabold text-center bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent mb-12 sm:mb-16">
          Discover The Powerful Benefits
        </h1>

        {/* Benefits Cards - Forced Single Column */}
        <div className="grid grid-cols-1 gap-8 sm:gap-12">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-xl rounded-2xl p-6 sm:p-8 hover:shadow-2xl transition duration-300 border border-gray-100"
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-green-700">
                {item.title}
              </h2>
              <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BenefitsPage;
