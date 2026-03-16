'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Users, Clock, Award, Target, CheckCircle, Camera, Building } from 'lucide-react';
import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';
import FloatingButtons from '@/components/ui/FloatingButtons';
import Button from '@/components/ui/Button';
import Link from 'next/link';

const AboutPage = () => {

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#1F3C73] to-[#162C55] text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Link href="/" className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Volver al inicio
            </Link>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold mb-6 font-montserrat"
            >
              Sobre <span className="text-[#B32025]">Nosotros</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/90 font-inter"
            >
              25 años de experiencia en seguridad privada, protegiendo lo que más importa
            </motion.p>
          </div>
        </div>
      </section>

      {/* Nuestra Empresa - Imagen Izquierda, Texto Derecha */}
      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Imagen Izquierda */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="order-2 lg:order-1"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <div 
                    className="w-full h-64 bg-cover bg-center"
                    style={{
                      backgroundImage: `url("https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")`
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              </motion.div>
              
              {/* Texto Derecha */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="order-1 lg:order-2"
              >
        
                
                <h2 className="text-2xl md:text-3xl font-bold text-[#111827] mb-4 font-montserrat">
                  Nuestra <span className="text-[#B32025]">Empresa</span>
                </h2>
                
                <p className="text-base text-gray-600 font-inter leading-relaxed mb-3">
                  Alerta Red Seguridad Privada es una empresa con más de 25 años de experiencia en el sector de la seguridad, brindando soluciones integrales para la protección de personas, bienes e instalaciones.
                </p>
                
                <p className="text-base text-gray-600 font-inter leading-relaxed">
                  A lo largo de nuestra trayectoria hemos incorporado conocimientos y nuevas tecnologías, adaptándonos constantemente a los cambios y a las necesidades del entorno social. Nuestro objetivo es ofrecer servicios de seguridad confiables, profesionales y adaptados a cada cliente.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Nuestra Historia - Texto Izquierda, Imagen Derecha */}
      <section className="py-8 bg-[#F5F6F8]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Texto Izquierda */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
              
                
                <h2 className="text-2xl md:text-3xl font-bold text-[#111827] mb-4 font-montserrat">
                  Nuestra <span className="text-[#B32025]">Historia</span>
                </h2>
                
                <p className="text-base text-gray-600 font-inter leading-relaxed mb-3">
                  Desde sus inicios, Alerta Red ha trabajado con el compromiso de brindar seguridad de calidad, cumpliendo con todas las exigencias legales y administrativas necesarias para operar dentro del mercado de la seguridad privada.
                </p>
                
                <p className="text-base text-gray-600 font-inter leading-relaxed mb-3">
                  Con el paso de los años, la empresa ha evolucionado incorporando nuevas herramientas tecnológicas, sistemas de comunicación y equipamiento especializado que permiten ofrecer soluciones cada vez más eficientes y confiables.
                </p>
                
                <p className="text-base text-gray-600 font-inter leading-relaxed">
                  Gracias a esta evolución constante, hoy contamos con la capacidad de brindar servicios de seguridad en distintos escenarios, desde eventos y espacios comerciales hasta servicios de protección personalizada.
                </p>
              </motion.div>
              
              {/* Imagen Derecha */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <div 
                    className="w-full h-64 bg-cover bg-center"
                    style={{
                      backgroundImage: `url("https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")`
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Profesionalismo y Capacitación - Imagen Izquierda, Texto Derecha */}
      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Imagen Izquierda */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="order-2 lg:order-1"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <div 
                    className="w-full h-64 bg-cover bg-center"
                    style={{
                      backgroundImage: `url("https://images.unsplash.com/photo-1551836022-de5d764ab25f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")`
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              </motion.div>
              
              {/* Texto Derecha */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="order-1 lg:order-2"
              >
             
                
                <h2 className="text-2xl md:text-3xl font-bold text-[#111827] mb-4 font-montserrat">
                  Profesionalismo y <span className="text-[#B32025]">Capacitación</span>
                </h2>
                
                <p className="text-base text-gray-600 font-inter leading-relaxed mb-3">
                  En Alerta Red contamos con un equipo interdisciplinario con amplia experiencia en seguridad pública y privada, encargado de la formación y capacitación permanente de nuestros agentes.
                </p>
                
                <p className="text-base text-gray-600 font-inter leading-relaxed mb-3">
                  Nuestros profesionales trabajan bajo protocolos de actuación establecidos por las autoridades competentes, garantizando procedimientos claros, seguros y eficientes en cada servicio prestado.
                </p>
                
                <p className="text-base text-gray-600 font-inter leading-relaxed">
                  La preparación constante de nuestro personal nos permite actuar con responsabilidad y eficacia ante diferentes situaciones, priorizando siempre la protección de nuestros clientes.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Compromiso con la Seguridad - Texto Izquierda, Imagen Derecha */}
      <section className="py-8 bg-[#F5F6F8]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Texto Izquierda */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                           
                <h2 className="text-2xl md:text-3xl font-bold text-[#111827] mb-4 font-montserrat">
                  Compromiso con la <span className="text-[#B32025]">Seguridad</span>
                </h2>
                
                <p className="text-base text-gray-600 font-inter leading-relaxed mb-3">
                  La seguridad es un aspecto fundamental para el bienestar de las personas y la protección de sus bienes. Por eso en Alerta Red trabajamos con altos estándares de calidad y profesionalismo, combinando personal capacitado, tecnología moderna y protocolos de seguridad.
                </p>
                
                <p className="text-base text-gray-600 font-inter leading-relaxed">
                  Nuestro compromiso es generar confianza y tranquilidad en cada uno de nuestros clientes, ofreciendo soluciones que se adapten a sus necesidades y a los distintos entornos en los que desarrollan sus actividades.
                </p>
              </motion.div>
              
              {/* Imagen Derecha */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <div 
                    className="w-full h-64 bg-cover bg-center"
                    style={{
                      backgroundImage: `url("https://images.unsplash.com/photo-1559028012-7d84c82120f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")`
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Nuestro Equipo - Imagen Izquierda, Texto Derecha */}
      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Imagen Izquierda */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="order-2 lg:order-1"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <div 
                    className="w-full h-64 bg-cover bg-center"
                    style={{
                      backgroundImage: `url("https://images.unsplash.com/photo-1609874816352-cd13c5ea5b59?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")`
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              </motion.div>
              
              {/* Texto Derecha */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="order-1 lg:order-2"
              >
             
                
                <h2 className="text-2xl md:text-3xl font-bold text-[#111827] mb-4 font-montserrat">
                  Nuestro <span className="text-[#B32025]">Equipo</span>
                </h2>
                
                <p className="text-base text-gray-600 font-inter leading-relaxed mb-4">
                  Alerta Red cuenta con un equipo de trabajo capacitado para desempeñarse en diferentes escenarios de seguridad, incluyendo eventos públicos y privados, espacios comerciales y protección personal.
                </p>
                
                <p className="text-base text-gray-600 font-inter leading-relaxed mb-6">
                  Además, la empresa dispone de unidades móviles, equipos de comunicación, señalamiento y uniformes identificatorios que permiten brindar un servicio profesional y organizado en cada operación.
                </p>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    "Personal capacitado y certificado",
                    "Unidades móviles equipadas",
                    "Sistemas de comunicación avanzados",
                    "Uniformes profesionales",
                    "Equipamiento especializado",
                    "Protocolos de seguridad establecidos"
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-2 bg-white p-3 rounded-lg shadow-md"
                    >
                      <CheckCircle className="h-4 w-4 text-[#B32025] flex-shrink-0" />
                      <span className="text-sm text-gray-700 font-inter">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Equipo Directivo */}
      <section className="py-16 bg-[#F5F6F8]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4 font-montserrat">
              Nuestro <span className="text-[#B32025]">Equipo Directivo</span>
            </h2>
            <p className="text-lg text-gray-600 font-inter max-w-3xl mx-auto">
              Liderazgo con más de 25 años de experiencia en el sector de la seguridad privada
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Juan Carlos Martínez",
                position: "Director General",
                description: "Fundador de Alerta Red con más de 25 años de experiencia en seguridad privada. Experto en estrategias de protección y gestión de riesgos.",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
              },
              {
                name: "María González",
                position: "Directora de Operaciones",
                description: "Especialista en logística y coordinación de equipos de seguridad. Responsable de la planificación y ejecución de servicios.",
                image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
              },
              {
                name: "Roberto Silva",
                position: "Jefe de Capacitación",
                description: "Experto en formación y estándares de seguridad. Diseña los programas de capacitación y protocolos de actuación.",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-64">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#111827] mb-1 font-montserrat">
                    {member.name}
                  </h3>
                  <p className="text-[#B32025] font-semibold mb-3 font-inter">
                    {member.position}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed font-inter">
                    {member.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link href="/servicios">
              <Button size="lg" variant="primary" className="bg-[#1F3C73] hover:bg-[#162C55]">
                Conoce Nuestros Servicios
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default AboutPage;
