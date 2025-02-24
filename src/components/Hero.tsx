import { useEffect } from 'react';
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Hero() {
  useEffect(() => {
    new Swiper('.hero-swiper', {
      modules: [Navigation, Pagination, Autoplay],
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }, []);

  return (
    <section className="relative h-screen">
      <div className="swiper hero-swiper h-full">
        <div className="swiper-wrapper">
          <div className="swiper-slide relative">
            <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80" alt="Gimnasio moderno" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 h-full flex items-center justify-center text-center text-white px-4">
              <div>
                <h1 className="text-4xl md:text-6xl font-bold mb-4">Bienvenido a K2's GYM</h1>
                <p className="text-xl md:text-2xl mb-8">Transforma tu cuerpo, transforma tu vida</p>
                <a href="#rutinas" className="bg-gym-blue-600 hover:bg-gym-blue-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors">
                  Comenzar
                </a>
              </div>
            </div>
          </div>
          <div className="swiper-slide relative">
            <img src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80" alt="Equipamiento de gimnasio" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 h-full flex items-center justify-center text-center text-white px-4">
              <div>
                <h2 className="text-4xl md:text-6xl font-bold mb-4">Equipamiento de Primera</h2>
                <p className="text-xl md:text-2xl mb-8">Las mejores máquinas para tu entrenamiento</p>
                <a href="#equipos" className="bg-gym-blue-600 hover:bg-gym-blue-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors">
                  Ver Equipos
                </a>
              </div>
            </div>
          </div>
          <div className="swiper-slide relative">
            <img src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80" alt="Entrenador personal" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 h-full flex items-center justify-center text-center text-white px-4">
              <div>
                <h2 className="text-4xl md:text-6xl font-bold mb-4">Entrenadores Expertos</h2>
                <p className="text-xl md:text-2xl mb-8">Guía profesional para alcanzar tus metas</p>
                <a href="#entrenadores" className="bg-gym-blue-600 hover:bg-gym-blue-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors">
                  Conoce al Equipo
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="swiper-pagination"></div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </div>
    </section>
  );
}