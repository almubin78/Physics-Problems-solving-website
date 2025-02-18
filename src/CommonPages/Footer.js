import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* About Section */}
          <div>
            <h2 className="text-lg font-semibold text-white mb-3">About Us</h2>
            <p className="text-sm">We provide educational tools to help students solve physics equations and understand concepts interactively.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-lg font-semibold text-white mb-3">Quick Links</h2>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-green-400">Home</Link></li>
              <li><Link to="/motion" className="hover:text-green-400">Motion Calculator</Link></li>
              <li><Link to="/force" className="hover:text-green-400">Force Calculator</Link></li>
              <li><Link to="/energy" className="hover:text-green-400">Energy Calculator</Link></li>
              <li><Link to="/contact" className="hover:text-green-400">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-lg font-semibold text-white mb-3">Contact</h2>
            <p className="text-sm">Email: support@physicshelp.com</p>
            <p className="text-sm">Phone: +123 456 7890</p>
            <p className="text-sm">Address: 123 Science Avenue, Education City</p>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Physics Solver. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
