const testimonials = [
  {
    id: 1,
    name: "Muhammad Rizwan",
    image: "https://i.pravatar.cc/150?img=3",
    feedback: "Fuelant improved my engine performance significantly!"
  },
  {
    id: 2,
    name: "Ali Mirza",
    image: "https://i.pravatar.cc/150?img=8",
    feedback: "I noticed better mileage and smoother driving after using Fuelant."
  },
  {
    id: 3,
    name: "Ayesha Khan",
    image: "https://i.pravatar.cc/150?img=5",
    feedback: "Engine runs quieter and more efficiently now, amazing product!"
  }
];

const Testimonials = () => {
  return (
    <section className="bg-[#f7f3ea] py-16 px-6">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
        What Our Customers Say
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {testimonials.map((t) => (
          <div
            key={t.id}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition duration-300 text-center flex flex-col items-center"
          >
            {/* Customer Image */}
            <img
              src={t.image}
              alt={t.name}
              className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover mb-4 shadow-md"
            />

            {/* Stars */}
            <div className="text-yellow-400 mb-2 text-lg md:text-xl">★★★★★</div>

            {/* Name */}
            <h3 className="font-semibold text-lg md:text-xl">{t.name}</h3>

            {/* Feedback */}
            <p className="text-gray-600 text-sm md:text-base mt-2">{t.feedback}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
