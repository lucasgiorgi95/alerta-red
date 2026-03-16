'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Shield, Monitor, AlertTriangle, Users, Lock, ArrowLeft, CheckCircle } from 'lucide-react';
import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';
import Button from '@/components/ui/Button';
import Link from 'next/link';

const ServiciosPage = () => {
  const services = [
    {
      icon: <Monitor className="h-12 w-12" />,
      title: "Monitoreo 24/7",
      description: "Centro de monitoreo operativo las 24 horas del día con tecnología de última generación y respuesta inmediata.",
      features: [
        "Vigilancia continua las 24 horas",
        "Respuesta inmediata ante emergencias",
        "Grabación digital en la nube",
        "Notificaciones automáticas al cliente",
        "Monitoreo remoto desde dispositivos móviles",
        "Personal capacitado y certificado"
      ],
      benefits: [
        "Protección total día y noche",
        "Acceso instantáneo a grabaciones",
        "Alertas en tiempo real",
        "Respuesta coordinada con emergencias"
      ]
    },
    {
      icon: <Camera className="h-12 w-12" />,
      title: "Cámaras de Seguridad",
      description: "Instalación de sistemas de CCTV con alta definición, visión nocturna y conexión remota desde cualquier dispositivo.",
      features: [
        "Cámaras HD y 4K de última generación",
        "Visión nocturna infrarroja",
        "Acceso remoto vía app móvil",
        "Inteligencia artificial con detección",
        "Grabación continua y programada",
        "Instalación profesional y garantizada"
      ],
      benefits: [
        "Vigilancia sin puntos ciegos",
        "Calidad de imagen excepcional",
        "Control total desde tu celular",
        "Detección automática de amenazas"
      ]
    },
    {
      icon: <Shield className="h-12 w-12" />,
      title: "Vigilancia Privada",
      description: "Personal de seguridad altamente capacitado para protección de personas, bienes y instalaciones comerciales.",
      features: [
        "Personal con formación policial",
        "Patrullaje móvil programado",
        "Control de acceso a instalaciones",
        "Escoltas y seguridad personalizada",
        "Respuesta rápida a incidentes",
        "Coordinación con fuerzas de seguridad"
      ],
      benefits: [
        "Presencia disuasiva efectiva",
        "Respuesta inmediata en sitio",
        "Protección personalizada",
        "Tranquilidad garantizada"
      ]
    },
    {
      icon: <AlertTriangle className="h-12 w-12" />,
      title: "Alarmas y Sensores",
      description: "Sistemas de detección de intrusos con sensores de movimiento, magnéticos y de humo conectados a nuestra central.",
      features: [
        "Sensores de movimiento de alta precisión",
        "Detectores de humo y temperatura",
        "Botones de pánico médico",
        "Monitoreo remoto de sensores",
        "Integración con central de monitoreo",
        "Sistemas inalámbricos y cableados"
      ],
      benefits: [
        "Detección temprana de amenazas",
        "Protección contra incendios",
        "Asistencia médica de emergencia",
        "Sistema completamente integrado"
      ]
    },
    {
      icon: <Users className="h-12 w-12" />,
      title: "Control de Acceso",
      description: "Sistemas biométricos, tarjetas de acceso y control de visitantes para restringir el ingreso a áreas autorizadas.",
      features: [
        "Sistemas biométricos (huella, facial)",
        "Tarjetas RFID y proximidad",
        "Control de visitantes digital",
        "Reportes de acceso detallados",
        "Integración con sistemas de RRHH",
        "Control horario y por zonas"
      ],
      benefits: [
        "Acceso seguro y controlado",
        "Registro de todas las entradas",
        "Gestión eficiente de visitantes",
        "Flexibilidad en permisos"
      ]
    },
    {
      icon: <Lock className="h-12 w-12" />,
      title: "Seguridad Electrónica",
      description: "Soluciones integrales de cerraduras inteligentes, candados electrónicos y sistemas de protección perimetral.",
      features: [
        "Cerraduras inteligentes con app",
        "Cercas eléctricas y sensores",
        "Barreras infrarrojas",
        "Automatización de accesos",
        "Sistemas anti-intrusión",
        "Integración con monitoreo"
      ],
      benefits: [
        "Control remoto de accesos",
        "Protección perimetral completa",
        "Automatización de seguridad",
        "Sistema escalable y modular"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#1F3C73] to-[#162C55] text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Link href="/" className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Volver al inicio
            </Link>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold mb-6 font-montserrat"
            >
              Nuestros <span className="text-[#B32025]">Servicios</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/90 font-inter"
            >
              Soluciones integrales de seguridad diseñadas para proteger lo que más importa
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden"
              >
                {/* Service Header */}
                <div className="p-8 border-b border-gray-100">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-[#1F3C73]/10 rounded-lg flex items-center justify-center text-[#1F3C73]">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-[#111827] mb-2 font-montserrat">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 font-inter leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Features */}
                <div className="p-8">
                  <h4 className="text-lg font-semibold text-[#111827] mb-4 font-montserrat">
                    Características Principales
                  </h4>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-[#B32025] mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 font-inter">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <h4 className="text-lg font-semibold text-[#111827] mb-4 font-montserrat">
                    Beneficios
                  </h4>
                  <ul className="space-y-3">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-[#1F3C73] rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-600 font-inter">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#F5F6F8]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#1F3C73] rounded-2xl p-12 text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-4 font-montserrat">
              ¿Listo para proteger lo que más importa?
            </h2>
            <p className="text-xl text-white/90 mb-8 font-inter max-w-2xl mx-auto">
              Contáctanos hoy para una evaluación gratuita y descubre cómo podemos 
              ayudar a garantizar tu seguridad y tranquilidad.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#contact">
                <Button size="lg" variant="primary">
                  Solicitar Cotización
                </Button>
              </Link>
              <Link href="tel:03544420000">
                <Button size="lg" variant="outline" className="bg-white text-[#1F3C73] hover:bg-gray-100">
                  Llamar Ahora
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiciosPage;
