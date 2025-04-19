import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#121212] text-white py-10 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h4 className="text-lg font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#" className="hover:text-white">About</a></li>
            <li><a href="#" className="hover:text-white">Jobs</a></li>
            <li><a href="#" className="hover:text-white">For the Record</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Communities</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#" className="hover:text-white">For Artists</a></li>
            <li><a href="#" className="hover:text-white">Developers</a></li>
            <li><a href="#" className="hover:text-white">Advertising</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Useful Links</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#" className="hover:text-white">Support</a></li>
            <li><a href="#" className="hover:text-white">Web Player</a></li>
            <li><a href="#" className="hover:text-white">Free Mobile App</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-green-500">🌐</a>
            <a href="#" className="text-gray-400 hover:text-green-500">🐦</a>
            <a href="#" className="text-gray-400 hover:text-green-500">📸</a>
          </div>
        </div>
      </div>
      <div className="mt-10 text-center text-sm text-gray-500">
        © 2025 Spotify Clone. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
