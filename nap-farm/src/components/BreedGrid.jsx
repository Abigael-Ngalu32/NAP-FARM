import React from "react";
import BreedCard from "./BreedCard";
import { breeds } from "../data/breeds"; // adjust path if needed

const BreedGrid = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Our Chicken Breeds</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {breeds.map((breed) => (
          <BreedCard key={breed.id} breed={breed} />
        ))}
      </div>
    </div>
  );
};

export default BreedGrid;