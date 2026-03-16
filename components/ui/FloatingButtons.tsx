'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const FloatingButtons = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const maxHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrolled / maxHeight) * 100;
      
      setScrollProgress(Math.min(progress, 100));
      
      if (scrolled > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {/* Scroll to Top Button with Progress */}
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 w-12 h-12 bg-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center justify-center overflow-hidden"
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          {/* Progress Background */}
          <div 
            className="absolute inset-0 rounded-full"
            style={{
              background: `conic-gradient(from 0deg, #B32025 0deg, #B32025 ${scrollProgress * 3.6}deg, #E5E7EB ${scrollProgress * 3.6}deg)`
            }}
          />
          
          {/* White Center */}
          <div className="absolute inset-1 bg-white rounded-full flex items-center justify-center">
            <ArrowUp className="h-4 w-4 text-[#1F3C73]" />
          </div>
        </motion.button>
      )}

      {/* WhatsApp Button - Fixed */}
      <motion.a
        href="https://wa.me/543544420000"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        className="fixed bottom-20 right-6 z-40 w-12 h-12 bg-[#25D366] rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center justify-center"
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
      >
        <FaWhatsapp className="h-6 w-6 text-white" />
      </motion.a>
    </>
  );
};

export default FloatingButtons;
