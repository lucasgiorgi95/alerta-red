'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Phone, Shield } from 'lucide-react';
import Link from 'next/link';
import Button from './Button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Inicio', href: '/' },
    { name: 'Servicios', href: '/servicios' },
    { name: 'Sobre Nosotros', href: '/sobre-nosotros' },
    { name: 'Contacto', href: '/#contact' },
  ];

  return (
    <header className="fixed top-0 w-full bg-white shadow-md z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Shield className="h-8 w-8 text-[#1F3C73]" />
            <div>
              <h1 className="text-xl font-bold text-[#1F3C73] font-montserrat">
                Alerta Red
              </h1>
              <p className="text-xs text-gray-600 font-inter">
                Seguridad Privada
              </p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-[#1F3C73] transition-colors duration-200 font-inter"
              >
                {item.name}
              </Link>
            ))}
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4 text-[#B32025]" />
              <span className="text-sm font-medium text-gray-700 font-inter">
                (03544) 42-0000
              </span>
            </div>
            <Button size="sm" variant="primary">
              Contacto
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-[#1F3C73] focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden py-4 border-t border-gray-200"
          >
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-[#1F3C73] transition-colors duration-200 font-inter"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex items-center space-x-2 pt-2">
                <Phone className="h-4 w-4 text-[#B32025]" />
                <span className="text-sm font-medium text-gray-700 font-inter">
                  (03544) 42-0000
                </span>
              </div>
              <Button size="sm" variant="primary" className="w-full">
                Contacto
              </Button>
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  );
};

export default Header;
