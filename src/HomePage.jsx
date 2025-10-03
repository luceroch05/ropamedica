import React, { useState, useEffect, useRef } from 'react';
import { ShoppingCart, Heart, Star, Play, Check, TrendingUp, ArrowRight, Truck, Shield, RefreshCw, Clock, CreditCard, Gift } from 'lucide-react';
import { Link } from 'react-router-dom';


const HomePage = ({ cart, setCart, addToCart }) => {
  const [counters, setCounters] = useState({
    clients: 0,
    quality: 0,
    support: 0
  });

  const [isVisible, setIsVisible] = useState({
    hero: false,
    products: false,
    testimonials: false,
    benefits: false
  });

  const heroRef = useRef(null);
  const productsRef = useRef(null);
  const testimonialsRef = useRef(null);
  const benefitsRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
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
      { ref: productsRef, name: 'products' },
      { ref: testimonialsRef, name: 'testimonials' },
      { ref: benefitsRef, name: 'benefits' }
    ];

    refs.forEach(({ ref, name }) => {
      if (ref.current) {
        ref.current.dataset.section = name;
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible.hero) return;

    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    const targets = {
      clients: 5000,
      quality: 98,
      support: 24
    };

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      
      setCounters({
        clients: Math.floor(targets.clients * progress),
        quality: Math.floor(targets.quality * progress),
        support: Math.floor(targets.support * progress)
      });

      if (step >= steps) {
        setCounters(targets);
        clearInterval(timer);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [isVisible.hero]);

  const products = [
    {
      id: 1,
      name: 'Uniforme Quirúrgico Premium',
      category: 'quirurgico',
      price: 89.99,
      image: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=400&h=500&fit=crop',
      rating: 4.8,
      reviews: 124,
      badge: 'Bestseller',
      sizes: 'Tallas: XS, S, M, L, XL, XXL'
    },
    {
      id: 2,
      name: 'Bata Médica Profesional',
      category: 'batas',
      price: 65.99,
      image: 'https://images.unsplash.com/photo-1584467735815-f778f274e296?w=400&h=500&fit=crop',
      rating: 4.9,
      reviews: 98,
      badge: 'Nuevo',
      sizes: 'Tallas: XS, S, M, L, XL, XXL'
    },
    {
      id: 3,
      name: 'Scrubs Comfort Plus',
      category: 'quirurgico',
      price: 75.50,
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=500&fit=crop',
      rating: 4.7,
      reviews: 156,
      sizes: 'Tallas: XS, S, M, L, XL, XXL'
    },
    {
      id: 4,
      name: 'Chaqueta Médica Elite',
      category: 'batas',
      price: 95.00,
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=500&fit=crop',
      rating: 4.9,
      reviews: 203,
      badge: 'Popular',
      sizes: 'Tallas: XS, S, M, L, XL, XXL'
    },
    {
      id: 5,
      name: 'Set Quirúrgico Deluxe',
      category: 'quirurgico',
      price: 110.00,
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400&h=500&fit=crop',
      rating: 5.0,
      reviews: 87,
      badge: 'Premium',
      sizes: 'Tallas: XS, S, M, L, XL, XXL'
    },
    {
      id: 6,
      name: 'Uniforme Enfermería Pro',
      category: 'enfermeria',
      price: 68.99,
      image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=400&h=500&fit=crop',
      rating: 4.6,
      reviews: 142,
      sizes: 'Tallas: XS, S, M, L, XL, XXL'
    }
  ];

  const benefits = [
    {
      icon: <Truck className="w-8 h-8" />,
      title: 'Envío Express',
      description: 'Entrega en 24-48 horas en compras mayores a $100. Seguimiento en tiempo real de tu pedido.',
      link: 'Más información'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Certificación ISO',
      description: 'Materiales certificados con estándares internacionales de calidad médica y durabilidad.',
      link: 'Ver certificados'
    },
    {
      icon: <RefreshCw className="w-8 h-8" />,
      title: 'Cambios Fáciles',
      description: '30 días para cambios o devoluciones. Proceso simple y sin complicaciones.',
      link: 'Política completa'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Soporte 24/7',
      description: 'Atención personalizada las 24 horas. Resolvemos tus dudas por WhatsApp, email o teléfono.',
      link: 'Contactar ahora'
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: 'Pago Seguro',
      description: 'Múltiples métodos de pago. Transacciones encriptadas y 100% seguras.',
      link: 'Ver métodos'
    },
    {
      icon: <Gift className="w-8 h-8" />,
      title: 'Programa Lealtad',
      description: 'Acumula puntos en cada compra y canjéalos por descuentos exclusivos.',
      link: 'Únirme ahora'
    }
  ];

  const testimonials = [
    {
      name: 'Dra. María González',
      role: 'Cirujana General',
      text: 'Los mejores uniformes que he usado. La calidad es excepcional y el ajuste perfecto.',
      initial: 'D'
    },
    {
      name: 'Enf. Carlos Ruiz',
      role: 'Enfermero UCI',
      text: 'Comodidad durante turnos largos. No hay comparación con otras marcas.',
      initial: 'E'
    },
    {
      name: 'Dr. Juan Pérez',
      role: 'Médico Residente',
      text: 'Excelente relación calidad-precio. El envío fue rapidísimo.',
      initial: 'D'
    }
  ];

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{animationDelay: '1s'}}></div>
        
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`space-y-8 relative z-10 transition-all duration-1000 ${isVisible.hero ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
              <div className="inline-flex items-center space-x-2 bg-blue-100 px-4 py-2 rounded-full animate-slideDown">
                <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold text-blue-700">Nueva Colección 2025</span>
              </div>
              
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight animate-slideUp">
                Viste con
                <span className="block mt-2 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent animate-gradient">
                  Profesionalismo
                </span>
              </h2>
              
              <p className="text-xl text-slate-600 leading-relaxed animate-fadeIn" style={{animationDelay: '0.2s'}}>
                Descubre uniformes médicos que combinan estilo, comodidad y funcionalidad. Diseñados para profesionales que marcan la diferencia.
              </p>

              <div className="flex flex-wrap gap-6 pt-4 animate-fadeIn" style={{animationDelay: '0.4s'}}>
                <div className="space-y-1 transform hover:scale-110 transition-transform duration-300">
                  <div className="text-3xl font-bold text-blue-600">{counters.clients.toLocaleString()}+</div>
                  <div className="text-sm text-slate-600">Clientes Satisfechos</div>
                </div>
                <div className="space-y-1 transform hover:scale-110 transition-transform duration-300">
                  <div className="text-3xl font-bold text-blue-600">{counters.quality}%</div>
                  <div className="text-sm text-slate-600">Calidad Garantizada</div>
                </div>
                <div className="space-y-1 transform hover:scale-110 transition-transform duration-300">
                  <div className="text-3xl font-bold text-blue-600">{counters.support}/7</div>
                  <div className="text-sm text-slate-600">Soporte al Cliente</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-4 animate-fadeIn" style={{animationDelay: '0.6s'}}>
                
                 <Link
                  to="/productos"
                  className="group inline-flex items-center px-10 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-2xl font-bold shadow-lg hover:shadow-2xl transition transform hover:scale-105 gap-3"
                 >
                  <span>Explorar Catálogo</span>
                  <TrendingUp className="w-5 h-5 group-hover:translate-x-1 transition" />
                </Link>
                <button className="group px-8 py-4 bg-white text-slate-700 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition transform hover:-translate-y-1 flex items-center space-x-2">
                  <Play className="w-5 h-5" />
                  <span>Ver Video</span>
                </button>
              </div>
            </div>

            <div className={`relative transition-all duration-1000 delay-300 ${isVisible.hero ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=900&fit=crop" 
                  alt="Medical Professional"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-transparent to-transparent"></div>
              </div>

              <div className="absolute -top-6 -left-6 bg-white rounded-2xl shadow-xl p-4 animate-float">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center">
                    <Check className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-slate-900">98%</div>
                    <div className="text-xs text-slate-600">Satisfacción</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 animate-float" style={{animationDelay: '0.5s'}}>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">5,000+</div>
                  <div className="text-sm text-slate-600 mt-1">Clientes Felices</div>
                  <div className="flex justify-center space-x-1 mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400 animate-pulse" style={{animationDelay: `${i * 0.1}s`}} />
                    ))}
                  </div>
                </div>
              </div>

              <div className="absolute top-1/2 -left-8 bg-gradient-to-br from-blue-600 to-cyan-500 text-white rounded-2xl shadow-xl p-4 animate-float" style={{animationDelay: '1s'}}>
                <div className="text-center">
                  <div className="text-xl font-bold">No. 1</div>
                  <div className="text-xs opacity-90">En Calidad</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section ref={productsRef} className="py-20 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-12 transition-all duration-1000 ${isVisible.products ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
              Lo Más Vendido
            </span>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-3">
              Productos <span className="text-blue-600">Destacados</span>
            </h3>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Los favoritos de nuestros profesionales de la salud
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div 
                key={product.id} 
                className={`group bg-white rounded-3xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden ${
                  isVisible.products ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{
                  transitionDelay: `${index * 0.1}s`
                }}
              >
                <div className="relative overflow-hidden bg-gradient-to-br from-slate-100 to-slate-50">
                  <img src={product.image} alt={product.name} className="w-full h-80 object-cover group-hover:scale-110 transition duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {product.badge && (
                    <div className="absolute top-4 left-4">
                      <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-xl flex items-center gap-2 animate-bounceIn">
                        <Star className="w-4 h-4 fill-current" />
                        {product.badge}
                      </div>
                    </div>
                  )}

                  <button className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition transform scale-0 group-hover:scale-100 duration-300">
                    <Heart className="w-5 h-5 text-slate-600 hover:text-red-500 hover:fill-red-500 transition" />
                  </button>

                  <button className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white text-slate-900 px-6 py-2 rounded-full text-sm font-semibold opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-xl">
                    Vista Rápida
                  </button>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-current' : 'fill-slate-200 text-slate-200'}`} />
                        ))}
                      </div>
                      <span className="text-sm text-slate-600 font-semibold">{product.rating}</span>
                    </div>
                    <span className="text-xs text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                      {product.reviews} reviews
                    </span>
                  </div>

                  <h4 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition">
                    {product.name}
                  </h4>
                  <p className="text-sm text-slate-500 mb-4">{product.sizes}</p>

                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <div>
                      <div className="text-xs text-slate-500 mb-1">Precio</div>
                      <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                        S/. {product.price}
                      </span>
                    </div>
                    <button
                      onClick={() => addToCart(product)}
                      className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition transform hover:scale-105 active:scale-95 flex items-center space-x-2"
                    >
                      <ShoppingCart className="w-4 h-4" />
                      <span>Añadir</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={`text-center mt-16 transition-all duration-1000 delay-700 ${isVisible.products ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="inline-flex flex-col items-center gap-4 bg-white rounded-3xl p-8 shadow-xl">
              <p className="text-slate-600 text-lg max-w-md">
                ¿Buscas algo específico? Explora nuestro catálogo completo con más de 50 productos
              </p>

              <Link
                to="/productos"
                className="group inline-flex items-center px-10 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-2xl font-bold shadow-lg hover:shadow-2xl transition transform hover:scale-105 gap-3"
              >
                <span>Ver Todos los Productos</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section ref={testimonialsRef} className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-12 transition-all duration-1000 ${isVisible.testimonials ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
              Testimonios
            </span>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-3">
              Confían en <span className="text-blue-600">MediStyle</span>
            </h3>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Miles de profesionales de la salud eligen nuestros uniformes cada día
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className={`bg-gradient-to-br from-slate-50 to-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-700 group ${
                  isVisible.testimonials ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{
                  transitionDelay: `${index * 0.15}s`
                }}
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400 animate-pulse" style={{animationDelay: `${i * 0.1}s`}} />
                  ))}
                </div>
                <p className="text-slate-700 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                    {testimonial.initial}
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">{testimonial.name}</div>
                    <div className="text-sm text-slate-600">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section ref={benefitsRef} className="py-24 px-4 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50/50"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible.benefits ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
              Beneficios Exclusivos
            </span>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              La Experiencia <span className="text-blue-600">MediStyle</span>
            </h3>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Más que uniformes, ofrecemos un servicio integral para profesionales de la salud
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className={`group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-700 border border-slate-100 hover:border-blue-200 ${
                  isVisible.benefits ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{
                  transitionDelay: `${index * 0.1}s`
                }}
              >
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition"></div>
                  <div className="relative w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center text-white transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition">
                  {benefit.title}
                </h4>
                <p className="text-slate-600 leading-relaxed mb-4">
                  {benefit.description}
                </p>
                <a href="#" className="inline-flex items-center text-blue-600 font-semibold text-sm group-hover:gap-2 gap-1 transition-all">
                  <span>{benefit.link}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>

          <div className={`mt-16 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl p-10 text-center relative overflow-hidden transition-all duration-1000 delay-500 ${
            isVisible.benefits ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}>
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>
            <div className="relative z-10">
              <h4 className="text-3xl md:text-4xl font-bold text-white mb-4">
                ¿Listo para actualizar tu guardarropa médico?
              </h4>
              <p className="text-blue-100 text-lg mb-6 max-w-2xl mx-auto">
                Únete a miles de profesionales que confían en MediStyle para su día a día
              </p>


              <Link
                to="/productos"
                className="mt-2 inline-block px-8 py-4 bg-white text-blue-600 rounded-2xl font-bold shadow-xl hover:shadow-2xl transition transform hover:scale-105 active:scale-95"
              >
                Explorar Catálogo Completo
              </Link>
             
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
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

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes bounceIn {
          0% {
            opacity: 0;
            transform: scale(0.3);
          }
          50% {
            opacity: 1;
            transform: scale(1.05);
          }
          70% {
            transform: scale(0.9);
          }
          100% {
            transform: scale(1);
          }
        }

        @keyframes gradient {
          0%, 100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-slideDown {
          animation: slideDown 0.6s ease-out;
        }

        .animate-slideUp {
          animation: slideUp 0.8s ease-out;
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-bounceIn {
          animation: bounceIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }

        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </main>
  );
}
export default HomePage;