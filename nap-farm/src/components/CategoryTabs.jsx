export default function CategoryTabs({ categories, active, onChange }) {
  return (
    <div className="flex gap-3 justify-center mt-6">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={`px-4 py-2 rounded-full border ${
            active === cat
              ? "bg-yellow-500 text-white"
              : "bg-white text-gray-700 hover:bg-gray-100"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}