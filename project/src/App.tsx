import React from 'react';
import { Building2, Calculator, FileCheck, Users, Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from 'lucide-react';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="bg-white shadow-lg fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Building2 className="h-8 w-8 text-primary-600" />
              <span className="ml-2 text-xl font-bold text-gray-800">Sadrak Consulting</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-600 hover:text-primary-600">Services</a>
              <a href="#why-us" className="text-gray-600 hover:text-primary-600">Why Us</a>
              <a href="#achievements" className="text-gray-600 hover:text-primary-600">Achievements</a>
              <a href="#contact" className="text-gray-600 hover:text-primary-600">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Achievements />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;