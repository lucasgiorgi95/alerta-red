'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1F3C73] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="h-8 w-8 text-white" />
              <div>
                <h3 className="text-xl font-bold font-montserrat">
                  Alerta Red
                </h3>
                <p className="text-sm text-gray-300 font-inter">
                  Seguridad Privada
                </p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 font-inter">
              Más de 25 años de experiencia en seguridad privada, protegiendo lo que más importa para usted y su familia.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4 font-montserrat">Servicios</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors font-inter">
                  Monitoreo 24/7
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors font-inter">
                  Cámaras de Seguridad
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors font-inter">
                  Vigilancia Privada
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors font-inter">
                  Alarmas y Sensores
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors font-inter">
                  Control de Acceso
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4 font-montserrat">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-[#B32025] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 font-inter">(03544) 42-0000</p>
                  <p className="text-gray-300 font-inter">Emergencias: 0800-123-456</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-[#B32025] mt-1 flex-shrink-0" />
                <p className="text-gray-300 font-inter">info@alertared.com.ar</p>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-[#B32025] mt-1 flex-shrink-0" />
                <p className="text-gray-300 font-inter">
                  Villa Dolores, Córdoba<br />
                  Argentina
                </p>
              </div>
            </div>
          </motion.div>

          {/* Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4 font-montserrat">Horarios</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-[#B32025] flex-shrink-0" />
                <div>
                  <p className="text-gray-300 font-inter">Lunes a Viernes: 8:00 - 18:00</p>
                  <p className="text-gray-300 font-inter">Sábados: 9:00 - 13:00</p>
                  <p className="text-gray-300 font-inter">Monitoreo 24/7</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm font-inter">
              © {currentYear} Alerta Red Seguridad Privada. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm font-inter transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm font-inter transition-colors">
                Términos de Servicio
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
