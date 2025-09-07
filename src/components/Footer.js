import React from 'react';
import { FaFacebook, FaLinkedin, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => (
  <footer className="bg-[#f8f6f2] border-t border-gray-200 py-10 px-4">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10">
      {/* Logo & Brand */}
      <div className="flex flex-col items-start min-w-[180px]">
        <img src="/logo.png" alt="Logo" className="h-14 mb-3" />
        <span className="text-lg font-semibold text-primary">Trusted Loan Network</span>
      </div>

      {/* Links */}
      <div className="flex flex-col gap-2 min-w-[180px]">
        <h4 className="font-bold text-gray-900 mb-1">Quick Links</h4>
        <a href="#" className="hover:text-primary transition font-medium">Privacy Policy</a>
        <a href="#" className="hover:text-primary transition font-medium">Customer Support</a>
        <a href="#" className="hover:text-primary transition font-medium">Terms and Conditions</a>
      </div>

      {/* Contact */}
      <div className="flex flex-col gap-2 min-w-[220px]">
        <h4 className="font-bold text-gray-900 mb-1">Contact</h4>
        <div className="flex items-center gap-2">
          <FaMapMarkerAlt className="text-primary" />
          <span>Paseo De Roxas, Makati, Philippines</span>
        </div>
        <div className="flex items-center gap-2">
          <FaPhone className="text-primary" />
          <span>0954 253 6085</span>
        </div>
        <div className="flex items-center gap-2">
          <FaEnvelope className="text-primary" />
          <span>Email</span>
        </div>
      </div>

      {/* Social */}
      <div className="flex flex-col gap-2 min-w-[120px]">
        <h4 className="font-bold text-gray-900 mb-1">Follow Us</h4>
        <a href="#" className="flex items-center gap-2 hover:text-primary transition font-medium">
          <FaFacebook className="text-2xl" /> Facebook
        </a>
        <a href="#" className="flex items-center gap-2 hover:text-primary transition font-medium">
          <FaLinkedin className="text-2xl" /> LinkedIn
        </a>
      </div>
    </div>
    <div className="mt-8 text-center text-gray-500 text-sm">
      &copy; 2025 Trusted Loan Network. All rights reserved.
    </div>
  </footer>
);

export default Footer; 