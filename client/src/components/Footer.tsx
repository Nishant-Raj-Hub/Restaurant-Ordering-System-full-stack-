import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          <div>
            <h3 className="text-xl font-bold mb-4">The Digital Diner</h3>
            <p className="text-gray-400 mb-4">
              Bringing delicious meals right to your doorstep with just a few clicks.
              Quality food, fast delivery, and a seamless ordering experience.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-teal-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-teal-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-teal-400 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#menu" className="text-gray-400 hover:text-white transition-colors">Menu</a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Special Offers</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              </li>
            </ul>
          </div>
          
          <div id="contact">
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 mt-0.5 text-teal-400 flex-shrink-0" size={18} />
                <span className="text-gray-400">
                  123 Restaurant Lane, Foodville, FD 12345
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 text-teal-400 flex-shrink-0" size={18} />
                <a href="tel:+15551234567" className="text-gray-400 hover:text-white transition-colors">
                  (555) 123-4567
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 text-teal-400 flex-shrink-0" size={18} />
                <a href="mailto:info@digitaldiner.com" className="text-gray-400 hover:text-white transition-colors">
                  info@digitaldiner.com
                </a>
              </li>
            </ul>
            <div className="mt-4">
              <h4 className="font-medium mb-2">Hours</h4>
              <p className="text-gray-400">Monday - Friday: 11am - 10pm</p>
              <p className="text-gray-400">Saturday - Sunday: 10am - 11pm</p>
            </div>
          </div>
        </div>
        
        <div className="text-center pt-8 border-t border-gray-800">
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} The Digital Diner. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;