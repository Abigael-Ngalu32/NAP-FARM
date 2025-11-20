export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6 md:px-12 mt-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <h3 className="text-white font-bold text-2xl">PoultryStore</h3>
          <p className="mt-4 text-gray-400 text-sm leading-relaxed">
            Your trusted source for fresh poultry products.
          </p>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-white font-semibold mb-4">Support</h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Shipping</li>
            <li className="hover:text-white cursor-pointer">Returns</li>
            <li className="hover:text-white cursor-pointer">FAQ</li>
          </ul>
        </div>

        {/* Shop */}
        <div>
          <h4 className="text-white font-semibold mb-4">Shop</h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Broilers</li>
            <li className="hover:text-white cursor-pointer">Eggs</li>
            <li className="hover:text-white cursor-pointer">Feed</li>
            <li className="hover:text-white cursor-pointer">Equipment</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold mb-4">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li>Email: <a href="mailto:support@pnapfarm.com" className="hover:text-white">support@pnapfarm.com</a></li>
            <li>Phone: <a href="tel:+237865555555" className="hover:text-white">+237 865 555 555</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

