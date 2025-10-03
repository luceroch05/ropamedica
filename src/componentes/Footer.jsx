import { Mail, Phone, Facebook, Instagram, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-16 px-4 relative overflow-hidden">
      {/* Fondos decorativos */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-5 gap-8 mb-12">
          {/* Logo y descripción */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-cyan-400 rounded-2xl blur-md opacity-50 group-hover:opacity-75 transition"></div>
                <div className="relative w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-400 rounded-2xl flex items-center justify-center">
                  <div className="w-8 h-8 border-3 border-white rounded-lg"></div>
                </div>
              </div>
              <div>
                <h5 className="text-xl font-bold">MediStyle</h5>
                <p className="text-xs text-slate-400">Professional Medical Wear</p>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed mb-6">
              Tu tienda de confianza para uniformes médicos profesionales. Calidad, estilo y comodidad en cada prenda.
            </p>
            <div className="flex items-center space-x-2 text-sm text-slate-400">
              <Mail className="w-4 h-4 text-blue-400" />
              <span>contacto@medistyle.com</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-slate-400 mt-2">
              <Phone className="w-4 h-4 text-blue-400" />
              <span>+51 999 888 777</span>
            </div>
          </div>

          {/* Navegación */}
          <div>
            <h5 className="font-bold text-lg mb-4 text-white">Navegación</h5>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-slate-400 hover:text-white transition hover:pl-2 inline-block">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/productos" className="text-slate-400 hover:text-white transition hover:pl-2 inline-block">
                  Productos
                </Link>
              </li>
              <li>
                <Link to="/nosotros" className="text-slate-400 hover:text-white transition hover:pl-2 inline-block">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="text-slate-400 hover:text-white transition hover:pl-2 inline-block">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Ayuda */}
          <div>
            <h5 className="font-bold text-lg mb-4 text-white">Ayuda</h5>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-400 hover:text-white transition hover:pl-2 inline-block">Envíos</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition hover:pl-2 inline-block">Devoluciones</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition hover:pl-2 inline-block">FAQ</a></li>
            </ul>
          </div>

          {/* Redes sociales */}
          <div>
            <h5 className="font-bold text-lg mb-4 text-white">Síguenos</h5>
            <div className="flex gap-3">
              <a href="#" className="group relative">
                <div className="absolute inset-0 bg-blue-600 rounded-xl blur-md opacity-50 group-hover:opacity-100 transition"></div>
                <div className="relative w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center hover:bg-blue-700 transition transform hover:scale-110">
                  <Facebook className="w-5 h-5 text-white" />
                </div>
              </a>
              <a href="#" className="group relative">
                <div className="absolute inset-0 bg-blue-400 rounded-xl blur-md opacity-50 group-hover:opacity-100 transition"></div>
                <div className="relative w-12 h-12 bg-blue-400 rounded-xl flex items-center justify-center hover:bg-blue-500 transition transform hover:scale-110">
                  <Twitter className="w-5 h-5 text-white" />
                </div>
              </a>
              <a href="#" className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-500 rounded-xl blur-md opacity-50 group-hover:opacity-100 transition"></div>
                <div className="relative w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-500 rounded-xl flex items-center justify-center hover:opacity-80 transition transform hover:scale-110">
                  <Instagram className="w-5 h-5 text-white" />
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Footer inferior */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm text-center md:text-left">
            &copy; 2025 MediStyle Professional Medical Wear. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-slate-400 hover:text-white transition">Términos</a>
            <a href="#" className="text-slate-400 hover:text-white transition">Privacidad</a>
            <a href="#" className="text-slate-400 hover:text-white transition">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
