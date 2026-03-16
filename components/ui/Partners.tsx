'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Building2 } from 'lucide-react';

const Partners = () => {
  const partners = [
    { name: 'YPF', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/YPF_logo.svg/2560px-YPF_logo.svg.png' },
    { name: 'YPF Agro', logo: 'https://www.ypf.com.ar/Agro/PublishingImages/ypf-agro-logo.png' },
    { name: 'CLEMIC', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3KqQzZ7L8Qm9X5w6Y7Z8a9b0c1d2e3f4g5h6i7j8k9l0m1n2o3p4q5r6s' },
    { name: 'Mina Clavero', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7T8U9V0W1X2Y3Z4A5B6C7D8E9F0G1H2I3J4K5L6M7N8O9P0Q1R2S3T4U5' },
    { name: 'Laboratorio SIL', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcA1B2C3D4E5F6G7H8I9J0K1L2M3N4O5P6Q7R8S9T0U1V2W3X4Y5Z6A7B8C9' },
    { name: 'Terminal de Ómnibus de Villa Dolores', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcD1E2F3G4H5I6J7K8L9M0N1O2P3Q4R5S6T7U8V9W0X1Y2Z3A4B5C6D7E8F9' },
    { name: 'Municipalidad de Villa Dolores', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcF1G2H3I4J5K6L7M8N9O0P1Q2R3S4T5U6V7W8X9Y0Z1A2B3C4D5E6F7G8H9' },
    { name: 'Cooperativa CEMDO', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcG1H2I3J4K5L6M7N8O9P0Q1R2S3T4U5V6W7X8Y9Z0A1B2C3D4E5F6G7H8I9' }
  ];

  const [duplicatedPartners, setDuplicatedPartners] = useState<typeof partners>([]);

  useEffect(() => {
    // Duplicar el array para crear un efecto infinito
    setDuplicatedPartners([...partners, ...partners]);
  }, []);

  return (
    <section className="py-16 bg-[#1F3C73]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-montserrat">
            Confían en <span className="text-[#B32025]">Nosotros</span>
          </h2>
          <p className="text-lg text-white/90 font-inter max-w-3xl mx-auto">
            Empresas líderes que han elegido Alerta Red para su seguridad y protección
          </p>
        </motion.div>

        {/* Carrusel Automático */}
        <div className="relative overflow-hidden">
          <div className="flex space-x-12 animate-scroll">
            {duplicatedPartners.map((partner, index) => (
              <motion.div
                key={`${partner.name}-${index}`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="shrink-0 w-48 h-24 bg-white rounded-lg flex items-center justify-center p-4 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center space-x-3">
                  <Building2 className="h-8 w-8 text-[#1F3C73] shrink-0" />
                  <span className="text-sm font-semibold text-[#111827] font-montserrat text-center">
                    {partner.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Estilos CSS para la animación */}
        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          
          .animate-scroll {
            animation: scroll 30s linear infinite;
          }
          
          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}</style>
      </div>
    </section>
  );
};

export default Partners;
