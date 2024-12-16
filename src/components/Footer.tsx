import React from "react";
import { Link } from "react-router-dom";
import { Code2 } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-8">
          <div className="flex items-center gap-2 mb-6">
            <Code2 className="w-8 h-8 text-blue-500" />
            <span className="text-xl font-semibold">ACM Chapter</span>
          </div>
          <nav className="flex flex-wrap justify-center gap-6">
            <Link
              to="/"
              className="text-lg hover:text-blue-500 transition-colors"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-lg hover:text-blue-500 transition-colors"
            >
              About
            </Link>
            <Link
              to="/teams"
              className="text-lg hover:text-blue-500 transition-colors"
            >
              Teams
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};
