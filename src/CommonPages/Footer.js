import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* About Section */}
          <div>
            <h2 className="text-lg font-semibold text-white mb-3">About Us</h2>
            <p className="text-sm">
              We provide educational tools to help students solve physics
              equations and understand concepts interactively.
            </p>
          </div>

          {/* About & Characteristics */}
          <div>
            <h2 className="text-lg font-semibold text-white mb-3">
              About & Characteristics
            </h2>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="hover:text-green-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/mission" className="hover:text-green-400">
                  Our Mission
                </Link>
              </li>
              <li>
                <Link to="/vision" className="hover:text-green-400">
                  Our Vision
                </Link>
              </li>
              <li>
                <Link to="/values" className="hover:text-green-400">
                  Core Values
                </Link>
              </li>
              <li>
                <Link to="/team" className="hover:text-green-400">
                  Our Team
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-lg font-semibold text-white mb-3">Contact</h2>
            <p className="text-sm">Email: almubin78@gmail.com</p>
            <p className="text-sm">Phone: 017-019-06543</p>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Physics And Technology. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
