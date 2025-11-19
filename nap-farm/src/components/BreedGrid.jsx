import { useState } from "react";
import { breeds } from "../data/breeds";
import BreedCard from "./BreedCard";
import CategoryTabs from "./CategoryTabs";

export default function BreedGrid() {
  const categories = ["All", "Layers", "Broilers", "Dual Purpose", "Heritage", "Exotic"];
  const [current, setCurrent] = useState("All");

  const filtered =
    current === "All"
      ? breeds
      : breeds.filter((b) => b.category === current);

  return (
    <section className="p-6">
      <h2 className="text-3xl font-bold text-center">Chicken Breeds</h2>

      <CategoryTabs
        categories={categories}
        active={current}
        onChange={setCurrent}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        {filtered.map((b) => (
          <BreedCard key={b.id} breed={b} />
        ))}
      </div>
    </section>
  );
}