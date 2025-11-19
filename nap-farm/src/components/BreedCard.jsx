import React from "react";

const BreedCard = ({ breed }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img
        src={breed.image}
        alt={breed.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{breed.name}</h2>
        <p className="text-gray-600 mb-1">{breed.category}</p>
        <p className="text-green-600 font-bold mb-2">${breed.price}</p>
        <p className="text-gray-700 text-sm">{breed.description}</p>
      </div>
    </div>
  );
};

export default BreedCard;