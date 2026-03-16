'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Users, Award, Target, MapPin, Clock } from 'lucide-react';
import Button from './Button';
import Link from 'next/link';

const About = () => {
  const milestones = [
    {
      year: "1998",
      title: "Fundación",
      description: "Iniciamos nuestras operaciones en Villa Dolores con un equipo de 5 especialistas."
    },
    {
      year: "2005",
      title: "Expansión",
      description: "Abrimos nuestra central de monitoreo y ampliamos cobertura a toda la región."
    },
    {
      year: "2015",
      title: "Tecnología",
      description: "Incorporamos sistemas de IA y monitoreo remoto de última generación."
    },
    {
      year: "2023",
      title: "Liderazgo",
      description: "Nos consolidamos como la empresa líder en seguridad privada de la región."
    }
  ];

  const values = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Confianza",
      description: "Construimos relaciones basadas en la confiabilidad y el compromiso absoluto."
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Excelencia",
      description: "Superamos los estándares de calidad en cada servicio que ofrecemos."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Integridad",
      description: "Actuamos con honestidad y transparencia en todas nuestras operaciones."
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Innovación",
      description: "Implementamos tecnología de vanguardia para garantizar la máxima seguridad."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
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
            Sobre <span className="text-[#B32025]">Nosotros</span>
          </h2>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-[#111827] mb-6 font-montserrat">
              Nuestra Historia
            </h3>
            <p className="text-gray-600 mb-6 font-inter leading-relaxed">
              Fundada en 1998 en Villa Dolores, Córdoba, Alerta Red nació con la misión 
              de proporcionar soluciones de seguridad confiables y profesionales para 
              familias y empresas de la región.
            </p>
            <p className="text-gray-600 mb-6 font-inter leading-relaxed">
              A lo largo de estos 25 años, hemos evolucionado desde un pequeño equipo 
              de especialistas hasta convertirnos en la empresa líder en seguridad 
              privada, incorporando tecnología de última generación y expandiendo 
              nuestros servicios para cubrir todas las necesidades de protección.
            </p>
            <p className="text-gray-600 mb-8 font-inter leading-relaxed">
              Nuestro compromiso con la excelencia nos ha permitido construir una 
              reputación basada en la confianza, la profesionalidad y resultados 
              comprobados en la protección de más de 500 clientes satisfechos.
            </p>

            {/* CTA Button */}
            <Link href="/sobre-nosotros">
              <Button size="md" variant="outline" className="mb-6">
                Conocer más
              </Button>
            </Link>
          </motion.div>

          {/* Right Column - Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-[#111827] mb-6 font-montserrat">
              Nuestros Hitos
            </h3>
            <div className="space-y-6">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex space-x-4"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#1F3C73] rounded-full flex items-center justify-center text-white font-bold">
                      {milestone.year.slice(-2)}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#111827] mb-1 font-montserrat">
                      {milestone.title}
                    </h4>
                    <p className="text-sm text-gray-600 font-inter">
                      {milestone.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default About;
