export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-8 mt-16">
      <div className="grid md:grid-cols-4 gap-10">
        
        <div>
          <h3 className="text-white font-bold text-xl">PoultryStore</h3>
          <p className="mt-3 text-gray-400">
            Your trusted source for fresh poultry products.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Support</h4>
          <ul className="space-y-2">
            <li>Shipping</li>
            <li>Returns</li>
            <li>FAQ</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Shop</h4>
          <ul className="space-y-2">
            <li>Broilers</li>
            <li>Eggs</li>
            <li>Feed</li>
            <li>Equipment</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Contact</h4>
          <ul className="space-y-2">
            <li>Email: support@poultrystore.com</li>
            <li>Phone: +234 000 0000</li>
          </ul>
        </div>

      </div>
    </footer>
  );
}