import { useCart } from "./CartContext";

export default function Navbar() {
  const { cart } = useCart();

  return (
    <nav className="bg-yellow-500 p-4 flex justify-between items-center shadow">
      <h1 className="text-2xl text-white font-bold">PoultryHelp</h1>

      <div className="text-white font-semibold">
        Cart: {cart.length}
      </div>
    </nav>
  );
}