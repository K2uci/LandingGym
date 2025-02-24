import { useEffect } from 'react';
import '@fontsource-variable/inter';
import Header from './components/Header';
import Hero from './components/Hero';
import Routines from './components/Routines';
import Equipment from './components/Equipment';
import Trainers from './components/Trainers';
import Schedule from './components/Schedule';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Initialize theme from localStorage
    const theme = localStorage.getItem('theme') || 'light';
    document.documentElement.className = theme;
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      <Header />
      <main>
        <Hero />
        <Routines />
        <Equipment />
        <Trainers />
        <Schedule />
      </main>
      <Footer />
    </div>
  );
}

export default App;