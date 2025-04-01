import React from 'react';
import { Facebook, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Sadrak Consulting</h3>
            <p className="text-gray-300">
              Your trusted partner in achieving financial success and tax compliance.
            </p>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-300 hover:text-primary-400">Services</a></li>
              <li><a href="#why-us" className="text-gray-300 hover:text-primary-400">Why Us</a></li>
              <li><a href="#achievements" className="text-gray-300 hover:text-primary-400">Achievements</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-primary-400">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-primary-400">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary-400">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary-400">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8">
          <p className="text-center text-gray-300">
            © {new Date().getFullYear()} Sadrak Consulting. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}