import Home from "./pages/Home";
import { CartProvider } from "./components/CartContext";

export default function App() {
  return (
    <CartProvider>
      <Home />
    </CartProvider>
  );
}
