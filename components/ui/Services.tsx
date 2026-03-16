'use client';

import { motion } from 'framer-motion';
import { Camera, Shield, Monitor, AlertTriangle, Users, Lock } from 'lucide-react';
import Link from 'next/link';

const Services = () => {
  const services = [
    {
      icon: <Monitor className="h-8 w-8" />,
      title: "Monitoreo 24/7",
      description: "Centro de monitoreo operativo las 24 horas con tecnología de última generación.",
      features: ["Vigilancia continua", "Respuesta inmediata", "Grabación digital", "Notificaciones automáticas"]
    },
    {
      icon: <Camera className="h-8 w-8" />,
      title: "Cámaras de Seguridad",
      description: "Instalación de sistemas de CCTV con alta definición y conexión remota.",
      features: ["HD y 4K", "Visión nocturna", "Acceso remoto", "Inteligencia artificial"]
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Vigilancia Privada",
      description: "Personal de seguridad capacitado para protección de personas y bienes.",
      features: ["Personal capacitado", "Patrullaje móvil", "Control de acceso", "Escoltas"]
    },
    {
      icon: <AlertTriangle className="h-8 w-8" />,
      title: "Alarmas y Sensores",
      description: "Sistemas de detección conectados a nuestra central de monitoreo.",
      features: ["Sensores de movimiento", "Detectores de humo", "Pánico médico", "Monitoreo remoto"]
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Control de Acceso",
      description: "Sistemas biométricos y tarjetas para restringir el ingreso a áreas autorizadas.",
      features: ["Biométricos", "Tarjetas RFID", "Control de visitantes", "Reportes de acceso"]
    },
    {
      icon: <Lock className="h-8 w-8" />,
      title: "Seguridad Electrónica",
      description: "Soluciones integrales de cerraduras inteligentes y protección perimetral.",
      features: ["Cerraduras inteligentes", "Cercas eléctricas", "Barreras infrarrojas", "Automatización"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-[#F5F6F8]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#111827] mb-4 font-montserrat">
            Nuestros <span className="text-[#B32025]">Servicios</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-inter">
            Ofrecemos soluciones integrales de seguridad adaptadas a las necesidades específicas 
            de cada cliente, combinando tecnología avanzada con personal altamente capacitado.
          </p>
        </motion.div>

        {/* Services Grid - Solo primeros 3 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {services.slice(0, 3).map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Icon */}
              <div className="p-6 pb-4">
                <div className="w-16 h-16 bg-[#1F3C73]/10 rounded-lg flex items-center justify-center text-[#1F3C73] mx-auto mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#111827] mb-3 font-montserrat text-center">
                  {service.title}
                </h3>
                <p className="text-gray-600 font-inter leading-relaxed text-center">
                  {service.description}
                </p>
              </div>
              
              {/* Features */}
              <div className="px-6 pb-6">
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-[#B32025] rounded-full flex-shrink-0" />
                      <span className="text-sm text-gray-600 font-inter">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Ver más button - alineado a la derecha */}
        <div className="flex justify-end">
          <Link href="/servicios">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#1F3C73] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#162C55] transition-all duration-300 font-inter flex items-center space-x-2"
            >
              Ver más
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
