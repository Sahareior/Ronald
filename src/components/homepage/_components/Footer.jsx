import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-center justify-items-center md:text-left">
        {/* Logo and Description */}
        <div>
          <img src="/image/footer.png" alt="WIROKO Logo" className="w-[289px] mx-auto md:mx-0 mb-4" />
          <p className="text-gray-300 w-[70%]">
            Premium luxury furniture marketplace connecting you with the finest furniture makers.
          </p>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Categories</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-white transition">Living Room</a></li>
            <li><a href="#" className="hover:text-white transition">Bed Room</a></li>
            <li><a href="#" className="hover:text-white transition">Dining Room</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-white transition">Track Order</a></li>
            <li><a href="#" className="hover:text-white transition">Help Center</a></li>
            <li><a href="#" className="hover:text-white transition">Return Request</a></li>
            <li><a href="#" className="hover:text-white transition">Return Policy</a></li>
          </ul>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-sm text-center text-gray-500">
        © {new Date().getFullYear()} WIROKO. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
