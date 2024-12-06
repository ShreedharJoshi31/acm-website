import React from "react";
import { Link } from "react-router-dom";
import { Github, Linkedin, Twitter, Code2 } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Code2 className="w-8 h-8 text-blue-500" />
            <span className="text-xl font-semibold">ACM Chapter</span>
          </div>
          <div className="flex gap-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors"
            >
              <Twitter className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-blue-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-blue-500 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/events"
                  className="hover:text-blue-500 transition-colors"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  to="/teams"
                  className="hover:text-blue-500 transition-colors"
                >
                  Teams
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.acm.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-500 transition-colors"
                >
                  ACM Global
                </a>
              </li>
              <li>
                <a
                  href="https://dl.acm.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-500 transition-colors"
                >
                  Digital Library
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
