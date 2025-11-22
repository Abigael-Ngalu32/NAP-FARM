import breeds from "../data/breeds";
import BreedCard from "./BreedCard"; // Make sure this is imported

const BreedGrid = () => {
  return (
    <section className="bg-white dark:bg-[#1a1a1a] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-gray-900 dark:text-white">
          Our Chicken Breeds
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {breeds.map((breed) => (
            <BreedCard key={breed.id} breed={breed} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BreedGrid;
