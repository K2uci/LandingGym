import { useState } from 'react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleTheme = () => {
    const isDark = document.documentElement.classList.contains('dark');
    document.documentElement.classList.toggle('dark', !isDark);
    localStorage.setItem('theme', !isDark ? 'dark' : 'light');
  };

  return (
    <header className="fixed w-full bg-white dark:bg-gray-800 shadow-md z-50 transition-colors duration-200">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <a href="/" className="text-2xl font-bold text-gym-blue-600 dark:text-gym-blue-400 flex items-center transition-colors duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-2" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.57 14.86L22 13.43 20.57 12 17 15.57 8.43 7 12 3.43 10.57 2 9.14 3.43 7.71 2 5.57 4.14 4.14 2.71 2.71 4.14l1.43 1.43L2 7.71l1.43 1.43L2 10.57 3.43 12 7 8.43 15.57 17 12 20.57 13.43 22l1.43-1.43L16.29 22l2.14-2.14 1.43 1.43 1.43-1.43-1.43-1.43L22 16.29z"/>
            </svg>
            K2's GYM
          </a>
          <div className="flex items-center space-x-6">
            <button onClick={toggleTheme} className="text-gray-600 dark:text-gray-300 hover:text-gym-blue-600 dark:hover:text-gym-blue-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hidden dark:block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 block dark:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            </button>
            <div className="hidden md:flex space-x-6">
              <a href="#rutinas" className="text-gray-600 dark:text-gray-300 hover:text-gym-blue-600 dark:hover:text-gym-blue-400 transition-colors duration-200">Rutinas</a>
              <a href="#equipos" className="text-gray-600 dark:text-gray-300 hover:text-gym-blue-600 dark:hover:text-gym-blue-400 transition-colors duration-200">Equipos</a>
              <a href="#entrenadores" className="text-gray-600 dark:text-gray-300 hover:text-gym-blue-600 dark:hover:text-gym-blue-400 transition-colors duration-200">Entrenadores</a>
              <a href="#horarios" className="text-gray-600 dark:text-gray-300 hover:text-gym-blue-600 dark:hover:text-gym-blue-400 transition-colors duration-200">Horarios</a>
            </div>
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-gym-blue-600 dark:text-gym-blue-400"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden mt-4 pb-4`}>
          <a href="#rutinas" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-gray-600 dark:text-gray-300 hover:text-gym-blue-600 dark:hover:text-gym-blue-400 transition-colors duration-200">Rutinas</a>
          <a href="#equipos" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-gray-600 dark:text-gray-300 hover:text-gym-blue-600 dark:hover:text-gym-blue-400 transition-colors duration-200">Equipos</a>
          <a href="#entrenadores" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-gray-600 dark:text-gray-300 hover:text-gym-blue-600 dark:hover:text-gym-blue-400 transition-colors duration-200">Entrenadores</a>
          <a href="#horarios" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-gray-600 dark:text-gray-300 hover:text-gym-blue-600 dark:hover:text-gym-blue-400 transition-colors duration-200">Horarios</a>
        </div>
      </nav>
    </header>
  );
}