import { Linkedin, Facebook, Instagram, Twitter, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900/80 text-white py-5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center gap-4">
            <img
              src="/ACM-logo.png"
              className="w-12 h-12 md:w-16 md:h-16 object-contain"
              alt="ACM Logo"
            />
            <span className="text-2xl font-semibold text-center">ACM Mumbai Chapter</span>
          </div>
        </div>

        <div className="flex justify-center gap-6">
          <a href="https://www.linkedin.com/company/acm-mumbaichapter" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-6 h-6 text-blue-500 hover:text-white transition-colors" />
          </a>
          <a href="https://www.facebook.com/acm.mumbaichapter" target="_blank" rel="noopener noreferrer">
            <Facebook className="w-6 h-6 text-blue-500 hover:text-white transition-colors" />
          </a>
          <a href="https://www.instagram.com/acm.mumbaichapter" target="_blank" rel="noopener noreferrer">
            <Instagram className="w-6 h-6 text-blue-500 hover:text-white transition-colors" />
          </a>
          <a href="https://twitter.com/mumbai_acm" target="_blank" rel="noopener noreferrer">
            <Twitter className="w-6 h-6 text-blue-500 hover:text-white transition-colors" />
          </a>
        </div>
        <div className="flex justify-center gap-6 mt-3">
          <a href="mailto:acm.mumbaichapter@gmail.com" className="flex items-center gap-2">
            <Mail className="w-6 h-6 text-blue-500 hover:text-white transition-colors" />
            <span className="text-white hover:text-blue-500 transition-colors">acm.mumbaichapter@gmail.com</span>
          </a>
        </div>
      </div>
    </footer>
  );
};
