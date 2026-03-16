'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, Shield } from 'lucide-react';
import Button from './Button';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Teléfono",
      content: "(266) 423266",
      subcontent: "Emergencias: 0800-123-456"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      content: "info@alertared.com.ar",
      subcontent: "soporte@alertared.com.ar"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Ubicación",
      content: "San luis",
      subcontent: "Argentina"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Horarios",
      content: "Lun-Vie: 8:00 - 18:00",
      subcontent: "Emergencias: 24/7"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-[#F5F6F8]">
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
            Contacto
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-inter">
            Estamos aquí para proteger lo que más importa. Contáctenos para una 
            evaluación gratuita y descubra cómo podemos ayudar a garantizar su seguridad.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-[#111827] mb-6 font-montserrat">
                Solicitar Cotización
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2 font-inter">
                      Nombre completo
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1F3C73] focus:border-transparent font-inter"
                      placeholder="Juan Pérez"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2 font-inter">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1F3C73] focus:border-transparent font-inter"
                      placeholder="juan@ejemplo.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2 font-inter">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1F3C73] focus:border-transparent font-inter"
                      placeholder="(03544) 123-456"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2 font-inter">
                      Servicio de interés
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1F3C73] focus:border-transparent font-inter"
                    >
                      <option value="">Seleccionar...</option>
                      <option value="monitoreo">Monitoreo 24/7</option>
                      <option value="camaras">Cámaras de Seguridad</option>
                      <option value="vigilancia">Vigilancia Privada</option>
                      <option value="alarmas">Alarmas y Sensores</option>
                      <option value="acceso">Control de Acceso</option>
                      <option value="electronica">Seguridad Electrónica</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2 font-inter">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1F3C73] focus:border-transparent font-inter"
                    placeholder="Cuéntenos sobre sus necesidades de seguridad..."
                  />
                </div>

                <Button type="submit" size="lg" variant="primary" className="w-full">
                  <Send className="h-5 w-5 mr-2" />
                  Enviar Solicitud
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Emergency Card */}
            <div className="bg-[#B32025] rounded-xl p-6 text-white">
              <div className="flex items-center space-x-3 mb-4">
                <Shield className="h-8 w-8" />
                <h3 className="text-xl font-bold font-montserrat">Emergencias 24/7</h3>
              </div>
              <p className="text-3xl font-bold mb-2 font-montserrat">0800-123-456</p>
              <p className="text-gray-200 font-inter">
                Para emergencias, estamos disponibles las 24 horas del día, los 365 días del año.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-[#1F3C73]/10 rounded-lg flex items-center justify-center text-[#1F3C73]">
                      {info.icon}
                    </div>
                    <h4 className="font-semibold text-[#111827] font-montserrat">
                      {info.title}
                    </h4>
                  </div>
                  <p className="text-gray-800 font-medium font-inter">{info.content}</p>
                  <p className="text-sm text-gray-600 font-inter">{info.subcontent}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
