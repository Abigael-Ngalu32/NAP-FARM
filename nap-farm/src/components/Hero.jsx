export default function Hero() {
  return (
    <section className="bg-yellow-100 py-16 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Text Content */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900">
            Welcome to Nap Farm
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-700">
            Discover premium breeds, expert care, and a community passionate about sustainable farming.
          </p>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded-lg transition">
            Explore Breeds
          </button>
        </div>

        {/* Image */}
        <div className="flex justify-center md:justify-end">
          <img
            src="/hero-image.jpg"
            alt="Farm animals"
            className="w-full max-w-md rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}


