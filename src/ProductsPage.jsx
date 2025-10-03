import React, { useState, useEffect, useRef } from 'react';
import { ShoppingCart, Heart, Star, SlidersHorizontal, Grid3x3, List, Search, TrendingUp, Sparkles, ChevronDown, Package, Stethoscope, User, Zap, Award, Flame, X } from 'lucide-react';

const ProductsPage = ({ cart, setCart, addToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('destacados');
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [showProductModal, setShowProductModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isVisible, setIsVisible] = useState({
    header: false,
    filters: false,
    products: false
  });

  const headerRef = useRef(null);
  const filtersRef = useRef(null);
  const productsRef = useRef(null);

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
      { ref: headerRef, name: 'header' },
      { ref: filtersRef, name: 'filters' },
      { ref: productsRef, name: 'products' }
    ];

    refs.forEach(({ ref, name }) => {
      if (ref.current) {
        ref.current.dataset.section = name;
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, []);

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
      colors: ['Azul', 'Verde', 'Negro'],
      inStock: true
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
      colors: ['Blanco', 'Azul'],
      inStock: true
    },
    {
      id: 3,
      name: 'Scrubs Comfort Plus',
      category: 'quirurgico',
      price: 75.50,
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=500&fit=crop',
      rating: 4.7,
      reviews: 156,
      colors: ['Verde', 'Azul', 'Rosa'],
      inStock: true
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
      colors: ['Blanco', 'Negro', 'Gris'],
      inStock: true
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
      colors: ['Azul', 'Verde'],
      inStock: false
    },
    {
      id: 6,
      name: 'Uniforme Enfermería Pro',
      category: 'enfermeria',
      price: 68.99,
      image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=400&h=500&fit=crop',
      rating: 4.6,
      reviews: 142,
      colors: ['Blanco', 'Azul', 'Rosa'],
      inStock: true
    },
    {
      id: 7,
      name: 'Scrubs Antibacterial',
      category: 'quirurgico',
      price: 99.99,
      image: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=400&h=500&fit=crop',
      rating: 4.9,
      reviews: 167,
      badge: 'Nuevo',
      colors: ['Verde', 'Azul'],
      inStock: true
    },
    {
      id: 8,
      name: 'Bata Laboratorio',
      category: 'batas',
      price: 72.50,
      image: 'https://images.unsplash.com/photo-1584467735815-f778f274e296?w=400&h=500&fit=crop',
      rating: 4.7,
      reviews: 89,
      colors: ['Blanco'],
      inStock: true
    },
    {
      id: 9,
      name: 'Uniforme Pediátrico',
      category: 'enfermeria',
      price: 64.99,
      image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=400&h=500&fit=crop',
      rating: 4.8,
      reviews: 134,
      badge: 'Popular',
      colors: ['Rosa', 'Celeste', 'Lila'],
      inStock: true
    }
  ];

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    
    if (productId) {
      const product = products.find(p => p.id === parseInt(productId));
      if (product) {
        setSelectedProduct(product);
        setShowProductModal(true);
        
        setTimeout(() => {
          const element = document.getElementById(`product-${productId}`);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }, 100);
      }
    }
  }, []);

  const categories = [
    { id: 'todos', name: 'Todos los Productos', count: products.length, icon: Package },
    { id: 'quirurgico', name: 'Uniformes Quirúrgicos', count: products.filter(p => p.category === 'quirurgico').length, icon: Stethoscope },
    { id: 'batas', name: 'Batas Médicas', count: products.filter(p => p.category === 'batas').length, icon: Package },
    { id: 'enfermeria', name: 'Uniformes de Enfermería', count: products.filter(p => p.category === 'enfermeria').length, icon: User }
  ];

  const toggleFavorite = (productId) => {
    setFavorites(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setShowProductModal(true);
  };

  const filteredProducts = products
    .filter(p => selectedCategory === 'todos' || p.category === selectedCategory)
    .filter(p => p.price >= priceRange[0] && p.price <= priceRange[1])
    .filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => {
      switch(sortBy) {
        case 'precio-asc': return a.price - b.price;
        case 'precio-desc': return b.price - a.price;
        case 'rating': return b.rating - a.rating;
        case 'nombre': return a.name.localeCompare(b.name);
        default: return 0;
      }
    });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-cyan-50/20">
      {/* Header */}
      <div ref={headerRef} className="relative bg-gradient-to-br from-blue-600/5 via-cyan-500/5 to-transparent pt-28 pb-16 px-4 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className={`flex justify-center mb-6 transition-all duration-700 ${isVisible.header ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-cyan-50 px-5 py-2.5 rounded-full border border-blue-200/50 shadow-sm animate-slideDown">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Catálogo 2025</span>
            </div>
          </div>
          
          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-center text-slate-900 mb-4 transition-all duration-700 delay-100 ${isVisible.header ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Nuestros <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">Productos</span>
          </h1>
          
          <p className={`text-center text-slate-600 text-lg max-w-2xl mx-auto mb-8 transition-all duration-700 delay-200 ${isVisible.header ? 'opacity-100' : 'opacity-0'}`}>
            Descubre uniformes médicos premium diseñados para profesionales exigentes
          </p>

          <div className={`max-w-2xl mx-auto mb-8 transition-all duration-700 delay-300 ${isVisible.header ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="relative group">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-blue-600 transition" />
              <input
                type="text"
                placeholder="Buscar productos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-14 pr-6 py-4 rounded-2xl bg-white/80 backdrop-blur-sm border border-slate-200/50 focus:border-blue-400 focus:bg-white shadow-sm focus:shadow-md outline-none transition text-slate-900 placeholder-slate-400"
              />
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div className={`group bg-white/60 backdrop-blur-sm px-6 py-3 rounded-xl border border-slate-200/50 shadow-sm hover:shadow-lg hover:scale-110 hover:-rotate-2 transition-all duration-500 hover:bg-gradient-to-br hover:from-blue-50 hover:to-cyan-50 hover:border-blue-300 ${isVisible.header ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{transitionDelay: '0.4s'}}>
              <div className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-300">{products.length}+</div>
              <div className="text-sm text-slate-600 group-hover:text-blue-700 transition-colors duration-300">Productos</div>
            </div>
            <div className={`group bg-white/60 backdrop-blur-sm px-6 py-3 rounded-xl border border-slate-200/50 shadow-sm hover:shadow-lg hover:scale-110 transition-all duration-500 hover:bg-gradient-to-br hover:from-blue-50 hover:to-cyan-50 hover:border-blue-300 ${isVisible.header ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{transitionDelay: '0.5s'}}>
              <div className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-300">98%</div>
              <div className="text-sm text-slate-600 group-hover:text-blue-700 transition-colors duration-300">Satisfacción</div>
            </div>
            <div className={`group bg-white/60 backdrop-blur-sm px-6 py-3 rounded-xl border border-slate-200/50 shadow-sm hover:shadow-lg hover:scale-110 hover:rotate-2 transition-all duration-500 hover:bg-gradient-to-br hover:from-blue-50 hover:to-cyan-50 hover:border-blue-300 ${isVisible.header ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{transitionDelay: '0.6s'}}>
              <div className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-300">5,000+</div>
              <div className="text-sm text-slate-600 group-hover:text-blue-700 transition-colors duration-300">Clientes</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div ref={filtersRef} className={`lg:w-80 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="sticky top-24 space-y-6">
              {/* Categories */}
              <div className={`bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/80 shadow-sm transition-all duration-700 ${isVisible.filters ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
                <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <SlidersHorizontal className="w-5 h-5 text-blue-600" />
                  Categorías
                </h3>
                <div className="space-y-2">
                  {categories.map((cat, index) => {
                    const IconComponent = cat.icon;
                    return (
                      <button
                        key={cat.id}
                        onClick={() => setSelectedCategory(cat.id)}
                        className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 flex items-center justify-between group ${
                          selectedCategory === cat.id
                            ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/25 scale-105'
                            : 'hover:bg-slate-50 text-slate-700 border border-transparent hover:border-slate-200 hover:scale-102'
                        }`}
                        style={{
                          transitionDelay: `${index * 0.05}s`
                        }}
                      >
                        <span className="flex items-center gap-3">
                          <IconComponent className="w-5 h-5" />
                          <span className="font-medium text-sm">{cat.name}</span>
                        </span>
                        <span className={`text-xs px-2 py-1 rounded-full font-semibold ${
                          selectedCategory === cat.id ? 'bg-white/20' : 'bg-slate-100 text-slate-600'
                        }`}>
                          {cat.count}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Price Range */}
              <div className={`bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/80 shadow-sm transition-all duration-700 delay-100 ${isVisible.filters ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
                <h3 className="text-lg font-bold text-slate-900 mb-4">Rango de Precio</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600">Mínimo</span>
                    <span className="font-bold text-blue-600">${priceRange[0]}</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="200"
                    value={priceRange[0]}
                    onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                  />
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600">Máximo</span>
                    <span className="font-bold text-blue-600">${priceRange[1]}</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="200"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                  />
                </div>
              </div>

              {/* Quick Filters */}
              <div className={`bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl p-6 shadow-lg text-white transition-all duration-700 delay-200 ${isVisible.filters ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
                <h3 className="text-lg font-bold mb-4">Filtros Rápidos</h3>
                <div className="space-y-2">
                  <button className="w-full text-left px-4 py-2.5 rounded-xl bg-white/20 hover:bg-white/30 backdrop-blur-sm transition flex items-center gap-2 border border-white/20 hover:scale-105 transform duration-300">
                    <Zap className="w-4 h-4" />
                    <span className="text-sm font-medium">Envío Gratis</span>
                  </button>
                  <button className="w-full text-left px-4 py-2.5 rounded-xl bg-white/20 hover:bg-white/30 backdrop-blur-sm transition flex items-center gap-2 border border-white/20 hover:scale-105 transform duration-300">
                    <Award className="w-4 h-4" />
                    <span className="text-sm font-medium">Mejor Valorados</span>
                  </button>
                  <button className="w-full text-left px-4 py-2.5 rounded-xl bg-white/20 hover:bg-white/30 backdrop-blur-sm transition flex items-center gap-2 border border-white/20 hover:scale-105 transform duration-300">
                    <Flame className="w-4 h-4" />
                    <span className="text-sm font-medium">En Oferta</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className={`bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/80 shadow-sm mb-8 transition-all duration-700 ${isVisible.products ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setShowFilters(!showFilters)}
                    className="lg:hidden px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-xl transition flex items-center gap-2"
                  >
                    <SlidersHorizontal className="w-4 h-4" />
                    <span className="text-sm font-medium">Filtros</span>
                  </button>
                  
                  <div className="text-slate-600 text-sm">
                    <span className="font-bold text-slate-900">{filteredProducts.length}</span> productos encontrados
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="relative group">
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="appearance-none px-4 py-2 pr-10 bg-slate-50 hover:bg-slate-100 rounded-xl transition cursor-pointer outline-none text-sm font-medium text-slate-700 border border-slate-200"
                    >
                      <option value="destacados">Destacados</option>
                      <option value="precio-asc">Precio: Menor a Mayor</option>
                      <option value="precio-desc">Precio: Mayor a Menor</option>
                      <option value="rating">Mejor Valorados</option>
                      <option value="nombre">Nombre A-Z</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-600 pointer-events-none" />
                  </div>

                  <div className="flex bg-slate-100 rounded-xl p-1 border border-slate-200">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 rounded-lg transition ${
                        viewMode === 'grid' 
                          ? 'bg-white shadow-sm text-blue-600' 
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      <Grid3x3 className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 rounded-lg transition ${
                        viewMode === 'list' 
                          ? 'bg-white shadow-sm text-blue-600' 
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      <List className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Products Display */}
            <div ref={productsRef}>
              {filteredProducts.length === 0 ? (
                <div className="text-center py-20">
                  <Search className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">No se encontraron productos</h3>
                  <p className="text-slate-600">Intenta ajustar tus filtros o búsqueda</p>
                </div>
              ) : (
                <div className={`grid gap-6 ${
                  viewMode === 'grid' 
                    ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' 
                    : 'grid-cols-1'
                }`}>
                  {filteredProducts.map((product, index) => (
                    <div
                      key={product.id}
                      id={`product-${product.id}`}
                      className={`group bg-white rounded-2xl border border-slate-200/80 hover:shadow-2xl hover:shadow-blue-500/10 hover:border-blue-200 transition-all duration-500 overflow-hidden hover:scale-105 ${
                        viewMode === 'list' ? 'flex' : ''
                      } ${isVisible.products ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                      style={{
                        transitionDelay: `${index * 0.1}s`
                      }}
                    >
                      <div className={`relative overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100 cursor-pointer ${
                        viewMode === 'list' ? 'w-64' : ''
                      }`} onClick={() => handleProductClick(product)}>
                        <img
                          src={product.image}
                          alt={product.name}
                          className={`w-full object-cover group-hover:scale-110 transition duration-700 ${
                            viewMode === 'list' ? 'h-full' : 'h-80'
                          }`}
                        />
                        
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        
                        {product.badge && (
                          <div className="absolute top-4 left-4 animate-bounceIn">
                            <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg flex items-center gap-1.5">
                              <Star className="w-3 h-3 fill-current" />
                              {product.badge}
                            </div>
                          </div>
                        )}
                        
                        {!product.inStock && (
                          <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg">
                            Agotado
                          </div>
                        )}
                        
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleFavorite(product.id);
                          }}
                          className={`absolute top-4 right-4 bg-white p-2.5 rounded-full shadow-lg transition transform ${
                            favorites.includes(product.id)
                              ? 'scale-100'
                              : 'scale-0 group-hover:scale-100'
                          }`}
                        >
                          <Heart className={`w-4 h-4 transition ${
                            favorites.includes(product.id)
                              ? 'text-red-500 fill-red-500'
                              : 'text-slate-600 hover:text-red-500'
                          }`} />
                        </button>
                      </div>
                      
                      <div className="p-5 flex-1">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-2">
                            <div className="flex text-yellow-400">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-3.5 h-3.5 ${
                                    i < Math.floor(product.rating)
                                      ? 'fill-current'
                                      : 'fill-slate-200 text-slate-200'
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="text-sm text-slate-600 font-medium">
                              {product.rating}
                            </span>
                          </div>
                          <span className="text-xs text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
                            {product.reviews} reviews
                          </span>
                        </div>
                        
                        <h4 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition cursor-pointer" onClick={() => handleProductClick(product)}>
                          {product.name}
                        </h4>
                        
                        <p className="text-xs text-slate-500 mb-3">
                          Tallas: XS, S, M, L, XL, XXL
                        </p>

                        {/* Colors */}
                        <div className="flex items-center gap-2 mb-4">
                          <span className="text-xs text-slate-600">Colores:</span>
                          {product.colors.map((color, i) => (
                            <div
                              key={i}
                              className="w-5 h-5 rounded-full border-2 border-slate-200 hover:border-blue-600 hover:scale-110 transition cursor-pointer"
                              style={{
                                backgroundColor: color === 'Azul' ? '#3b82f6' :
                                               color === 'Verde' ? '#10b981' :
                                               color === 'Negro' ? '#1f2937' :
                                               color === 'Blanco' ? '#f1f5f9' :
                                               color === 'Rosa' ? '#ec4899' :
                                               color === 'Gris' ? '#6b7280' :
                                               color === 'Celeste' ? '#06b6d4' :
                                               color === 'Lila' ? '#a855f7' : '#94a3b8'
                              }}
                              title={color}
                            />
                          ))}
                        </div>
                        
                        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                          <div>
                            <div className="text-xs text-slate-500 mb-1">Precio</div>
                            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                              ${product.price}
                            </span>
                          </div>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              addToCart(product);
                            }}
                            disabled={!product.inStock}
                            className={`px-5 py-2.5 rounded-xl font-semibold transition transform flex items-center space-x-2 text-sm shadow-md ${
                              product.inStock
                                ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:shadow-lg hover:shadow-blue-500/30 hover:scale-105 active:scale-95'
                                : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                            }`}
                          >
                            <ShoppingCart className="w-4 h-4" />
                            <span>{product.inStock ? 'Añadir' : 'Agotado'}</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Load More Button */}
              {filteredProducts.length > 0 && (
                <div className={`text-center mt-12 transition-all duration-700 delay-300 ${isVisible.products ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                  <button className="group px-8 py-3.5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl hover:shadow-blue-500/30 transition transform hover:scale-105 inline-flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 group-hover:translate-y-1 transition" />
                    <span>Cargar Más Productos</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Modal de Producto */}
      {showProductModal && selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn" onClick={() => setShowProductModal(false)}>
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-scaleIn" onClick={(e) => e.stopPropagation()}>
            <div className="relative">
              <button
                onClick={() => setShowProductModal(false)}
                className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition shadow-lg hover:scale-110 hover:rotate-90 duration-300"
              >
                <X className="w-6 h-6 text-slate-700" />
              </button>
              
              <div className="grid md:grid-cols-2 gap-8 p-8">
                {/* Imagen del producto */}
                <div className="relative animate-slideRight">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-full h-96 object-cover rounded-2xl shadow-lg hover:scale-105 transition duration-500"
                  />
                  {selectedProduct.badge && (
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-bounceIn">
                      {selectedProduct.badge}
                    </div>
                  )}
                </div>
                
                {/* Detalles del producto */}
                <div className="flex flex-col animate-slideLeft">
                  <h2 className="text-3xl font-bold text-slate-900 mb-3">
                    {selectedProduct.name}
                  </h2>
                  
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${
                            i < Math.floor(selectedProduct.rating)
                              ? 'fill-current'
                              : 'fill-slate-200 text-slate-200'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-slate-600 font-medium">
                      {selectedProduct.rating} ({selectedProduct.reviews} reviews)
                    </span>
                  </div>
                  
                  <p className="text-slate-600 mb-6">
                    Uniforme médico de alta calidad, diseñado con los mejores materiales para garantizar comodidad y durabilidad durante largas jornadas de trabajo.
                  </p>
                  
                  {/* Colores disponibles */}
                  <div className="mb-6">
                    <h3 className="text-sm font-bold text-slate-900 mb-3">Colores disponibles:</h3>
                    <div className="flex gap-3">
                      {selectedProduct.colors.map((color, i) => (
                        <button
                          key={i}
                          className="w-10 h-10 rounded-full border-3 border-slate-200 hover:border-blue-600 hover:scale-110 transition shadow-md"
                          style={{
                            backgroundColor: color === 'Azul' ? '#3b82f6' :
                                           color === 'Verde' ? '#10b981' :
                                           color === 'Negro' ? '#1f2937' :
                                           color === 'Blanco' ? '#f1f5f9' :
                                           color === 'Rosa' ? '#ec4899' :
                                           color === 'Gris' ? '#6b7280' :
                                           color === 'Celeste' ? '#06b6d4' :
                                           color === 'Lila' ? '#a855f7' : '#94a3b8',
                            animationDelay: `${i * 0.1}s`
                          }}
                          title={color}
                        />
                      ))}
                    </div>
                  </div>
                  
                  {/* Tallas disponibles */}
                  <div className="mb-6">
                    <h3 className="text-sm font-bold text-slate-900 mb-3">Tallas disponibles:</h3>
                    <div className="flex flex-wrap gap-2">
                      {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map((size, i) => (
                        <button
                          key={size}
                          className="px-4 py-2 border-2 border-slate-200 rounded-lg hover:border-blue-600 hover:bg-blue-50 transition font-semibold text-sm hover:scale-110"
                          style={{animationDelay: `${i * 0.05}s`}}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex-1"></div>
                  
                  {/* Precio y botón de compra */}
                  <div className="border-t border-slate-200 pt-6 mt-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <div className="text-sm text-slate-500 mb-1">Precio</div>
                        <span className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                          ${selectedProduct.price}
                        </span>
                      </div>
                      <div className={`px-4 py-2 rounded-full text-sm font-bold ${
                        selectedProduct.inStock 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-red-100 text-red-700'
                      }`}>
                        {selectedProduct.inStock ? 'En stock' : 'Agotado'}
                      </div>
                    </div>
                    
                    <button
                      onClick={() => {
                        addToCart(selectedProduct);
                        setShowProductModal(false);
                      }}
                      disabled={!selectedProduct.inStock}
                      className={`w-full py-4 rounded-xl font-bold text-lg transition transform flex items-center justify-center gap-3 shadow-lg ${
                        selectedProduct.inStock
                          ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:shadow-xl hover:shadow-blue-500/30 hover:scale-105 active:scale-95'
                          : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                      }`}
                    >
                      <ShoppingCart className="w-6 h-6" />
                      <span>{selectedProduct.inStock ? 'Añadir al carrito' : 'Producto agotado'}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
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

        @keyframes slideRight {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideLeft {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out;
        }

        .animate-slideDown {
          animation: slideDown 0.6s ease-out;
        }

        .animate-bounceIn {
          animation: bounceIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }

        .animate-slideRight {
          animation: slideRight 0.5s ease-out;
        }

        .animate-slideLeft {
          animation: slideLeft 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};

export default ProductsPage;