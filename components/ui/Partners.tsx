'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Partners = () => {
  const partners = [
    { name: 'YPF', logo: '/images/ypf.png' },
    { name: 'YPF Agro', logo: '/images/ypfagro2.png' },
    { name: 'CLEMIC', logo: '/images/clemic2.png' },
    { name: 'Laboratorio SIL', logo: '/images/sil.png' },
    { name: 'Municipalidad de Villa Dolores', logo: '/images/villa-dolores.png' },
    { name: 'Cooperativa CEMDO', logo: '/images/cemdo.png' },
    { name: 'La Vieja Bodega', logo: '/images/2.png' }
  ];

  // Duplicar el array múltiples veces para crear un efecto infinito suave
  const duplicatedPartners = [...partners, ...partners, ...partners, ...partners];

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
          <div className="flex space-x-6 animate-scroll">
            {duplicatedPartners.map((partner, index) => (
              <motion.div
                key={`${partner.name}-${index}`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="shrink-0 w-80 h-40 flex items-center justify-center hover:scale-110 transition-transform duration-300"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={320}
                  height={160}
                  className="object-contain w-full h-full"
                />
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
              transform: translateX(-25%);
            }
          }
          
          .animate-scroll {
            animation: scroll 40s linear infinite;
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
