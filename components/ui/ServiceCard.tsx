'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, features }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
    >
      {/* Header */}
      <div className="p-6">
        <div className="w-16 h-16 bg-[#1F3C73]/10 rounded-lg flex items-center justify-center text-[#1F3C73] mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-[#111827] mb-3 font-montserrat">
          {title}
        </h3>
        <p className="text-gray-600 mb-4 font-inter leading-relaxed">
          {description}
        </p>
        
        {/* Features */}
        <ul className="space-y-2 mb-6">
          {features.slice(0, 3).map((feature, index) => (
            <li key={index} className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-[#B32025] rounded-full flex-shrink-0" />
              <span className="text-sm text-gray-600 font-inter">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Footer with CTA */}
      <div className="px-6 pb-6">
        <Link href="/servicios">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-[#1F3C73] text-white py-3 px-4 rounded-lg font-medium hover:bg-[#162C55] transition-colors duration-300 font-inter"
          >
            Ver más
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
