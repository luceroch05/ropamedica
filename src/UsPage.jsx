import React, { useState, useEffect, useRef } from 'react';
import { Heart, Sparkles, Zap, Target, Compass, Layers, ArrowRight, Globe, Scissors, Leaf, Users, MessageCircle, Package, Smile, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
const UsPage = () => {
  const [isVisible, setIsVisible] = useState({
    hero: false,
    timeline: false,
    values: false,
    process: false,
    commitment: false,
    cta: false
  });

  const heroRef = useRef(null);
  const timelineRef = useRef(null);
  const valuesRef = useRef(null);
  const processRef = useRef(null);
  const commitmentRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionName = entry.target.dataset.section;
          setIsVisible(prev => ({ ...prev, [sectionName]: true }));
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const refs = [
      { ref: heroRef, name: 'hero' },
      { ref: timelineRef, name: 'timeline' },
      { ref: valuesRef, name: 'values' },
      { ref: processRef, name: 'process' },
      { ref: commitmentRef, name: 'commitment' },
      { ref: ctaRef, name: 'cta' }
    ];

    refs.forEach(({ ref, name }) => {
      if (ref.current) {
        ref.current.dataset.section = name;
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, []);

  const values = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Pasión por la Salud',
      description: 'Entendemos que detrás de cada uniforme hay un profesional dedicado a salvar vidas. Por eso cada diseño nace pensando en su comodidad y bienestar.'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Innovación Constante',
      description: 'Investigamos materiales antimicrobianos, tejidos transpirables y tecnología de última generación para crear uniformes que evolucionan con la medicina moderna.'
    },
    {
      icon: <Leaf className="w-6 h-6" />,
      title: 'Sostenibilidad',
      description: 'Nos comprometemos con el planeta usando materiales reciclables, procesos de bajo impacto ambiental y empaques biodegradables.'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Calidad Premium',
      description: 'Cada costura, cada botón, cada detalle pasa por rigurosos controles. No aceptamos menos que la excelencia.'
    }
  ];

  const timeline = [
    {
      year: '2018',
      title: 'El Comienzo',
      description: 'Iniciamos en un pequeño taller con una misión: revolucionar los uniformes médicos en Latinoamérica.',
      image: 'https://images.unsplash.com/photo-1582560475093-ba66accbc424?w=600&h=400&fit=crop'
    },
    {
      year: '2020',
      title: 'Expansión Digital',
      description: 'Lanzamos nuestra plataforma online, llevando calidad premium a profesionales en todo el continente.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop'
    },
    {
      year: '2022',
      title: 'Certificación ISO',
      description: 'Obtuvimos certificaciones internacionales que respaldan nuestra calidad y procesos.',
      image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?w=600&h=400&fit=crop'
    },
    {
      year: '2024',
      title: 'Innovación Sostenible',
      description: 'Introducimos nuestra línea eco-friendly, reduciendo nuestra huella de carbono en un 40%.',
      image: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600&h=400&fit=crop'
    },
    {
      year: '2025',
      title: 'Presente',
      description: 'Seguimos creciendo y mejorando cada día, escuchando a nuestra comunidad.',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Investigación',
      description: 'Escuchamos las necesidades reales de médicos, enfermeras y personal sanitario.',
      icon: <MessageCircle className="w-8 h-8" />
    },
    {
      step: '02',
      title: 'Diseño',
      description: 'Creamos prototipos que combinan ergonomía, funcionalidad y estética moderna.',
      icon: <Compass className="w-8 h-8" />
    },
    {
      step: '03',
      title: 'Selección de Materiales',
      description: 'Elegimos telas certificadas, transpirables y duraderas que superan estándares internacionales.',
      icon: <Layers className="w-8 h-8" />
    },
    {
      step: '04',
      title: 'Fabricación',
      description: 'Producimos con tecnología de punta y control de calidad en cada etapa del proceso.',
      icon: <Scissors className="w-8 h-8" />
    },
    {
      step: '05',
      title: 'Entrega',
      description: 'Enviamos directamente a tu puerta con empaques sostenibles y seguimiento en tiempo real.',
      icon: <Package className="w-8 h-8" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-cyan-50/20">
      {/* Hero Section */}
      <div ref={heroRef} className="relative pt-28 pb-20 px-4 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className={`flex justify-center mb-8 transition-all duration-700 ${isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-cyan-50 px-5 py-2.5 rounded-full border border-blue-200/50 shadow-sm animate-slideDown">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Nuestra Historia</span>
            </div>
          </div>
          
          <div className="text-center max-w-4xl mx-auto">
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight transition-all duration-700 delay-100 ${isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Diseñamos para quienes
              <br /><span className="mt-2 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">cuidan vidas</span>
            </h1>
            
            <p className={`text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto transition-all duration-700 delay-200 ${isVisible.hero ? 'opacity-100' : 'opacity-0'}`}>
              Desde 2018, transformamos la experiencia de vestir uniformes médicos. 
              Nacimos de una simple pregunta: <span className="font-semibold text-slate-900">¿Por qué los profesionales de la salud no merecen la mejor calidad y diseño?</span>
            </p>
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <section ref={timelineRef} className="py-20 px-4 bg-gradient-to-b from-white via-blue-50/20 to-white relative overflow-hidden">
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-blue-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-cyan-400/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className={`text-center mb-20 transition-all duration-700 ${isVisible.timeline ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
              Nuestra Historia
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
              Nuestra <span className="text-blue-600">Evolución</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              De un pequeño taller a transformar la industria de uniformes médicos
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-blue-500 to-transparent hidden md:block"></div>
            
            <div className="space-y-20 md:space-y-32">
              {timeline.map((item, index) => (
                <div 
                  key={index} 
                  className={`flex flex-col md:flex-row gap-8 items-center transition-all duration-700 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } ${isVisible.timeline ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                  style={{ transitionDelay: `${index * 0.15}s` }}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} text-center`}>
                    <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 relative group hover:scale-105">
                      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-transparent rounded-bl-full"></div>
                      <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-cyan-500/10 to-transparent rounded-tr-full"></div>
                      
                      <div className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full text-base font-bold mb-5 shadow-md relative z-10">
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                        {item.year}
                      </div>
                      
                      <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors relative z-10">
                        {item.title}
                      </h3>
                      
                      <p className="text-slate-600 leading-relaxed text-base max-w-md mx-auto relative z-10">
                        {item.description}
                      </p>

                      <div className={`absolute ${index % 2 === 0 ? 'right-0' : 'left-0'} top-1/2 w-8 h-0.5 bg-gradient-to-r ${index % 2 === 0 ? 'from-blue-500 to-transparent' : 'from-transparent to-cyan-500'} hidden md:block`}></div>
                    </div>
                  </div>

                  <div className="hidden md:flex relative">
                    <div className="absolute inset-0 w-16 h-16 -m-6 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-xl animate-pulse"></div>
                    <div className="relative w-5 h-5 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 shadow-xl ring-4 ring-white z-20 animate-pulse-slow">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 animate-ping opacity-75"></div>
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group border-2 border-white hover:scale-105">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-cyan-600/10 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      <img 
                        src={item.image}
                        alt={item.title}
                        className="w-full h-72 md:h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent z-10"></div>
                      
                      <div className="absolute bottom-6 left-6 z-20">
                        <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl shadow-lg">
                          <span className="text-sm font-bold text-slate-900">Hito #{index + 1}</span>
                        </div>
                      </div>

                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
                        <div className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 group-hover:left-full transition-all duration-1000"></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section ref={valuesRef} className="py-20 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-700 ${isVisible.values ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
              Nuestros Valores
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
              Lo que nos <span className="text-blue-600">Define</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Los pilares que guían cada decisión y cada diseño
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <div
                key={index}
                className={`group bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-500 hover:scale-105 ${
                  isVisible.values ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition">
                      {value.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proceso de Creación */}
      <section ref={processRef} className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-700 ${isVisible.process ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
              Nuestro Proceso
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
              Cómo <span className="text-blue-600">Creamos</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Del concepto a tu guardarropa: nuestro proceso artesanal con tecnología de vanguardia
            </p>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-300 to-transparent"></div>
            
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
              {process.map((item, index) => (
                <div 
                  key={index} 
                  className={`relative transition-all duration-700 ${
                    isVisible.process ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`}
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 relative z-10 hover:scale-105 hover:-translate-y-2">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <div className="text-3xl font-bold text-blue-100 mb-2">{item.step}</div>
                    <h3 className="text-lg font-bold text-slate-900 mb-3">{item.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Compromiso */}
      <section ref={commitmentRef} className="py-20 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-700 ${isVisible.commitment ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
              Garantías
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
              Nuestro <span className="text-blue-600">Compromiso</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Más allá de vender uniformes, construimos relaciones duraderas
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Globe className="w-7 h-7 text-white" />, title: 'Alcance Global', desc: 'Enviamos a toda Latinoamérica, llevando calidad premium donde más se necesita. Sin importar dónde estés, te acompañamos.' },
              { icon: <Smile className="w-7 h-7 text-white" />, title: 'Experiencia Integral', desc: 'Desde el primer clic hasta que recibes tu pedido, cada paso está diseñado para superar tus expectativas.' },
              { icon: <TrendingUp className="w-7 h-7 text-white" />, title: 'Mejora Continua', desc: 'Cada mes lanzamos mejoras basadas en tu feedback. Tu voz construye el futuro de MediStyle.' }
            ].map((item, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 ${
                  isVisible.commitment ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section ref={ctaRef} className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className={`bg-white rounded-3xl shadow-2xl overflow-hidden transition-all duration-700 ${
            isVisible.cta ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}>
            <div className="grid md:grid-cols-2">
              <div className="p-12 md:p-16 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full mb-6 w-fit animate-slideDown">
                  <Users className="w-4 h-4 text-blue-600" />
                  <span className="text-sm font-semibold text-blue-600">Únete a Nuestra Comunidad</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                  ¿Listo para experimentar la diferencia?
                </h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  Descubre por qué miles de profesionales eligen MediStyle para su día a día. La calidad que mereces, el diseño que buscas.
                </p>
                
                <div className="flex flex-wrap gap-4">
                    <Link
                    to="/productos"
                    className="group inline-flex items-center px-10 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-2xl font-bold shadow-lg hover:shadow-2xl transition transform hover:scale-105 gap-3"
                        >
                    <span>Ver Productos</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
                    </Link>
                        <Link
                        to="/contacto"
                        className="px-8 py-4 bg-slate-100 text-slate-700 rounded-xl font-semibold hover:bg-slate-200 transition-all duration-300 hover:scale-105"
                    >
                    <span>Contáctanos</span>  
                    </Link>
                </div>
              </div>

              <div className="relative h-full min-h-[400px]">
                <img 
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=800&fit=crop" 
                  alt="Únete a MediStyle"
                  className="absolute inset-0 w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes pulse-slow {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.8;
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-pulse-slow {
          animation: pulse-slow 2s ease-in-out infinite;
        }

        .animate-slideDown {
          animation: slideDown 0.6s ease-out;
        }
      `}</style>
    </div>
  );
};

export default UsPage;