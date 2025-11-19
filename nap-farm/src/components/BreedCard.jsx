import { useCart } from "./CartContext";

export default function BreedCard({ breed }) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white shadow-md rounded-lg p-4 hover:scale-105 duration-200">
      <img
        src={breed.image}
        alt={breed.name}
        className="w-full h-48 object-cover rounded"
      />

      <h3 className="text-xl font-bold mt-2">{breed.name}</h3>

      <p className="text-gray-600 text-sm mt-1">{breed.description}</p>

      <p className="text-green-600 font-bold mt-3">
        KES {breed.price.toLocaleString()}
      </p>

      <button
        onClick={() => addToCart(breed)}
        className="mt-3 bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded"
      >
        Add to Cart
      </button>
    </div>
  );
}