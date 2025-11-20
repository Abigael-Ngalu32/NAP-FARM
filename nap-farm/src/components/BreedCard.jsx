const BreedCard = ({ breed }) => {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img
        src={breed.image}
        alt={`Image of ${breed.name}`}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
          {breed.name}
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
          {breed.category}
        </p>
        <p className="text-green-600 dark:text-green-400 font-bold mb-2">
          ${breed.price}
        </p>
        <p className="text-gray-700 dark:text-gray-300 text-sm">
          {breed.description}
        </p>
      </div>
    </div>
  );
};

export default BreedCard;

