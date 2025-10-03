import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, CheckCircle, Sparkles, Instagram, Facebook, Twitter, Linkedin, ArrowRight } from 'lucide-react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 3000);
  };

  const contactMethods = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Teléfono',
      info: '+51 999 888 777',
      subInfo: 'Lunes a Viernes 9am - 6pm',
      link: 'tel:+51999888777'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      info: 'contacto@medistyle.com',
      subInfo: 'Respuesta en 24 horas',
      link: 'mailto:contacto@medistyle.com'
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: 'WhatsApp',
      info: '+51 999 888 777',
      subInfo: 'Atención inmediata',
      link: 'https://wa.me/51999888777'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Ubicación',
      info: 'Lima, Perú',
      subInfo: 'Visítanos en nuestra tienda',
      link: '#'
    }
  ];

  

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-cyan-50/20">
      {/* Hero Section */}
      <div className="relative pt-28 pb-16 px-4 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-cyan-50 px-5 py-2.5 rounded-full border border-blue-200/50 shadow-sm">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Estamos Aquí Para Ti</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-slate-900 mb-4">
            Hablemos <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">Contigo</span>
          </h1>
          
          <p className="text-center text-slate-600 text-lg max-w-2xl mx-auto mb-8">
            ¿Tienes dudas, sugerencias o necesitas asesoría? Nuestro equipo está listo para ayudarte
          </p>
        </div>
      </div>

      {/* Contact Methods Grid */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.link}
                className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300"
              >
                <div className="relative mb-4">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl blur-xl opacity-20 group-hover:opacity-30 transition"></div>
                  <div className="relative w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center text-white">
                    {method.icon}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition">
                  {method.title}
                </h3>
                <p className="text-slate-900 font-semibold mb-1">{method.info}</p>
                <p className="text-sm text-slate-600">{method.subInfo}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

            

      {/* Main Contact Section - Reorganizado */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Columna Izquierda - Form más compacto */}
            <div className="lg:col-span-2">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-slate-200/80 shadow-lg h-full">
                <div className="mb-6">
                  <h2 className="text-3xl font-bold text-slate-900 mb-3">
                    Envíanos un <span className="text-blue-600">Mensaje</span>
                  </h2>
                  <p className="text-slate-600">
                    Completa el formulario y te responderemos lo antes posible
                  </p>
                </div>

                {submitted ? (
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 text-center border border-green-200">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">¡Mensaje Enviado!</h3>
                    <p className="text-slate-600">Gracias por contactarnos. Te responderemos pronto.</p>
                  </div>
                ) : (
                  <div className="space-y-5">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Nombre Completo *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-400 focus:bg-white outline-none transition text-slate-900"
                        placeholder="Tu nombre"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-400 focus:bg-white outline-none transition text-slate-900"
                          placeholder="tu@email.com"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                          Teléfono
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-400 focus:bg-white outline-none transition text-slate-900"
                          placeholder="+51 999 888 777"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Asunto *
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-400 focus:bg-white outline-none transition text-slate-900"
                      >
                        <option value="">Selecciona un asunto</option>
                        <option value="consulta">Consulta General</option>
                        <option value="pedido">Estado de Pedido</option>
                        <option value="cambio">Cambios y Devoluciones</option>
                        <option value="corporativo">Ventas Corporativas</option>
                        <option value="otro">Otro</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Mensaje *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="4"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-400 focus:bg-white outline-none transition text-slate-900 resize-none"
                        placeholder="Cuéntanos cómo podemos ayudarte..."
                      ></textarea>
                    </div>

                    <button
                      onClick={handleSubmit}
                      className="group w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                    >
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      <span>Enviar Mensaje</span>
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Columna Derecha - Sidebar compacto */}
            <div className="space-y-6">
              {/* Hours */}
              <div className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl p-6 text-white shadow-xl">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                    <Clock className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold">Horario</h3>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between items-center py-2 border-b border-white/20">
                    <span>Lunes - Viernes</span>
                    <span className="font-bold">9AM - 6PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-white/20">
                    <span>Sábados</span>
                    <span className="font-bold">10AM - 2PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span>Domingos</span>
                    <span className="font-bold">Cerrado</span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                  <p className="text-xs text-white/90">
                    💬 Chat en línea 24/7
                  </p>
                </div>
              </div>

           

              {/* Social Media */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/80 shadow-lg">
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  Síguenos
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  <a href="#" className="group flex flex-col items-center gap-2 p-3 bg-slate-50 hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 rounded-xl transition border border-slate-200 hover:border-blue-200">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center text-white">
                      <Instagram className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-semibold text-slate-900">Instagram</span>
                  </a>
                  <a href="#" className="group flex flex-col items-center gap-2 p-3 bg-slate-50 hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 rounded-xl transition border border-slate-200 hover:border-blue-200">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center text-white">
                      <Facebook className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-semibold text-slate-900">Facebook</span>
                  </a>
                  <a href="#" className="group flex flex-col items-center gap-2 p-3 bg-slate-50 hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 rounded-xl transition border border-slate-200 hover:border-blue-200">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center text-white">
                      <Twitter className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-semibold text-slate-900">Twitter</span>
                  </a>
                  <a href="#" className="group flex flex-col items-center gap-2 p-3 bg-slate-50 hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 rounded-xl transition border border-slate-200 hover:border-blue-200">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center text-white">
                      <Linkedin className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-semibold text-slate-900">LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    {/* Map Section */}
    <section className="py-20 px-4 bg-slate-50">
    <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
        <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
            Ubicación
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Visítanos en <span className="text-blue-600">Lima</span>
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Conoce nuestra tienda física y recibe asesoría personalizada
        </p>
        </div>
        
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden border border-slate-200/80 shadow-xl">
        <div className="aspect-video relative">
            <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d390077.51555611766!2d-77.207825!3d-12.046374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8b3f3a08e0f%3A0x5f7cb84a0b3bb!2sLima!5e0!3m2!1ses!2spe!4v1696277631897!5m2!1ses!2spe"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            className="absolute inset-0 w-full h-full border-0"
            referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
        </div>
    </div>
    </section>

    </div>
  );
};

export default ContactUs;